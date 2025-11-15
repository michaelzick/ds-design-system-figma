import { cn } from "./ui/utils";

interface ColorSwatchProps {
  name: string;
  value: string;
  description?: string;
  backgroundClassName?: string;
}

export function ColorSwatch({ name, value, description, backgroundClassName }: ColorSwatchProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <button
      onClick={handleCopy}
      className="group flex flex-col gap-2 p-3 border rounded-lg hover:shadow-md transition-shadow cursor-pointer text-left"
    >
      <div className={cn("w-full h-16 rounded-md border", backgroundClassName)} />
      <div className="flex flex-col gap-0.5">
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-muted-foreground font-mono">{value}</div>
        {description && (
          <div className="text-xs text-muted-foreground mt-1">{description}</div>
        )}
      </div>
      <div className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
        Click to copy
      </div>
    </button>
  );
}
