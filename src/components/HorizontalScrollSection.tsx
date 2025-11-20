import React, { useEffect, useRef, useState, ReactNode } from "react";

type HorizontalScrollSectionProps<T> = {
  title: string;
  items: T[];
  isLoading?: boolean;
  renderItem: (item: T, index: number) => ReactNode;
  desktopCols?: { md: number; lg: number };
  viewAllHref?: string;
  viewAllLabel?: string;
};

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...props}>
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...props}>
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Drop-in horizontal carousel with snap on mobile and grid on desktop.
export function HorizontalScrollSection<T>({
  title,
  items,
  isLoading,
  renderItem,
  desktopCols = { md: 3, lg: 5 },
  viewAllHref,
  viewAllLabel = "View All"
}: HorizontalScrollSectionProps<T>) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 1);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    updateScrollButtons();
    container.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [items]);

  useEffect(() => {
    if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft = 0;
  }, [items]);

  if (isLoading || !items || items.length === 0) return null;

  const trackClassName = [
    desktopCols.md === 2 ? "md:grid-cols-2" : desktopCols.md === 4 ? "md:grid-cols-4" : desktopCols.md === 5 ? "md:grid-cols-5" : "md:grid-cols-3",
    desktopCols.lg === 2 ? "lg:grid-cols-2" : desktopCols.lg === 3 ? "lg:grid-cols-3" : desktopCols.lg === 4 ? "lg:grid-cols-4" : desktopCols.lg === 6 ? "lg:grid-cols-6" : "lg:grid-cols-5"
  ].join(" ");

  const scrollByAmount = 228; // card width + gap on mobile

  return (
    <section className="bg-surface-card text-foreground border-2 border-border rounded-xl py-10 pb-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <div className="flex gap-2 md:hidden">
            <button
              onClick={() => scrollContainerRef.current?.scrollBy({ left: -scrollByAmount, behavior: "smooth" })}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="h-8 w-8 grid place-items-center rounded-lg border border-border text-foreground transition hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={() => scrollContainerRef.current?.scrollBy({ left: scrollByAmount, behavior: "smooth" })}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="h-8 w-8 grid place-items-center rounded-lg border border-border text-foreground transition hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className={`${trackClassName} flex overflow-x-auto gap-5 pb-4 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:'none'] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:gap-6 md:overflow-visible md:snap-none`}
        >
          {items.map((item, index) => renderItem(item, index))}
        </div>

        {viewAllHref && (
          <div className="flex">
            <a
              href={viewAllHref}
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg border-2 border-border text-foreground bg-muted/40 hover:bg-muted/60 transition font-semibold"
            >
              {viewAllLabel}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

// ---- Example usage with the featured blog cards and real thumbnails from the repo
type BlogPostCard = {
  id: string;
  title: string;
  thumbnail: string;
  href?: string;
};

const featuredPosts: BlogPostCard[] = [
  {
    id: "mountain-bike-beginner-guide",
    title: "Top 10 Snowboarding Resorts in North America Revealed",
    thumbnail: "https://asomammoth.com/wp-content/uploads/2022/12/Freestyle-Snowboarding.jpg",
    href: "#"
  },
  {
    id: "ski-waxing-guide",
    title: "Surfboard Tails: Choosing the Perfect Shape",
    thumbnail: "https://surfbetternow.com/wp-content/uploads/2022/04/surf-surfboards-tails-diferentes-colas-surfing-tablas.jpg",
    href: "#"
  },
  {
    id: "from-rentals-to-doa",
    title: "Skiing vs. Snowboarding: Which Sport is Tougher?",
    thumbnail: "https://cdn.shipskis.com/blog/wp-content/uploads/2023/09/skiing-vs.-snowboarding.jpg",
    href: "#"
  },
  {
    id: "from-foamie-to-fresh-powder",
    title: "The Healing Power of Outdoor Sports: Elevating Mental Health Through Nature (Part 2)",
    thumbnail: "https://media.istockphoto.com/id/1283724464/photo/winter-holidays-in-ski-resort.jpg?s=612x612&w=0&k=20&c=iG7eOjrZURGlmqEdRHruj49OpABfcF_hKEvhKIvK_wM=",
    href: "#"
  },
  {
    id: "snowboard-buying-guide-2025",
    title: "Tom Wallisch Pro Skis 2025 Review: Jib-Ready Freestyle Fun",
    thumbnail: "https://m.media-amazon.com/images/I/51s++VpbszL._UF1000,1000_QL80_.jpg",
    href: "#"
  }
];

export function FeaturedBlogSectionDemo() {
  return (
    <>
      <HorizontalScrollSection
        title="Horizontal Scroll Container"
        items={featuredPosts}
        desktopCols={{ md: 3, lg: 5 }}
        viewAllHref="#"
        viewAllLabel="View All"
        renderItem={(post) => (
          <a
            key={post.id}
            href={post.href ?? "#"}
            className="group snap-start w-[208px] min-w-[208px] shrink-0 text-foreground no-underline md:w-auto md:min-w-0"
          >
            <div className="relative w-full pt-[100%] overflow-hidden rounded-xl mb-2.5 bg-slate-900">
              <img
                src={post.thumbnail}
                alt={post.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
              />
            </div>
            <h3 className="text-sm font-medium leading-tight group-hover:text-primary transition-colors line-clamp-2 text-left">
              {post.title}
            </h3>
          </a>
        )}
      />
    </>
  );
}
