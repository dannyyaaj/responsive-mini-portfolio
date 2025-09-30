# Portfolio Design System

## Design Philosophy
Modern, clean, and professional design that showcases technical expertise while maintaining excellent user experience. The design emphasizes:
- **Performance-first**: Fast loading, smooth animations
- **Accessibility**: WCAG 2.1 AA compliant
- **Developer-focused**: Clean code examples, technical depth
- **Modern aesthetics**: Contemporary design patterns that appeal to tech companies

## 1. Color Palette

### Primary Colors
```css
--primary-50: #f0f9ff;    /* Lightest blue for backgrounds */
--primary-100: #e0f2fe;   /* Light blue accents */
--primary-200: #bae6fd;   /* Hover states */
--primary-300: #7dd3fc;   /* Active elements */
--primary-400: #38bdf8;   /* Primary actions */
--primary-500: #0ea5e9;   /* Main brand color */
--primary-600: #0284c7;   /* Pressed states */
--primary-700: #0369a1;   /* Dark accents */
--primary-800: #075985;   /* Headers in dark mode */
--primary-900: #0c4a6e;   /* Deepest blue */
```

### Accent Colors
```css
--accent-purple: #8b5cf6;  /* Secondary brand color */
--accent-teal: #14b8a6;    /* Success states */
--accent-amber: #f59e0b;   /* Warnings/highlights */
--accent-rose: #f43f5e;    /* Error states */
```

### Neutral Colors
```css
--gray-50: #fafafa;
--gray-100: #f4f4f5;
--gray-200: #e4e4e7;
--gray-300: #d4d4d8;
--gray-400: #a1a1aa;
--gray-500: #71717a;
--gray-600: #52525b;
--gray-700: #3f3f46;
--gray-800: #27272a;
--gray-900: #18181b;
--gray-950: #09090b;
```

### Semantic Colors
```css
--color-success: #10b981;
--color-warning: #f59e0b;
--color-error: #ef4444;
--color-info: #3b82f6;
```

### Dark Mode Colors
```css
[data-theme="dark"] {
  --bg-primary: #09090b;
  --bg-secondary: #18181b;
  --bg-tertiary: #27272a;
  --text-primary: #fafafa;
  --text-secondary: #a1a1aa;
  --border-color: #3f3f46;
}
```

## 2. Typography System

### Font Stack
```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', Monaco, 'Cascadia Code', monospace;
```

### Type Scale
```css
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
--text-6xl: 3.75rem;    /* 60px */
```

### Font Weights
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### Line Heights
```css
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

## 3. Spacing System

### Base Spacing Scale (8px grid)
```css
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

## 4. Layout Grid

### Container Widths
```css
--container-xs: 20rem;    /* 320px */
--container-sm: 24rem;    /* 384px */
--container-md: 28rem;    /* 448px */
--container-lg: 32rem;    /* 512px */
--container-xl: 36rem;    /* 576px */
--container-2xl: 42rem;   /* 672px */
--container-3xl: 48rem;   /* 768px */
--container-4xl: 56rem;   /* 896px */
--container-5xl: 64rem;   /* 1024px */
--container-6xl: 72rem;   /* 1152px */
--container-7xl: 80rem;   /* 1280px */
```

### Breakpoints
```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

### Grid System
```css
.grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }
.grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
```

## 5. Border & Radius

### Border Radius
```css
--radius-none: 0;
--radius-sm: 0.125rem;    /* 2px */
--radius-default: 0.25rem; /* 4px */
--radius-md: 0.375rem;     /* 6px */
--radius-lg: 0.5rem;       /* 8px */
--radius-xl: 0.75rem;      /* 12px */
--radius-2xl: 1rem;        /* 16px */
--radius-3xl: 1.5rem;      /* 24px */
--radius-full: 9999px;
```

### Border Width
```css
--border-0: 0;
--border: 1px;
--border-2: 2px;
--border-4: 4px;
--border-8: 8px;
```

## 6. Shadows & Effects

### Box Shadows
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
--shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
```

### Colored Shadows
```css
--shadow-primary: 0 10px 40px -10px rgba(14, 165, 233, 0.3);
--shadow-purple: 0 10px 40px -10px rgba(139, 92, 246, 0.3);
--shadow-teal: 0 10px 40px -10px rgba(20, 184, 166, 0.3);
```

### Blur Effects
```css
--blur-sm: 4px;
--blur: 8px;
--blur-md: 12px;
--blur-lg: 16px;
--blur-xl: 24px;
--blur-2xl: 40px;
--blur-3xl: 64px;
```

## 7. Animation & Transitions

