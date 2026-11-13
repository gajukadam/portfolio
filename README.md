# Gajanan Sanjay Kadam — Cinematic Developer Portfolio
## Second-Year Computer Science & Engineering Undergraduate | SSGMCE Shegaon
### Awwwards-Level "Video Editor / After Effects Timeline" Scrollytelling Edition

A world-class, continuous scrollytelling personal developer portfolio built for **Gajanan Sanjay Kadam**, Second-Year Computer Science and Engineering undergraduate at **Shri Sant Gajanan Maharaj College of Engineering (SSGMCE), Shegaon** and **Jawahar Navodaya Vidyalaya (JNV) Parbhani Alumnus**.

Designed as a premier personal developer portfolio combining:
1. Continuous vertical scrollytelling flow with Lenis smooth scroll physics
2. Real-time GSAP ScrollTrigger timeline scrubbing & timecode tracking
3. Kinetic typography with cyber character scramble decoders & audio ticks
4. Hero camera zoom & multi-layer 3D avatar parallax
5. Film grain & RGB chromatic aberration glitch overlays
6. Cinematic shutter clip-path wipe reveals on cards
7. Zero invented credentials — 100% authentic academic and practical data

---

## 🌟 Visual Effects & GSAP Choreography Innovations

### 1. Kinetic Typography & Text Scramble Decoder
- **Custom `TextScramble` Engine**: As sections enter the viewport, section headers (`h1`, `h2`) decode from random cyber/timecode glyphs (`!<>-_\\/[]{}—=+*^?#________0123456789ABCDEF`) into legible typography.
- **Micro-Audio Ticks**: Accompanied by synchronized synthesized frequency ticks via `PortfolioAudio.playBeep()`.

### 2. Hero Camera Zoom & Multi-Layer Parallax
- **Stagger-Revealed Badges**: Academic & background pills reveal sequentially with smooth ease-out curves.
- **Overflow-Masked Typography**: Hero title words ("Hi, I'm", "Gajanan Sanjay Kadam") slide upward from overflow-hidden line masks with `power4.out` easing.
- **Differentiated Depth Parallax**:
  - The central circular profile avatar drifts with a subtle scale-down (`scale: 0.94`, `y: 70px`).
  - The 4 orbiting badges (`C Language`, `Ex-Navodayan`, `Sem 1: 8.14 | Sem 2: 8.32 SGPA`, `HTML5/CSS3`) move along independent vectors (`scrub: 0.8` to `scrub: 1.9`), creating an authentic 3D multiplane camera depth.

### 3. Film Grain & RGB Chromatic Glitch Overlay
- **Animated SVG Film Grain**: A fixed, pointer-events-none noise overlay utilizing SVG `feTurbulence` with an animated seed (`opacity: 0.04`, `mix-blend-screen`), providing texture without raster asset overhead.
- **RGB Chromatic Split Aberration (`.chromatic-glitch`)**: Dual offset red/cyan text shadows (`-2.5px #FF2A85` / `+2.5px #FF6B35`) that trigger during high-velocity scrolling (`|velocity| > 8`) or during rapid route scrubbing.

### 4. Cinematic Shutter Clip-Path Wipe Reveals
- All cards and content blocks reveal with a vertical shutter clip-path wipe (`clipPath: polygon(...)`) and scale-down (`scale: 1.06` to `1.0`) powered by GSAP ScrollTrigger as they scroll into view.

### 5. Continuous Scrollytelling Timeline & Lenis Integration
- **Lenis Smooth Scroll**: Inertial momentum wheel scrolling synchronized with `gsap.ticker` and `ScrollTrigger.update`.
- **Velocity Skew Speed-Ramp**: Fast scrolling skews `.aesthetic-card` elements along `skewY` (up to `±4.5deg`), simulating an After Effects speed-ramp.
- **Real-Time Scrubber Playhead**: `#timeline-playhead` continuously tracks scroll progress along the ruler.
- **60 FPS Digital Timecode Clock**: `#timeline-clock` calculates exact running frames (`00:00:00:00` $\rightarrow$ `00:01:24:00` at 60 FPS) in real time.

### 6. Fullscreen Cinematic Intro Sequence
- **Live Anamorphic Timecode HUD**: Real-time running millisecond/frame counter with timecode tracking tags.
- **Keyframe Progress Bar**: Visual loading telemetry with sequential milestones.
- **Split Typography Mask Reveal**: Staggered GSAP-powered blur-to-focus reveal for `GAJANAN SANJAY KADAM`.
- **Dual Shutter Wipe**: Top and bottom cinematic shutters wipe open with an anamorphic laser streak flare on completion or skip (`[ESC] SKIP INTRO`).
- **Replay Feature**: Dedicated **"Replay Intro"** button in timeline bar and footer slate.

### 7. Synthesized Web Audio API Sound Engine
- **Zero External Dependencies**: Pure native browser `AudioContext` oscillator synthesis.
- **Audio Micro-Interactions**: High-tech UI clicks, sub-bass whoosh page transitions, and feedback beeps.
- **Interactive Equalizer**: Animated frequency equalizer bars with a dedicated `SFX: ON/OFF` toggle in the timeline control bar.

