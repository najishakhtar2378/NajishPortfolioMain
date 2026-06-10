# Corporate-Style UI & Animation Redesign

Redesign the portfolio's color system, typography details, card hovers, and page transitions to look polished, premium, and corporate-ready.

## User Review Required
> [!IMPORTANT]
> The color palette will shift from highly vibrant neon synthwave (cyan/pink) to professional, enterprise-grade corporate slate blues and teals.

## Proposed Changes

### Styles & Colors (`styles-new.css`)

#### [MODIFY] [styles-new.css](file:///c:/Users/Alfa solutions/Desktop/NajishPortfolio-main/styles-new.css)
- **Colors**:
  - Dark Mode: Deep navy slate (`#0b1329` -> `#0f172a`), royal blue (`#2563eb`), and cyan-teal (`#0ea5e9`).
  - Light Mode: Crisp Slate (`#f8fafc` / `#f1f5f9`), deep gray text (`#0f172a`), slate accents.
  - Remove neon pink accents (`#ff006e`).
- **Cards**:
  - Soft border (`1px solid rgba(148, 163, 184, 0.1)`).
  - Premium box shadow (`0 8px 30px rgba(0,0,0,0.12)`).
- **Hovers & Transitions**:
  - Replace large card translations (`translateY(-12px) scale(1.05)`) with a clean, smooth lift (`translateY(-5px)`) and a subtle accent border glow.
  - Set transition curve to `cubic-bezier(0.16, 1, 0.3, 1)` (out-quart) for an extremely responsive, high-end feel.
- **Background & Particles**:
  - Make particle dots smaller (1.5px), fewer, and slow down their floating speed by 2x for a subtle atmosphere.
  - Slow down the main background gradient shift to 40s for a calm, professional ambient environment.

### Structure & Content (`index.html`)

#### [MODIFY] [index.html](file:///c:/Users/Alfa solutions/Desktop/NajishPortfolio-main/index.html)
- Clean up inline styles from titles and headers.
- Fix the incomplete sentence in the hero section:
  - **Old**: `Passionate towards coding and learning new technologies. Currently`
  - **New**: `Passionate Full Stack Developer specializing in backend engineering, scalable databases, and clean algorithms. Currently building robust web solutions.`

## Verification Plan

### Manual Verification
- Verify layout responsiveness on both desktop and mobile screens using browser developer tools.
- Check dark/light mode toggle consistency with the new corporate palette.
- Inspect page scroll interactions and card hovers to verify that the animations are elegant, smooth, and professional.
