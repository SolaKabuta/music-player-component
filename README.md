# 🎧 Music Player Component 

An elegant, fully-featured, and highly interactive audio player component built with **React**, **Vite**, **Framer Motion**, and **Tailwind CSS** (But not mobile first, this component is part of an experience I'm building as a side project focused on desktop users). 

Designed as a modern music player interface, this project showcases clean state management, modular component architecture, and responsive micro-interactions engineered specifically for music portfolios.

---

## 🎨 Visual Preview

Here is how the player looks in action (replace these placeholders with your actual screenshots once you have them!):

### Closed State (Now Playing View)
![Music Player Closed View](./public/assets/images/screenshot_desktop_closed.webp)
*A sleek, minimal glassmorphic bar displaying the current track with live playback state indicator.*

### Expanded State (Tracks & Artist EP Info)
![Music Player Expanded View](./public/assets/images/screenshot_desktop_extended.webp)
*An immersive dropdown showing the artist bio, social links, contact forms, and the tracklist with active song highlighted and interactive play triggers.*

---

## 🚀 Live Demo

Check out the live deployment on Vercel:  
[👉 music-player-component-three.vercel.app](https://music-player-component-three.vercel.app)

---

## ✨ Features & Architecture

### 1. Interactive State Management
*   **Single Source of Truth**: State is hoisted to `App.jsx` to ensure perfect synchronicity between the `Navbar` track selector and the native HTML5 `<audio>` element inside `MusicPlayer.jsx`.
*   **Unified Active States**: Selecting any song from the tracklist instantly updates the timeline, duration triggers, and "Now Playing" display across all elements.

### 2. Smooth Fluid Animations (Framer Motion)
*   **Staggered Entry**: Experience smooth cascading item entries when expanding the tracklist dropdown.
*   **Micro-Interactions**: Custom scale animations on buttons, bloom effects on active songs, and subtle text offsets when tracks change.
*   **Height Animation**: The expansion from compact player to full EP panel animates beautifully using dynamic `height: "auto"`.

### 3. Glassmorphic CSS UI (Tailwind CSS)
*   Fully responsive layout designed to match modern streaming service aesthetics.
*   Uses Backdrop Blurs (`backdrop-blur-2xl`) and relative color transparencies (`bg-primary/40`) to blend beautifully over any backdrops.

### 4. Static-Served Assets
*   Optimized for Serverless deployment on platforms like Vercel. Failsafe file resolution directly out of the `/public` root folder avoiding bulky client imports or broken dynamic URLs.

---

## 🛠️ Built With

*   **React 18** (Functional components, custom hooks, `useRef`, `useCallback`)
*   **Vite** (Next-generation lightning-fast frontend tooling)
*   **Tailwind CSS** (Utility-first styling system)
*   **Framer Motion** (Production-ready declarative animations)
*   **JSON Data Binding** (Separate configuration layer `/data/artistData.json` for decoupled code-content structures)

---

## ⚙️ Development & Setup

To run this project locally, make sure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/music-player-components.git
    cd music-player-components
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # Or using bun (recommended for performance)
    bun install
    ```

3.  **Run the local development server:**
    ```bash
    npm run dev
    # Or
    bun run dev
    ```

4.  **Audio files setup:**
    *   Place your `.mp3` files under the `public/audio/` directory.
    *   Make sure the filenames match the configurations defined inside `data/artistData.json`.

---

## 👨‍💻 Author

**Kam**
*   Soundcloud: [soundcloud.com/kamorange](https://soundcloud.com/kamorange)
*   Inquiries & Booking: `iamnotkam@gmail.com` (That's actually me but don't email me, I need to code)

---

*This component was crafted with care as an exercise in solidifying state hoisting, animation timings, and component composition in React.*

# Code License

The source code in this repository is licensed under the MIT License.
See the LICENSE file for full details.

# Audio & Visual Assets

All audio files (in `public/audio/`) and visual assets (in `public/images/`) are
© Kam / Sola Kabuta.

They are provided for demonstration and portfolio purposes only and may **not**
be copied, reused, modified, or redistributed without explicit written permission.

