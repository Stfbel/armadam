---
name: Maritime Logistics System
colors:
  surface: '#fcf9f6'
  surface-dim: '#dcd9d7'
  surface-bright: '#FDFCFA'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f1'
  surface-container: '#f0edeb'
  surface-container-high: '#ebe7e5'
  surface-container-highest: '#e5e2e0'
  on-surface: '#1c1c1a'
  on-surface-variant: '#42474f'
  inverse-surface: '#31302f'
  inverse-on-surface: '#f3f0ee'
  outline: '#72777f'
  outline-variant: '#c2c7d0'
  surface-tint: '#35618d'
  primary: '#00375e'
  on-primary: '#ffffff'
  primary-container: '#1f4e79'
  on-primary-container: '#95bff1'
  inverse-primary: '#a0cafc'
  secondary: '#615e59'
  on-secondary: '#ffffff'
  secondary-container: '#e8e1db'
  on-secondary-container: '#67645f'
  tertiary: '#4c2e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#6a4300'
  on-tertiary-container: '#e9b268'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1e4ff'
  primary-fixed-dim: '#a0cafc'
  on-primary-fixed: '#001d35'
  on-primary-fixed-variant: '#184974'
  secondary-fixed: '#e8e1db'
  secondary-fixed-dim: '#cbc6c0'
  on-secondary-fixed: '#1d1b18'
  on-secondary-fixed-variant: '#494642'
  tertiary-fixed: '#ffddb5'
  tertiary-fixed-dim: '#f5bc72'
  on-tertiary-fixed: '#2a1800'
  on-tertiary-fixed-variant: '#643f00'
  background: '#fcf9f6'
  on-background: '#1c1c1a'
  surface-variant: '#e5e2e0'
  surface-base: '#F6F5F3'
  data-mono: '#111110'
typography:
  display-lg:
    fontFamily: Raleway
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Raleway
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Raleway
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Raleway
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 16px
  margin-mobile: 20px
  margin-tablet: 32px
  container-max: 1200px
---

## Brand & Style

The design system is engineered for the high-stakes world of maritime logistics. The brand personality is **reliable, authoritative, and industrially precise**. It draws from a Modern Corporate aesthetic with a focus on functional clarity and technical rigor.

The visual direction prioritizes information density and legible data visualization, catering to professionals who manage complex global supply chains. By balancing a deep maritime blue with neutral stone tones, the system evokes the stability of a massive shipping vessel and the precision of modern tracking technology. The UI avoids unnecessary decoration, opting for a structured, grid-based approach that feels trustworthy and efficient.

## Colors

The palette is anchored in the deep maritime blue (`#1F4E79`), representing trust and the sea. This is supported by a palette of architectural neutrals that mimic the materials of logistics: steel, concrete, and industrial paper.

- **Primary**: Used for key actions, active states, and brand-defining moments.
- **Secondary**: A muted taupe-gray used for secondary information and supporting industrial accents.
- **Surface Tones**: A sophisticated off-white (`#F6F5F3`) reduces glare while maintaining high contrast against the dark text.
- **Functional Neutral**: The near-black (`#111110`) is used for primary text and high-importance UI borders to ensure maximum legibility.

## Typography

This design system employs a tiered typographic strategy to balance personality with technical utility.

- **Headlines (Raleway)**: Selected for its sophisticated geometric construction and distinctive "W". It provides a modern, premium feel to top-level navigation and screen titles.
- **Body Text (DM Sans)**: Chosen for its high legibility and neutral tone, ensuring that long-form logistics data and descriptions are easy to process.
- **Technical Labels (JetBrains Mono)**: Used for tracking numbers, coordinates, timestamps, and status indicators. This monospaced font signals a "system state" and ensures numeric data aligns perfectly in lists and tables.

## Layout & Spacing

The layout model is built on an **8px hard grid**, ensuring all elements relate to one another with mathematical precision. 

- **Mobile**: A 4-column fluid grid with 20px outside margins. 
- **Tablet**: An 8-column fluid grid with 32px margins. 
- **Desktop**: A 12-column fixed grid centered in the viewport.

Spacing follows a strict "even-only" rule. Padding within cards should default to 16px or 24px to maintain a spacious, professional feel even when data density is high. Use vertical stacks (Auto-layout) with consistent 8px or 12px gaps for related list items.

## Elevation & Depth

This design system uses **Tonal Layering and Low-Contrast Outlines** rather than heavy shadows to convey depth. This approach reflects the flat, functional nature of industrial interfaces.

- **Level 0 (Base)**: The background surface (`#F6F5F3`).
- **Level 1 (Cards/Containers)**: Background color (`#FDFCFA`) with a subtle 1px border (`#797570` at 20% opacity). This creates a distinct separation without visual clutter.
- **Active Elevation**: When an element is interacted with, use a subtle, diffused ambient shadow (Color: `#111110`, Alpha: 0.08, Blur: 8px) to suggest physical lift.
- **Overlays**: Modals and sheets use a semi-transparent backdrop blur (12px) to keep the user oriented within the logistics workflow.

## Shapes

The shape language is **Soft (0.25rem)**. This subtle rounding of corners strikes a balance between the "sharp" efficiency of industrial hardware and the "soft" user-friendly nature of modern software.

- **Buttons & Inputs**: 4px (0.25rem) corner radius.
- **Cards & Modals**: 8px (0.5rem) corner radius.
- **Status Tags**: Semi-rounded or full pill-shaped to distinguish them from interactive buttons.

## Components

### Buttons
- **Primary**: Solid `#1F4E79` background with white `Raleway` bold text. 4px radius.
- **Secondary**: Outlined in `#111110` with a subtle hover state that fills with `#FDFCFA`.
- **Ghost**: Used for low-priority actions; text only in `#797570`.

### Chips & Status Indicators
- Use `JetBrains Mono` for all text within chips. 
- Statuses (In Transit, Delivered, Delayed) should use low-saturation background tints with high-saturation text for a professional look.

### Input Fields
- Structured with a label in `DM Sans` (bold, 12px) and a persistent 1px border. 
- Focus state uses a 2px stroke of the primary blue (`#1F4E79`).

### Cards
- Use for shipment details or vessel tracking. 
- Cards should have a white background (`#FDFCFA`) and use `JetBrains Mono` for metadata like "ETA" or "Container ID" to emphasize the technical nature of the content.

### Lists
- High-density rows with 1px horizontal dividers (`#797570` at 10% opacity). 
- Usechevron icons for navigation, keeping the stroke weight consistent with the typography.