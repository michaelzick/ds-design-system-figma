import { useState } from "react";
import { Moon, Sun, Copy, Check } from "lucide-react";
import { ColorSwatch } from "./components/ColorSwatch";
import { TypographyShowcase } from "./components/TypographyShowcase";
import { ButtonShowcase } from "./components/ButtonShowcase";
import { SpacingShowcase } from "./components/SpacingShowcase";
import { ComponentShowcase } from "./components/ComponentShowcase";
import { TokenUsage } from "./components/TokenUsage";
import { ExportTokens } from "./components/ExportTokens";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeTab, setActiveTab] = useState("colors");

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const brandColors = [
    { name: "Brand Primary", value: "var(--brand-primary)", description: "Primary brand color" },
  ];

  const primitiveColors = [
    { name: "Ocean Light", value: "var(--ocean-light)", description: "" },
    { name: "Ocean", value: "var(--ocean)", description: "" },
    { name: "Ocean Deep", value: "var(--ocean-deep)", description: "" },
    { name: "Sand Light", value: "var(--sand-light)", description: "" },
    { name: "Sand", value: "var(--sand)", description: "" },
    { name: "Sand Dark", value: "var(--sand-dark)", description: "" },
    { name: "Mountain", value: "var(--mountain)", description: "" },
    { name: "Mountain Dark", value: "var(--mountain-dark)", description: "" },
    { name: "Shop", value: "var(--shop)", description: "Special accent color" },
  ];

  const semanticColors = [
    { name: "Background", value: "var(--background)", description: "Main background" },
    { name: "Foreground", value: "var(--foreground)", description: "Main text color" },
    { name: "Surface Card", value: "var(--surface-card)", description: "Card backgrounds" },
    { name: "Surface Elevated", value: "var(--surface-elevated)", description: "Elevated surfaces" },
    { name: "Border", value: "var(--border)", description: "Default borders" },
    { name: "Muted", value: "var(--muted)", description: "Muted backgrounds" },
    { name: "Muted Foreground", value: "var(--muted-foreground)", description: "Muted text" },
    { name: "Accent", value: "var(--accent)", description: "Accent backgrounds" },
    { name: "Accent Foreground", value: "var(--accent-foreground)", description: "Accent text" },
    { name: "Destructive", value: "var(--destructive)", description: "Error/destructive" },
    { name: "Destructive Foreground", value: "var(--destructive-foreground)", description: "Error text" },
  ];

  const radii = [
    { name: "Small", value: "var(--radius-sm)", computed: "calc(0.5rem - 4px)" },
    { name: "Medium", value: "var(--radius-md)", computed: "calc(0.5rem - 2px)" },
    { name: "Large", value: "var(--radius-lg)", computed: "0.5rem" },
  ];

  const shadows = [
    { name: "Small", value: "var(--shadow-sm)", computed: "0 1px 2px rgba(0,0,0,0.05)" },
    { name: "Medium", value: "var(--shadow-md)", computed: "0 2px 4px rgba(0,0,0,0.1)" },
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
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 style={{ fontFamily: "var(--font-brand)" }}>DemoStoke Design System</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Complete token system with light & dark modes
              </p>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md border hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b bg-background">
        <div className="container mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm transition-colors relative whitespace-nowrap ${
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

      {/* Content */}
      <main className="container mx-auto px-6 py-12">
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
                    <div
                      className="w-full h-24 bg-primary"
                      style={{ borderRadius: radius.value }}
                    />
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
                    <div
                      className="w-full h-24 bg-surface-card border rounded-lg flex items-center justify-center"
                      style={{ boxShadow: shadow.value }}
                    >
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
            DemoStoke Design System • Complete CSS Token Export
          </p>
        </div>
      </footer>
    </div>
  );
}