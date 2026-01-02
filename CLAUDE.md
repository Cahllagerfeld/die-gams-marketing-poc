# Die Gams - Design System

## Brand Overview

Die Gams is a family hotel in the Bavarian Alps offering wellness, nature, and memorable mountain experiences.

**Design Philosophy**: Elegant, warm, and inviting - blending traditional Alpine sophistication with cozy hospitality.

## Color Palette

### Primary (Logo Grey)

| Token           | Hex       | Usage              |
| --------------- | --------- | ------------------ |
| `gams-grey-900` | `#2a2a2a` | Primary text, logo |
| `gams-grey-700` | `#4a4a4a` | Secondary text     |
| `gams-grey-500` | `#6b6b6b` | Muted text         |
| `gams-grey-300` | `#9a9a9a` | Borders, dividers  |
| `gams-grey-100` | `#e8e8e8` | Light backgrounds  |
| `gams-grey-50`  | `#f5f5f5` | Subtle backgrounds |

### Accent (Forest Green)

| Token        | Hex       | Usage                           |
| ------------ | --------- | ------------------------------- |
| `forest-900` | `#0f2818` | Dark accents                    |
| `forest-700` | `#1a472a` | Primary accent (buttons, links) |
| `forest-500` | `#2d5a3d` | Hover states                    |
| `forest-300` | `#4a7c5c` | Light accents                   |
| `forest-100` | `#d4e5da` | Subtle backgrounds              |

### Warm Neutrals

| Token      | Hex       | Usage               |
| ---------- | --------- | ------------------- |
| `warm-50`  | `#faf8f5` | Page background     |
| `warm-100` | `#f5f0e8` | Card backgrounds    |
| `warm-200` | `#e8dfd2` | Borders             |
| `warm-300` | `#d4c4b0` | Decorative elements |
| `warm-600` | `#8b7355` | Warm accents        |
| `warm-800` | `#5c4a38` | Dark wood tones     |

## Typography

### Fonts

- **Headings**: `Cormorant Garamond` (serif) - elegant, classic
- **Body**: `Source Sans 3` (sans-serif) - clean, readable

### Type Scale

| Name      | Size            | Usage            |
| --------- | --------------- | ---------------- |
| `display` | 6rem (96px)     | Hero headlines   |
| `h1`      | 3.75rem (60px)  | Page titles      |
| `h2`      | 2.5rem (40px)   | Section headings |
| `h3`      | 1.75rem (28px)  | Subsections      |
| `h4`      | 1.25rem (20px)  | Card titles      |
| `body-lg` | 1.125rem (18px) | Lead paragraphs  |
| `body`    | 1rem (16px)     | Body text        |
| `body-sm` | 0.875rem (14px) | Small text       |
| `caption` | 0.75rem (12px)  | Captions         |

### Font Weights

- `300` (Light) - Display text, elegant headings
- `400` (Regular) - Body text
- `500` (Medium) - Emphasis
- `600` (Semibold) - Subheadings
- `700` (Bold) - Strong emphasis

### Line Heights

- `tight`: 1.1 - Display/headlines
- `normal`: 1.5 - Body text
- `relaxed`: 1.75 - Large body text

## Spacing

Base unit: 4px

| Token      | Value |
| ---------- | ----- |
| `space-1`  | 4px   |
| `space-2`  | 8px   |
| `space-3`  | 12px  |
| `space-4`  | 16px  |
| `space-6`  | 24px  |
| `space-8`  | 32px  |
| `space-12` | 48px  |
| `space-16` | 64px  |
| `space-24` | 96px  |
| `space-32` | 128px |

## Border Radius

| Token  | Value  |
| ------ | ------ |
| `none` | 0      |
| `sm`   | 4px    |
| `md`   | 8px    |
| `lg`   | 16px   |
| `xl`   | 24px   |
| `full` | 9999px |

## Shadows (Warm tones)

| Token       | Value                                |
| ----------- | ------------------------------------ |
| `shadow-sm` | `0 1px 2px rgba(92, 74, 56, 0.05)`   |
| `shadow-md` | `0 4px 6px rgba(92, 74, 56, 0.07)`   |
| `shadow-lg` | `0 10px 15px rgba(92, 74, 56, 0.1)`  |
| `shadow-xl` | `0 20px 25px rgba(92, 74, 56, 0.15)` |

## Transitions

| Token    | Value          |
| -------- | -------------- |
| `fast`   | 150ms ease-out |
| `normal` | 300ms ease-out |
| `slow`   | 500ms ease-out |

## Components

### Buttons

**Primary**: `forest-700` background, white text, `rounded-lg`
**Secondary**: transparent, `forest-700` border, `forest-700` text
**Ghost**: transparent, `gams-grey-700` text

### Cards

- Background: `warm-100`
- Border: `warm-200`
- Shadow: `shadow-md`
- Border-radius: `lg` (16px)

### Links

- Default: `forest-700`
- Hover: `forest-500`
- Underline on hover

## Logo

- URL: https://die-gams.info/wp-content/uploads/2025/01/die_gams_logo_grey-1-2048x1498.png
- The logo represents a stylized Gams (chamois) head
- Keep logo in original grey, do not colorize

## Design Principles

1. **Warmth over sterility** - Use `warm-50` backgrounds instead of pure white
2. **Elegance through typography** - Let the serif headings create sophistication
3. **Nature-inspired accents** - Forest green connects to the Alpine setting
4. **Generous whitespace** - Premium feel through breathing room
5. **Subtle animations** - Gentle transitions, nothing jarring

## Tailwind CSS Usage

Colors are available as Tailwind classes:

```html
<!-- Background -->
<div class="bg-warm-50">...</div>
<div class="bg-forest-700">...</div>

<!-- Text -->
<p class="text-gams-grey-900">...</p>
<a class="text-forest-700 hover:text-forest-500">...</a>

<!-- Typography -->
<h1 class="font-heading text-display">...</h1>
<p class="font-body text-body">...</p>
```

## File Structure

- `/src/styles/global.css` - Tailwind theme configuration with CSS custom properties
- `/src/layouts/Layout.astro` - Base layout with Google Fonts
