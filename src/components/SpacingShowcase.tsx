export function SpacingShowcase() {
  const spacingSizes = [
    { name: 'space-0', value: '0px' },
    { name: 'space-1', value: '4px' },
    { name: 'space-2', value: '8px' },
    { name: 'space-3', value: '12px' },
    { name: 'space-4', value: '16px' },
    { name: 'space-5', value: '20px' },
    { name: 'space-6', value: '24px' },
    { name: 'space-8', value: '32px' },
    { name: 'space-10', value: '40px' },
    { name: 'space-12', value: '48px' },
    { name: 'space-16', value: '64px' },
    { name: 'space-20', value: '80px' },
    { name: 'space-24', value: '96px' },
    { name: 'space-32', value: '128px' },
  ];

  return (
    <div className="space-y-4">
      {spacingSizes.map((space) => (
        <div key={space.name} className="flex items-center gap-4 p-3 border rounded-lg">
          <div className="w-32 text-sm text-muted-foreground shrink-0">{space.name}</div>
          <div className="w-16 text-sm text-muted-foreground shrink-0">{space.value}</div>
          <div 
            className="bg-primary h-8"
            style={{ width: `var(--${space.name})` }}
          />
        </div>
      ))}
    </div>
  );
}
