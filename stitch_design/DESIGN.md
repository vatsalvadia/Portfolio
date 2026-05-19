---
name: Logistics & Precision
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#545f73'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f8'
  on-secondary-container: '#586377'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#00201d'
  on-tertiary-container: '#0c9488'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#89f5e7'
  tertiary-fixed-dim: '#6bd8cb'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#005049'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is engineered to evoke feelings of unwavering reliability, scale, and professional excellence. It targets a demographic ranging from individual vehicle owners to large-scale dealerships and corporate fleets who require the assurance that their high-value assets are in safe hands.

The visual style is **Corporate / Modern**. It prioritizes clarity and structural integrity over decorative flair. By utilizing ample whitespace and a disciplined grid, the UI communicates transparency and organizational efficiency. The aesthetic is clean and high-functioning, mirroring the precision required in the auto-transport logistics industry.

## Colors

The palette is anchored in deep, authoritative blues and teals to establish a foundation of trust. 

- **Primary & Secondary:** A combination of "Deep Navy" and "Slate Gray" provides the corporate backbone, used for navigation, typography, and core structural elements.
- **Tertiary:** "Dark Teal" is used sparingly for secondary actions or to highlight successful states and trust indicators.
- **Accent:** "Bold Orange" is reserved exclusively for high-visibility Call to Actions (CTAs) and urgent status indicators, ensuring a high-contrast path to conversion.
- **Neutral:** A range of grays manages the hierarchy of information without distracting from the primary content.

## Typography

This design system utilizes a dual-font approach to balance character with utility. 

**Hanken Grotesk** is used for headlines to provide a sharp, contemporary edge that feels modern and precise. **Inter** is utilized for all body copy and functional labels, chosen for its exceptional legibility and systematic appearance at smaller sizes. 

For mobile devices, `headline-xl` scales down to ensure readability while maintaining its bold impact. All headings utilize a tighter letter-spacing to create a sense of density and authority.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a controlled, high-end editorial feel, transitioning to a fluid model for mobile devices.

- **Desktop (1440px+):** A 12-column grid with a max-width of 1280px. Gutters are fixed at 24px to ensure distinct separation between data points and content blocks.
- **Tablet:** 8-column grid with 20px gutters and 32px side margins.
- **Mobile:** 4-column fluid grid with 16px gutters and 16px side margins.

A strict 8px base unit (linear scale) governs all padding and margin decisions, ensuring a rhythmic vertical flow throughout the interface. Large `xl` spacing is encouraged between major sections to emphasize the "ample white space" brand pillar.

## Elevation & Depth

To convey reliability, depth is handled with subtlety rather than dramatic artifice. The design system uses **Ambient Shadows** and **Tonal Layers** to establish hierarchy.

- **Level 0 (Base):** Surfaces use a very subtle off-white or light slate tint to reduce eye strain.
- **Level 1 (Cards):** Utilizes a 1px border in a light slate gray (#E2E8F0) combined with a very soft, diffused shadow (Y: 2px, Blur: 4px, Opacity: 4%) to lift items slightly off the page.
- **Level 2 (Dropdowns/Modals):** Features a more pronounced shadow (Y: 8px, Blur: 16px, Opacity: 8%) to indicate temporary, interactive layers that sit above the core navigation.

No heavy blurs or frosted glass effects are used; the focus remains on clear, solid boundaries.

## Shapes

The shape language is **Soft**. This choice strikes a balance between the "Industrial/Mechanical" nature of auto-transport (sharp) and the "Service/Customer" side of the business (rounded).

- **Standard Elements:** Buttons, input fields, and small cards use a 0.25rem (4px) corner radius.
- **Large Containers:** Hero sections or testimonial cards may use up to 0.75rem (12px) to feel more inviting.
- **Icons:** Should be contained within square or slightly rounded bounding boxes, maintaining a consistent stroke weight to match the typography.

## Components

### Buttons
- **Primary:** Bold Orange (#EA580C) background with white text. High contrast is mandatory.
- **Secondary:** Deep Navy (#0F172A) outline with a 1px stroke.
- **Tertiary:** Text-only with a subtle underline or arrow icon to indicate movement.

### Cards
Cards are the primary vehicle for testimonials and shipping steps. They must feature a white background, the Level 1 shadow, and a 1px slate border. Content should be padded with `md` (24px) spacing to ensure readability.

### Input Fields
Inputs should be clean and structured with a 1px border. Focus states must use the Tertiary Teal (#0D9488) to provide a clear, calm visual cue that the field is active. Labels are always positioned above the field using `label-md`.

### Status Indicators & Chips
Use standard badges for "In Transit," "Delivered," or "Pending." These use low-saturation background tints with high-saturation text of the same hue to maintain a professional, rather than alarming, appearance.

### Iconography
Use clear, geometric line icons with a 2px stroke. Icons should represent logistics concepts (trucks, clocks, shields, documents) simply and without decorative complexity.