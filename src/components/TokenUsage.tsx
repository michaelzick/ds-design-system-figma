import { CodeSnippet } from "./CodeSnippet";

export function TokenUsage() {
  const colorExamples = `/* Using brand colors */
.primary-button {
  background: var(--brand-primary);
  color: var(--button-primary-fg);
}

/* Using semantic colors */
.card {
  background: var(--surface-card);
  color: var(--foreground);
  border: 1px solid var(--border);
}

/* Using primitive colors */
.ocean-badge {
  background: var(--ocean);
  color: white;
}`;

  const typographyExamples = `/* Using typography tokens */
.hero-title {
  font-family: var(--font-brand);
  font-size: var(--text-display-size);
  line-height: var(--text-lineheight-tight);
}

h1 {
  font-size: var(--text-h1-size);
  line-height: var(--text-lineheight-tight);
}

.body-text {
  font-size: var(--text-body-size);
  line-height: var(--text-lineheight-normal);
}`;

  const spacingExamples = `/* Using spacing tokens */
.section {
  padding: var(--space-12) var(--space-6);
  margin-bottom: var(--space-16);
}

.card {
  gap: var(--space-4);
  padding: var(--space-6);
}

.button {
  padding: var(--space-3) var(--space-6);
  gap: var(--space-2);
}`;

  const effectExamples = `/* Using radius tokens */
.card {
  border-radius: var(--radius-lg);
}

.button {
  border-radius: var(--radius-md);
}

/* Using shadow tokens */
.card:hover {
  box-shadow: var(--shadow-md);
}

.dropdown {
  box-shadow: var(--shadow-sm);
}`;

  const buttonExamples = `/* Using button tokens */
.btn-primary {
  background: var(--button-primary-bg);
  color: var(--button-primary-fg);
}

.btn-secondary {
  background: var(--button-secondary-bg);
  color: var(--button-secondary-fg);
}

.btn-destructive {
  background: var(--button-destructive-bg);
  color: var(--button-destructive-fg);
}`;

  const tailwindExamples = `<!-- Using with Tailwind classes -->
<div class="bg-background text-foreground">
  <div class="bg-surface-card border-border rounded-[var(--radius-lg)]">
    <h1 class="text-foreground">Title</h1>
    <p class="text-muted-foreground">Description</p>
  </div>
</div>

<!-- Custom properties in style attribute -->
<button 
  style="
    background: var(--button-primary-bg);
    color: var(--button-primary-fg);
  "
>
  Click me
</button>`;

  const darkModeExample = `/* Dark mode is automatically applied */
/* Just add the 'dark' class to html or body */

<html class="dark">
  <!-- All tokens will use dark mode values -->
</html>

/* Or toggle programmatically */
document.documentElement.classList.toggle('dark');`;

  return (
    <div className="space-y-12">
      <div>
        <h2 className="mb-4">How to Use Design Tokens</h2>
        <p className="text-muted-foreground">
          All design tokens are exposed as CSS custom properties (variables). You can use them directly in your CSS or inline styles.
        </p>
      </div>

      <section className="space-y-4">
        <h3>Color Tokens</h3>
        <CodeSnippet code={colorExamples} language="css" title="Color Usage Examples" />
      </section>

      <section className="space-y-4">
        <h3>Typography Tokens</h3>
        <CodeSnippet code={typographyExamples} language="css" title="Typography Usage Examples" />
      </section>

      <section className="space-y-4">
        <h3>Spacing Tokens</h3>
        <CodeSnippet code={spacingExamples} language="css" title="Spacing Usage Examples" />
      </section>

      <section className="space-y-4">
        <h3>Effect Tokens (Radius & Shadows)</h3>
        <CodeSnippet code={effectExamples} language="css" title="Effects Usage Examples" />
      </section>

      <section className="space-y-4">
        <h3>Button Tokens</h3>
        <CodeSnippet code={buttonExamples} language="css" title="Button Usage Examples" />
      </section>

      <section className="space-y-4">
        <h3>Using with Tailwind CSS</h3>
        <CodeSnippet code={tailwindExamples} language="html" title="Tailwind Integration" />
      </section>

      <section className="space-y-4">
        <h3>Dark Mode</h3>
        <CodeSnippet code={darkModeExample} language="javascript" title="Dark Mode Toggle" />
      </section>
    </div>
  );
}
