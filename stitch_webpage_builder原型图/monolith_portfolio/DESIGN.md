---
name: Monolith Portfolio
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dcdddd'
  on-secondary-container: '#5f6161'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1b1b'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
  border-subtle: '#E5E5E5'
  surface-muted: '#FAFAFA'
  placeholder-fill: '#F0F0F0'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  meta-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 24px
  section-gap: 128px
---

## Brand & Style
The brand personality is architectural, precise, and editorial. It is designed for a UX/UI designer whose work speaks for itself, requiring a UI that acts as a sophisticated gallery frame rather than the art itself. The target audience includes design directors, recruiters, and potential collaborators who value structure, clarity, and intentionality.

The design style is **Minimalism** with a **Low-Contrast/Low-Fidelity** twist. It avoids the "flashiness" of modern web trends in favor of a timeless, structural aesthetic. The interface uses subtle borders, monospaced accents, and a strict adherence to a grid, evoking the feeling of a high-end design specification or a printed architectural monograph.

## Colors
The palette is strictly monochromatic to emphasize form and typography. 

- **Primary:** Deep black (#000000) for all primary text and structural borders.
- **Secondary:** A soft off-white/gray (#F4F4F4) for secondary surfaces and button backgrounds.
- **Neutral:** Mid-tone grays (#666666) for metadata, labels, and helper text.
- **Background:** Pure white (#FFFFFF) is used for the primary canvas to maximize whitespace impact.
- **Placeholders:** Visual elements are represented by light gray fills (#F0F0F0) with thin, one-pixel borders to maintain the wireframe-inspired aesthetic.

## Typography
The system relies on **Hanken Grotesk** for its sharp, contemporary geometric forms that provide a high-end SaaS feel. This is paired with **JetBrains Mono** for technical labels and metadata to reinforce the "low-fidelity/process" aesthetic of a designer's portfolio.

Large display type should be set with tight tracking to create a "blocky" visual impact. Body copy is optimized for readability with generous line heights. All labels use the monospaced font to differentiate "data" (dates, categories, tags) from "content" (titles, descriptions).

## Layout & Spacing
This design system utilizes a **Fixed Grid** on desktop (12 columns) and a **Fluid Grid** on mobile (4 columns). 

- **Vertical Rhythm:** A strict 8px baseline grid ensures consistent spacing. 
- **Section Gaps:** Large 128px gaps are used between major content blocks to provide the "generous whitespace" requested.
- **Split-Screen Logic:** On the homepage, the 50/50 split should be absolute on desktop, stacking vertically on mobile with the image placeholder taking priority at the top.
- **Portfolio Grid:** Use an alternating rhythm where project blocks vary between 6-column widths and 12-column widths to create a dynamic, editorial flow.

## Elevation & Depth
In line with the minimal and low-fidelity aesthetic, this system **shuns shadows entirely**. Depth is communicated through:

1.  **Tonal Layering:** Using `#FAFAFA` surfaces against white backgrounds to define distinct regions.
2.  **Stroke Weight:** A consistent 1px border (#000000 or #E5E5E5) is used to define containers, placeholders, and buttons.
3.  **Z-Index Hierarchy:** The navigation bar remains fixed at the top with a backdrop-blur effect (glassmorphism) only when scrolling, keeping the background visible while maintaining legibility.

## Shapes
The shape language is strictly **Sharp (0px)**. All containers, buttons, and placeholders use 90-degree corners to evoke a technical, structural, and "unrefined" wireframe aesthetic. The only exception is the Avatar placeholder in the About section, which may be a perfect circle to provide a singular point of visual contrast against the rigid grid.

## Components

- **Buttons:** Rectangular with 1px black borders. No fill for secondary states; solid black fill with white text for primary actions. Hover states should invert the colors (Primary becomes white with black text).
- **Navigation:** Simple text links using `label-caps`. The active state is indicated by a simple 1px underline. The "K" logo is set in `display-lg` but scaled down to 32px.
- **Placeholders:** All visual media is represented by `#F0F0F0` rectangles. Inside the rectangle, use `meta-sm` text centered both horizontally and vertically to label the content (e.g., "[Project Screenshot]").
- **Experience Blocks:** A vertical stack where the Company Name is `headline-md`, and the role/dates are `meta-sm`. Use a thin horizontal rule (#E5E5E5) to separate chronological entries.
- **Input Fields (Contact):** Underline-only style. No box. The label floats above in `label-caps`. 
- **Cards:** Portfolio cards should not have "containers." Instead, use the placeholder image as the top element, followed by the project title (`headline-md`) and a short description (`body-md`) with a 16px gap between them.