### Timing Functions
```css
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Durations
```css
--duration-75: 75ms;
--duration-100: 100ms;
--duration-150: 150ms;
--duration-200: 200ms;
--duration-300: 300ms;
--duration-500: 500ms;
--duration-700: 700ms;
--duration-1000: 1000ms;
```

### Animations
```css
@keyframes slide-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scale-in {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

## 8. Component Styles

### Buttons
```css
.btn {
  padding: var(--space-3) var(--space-6);
  font-weight: var(--font-semibold);
  border-radius: var(--radius-lg);
  transition: all var(--duration-200) var(--ease-out);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
  color: white;
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background: var(--gray-100);
  color: var(--gray-700);
  border: 1px solid var(--gray-200);
}

.btn-ghost {
  background: transparent;
  color: var(--primary-600);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

### Cards
```css
.card {
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--gray-100);
  transition: all var(--duration-300) var(--ease-out);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary-200);
}

.card-glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Navigation
```css
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--gray-100);
  z-index: 1000;
}

.nav-link {
  color: var(--gray-600);
  font-weight: var(--font-medium);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  transition: all var(--duration-200);
}

.nav-link:hover {
  color: var(--primary-600);
  background: var(--primary-50);
}

.nav-link.active {
  color: var(--primary-600);
  background: var(--primary-100);
}
```

### Form Elements
```css
.input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 2px solid var(--gray-200);
  border-radius: var(--radius-lg);
  font-size: var(--text-base);
  transition: all var(--duration-200);
  background: white;
}

.input:focus {
  outline: none;
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
}

.input-error {
  border-color: var(--color-error);
}

.label {
  display: block;
  font-weight: var(--font-medium);
  color: var(--gray-700);
  margin-bottom: var(--space-2);
}
```

### Badges & Tags
```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  border-radius: var(--radius-full);
}

.badge-primary {
  background: var(--primary-100);
  color: var(--primary-700);
}

.badge-success {
  background: var(--green-100);
  color: var(--green-700);
}

.tag {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-2);
  font-size: var(--text-xs);
  border-radius: var(--radius-md);
  background: var(--gray-100);
  color: var(--gray-600);
  border: 1px solid var(--gray-200);
}
```

### Code Blocks
```css
.code-block {
  background: var(--gray-900);
  color: var(--gray-100);
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  overflow-x: auto;
}

.code-inline {
  background: var(--gray-100);
  color: var(--primary-700);
  padding: var(--space-1);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: 0.9em;
}
```

## 9. Accessibility

### Focus States
```css
:focus-visible {
  outline: 2px solid var(--primary-500);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

.focus-ring {
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.5);
}
```

### Skip Links
```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--primary-600);
  color: white;
  padding: var(--space-2) var(--space-4);
  z-index: 9999;
  text-decoration: none;
}

.skip-link:focus {
  top: 0;
}
```

### Screen Reader Only
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

## 10. Responsive Design

### Mobile First Approach
```css
/* Base styles for mobile */
.container {
  width: 100%;
  padding: 0 var(--space-4);
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    max-width: var(--container-3xl);
    margin: 0 auto;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: var(--container-5xl);
  }
}

/* Large Desktop */
@media (min-width: 1280px) {
  .container {
    max-width: var(--container-7xl);
  }
}
```

## 11. Performance Optimizations

### Critical CSS
- Inline critical above-the-fold styles
- Lazy load non-critical CSS
- Use CSS containment for complex components

### Animation Performance
```css
.gpu-accelerated {
  will-change: transform;
  transform: translateZ(0);
}

.reduce-motion {
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transition: none !important;
  }
}
```

## 12. Dark Mode Implementation

### Automatic Theme Detection
```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: var(--gray-950);
    --text-primary: var(--gray-50);
    /* ... other dark mode variables */
  }
}
```

### Manual Theme Toggle
```javascript
// Theme switcher
const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
};
```

## Implementation Guidelines

1. **Use CSS Custom Properties**: All design tokens should be defined as CSS variables for easy theming
2. **Component-Based Architecture**: Build reusable components that can be composed
3. **Mobile-First**: Start with mobile designs and enhance for larger screens
4. **Performance**: Optimize for Core Web Vitals (LCP, FID, CLS)
5. **Accessibility**: Ensure WCAG 2.1 AA compliance minimum
6. **Progressive Enhancement**: Core functionality works without JavaScript
7. **Modern CSS**: Use Grid, Flexbox, Container Queries where appropriate

## Example Portfolio Sections

### Hero Section
- Large typography with gradient text
- Animated background elements (subtle particles or gradient mesh)
- Clear CTA buttons
- Social links with hover effects

### Projects Showcase
- Card-based layout with hover effects
- Tech stack badges
- Live demo and GitHub links
- Filter/sort functionality
- Lazy-loaded images with skeleton screens

### Skills Section
- Interactive skill bars or radar charts
- Categorized by domain (Frontend, Backend, Tools)
- Years of experience indicators
- Certification badges

### Experience Timeline
- Vertical timeline with animations on scroll
- Company logos
- Key achievements with metrics
- Tech stack used

### Contact Section
- Contact form with validation
- Social media links
- Download resume button
- Calendar booking integration

This design system provides a solid foundation for a modern, professional developer portfolio that will appeal to both technical recruiters and fellow developers.