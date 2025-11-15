export function SpacingShowcase() {
  const spacingSizes = [
    { name: "space-0", value: "0px", widthClass: "spacing-space-0" },
    { name: "space-1", value: "4px", widthClass: "spacing-space-1" },
    { name: "space-2", value: "8px", widthClass: "spacing-space-2" },
    { name: "space-3", value: "12px", widthClass: "spacing-space-3" },
    { name: "space-4", value: "16px", widthClass: "spacing-space-4" },
    { name: "space-5", value: "20px", widthClass: "spacing-space-5" },
    { name: "space-6", value: "24px", widthClass: "spacing-space-6" },
    { name: "space-8", value: "32px", widthClass: "spacing-space-8" },
    { name: "space-10", value: "40px", widthClass: "spacing-space-10" },
    { name: "space-12", value: "48px", widthClass: "spacing-space-12" },
    { name: "space-16", value: "64px", widthClass: "spacing-space-16" },
    { name: "space-20", value: "80px", widthClass: "spacing-space-20" },
    { name: "space-24", value: "96px", widthClass: "spacing-space-24" },
    { name: "space-32", value: "128px", widthClass: "spacing-space-32" },
  ];

  return (
    <div className="space-y-4">
      {spacingSizes.map((space) => (
        <div key={space.name} className="flex items-center gap-4 p-3 border rounded-lg">
          <div className="w-32 text-sm text-muted-foreground shrink-0">{space.name}</div>
          <div className="w-16 text-sm text-muted-foreground shrink-0">{space.value}</div>
          <div className={`bg-primary h-8 ${space.widthClass}`} />
        </div>
      ))}
    </div>
  );
}
