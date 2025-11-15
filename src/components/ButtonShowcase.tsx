export function ButtonShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Primary */}
      <div className="p-4 border rounded-lg space-y-3">
        <div className="text-sm text-muted-foreground">Primary</div>
        <button className="px-4 py-2 rounded-md transition-opacity hover:opacity-90 token-button-primary">
          Primary Button
        </button>
      </div>

      {/* Secondary */}
      <div className="p-4 border rounded-lg space-y-3">
        <div className="text-sm text-muted-foreground">Secondary</div>
        <button className="px-4 py-2 rounded-md transition-opacity hover:opacity-90 token-button-secondary">
          Secondary Button
        </button>
      </div>

      {/* Accent */}
      <div className="p-4 border rounded-lg space-y-3">
        <div className="text-sm text-muted-foreground">Accent</div>
        <button className="px-4 py-2 rounded-md transition-opacity hover:opacity-90 token-button-accent">
          Accent Button
        </button>
      </div>

      {/* Muted */}
      <div className="p-4 border rounded-lg space-y-3">
        <div className="text-sm text-muted-foreground">Muted</div>
        <button className="px-4 py-2 rounded-md transition-opacity hover:opacity-90 token-button-muted">
          Muted Button
        </button>
      </div>

      {/* Destructive */}
      <div className="p-4 border rounded-lg space-y-3">
        <div className="text-sm text-muted-foreground">Destructive</div>
        <button className="px-4 py-2 rounded-md transition-opacity hover:opacity-90 token-button-destructive">
          Destructive Button
        </button>
      </div>

      {/* Ghost */}
      <div className="p-4 border rounded-lg space-y-3">
        <div className="text-sm text-muted-foreground">Ghost</div>
        <button className="px-4 py-2 rounded-md transition-all hover:bg-muted token-button-ghost">
          Ghost Button
        </button>
      </div>

      {/* Outline */}
      <div className="p-4 border rounded-lg space-y-3">
        <div className="text-sm text-muted-foreground">Outline</div>
        <button className="px-4 py-2 rounded-md border transition-all hover:bg-muted token-button-outline">
          Outline Button
        </button>
      </div>

      {/* Shop (Special) */}
      <div className="p-4 border rounded-lg space-y-3">
        <div className="text-sm text-muted-foreground">Shop (Special)</div>
        <button className="px-4 py-2 rounded-md transition-opacity hover:opacity-90 shop-accent">
          Shop Button
        </button>
      </div>
    </div>
  );
}
