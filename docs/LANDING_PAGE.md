# Die Gams Landing Page - Section Outline

> **Reference file** - Use this to track progress on landing page sections.
> Each section will be planned individually before implementation.

## Content Guidelines

- **Copy**: Realistic German text based on die-gams.info
- **Images**: Placeholder images (Unsplash URLs)

---

## Sections Checklist

- [x] **Hero** - Full-screen hero with logo, tagline, CTAs
- [x] **Introduction** - Welcome text, brand story (2-3 sentences)
- [x] **Rooms Teaser** - 3 category cards (Standard, Komfort, Premium) → `/rooms`
- [ ] **Wellness Teaser** - Split layout: pool, sauna, massages → `/wellness`
- [ ] **Dining Teaser** - 2-3 cards: Restaurant, Breakfast, Bar → `/dining`
- [ ] **Activities Teaser** - Grid of 4-6 activities, summer/winter → `/activities`
- [ ] **Location** - Region info, attractions, map/scenic image
- [ ] **Special Offers** - 2-3 seasonal deal cards
- [ ] **Testimonials** - 2-4 guest quotes with ratings
- [ ] **Newsletter** - Email signup form with incentive
- [ ] **Footer** - Logo, contact, social, legal links

---

## Component Patterns

Based on existing Hero:

| Pattern     | Approach                                    |
| ----------- | ------------------------------------------- |
| Container   | `.astro` file with section wrapper          |
| Interactive | `.svelte` with `client:visible`             |
| Animation   | `motion()` from `/src/lib/motion.svelte.ts` |
| Styling     | Tailwind + design tokens                    |
| Images      | Astro `Image` or placeholder URLs           |
| Spacing     | `py-16 md:py-24 lg:py-32`                   |

---

## File Structure

Each section follows this pattern:

```
/src/components/
  section-name.astro          # Main container
  section-name/
    sub-component.svelte      # Animated/interactive parts
```

Main page: `/src/pages/index.astro`
