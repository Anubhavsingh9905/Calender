# 🗓️ Interactive Wall Calendar - Frontend Challenge

A high-fidelity, responsive "Wall Calendar" component built with React and Tailwind CSS. This project features a physical-calendar aesthetic, 3D page-flip animations, and a dynamic color-theming journey.

## 🎥 Video
* **Video Walkthrough:**  
<a href="https://youtu.be/TLtqX0o0Vlo">
  <img src="/src/assets/thumbnail.png" alt="Watch the demo" width="450" />
</a>

---

## ✨ Key Features

### 1. Wall Calendar Aesthetic
- **Physical Details:** Simulated spiral binding and "hanging hole" UI to mimic a real wall calendar.
- **Dynamic Hero Images:** The header image updates contextually with each month.
- **Color Journey:** The UI color palette morphs from **Blue (January)** to **Red (December)**, symbolizing a year-long journey.

### 2. Advanced Range Selection
- **Two-Click Logic:** An intuitive system for selecting start and end dates.
- **Smart Highlighting:** Distinct visual states for the `Start Date`, `End Date`, and the `Spanned Range`.

### 3. Smooth 3D Animations
- **Page Flip:** Utilizes CSS 3D transforms (`rotateX`) and hardware acceleration to simulate a physical page being turned when navigating months.

### 4. Integrated Notes System
- **Contextual Memos:** A lined-paper notepad that automatically reflects the current date selection.
- **Responsive Layout:** Side-by-side view on Desktop and a smart-stacked vertical view on Mobile.

---

# Tech Stack
- React (Vite)
- CSS and TailwindCSS

---

## 🏗️ Project Architecture

```text
src/
├── assets/             # Static images (Rings, Hero placeholders)
├── components/         # Functional UI Units
│   ├── HeroSection.jsx # Top display with month/year & 3D flip logic
│   ├── DateSection.jsx # Calendar grid & range selection logic
│   └── NotesSection.jsx# Lined-paper memo area with range display
├── App.jsx             # Global State Management (Date & Color Theme)
├── App.css             # Custom 3D animations and perspective logic
└── main.jsx            # Entry point

```
---

# Installation & Setup

### Clone the repository
```
git clone https://github.com/Anubhavsingh9905/Calender.git
```

### Run Frontend
```
cd Calender
npm install
npm run dev
```

# 👨‍💻 Author
 **Anubhav Singh**
