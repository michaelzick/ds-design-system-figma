import { Download, FileJson, FileCode } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function ExportTokens() {
  const generateJSON = () => {
    const tokens = {
      brand: {
        primary: "#00DFFE",
        "primary-rgb": "0, 223, 254",
        "primary-hsl": "186 100% 50%",
      },
      primitives: {
        ocean: {
          light: "#E5F2F8",
          base: "#0EA5E9",
          deep: "#0C4A6E",
        },
        sand: {
          light: "#FEF7E4",
          base: "#F3EACD",
          dark: "#E0D2AA",
        },
        mountain: {
          base: "#6B7280",
          dark: "#374151",
        },
        shop: {
          base: "rgb(211, 255, 0)",
          foreground: "#000000",
        },
      },
      semantic: {
        light: {
          background: "hsl(0 0% 100%)",
          foreground: "hsl(222.2 84% 4.9%)",
          "surface-card": "hsl(0 0% 100%)",
          "surface-popover": "hsl(0 0% 100%)",
          "surface-elevated": "hsl(210 40% 96.1%)",
          border: "hsl(214.3 31.8% 91.4%)",
          input: "hsl(214.3 31.8% 91.4%)",
          ring: "hsl(199 89% 48%)",
          muted: "hsl(210 40% 96.1%)",
          "muted-foreground": "hsl(215.4 16.3% 46.9%)",
          accent: "hsl(210 40% 96.1%)",
          "accent-foreground": "hsl(222.2 47.4% 11.2%)",
          destructive: "hsl(0 84.2% 60.2%)",
          "destructive-foreground": "hsl(210 40% 98%)",
        },
        dark: {
          background: "hsl(222.2 84% 4.9%)",
          foreground: "hsl(210 40% 98%)",
          "surface-card": "hsl(222.2 84% 4.9%)",
          "surface-popover": "hsl(222.2 84% 4.9%)",
          "surface-elevated": "hsl(217.2 32.6% 17.5%)",
          border: "hsl(217.2 32.6% 17.5%)",
          input: "hsl(217.2 32.6% 17.5%)",
          ring: "hsl(224.3 76.3% 48%)",
          muted: "hsl(217.2 32.6% 17.5%)",
          "muted-foreground": "hsl(215 20.2% 65.1%)",
          accent: "hsl(217.2 32.6% 17.5%)",
          "accent-foreground": "hsl(210 40% 98%)",
          destructive: "hsl(0 62.8% 30.6%)",
          "destructive-foreground": "hsl(210 40% 98%)",
        },
      },
      typography: {
        fonts: {
          ui: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
          brand: "Tahoma, sans-serif",
        },
        sizes: {
          display: "60px",
          h1: "48px",
          h2: "36px",
          h3: "30px",
          h4: "24px",
          h5: "20px",
          h6: "18px",
          "body-lg": "18px",
          body: "16px",
          "body-sm": "14px",
          label: "14px",
          "label-sm": "12px",
        },
        lineHeight: {
          tight: 1.1,
          snug: 1.25,
          normal: 1.5,
        },
      },
      spacing: {
        0: "0px",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        8: "32px",
        10: "40px",
        12: "48px",
        16: "64px",
        20: "80px",
        24: "96px",
        32: "128px",
        40: "160px",
        48: "192px",
        56: "224px",
        64: "256px",
      },
      effects: {
        radius: {
          sm: "calc(0.5rem - 4px)",
          md: "calc(0.5rem - 2px)",
          lg: "0.5rem",
        },
        shadows: {
          sm: "0 1px 2px rgba(0,0,0,0.05)",
          md: "0 2px 4px rgba(0,0,0,0.1)",
        },
      },
    };

    return JSON.stringify(tokens, null, 2);
  };

  const generateCSS = () => {
    return `:root {
  /* Brand Colors */
  --brand-primary: #00DFFE;
  --brand-primary-rgb: 0, 223, 254;
  --brand-primary-hsl: 186 100% 50%;

  /* Primitive Colors - Ocean */
  --ocean-light: #E5F2F8;
  --ocean: #0EA5E9;
  --ocean-deep: #0C4A6E;

  /* Primitive Colors - Sand */
  --sand-light: #FEF7E4;
  --sand: #F3EACD;
  --sand-dark: #E0D2AA;

  /* Primitive Colors - Mountain */
  --mountain: #6B7280;
  --mountain-dark: #374151;

  /* Shop */
  --shop: rgb(211, 255, 0);
  --shop-foreground: #000000;

  /* Semantic Colors - Light Mode */
  --background: hsl(0 0% 100%);
  --foreground: hsl(222.2 84% 4.9%);
  --surface-card: hsl(0 0% 100%);
  --surface-popover: hsl(0 0% 100%);
  --surface-elevated: hsl(210 40% 96.1%);
  --border: hsl(214.3 31.8% 91.4%);
  --input: hsl(214.3 31.8% 91.4%);
  --ring: hsl(199 89% 48%);
  --muted: hsl(210 40% 96.1%);
  --muted-foreground: hsl(215.4 16.3% 46.9%);
  --accent: hsl(210 40% 96.1%);
  --accent-foreground: hsl(222.2 47.4% 11.2%);
  --destructive: hsl(0 84.2% 60.2%);
  --destructive-foreground: hsl(210 40% 98%);

  /* Typography */
  --font-ui: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-brand: "Tahoma", sans-serif;
  --text-display-size: 60px;
  --text-h1-size: 48px;
  --text-h2-size: 36px;
  --text-h3-size: 30px;
  --text-h4-size: 24px;
  --text-h5-size: 20px;
  --text-h6-size: 18px;
  --text-body-lg-size: 18px;
  --text-body-size: 16px;
  --text-body-sm-size: 14px;
  --text-label-size: 14px;
  --text-label-sm-size: 12px;
  --text-lineheight-tight: 1.1;
  --text-lineheight-snug: 1.25;
  --text-lineheight-normal: 1.5;

  /* Spacing */
  --space-0: 0px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;
  --space-40: 160px;
  --space-48: 192px;
  --space-56: 224px;
  --space-64: 256px;

  /* Effects */
  --radius-sm: calc(0.5rem - 4px);
  --radius-md: calc(0.5rem - 2px);
  --radius-lg: 0.5rem;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 2px 4px rgba(0,0,0,0.1);
}

.dark {
  --brand-primary: #0DA2E7;
  --background: hsl(222.2 84% 4.9%);
  --foreground: hsl(210 40% 98%);
  --surface-card: hsl(222.2 84% 4.9%);
  --surface-popover: hsl(222.2 84% 4.9%);
  --surface-elevated: hsl(217.2 32.6% 17.5%);
  --border: hsl(217.2 32.6% 17.5%);
  --input: hsl(217.2 32.6% 17.5%);
  --ring: hsl(224.3 76.3% 48%);
  --muted: hsl(217.2 32.6% 17.5%);
  --muted-foreground: hsl(215 20.2% 65.1%);
  --accent: hsl(217.2 32.6% 17.5%);
  --accent-foreground: hsl(210 40% 98%);
  --destructive: hsl(0 62.8% 30.6%);
  --destructive-foreground: hsl(210 40% 98%);
}`;
  };

  const downloadFile = (content: string, filename: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleExportJSON = () => {
    const json = generateJSON();
    downloadFile(json, "demostoke-tokens.json", "application/json");
  };

  const handleExportCSS = () => {
    const css = generateCSS();
    downloadFile(css, "demostoke-tokens.css", "text/css");
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Export Design Tokens</h2>
        <p className="text-muted-foreground">
          Download the complete design token system in your preferred format.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileJson className="w-5 h-5 text-primary" />
              </div>
              <div>
                <CardTitle>JSON Format</CardTitle>
                <CardDescription>For design tools & apps</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Export all tokens in a structured JSON format. Perfect for importing into design tools, 
              documentation generators, or using with build systems.
            </p>
            <Button onClick={handleExportJSON} className="w-full">
              <Download className="w-4 h-4 mr-2" />
              Download JSON
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileCode className="w-5 h-5 text-primary" />
              </div>
              <div>
                <CardTitle>CSS Format</CardTitle>
                <CardDescription>For web projects</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Export as CSS custom properties (variables). Ready to import into any web project.
              Includes both light and dark mode tokens.
            </p>
            <Button onClick={handleExportCSS} className="w-full">
              <Download className="w-4 h-4 mr-2" />
              Download CSS
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>What's Included</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span><strong>Brand Colors:</strong> Primary brand identity colors with RGB and HSL values</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span><strong>Primitive Colors:</strong> Ocean, Sand, Mountain, and Shop color palettes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span><strong>Semantic Tokens:</strong> Context-aware colors for backgrounds, text, and UI states</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span><strong>Typography:</strong> Font families, sizes, weights, and line heights</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span><strong>Spacing:</strong> Complete spacing scale from 4px to 256px</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span><strong>Effects:</strong> Border radius values and shadow styles</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">•</span>
              <span><strong>Dark Mode:</strong> Complete dark mode token overrides</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