### 8. Magnetic Button Physics (Elastic Snap)
- **Fluid Pointer Tracking**: Upgrades all `.btn-sunset`, `.nav-tab`, `#lut-switcher-btn`, and `#auto-tour-btn` elements so hovering near them physically pulls the button toward the cursor with GSAP `quickTo` 60 FPS physics.
- **Elastic Return**: On mouseleave, buttons snap back elastically using `elastic.out(1, 0.3)`.

### 9. Interactive Color Grading / Theme LUT Switcher
- **Top Scrubber Integration**: Compact button (`#lut-switcher-btn`) cycling through 3 cinematic LUT presets:
  1. **Cyber Sunset (Default)**: Electric Sunset Orange (`#FF6B35`) & Hot Pink (`#FF2A85`)
  2. **Matrix Neon**: Neon Emerald (`#00FF88`) & Cyber Cyan (`#00E5FF`)
  3. **Gold Anamorphic**: Warm Gold (`#F59E0B`) & Amber Flame (`#FF6B35`)
- **Camera Shutter Flash**: Accompanied by a 90ms white screen shutter flash overlay (`#camera-shutter-flash`), click audio tick, and persistent `localStorage` preference.

---

## 📄 Authentic Academic & Personal Information

- **Name**: Gajanan Sanjay Kadam
- **Role**: Second-Year Computer Science & Engineering Undergraduate
- **College**: Shri Sant Gajanan Maharaj College of Engineering, Shegaon (SSGMCE)
- **School Background**: Jawahar Navodaya Vidyalaya (JNV), Parbhani Alumnus
- **Academic Scores**:
  - **First Semester SGPA: 8.14 / 10**
  - **Second Semester SGPA: 8.32 / 10**
  - **HSC Score: 83.5%** (Science Stream, JNV Parbhani)
  - *(Zero references to CGPA; no external passing years)*
- **Core Skills**:
  - **C Language** (Strong Foundation)
  - **Core Java** (Currently Learning in Depth)
  - **Object-Oriented Programming (OOP)** (Currently Learning)
  - **Web Development**: Semantic HTML5, Responsive CSS3
  - **Tools**: Git, GitHub, VS Code, Microsoft Excel
  - **Core CS**: Data Structures & Algorithms (Foundations), Structured Algorithmic Thinking, Database Concepts (MySQL Foundations)
- **Verified Projects**:
    1. **Lastlight – Red Data Book Wildlife Archive**: Interactive web archive highlighting endangered animals and plants from the IUCN Red List. Built with HTML5, CSS3, and Vanilla JavaScript featuring responsive grids, detailed species modals, and a localStorage conservation pledge tracker. [Live Website](https://gajukadam.github.io/Lastlight/) | [GitHub Repository](https://github.com/gajukadam/Lastlight) | Features real 16:9 cinematic cover photo
  2. **SuvidhaX – Privacy-Focused Client-Side Utility Platform**: Privacy-focused, client-side utility platform designed to handle everyday computational and data-processing tasks securely in the browser. Features 100% local client-side processing, an all-in-one utility suite, and a modern interface hosted on Render. [Live Website](https://suvidhax-frontend.onrender.com/) | Features real 16:9 cinematic cover photo
  3. **Community Engagement Project (CEP): Rural STEM Awareness**: Led a Community Engagement Project at Zilla Parishad Shala, Chincholi, bridging the rural STEM education gap and inspiring 8th-grade students toward careers in Science, Technology, Engineering, and Mathematics. Engineered an interactive bilingual (English/Marathi) quiz platform and delivered mentorship under the guidance of Prof. T. A. Puranik Madam and HOD Dr. J. M. Patil Sir. [Watch on YouTube](https://youtu.be/5_O2UamVMfM?si=lwovgcOZZ5BywJJ5) | Includes 4 verified field work photographs.
  4. **JNV Memories Photo Gallery**: A responsive web-based photo gallery designed and built to archive and showcase memorable moments from high school days at Jawahar Navodaya Vidyalaya, Parbhani. Built from scratch using semantic HTML5 and modern CSS3 with clean visual storytelling and intuitive layout. [Launch Gallery](jnv-memories.html)
  5. **JNV Memories – Personal Memory Gallery Webpage**: Personal memory gallery webpage dedicated to high school memories with JNV Parbhani classmates. Responsive auto-fit CSS Grid media layouts.
- **Contact Details**:
  - Phone: `+91 93092 41434` / `9309241434`
  - Email: `gajanan.kadam2004@gmail.com`
  - Location: Shegaon, Maharashtra, India

---

## 🚀 How to Run & Verify

### Standalone (Instant Launch)
Simply open `index.html` in any modern web browser or run:
```powershell
Start-Process "index.html"
```
Zero setup, zero compilation, and completely functional offline.

---

## 🌟 Engineering Highlights & Architecture

- **Institution**: Shri Sant Gajanan Maharaj College of Engineering (SSGMCE), Shegaon
- **Class**: Second-Year Computer Science and Engineering (Class of 2028)
- **Status**: Production-ready personal developer portfolio with cinematic video-editing scrollytelling, high-performance GSAP choreography, and authentic academic and project credentials.
