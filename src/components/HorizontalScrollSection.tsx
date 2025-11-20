import React, { useEffect, useRef, useState, ReactNode } from "react";

// ---- Styles pulled from the existing Tailwind setup (ocean palette, spacing, hover states)
const horizontalScrollStyles = `
:root {
  --ocean-deep: #0C4A6E;
  --ocean: #0EA5E9;
}
.hs-section { padding: 40px 0 20px; background: var(--surface-card, #fff); color: var(--foreground, #0f172a); border: 2px solid var(--border, #0f172a); border-radius: 12px; }
.hs-container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 16px; }
@media (min-width: 640px) { .hs-container { padding: 0 24px; } }
@media (min-width: 1024px) { .hs-container { padding: 0 32px; } }

.hs-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
.hs-title { font-size: 24px; font-weight: 600; }

.hs-nav { display: flex; gap: 8px; }
@media (min-width: 768px) { .hs-nav { display: none; } }
.hs-nav button {
  height: 32px; width: 32px; display: grid; place-items: center;
  background: transparent; border: 1px solid #737373; color: #e5e7eb;
  border-radius: 8px; transition: all 0.2s ease; cursor: pointer;
}
.hs-nav button:hover:not(:disabled) { border-color: #d4d4d8; color: #fff; background: rgba(255,255,255,0.08); }
.hs-nav button:disabled { cursor: not-allowed; opacity: 0.45; }

.hs-track {
  display: flex; overflow-x: auto; gap: 20px; padding-bottom: 16px;
  scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: none;
}
.hs-track::-webkit-scrollbar { display: none; }

.hs-card { scroll-snap-align: start; width: 208px; min-width: 208px; flex-shrink: 0; text-decoration: none; color: inherit; }
.hs-thumb { width: 100%; padding-top: 100%; position: relative; overflow: hidden; border-radius: 12px; margin-bottom: 10px; background: #0f172a; }
.hs-thumb img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease; }
.hs-card:hover .hs-thumb img { transform: scale(1.1); }
.hs-heading { font-size: 14px; font-weight: 600; line-height: 1.3; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-align: left; }
.hs-heading { white-space: normal; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

@media (min-width: 768px) {
  .hs-track { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; overflow: visible; scroll-snap-type: none; }
  .hs-card { width: auto; min-width: 0; }
  .hs-md-cols-2 { grid-template-columns: repeat(2, minmax(0,1fr)); }
  .hs-md-cols-3 { grid-template-columns: repeat(3, minmax(0,1fr)); }
  .hs-md-cols-4 { grid-template-columns: repeat(4, minmax(0,1fr)); }
  .hs-md-cols-5 { grid-template-columns: repeat(5, minmax(0,1fr)); }
}
@media (min-width: 1024px) {
  .hs-lg-cols-2 { grid-template-columns: repeat(2, minmax(0,1fr)); }
  .hs-lg-cols-3 { grid-template-columns: repeat(3, minmax(0,1fr)); }
  .hs-lg-cols-4 { grid-template-columns: repeat(4, minmax(0,1fr)); }
  .hs-lg-cols-5 { grid-template-columns: repeat(5, minmax(0,1fr)); }
  .hs-lg-cols-6 { grid-template-columns: repeat(6, minmax(0,1fr)); }
}

.hs-view-all { background: transparent; padding: 0 0 40px; }
.hs-view-all .hs-container { display: flex; }
.hs-view-all a {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 12px 20px; border: 1px solid var(--border, #0f172a); color: var(--foreground, #0f172a); border-radius: 10px;
  background: rgba(15,23,42,0.05); text-decoration: none; font-weight: 600;
  transition: all 0.2s ease;
}
.hs-view-all a:hover { background: rgba(15,23,42,0.1); border-color: var(--foreground, #0f172a); }
`;

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
    "hs-track",
    `hs-md-cols-${desktopCols.md}`,
    `hs-lg-cols-${desktopCols.lg}`
  ].join(" ");

  const scrollByAmount = 228; // card width + gap on mobile

  return (
    <section className="hs-section">
      <style>{horizontalScrollStyles}</style>
      <div className="hs-container">
        <div className="hs-header">
          <h2 className="hs-title">{title}</h2>
          <div className="hs-nav">
            <button onClick={() => scrollContainerRef.current?.scrollBy({ left: -scrollByAmount, behavior: "smooth" })} disabled={!canScrollLeft} aria-label="Scroll left">
              <ChevronLeftIcon />
            </button>
            <button onClick={() => scrollContainerRef.current?.scrollBy({ left: scrollByAmount, behavior: "smooth" })} disabled={!canScrollRight} aria-label="Scroll right">
              <ChevronRightIcon />
            </button>
          </div>
        </div>

        <div ref={scrollContainerRef} className={trackClassName}>
          {items.map((item, index) => renderItem(item, index))}
        </div>
      </div>
      {viewAllHref && (
        <div className="hs-view-all">
          <div className="hs-container">
            <a href={viewAllHref}>{viewAllLabel}</a>
          </div>
        </div>
      )}
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
    href: "/blog/mountain-bike-beginner-guide"
  },
  {
    id: "ski-waxing-guide",
    title: "Surfboard Tails: Choosing the Perfect Shape",
    thumbnail: "https://surfbetternow.com/wp-content/uploads/2022/04/surf-surfboards-tails-diferentes-colas-surfing-tablas.jpg",
    href: "/blog/ski-waxing-guide"
  },
  {
    id: "from-rentals-to-doa",
    title: "Skiing vs. Snowboarding: Which Sport is Tougher?",
    thumbnail: "https://cdn.shipskis.com/blog/wp-content/uploads/2023/09/skiing-vs.-snowboarding.jpg",
    href: "/blog/from-rentals-to-doa"
  },
  {
    id: "from-foamie-to-fresh-powder",
    title: "The Healing Power of Outdoor Sports: Elevating Mental Health Through Nature (Part 2)",
    thumbnail: "https://media.istockphoto.com/id/1283724464/photo/winter-holidays-in-ski-resort.jpg?s=612x612&w=0&k=20&c=iG7eOjrZURGlmqEdRHruj49OpABfcF_hKEvhKIvK_wM=",
    href: "/blog/from-foamie-to-fresh-powder"
  },
  {
    id: "snowboard-buying-guide-2025",
    title: "Tom Wallisch Pro Skis 2025 Review: Jib-Ready Freestyle Fun",
    thumbnail: "https://m.media-amazon.com/images/I/51s++VpbszL._UF1000,1000_QL80_.jpg",
    href: "/blog/snowboard-buying-guide-2025"
  }
];

export function FeaturedBlogSectionDemo() {
  return (
    <>
      <HorizontalScrollSection
        title="Horizontal Scroll Container"
        items={featuredPosts}
        desktopCols={{ md: 3, lg: 5 }}
        viewAllHref="/blog"
        viewAllLabel="View All"
        renderItem={(post) => (
          <a key={post.id} href={post.href ?? "#"} className="hs-card group">
            <div className="hs-thumb">
              <img src={post.thumbnail} alt={post.title} loading="lazy" />
            </div>
            <h3 className="hs-heading text-sm font-medium leading-tight group-hover:text-primary transition-colors line-clamp-2 text-left">
              {post.title}
            </h3>
          </a>
        )}
      />
    </>
  );
}
