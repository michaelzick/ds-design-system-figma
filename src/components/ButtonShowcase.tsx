export function ButtonShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Primary */}
      <div className="p-4 border rounded-lg space-y-3">
        <div className="text-sm text-muted-foreground">Primary</div>
        <button 
          className="px-4 py-2 rounded-md transition-opacity hover:opacity-90"
          style={{ 
            backgroundColor: 'var(--button-primary-bg)', 
            color: 'var(--button-primary-fg)' 
          }}
        >
          Primary Button
        </button>
      </div>

      {/* Secondary */}
      <div className="p-4 border rounded-lg space-y-3">
        <div className="text-sm text-muted-foreground">Secondary</div>
        <button 
          className="px-4 py-2 rounded-md transition-opacity hover:opacity-90"
          style={{ 
            backgroundColor: 'var(--button-secondary-bg)', 
            color: 'var(--button-secondary-fg)' 
          }}
        >
          Secondary Button
        </button>
      </div>

      {/* Accent */}
      <div className="p-4 border rounded-lg space-y-3">
        <div className="text-sm text-muted-foreground">Accent</div>
        <button 
          className="px-4 py-2 rounded-md transition-opacity hover:opacity-90"
          style={{ 
            backgroundColor: 'var(--button-accent-bg)', 
            color: 'var(--button-accent-fg)' 
          }}
        >
          Accent Button
        </button>
      </div>

      {/* Muted */}
      <div className="p-4 border rounded-lg space-y-3">
        <div className="text-sm text-muted-foreground">Muted</div>
        <button 
          className="px-4 py-2 rounded-md transition-opacity hover:opacity-90"
          style={{ 
            backgroundColor: 'var(--button-muted-bg)', 
            color: 'var(--button-muted-fg)' 
          }}
        >
          Muted Button
        </button>
      </div>

      {/* Destructive */}
      <div className="p-4 border rounded-lg space-y-3">
        <div className="text-sm text-muted-foreground">Destructive</div>
        <button 
          className="px-4 py-2 rounded-md transition-opacity hover:opacity-90"
          style={{ 
            backgroundColor: 'var(--button-destructive-bg)', 
            color: 'var(--button-destructive-fg)' 
          }}
        >
          Destructive Button
        </button>
      </div>

      {/* Ghost */}
      <div className="p-4 border rounded-lg space-y-3">
        <div className="text-sm text-muted-foreground">Ghost</div>
        <button 
          className="px-4 py-2 rounded-md transition-all hover:bg-muted"
          style={{ 
            backgroundColor: 'var(--button-ghost-bg)', 
            color: 'var(--button-ghost-fg)' 
          }}
        >
          Ghost Button
        </button>
      </div>

      {/* Outline */}
      <div className="p-4 border rounded-lg space-y-3">
        <div className="text-sm text-muted-foreground">Outline</div>
        <button 
          className="px-4 py-2 rounded-md border transition-all hover:bg-muted"
          style={{ 
            backgroundColor: 'var(--button-outline-bg)', 
            color: 'var(--button-outline-fg)',
            borderColor: 'var(--button-outline-border)'
          }}
        >
          Outline Button
        </button>
      </div>

      {/* Shop (Special) */}
      <div className="p-4 border rounded-lg space-y-3">
        <div className="text-sm text-muted-foreground">Shop (Special)</div>
        <button 
          className="px-4 py-2 rounded-md transition-opacity hover:opacity-90"
          style={{ 
            backgroundColor: 'var(--shop)', 
            color: 'var(--shop-foreground)' 
          }}
        >
          Shop Button
        </button>
      </div>
    </div>
  );
}
