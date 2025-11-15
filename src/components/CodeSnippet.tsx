import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeSnippetProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeSnippet({ code, language = "css", title }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      {title && (
        <div className="px-4 py-2 border-b bg-muted/50 flex items-center justify-between">
          <span className="text-sm font-medium">{title}</span>
          <span className="text-xs text-muted-foreground uppercase">{language}</span>
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto bg-muted/30">
          <code className="text-sm font-mono">{code}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 rounded-md bg-background border hover:bg-muted transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-600" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}
