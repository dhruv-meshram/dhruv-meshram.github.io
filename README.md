# Dhruv Meshram — Portfolio

Personal portfolio website built with pure HTML, CSS, and vanilla JavaScript.  
No build tools. No npm. No frameworks. Deploys directly to GitHub Pages.

## Structure

```
portfolio/
├── index.html          # Single page — all sections
├── css/
│   ├── tokens.css      # Design tokens (colors, spacing, radius, fonts)
│   ├── base.css        # CSS reset and html/body defaults
│   ├── typography.css  # Type scale utility classes
│   ├── components.css  # All component styles
│   └── responsive.css  # Media query overrides
├── js/
│   ├── main.js         # Nav toggle, active link tracking
│   └── animations.js   # Scroll reveal via IntersectionObserver
├── assets/
│   └── images/         # Drop your profile photo here as profile.jpg
│                         Then update: <img src="assets/images/profile.jpg" ...>
└── README.md
```

## Adding Your Profile Photo

1. Add your photo to `assets/images/` (e.g. `profile.jpg`)
2. In `index.html`, find `<img src="" alt="Dhruv Meshram profile photo" ...>`
3. Update `src=""` to `src="assets/images/profile.jpg"`

## Deploy to GitHub Pages

1. Push this entire folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set **Source** to `Deploy from a branch` → `main` → `/ (root)`
4. Save — your site will be live at `https://<username>.github.io/<repo>/`

Or use the repo root directly if the repo is named `<username>.github.io`.

## Design System

Based on the Bjorn Melin design system:
- **Font**: Geist Sans (via CDN) with Inter fallback
- **Palette**: Pure white/zinc achromatic (#ffffff → #09090b)
- **Grid**: 4px base unit spacing scale
- **Radius**: xs(2px) / sm(6px) / md(8px) / full(9999px)
- **Elevation**: Flat (border-based depth, no shadows)
