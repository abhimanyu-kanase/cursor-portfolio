# Abhimanyu Kanase — AI & Data Engineering Portfolio

A bespoke, editorial 60 FPS interactive portfolio engineered for Data & AI applications, scalable architectures, and real-time canvas interactions.

[![Live Demo Status](https://img.shields.io/badge/Live%20Demo-v2.0%20Active-emerald?style=for-the-badge&logo=githubpages&logoColor=white)](https://abhimanyu-kanase.github.io/cursor-portfolio/)
[![Portfolio Build](https://img.shields.io/badge/Active%20Stage-stage--4%20(v4.1)-purple?style=for-the-badge&logo=git&logoColor=white)](https://github.com/abhimanyu-kanase/cursor-portfolio/tree/stage-4)
[![Main Branch](https://img.shields.io/badge/Branch-main-blue?style=for-the-badge&logo=git)](https://github.com/abhimanyu-kanase/cursor-portfolio/tree/main)

---

### 🌐 Live Demo & Deployment Status (For Recruiters & Reviewers)

| Parameter | Current Status | Notes |
| :--- | :--- | :--- |
| **Live Demo URL** | [abhimanyu-kanase.github.io/cursor-portfolio](https://abhimanyu-kanase.github.io/cursor-portfolio/) | Hosted on GitHub Pages (`gh-pages` branch) |
| **Live Demo Iteration** | **Version 2.0 (Active)** | Current production release deployed to the web |
| **Underlying Build Version** | **Version 3.5 (Stage 3)** / In Progress: **Stage 4** | Live Demo v2.0 powered by Build 3.5 |
| **Active Development Branch** | [`stage-4`](https://github.com/abhimanyu-kanase/cursor-portfolio/tree/stage-4) | Dynamic Viewport Scaling Engine (Build 4.1) |
| **Primary Production Branch** | [`main`](https://github.com/abhimanyu-kanase/cursor-portfolio/tree/main) | Production-ready mirrored branch containing all merged stages |

> **Note for Recruiters & Engineering Reviewers**:  
> While visitors navigating the live portfolio website experience a clean, distraction-free editorial interface without internal software version labels, Git visitors can reference this matrix to inspect the chronological development stages preserved across individual branches:
> - **Live Demo v1.0** *(Archived / Release v1.0.0)*: Initial Canvas 2D gaze tracker and foundational layout.
> - **Live Demo v2.0** *(Active / Powered by Build Version 3.5)*: Comprehensive overhaul featuring 10-project architecture catalog, interactive resume, email dispatch, IEEE/Springer research links, and tactile plaster styling.
> - **Stage 4 Development** *(Active / Build Version 4.1)*: Dynamic Viewport Scaling Engine, dual-axis bounded canvas sizing, fluid CSS `clamp()` typography, and universal laptop display scaling resolution.

---

### 🌿 Chronological Branch Structure

Recruiters are invited to inspect how the portfolio developed incrementally across distinct stages:
- [`stage-4`](https://github.com/abhimanyu-kanase/cursor-portfolio/tree/stage-4): Active stage — Dynamic Viewport Scaling Engine, dual-axis bounded canvas sizing, fluid CSS clamp typography, and universal laptop collision prevention (**Build v4.1**).
- [`main`](https://github.com/abhimanyu-kanase/cursor-portfolio/tree/main): Master production branch reflecting the latest merged build (**Build v3.5**).
- [`stage-3`](https://github.com/abhimanyu-kanase/cursor-portfolio/tree/stage-3): Stage 3 development — UI reordering, dedicated education section, tactile card texture unification, and publication linkages (**Build v3.5**).
- [`stage-2`](https://github.com/abhimanyu-kanase/cursor-portfolio/tree/stage-2): Stage 2 development — complete 10-project architecture catalog, interactive deep-dive modals, and horizontal card layouts (**Build v2.4**).
- [`gh-pages`](https://github.com/abhimanyu-kanase/cursor-portfolio/tree/gh-pages): Distribution branch serving the **Live Demo (v2.0)**.

---

## 🎨 Visual Identity & Architecture

- **Canvas 2D Character Gaze Tracker**: 64 pre-rendered WebP frames with continuous sub-pixel angular lerp (`0.26` smooth dampening) providing real-time responsive cursor tracking and eye contact detection.
- **Organic Green Plaster Relief**: High-resolution authentic stucco surface matching editorial studio lighting.
- **Tactile Walnut Wood Transition**: Interactive hover state across project descriptions fading seamlessly from Italian Walnut into Forest Green.
- **Bespoke Luxury Palette**:
  - **Forest Green** (`#182713`): Wall and canvas background base.
  - **Italian Walnut** (`#362216`, `#5c3a25`): Warm tactile wood accents and project description hover.
  - **Luminous Pure Ivory** (`#fffff8`, `#faf8f3`): High-contrast editorial typography.
  - **Royal Burgundy** (`#380712`, `#852238`): Velvet glass buttons, academic citation ribbons, and gemstone accents.
  - **Radiant Gold** (`#ffd700`, `#e6c280`): Primary actions, hairline rules, and gradient highlights.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Canvas Rendering**: Custom requestAnimationFrame 2D context with hardware-accelerated WebP image caching
- **Email Dispatch**: Resend REST API integration with EmailJS fallback

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/abhimanyu-kanase/cursor-portfolio.git
cd cursor-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## 📄 License & Credits

© 2026 Abhimanyu Kanase. All rights reserved.
