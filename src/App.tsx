import { useRef, useState } from "react";
import { Moon, Sun, Copy, Check } from "lucide-react";
import { ColorSwatch } from "./components/ColorSwatch";
import { TypographyShowcase } from "./components/TypographyShowcase";
import { ButtonShowcase } from "./components/ButtonShowcase";
import { SpacingShowcase } from "./components/SpacingShowcase";
import { ComponentShowcase } from "./components/ComponentShowcase";
import { TokenUsage } from "./components/TokenUsage";
import { ExportTokens } from "./components/ExportTokens";
import logoStripe from "./assets/images/ds-logo-stripes-fuchsia.webp";
import { useScrollToTop } from "./hooks/useScrollToTop";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeTab, setActiveTab] = useState("colors");
  const pageTopRef = useRef<HTMLDivElement | null>(null);
  useScrollToTop(activeTab, pageTopRef);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const brandColors = [
    {
      name: "Brand Primary",
      value: "var(--brand-primary)",
      description: "Primary brand color",
      backgroundClassName: "swatch-brand-primary",
    },
  ];

  const primitiveColors = [
    { name: "Ocean Light", value: "var(--ocean-light)", description: "", backgroundClassName: "swatch-ocean-light" },
    { name: "Ocean", value: "var(--ocean)", description: "", backgroundClassName: "swatch-ocean" },
    { name: "Ocean Deep", value: "var(--ocean-deep)", description: "", backgroundClassName: "swatch-ocean-deep" },
    { name: "Sand Light", value: "var(--sand-light)", description: "", backgroundClassName: "swatch-sand-light" },
    { name: "Sand", value: "var(--sand)", description: "", backgroundClassName: "swatch-sand" },
    { name: "Sand Dark", value: "var(--sand-dark)", description: "", backgroundClassName: "swatch-sand-dark" },
    { name: "Mountain", value: "var(--mountain)", description: "", backgroundClassName: "swatch-mountain" },
    { name: "Mountain Dark", value: "var(--mountain-dark)", description: "", backgroundClassName: "swatch-mountain-dark" },
    { name: "Shop", value: "var(--shop)", description: "Special accent color", backgroundClassName: "swatch-shop" },
  ];

  const semanticColors = [
    { name: "Background", value: "var(--background)", description: "Main background", backgroundClassName: "swatch-background" },
    { name: "Foreground", value: "var(--foreground)", description: "Main text color", backgroundClassName: "swatch-foreground" },
    { name: "Surface Card", value: "var(--surface-card)", description: "Card backgrounds", backgroundClassName: "swatch-surface-card" },
    { name: "Surface Elevated", value: "var(--surface-elevated)", description: "Elevated surfaces", backgroundClassName: "swatch-surface-elevated" },
    { name: "Border", value: "var(--border)", description: "Default borders", backgroundClassName: "swatch-border" },
    { name: "Muted", value: "var(--muted)", description: "Muted backgrounds", backgroundClassName: "swatch-muted" },
    { name: "Muted Foreground", value: "var(--muted-foreground)", description: "Muted text", backgroundClassName: "swatch-muted-foreground" },
    { name: "Accent", value: "var(--accent)", description: "Accent backgrounds", backgroundClassName: "swatch-accent" },
    { name: "Accent Foreground", value: "var(--accent-foreground)", description: "Accent text", backgroundClassName: "swatch-accent-foreground" },
    { name: "Destructive", value: "var(--destructive)", description: "Error/destructive", backgroundClassName: "swatch-destructive" },
    {
      name: "Destructive Foreground",
      value: "var(--destructive-foreground)",
      description: "Error text",
      backgroundClassName: "swatch-destructive-foreground",
    },
  ];

  const categoryColors = [
    { name: "Snowboards", value: "var(--rose-500)", description: "Category color", backgroundClassName: "swatch-rose-500" },
    { name: "Skis", value: "var(--fuchsia-500)", description: "Category color", backgroundClassName: "swatch-fuchsia-500" },
    { name: "Surfboards", value: "var(--sky-500)", description: "Category color", backgroundClassName: "swatch-sky-500" },
    { name: "Mountain Bikes", value: "var(--orange-400)", description: "Category color", backgroundClassName: "swatch-orange-400" },
  ];

  const radii = [
    { name: "Small", computed: "calc(0.5rem - 4px)", className: "radius-sm" },
    { name: "Medium", computed: "calc(0.5rem - 2px)", className: "radius-md" },
    { name: "Large", computed: "0.5rem", className: "radius-lg" },
  ];

  const shadows = [
    { name: "Small", computed: "0 1px 2px rgba(0,0,0,0.05)", className: "shadow-token-sm" },
    { name: "Medium", computed: "0 2px 4px rgba(0,0,0,0.1)", className: "shadow-token-md" },
    { name: "Large", computed: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)", className: "shadow-token-lg" },
    { name: "Extra Large", computed: "0 20px 25px -5px rgba(0,0,0,0.12), 0 10px 10px -5px rgba(0,0,0,0.06)", className: "shadow-token-xl" },
  ];

  const tabs = [
    { id: "colors", label: "Colors" },
    { id: "typography", label: "Typography" },
    { id: "buttons", label: "Buttons" },
    { id: "components", label: "Components" },
    { id: "spacing", label: "Spacing" },
    { id: "effects", label: "Effects" },
    { id: "usage", label: "Usage" },
    { id: "export", label: "Export" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div ref={pageTopRef} />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[color:color-mix(in_srgb,var(--background)_92%,transparent)] supports-[backdrop-filter]:bg-[color:color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur shadow-sm header-stack">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src={logoStripe}
                  alt="DemoStoke logo"
                  className="w-10 h-10 object-contain"
                />
                <h1 className="brand-heading">DemoStoke Design System</h1>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Complete token system with light & dark modes.
              </p>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md border hover:bg-muted transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {/* Navigation */}
        <nav className="border-t border-b bg-[color:color-mix(in_srgb,var(--background)_92%,transparent)] supports-[backdrop-filter]:bg-[color:color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur nav-stack">
          <div className="container mx-auto px-6">
            <div className="flex gap-1 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`cursor-pointer px-4 py-3 text-sm transition-colors relative whitespace-nowrap ${
                    activeTab === tab.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 pt-36 md:pt-40 pb-12">
        {activeTab === "colors" && (
          <div className="space-y-12">
            {/* Brand Colors */}
            <section>
              <h2 className="mb-6">Brand Colors</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {brandColors.map((color) => (
                  <ColorSwatch
                    key={color.name}
                    name={color.name}
                    value={color.value}
                    description={color.description}
                    backgroundClassName={color.backgroundClassName}
                  />
                ))}
              </div>
            </section>

            {/* Primitive Colors */}
            <section>
              <h2 className="mb-6">Primitive Colors</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {primitiveColors.map((color) => (
                  <ColorSwatch
                    key={color.name}
                    name={color.name}
                    value={color.value}
                    description={color.description}
                    backgroundClassName={color.backgroundClassName}
                  />
                ))}
              </div>
            </section>

            {/* Category Colors */}
            <section>
              <h2 className="mb-6">Category Colors</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categoryColors.map((color) => (
                  <ColorSwatch
                    key={color.name}
                    name={color.name}
                    value={color.value}
                    description={color.description}
                    backgroundClassName={color.backgroundClassName}
                  />
                ))}
              </div>
            </section>

            {/* Semantic Colors */}
            <section>
              <h2 className="mb-6">Semantic Colors</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {semanticColors.map((color) => (
                  <ColorSwatch
                    key={color.name}
                    name={color.name}
                    value={color.value}
                    description={color.description}
                    backgroundClassName={color.backgroundClassName}
                  />
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === "typography" && (
          <div className="space-y-8">
            <div>
              <h2 className="mb-4">Typography Scale</h2>
              <p className="text-muted-foreground mb-8">
                The design system uses Inter for UI and Tahoma for brand elements.
              </p>
            </div>
            <TypographyShowcase />
          </div>
        )}

        {activeTab === "buttons" && (
          <div className="space-y-8">
            <div>
              <h2 className="mb-4">Button Variants</h2>
              <p className="text-muted-foreground mb-8">
                All button styles using semantic tokens for consistent theming.
              </p>
            </div>
            <ButtonShowcase />
          </div>
        )}

        {activeTab === "components" && (
          <div className="space-y-8">
            <div>
              <h2 className="mb-4">Component Examples</h2>
              <p className="text-muted-foreground mb-8">
                Real-world components built with the design system tokens.
              </p>
            </div>
            <ComponentShowcase />
          </div>
        )}

        {activeTab === "spacing" && (
          <div className="space-y-8">
            <div>
              <h2 className="mb-4">Spacing Scale</h2>
              <p className="text-muted-foreground mb-8">
                Consistent spacing based on the Tailwind scale (4px base unit).
              </p>
            </div>
            <SpacingShowcase />
          </div>
        )}

        {activeTab === "effects" && (
          <div className="space-y-12">
            {/* Border Radius */}
            <section>
              <h2 className="mb-6">Border Radius</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {radii.map((radius) => (
                  <div key={radius.name} className="p-4 border rounded-lg space-y-4">
                    <div>
                      <div className="text-sm font-medium">{radius.name}</div>
                      <div className="text-xs text-muted-foreground font-mono mt-1">
                        {radius.computed}
                      </div>
                    </div>
                    <div className={`w-full h-24 bg-primary ${radius.className}`} />
                  </div>
                ))}
              </div>
            </section>

            {/* Shadows */}
            <section>
              <h2 className="mb-6">Shadows</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {shadows.map((shadow) => (
                  <div key={shadow.name} className="p-4 border rounded-lg space-y-4">
                    <div>
                      <div className="text-sm font-medium">{shadow.name}</div>
                      <div className="text-xs text-muted-foreground font-mono mt-1">
                        {shadow.computed}
                      </div>
                    </div>
                    <div className={`w-full h-24 bg-surface-card border rounded-lg flex items-center justify-center ${shadow.className}`}>
                      <div className="text-sm text-muted-foreground">Hover effect preview</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === "usage" && (
          <TokenUsage />
        )}

        {activeTab === "export" && (
          <ExportTokens />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t mt-24 py-8">
        <div className="container mx-auto px-6">
          <p className="text-sm text-muted-foreground text-center">
            DemoStoke Design System • © 2025 ZICKONEZERO Creative
          </p>
        </div>
      </footer>
    </div>
  );
}
