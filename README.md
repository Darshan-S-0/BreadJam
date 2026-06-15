# 🍞 BreadJam

> **Translating your dense notes into human.**

BreadJam is a student-friendly web app that transforms confusing study notes into easy-to-digest formats — with a fun hand-drawn notebook aesthetic.

![BreadJam UI](https://raw.githubusercontent.com/Darshan-S-0/BreadJam/master/public/preview.png)

---

## ✨ Features

- 📝 **Paste or upload** your messy notes
- 🎨 **4 Translation Modes** — Gen Z, Millennial, LinkedIn Lingo, Proper Summarization
- 📋 **Auto-generated Summary** with highlighted key terms
- 🎭 **Rotating Analogies** to make concepts click
- 🧠 **Interactive Quiz** with instant green/red feedback
- 🔄 Refresh analogy or reset quiz anytime
- 📱 **Fully responsive** — mobile, tablet, desktop
- ✏️ Hand-drawn notebook aesthetic throughout

---

## 🖼️ Screenshots

| Input & Modes | Results & Quiz |
|---|---|
| Notebook-style input card, dashed upload button, 4 sketch mode buttons | Summary card, analogy blockquote, interactive MCQ quiz |

---

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 18 | UI framework |
| [Vite](https://vitejs.dev/) | 5 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Utility-first styling |
| [Caveat](https://fonts.google.com/specimen/Caveat) / [Patrick Hand](https://fonts.google.com/specimen/Patrick+Hand) | — | Handwritten Google Fonts |

---

## 📁 Project Structure

```
BreadJam/
├── index.html                  # Vite HTML entry
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx                # ReactDOM entry
    ├── App.jsx                 # Root — owns all state
    ├── constants.js            # Quiz data, analogies, modes
    ├── index.css               # Tailwind + custom sketch styles
    └── components/
        ├── Doodles.jsx         # SVG hand-drawn icons
        ├── Header.jsx          # Title, tagline, floating doodles
        ├── InputCard.jsx       # Upload button + textarea
        ├── TranslationSelector.jsx  # 4 mode buttons (radio-style)
        ├── SummaryCard.jsx     # C memory summary with code highlights
        ├── AnalogyCard.jsx     # Rotating analogy pool
        ├── QuizCard.jsx        # 3-question MCQ with feedback
        └── FooterActions.jsx   # Try Another Analogy / New Quiz
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18+

### Install & Run

```bash
# Clone the repo
git clone https://github.com/Darshan-S-0/BreadJam.git
cd BreadJam

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🎨 Design Philosophy

BreadJam is designed to feel like a page torn out of a student's notebook:

- 🗒️ **Ruled paper background** — repeating CSS linear gradient
- ✏️ **Sketch borders** — SVG `feTurbulence` displacement filter for a hand-drawn wobble
- 💛 **Marker highlights** — yellow shadow on headings, code tokens, and active buttons
- 📐 **Slight card rotations** — `rotate(-0.3deg)` / `rotate(0.3deg)` for authentic imperfection
- 🎯 **Caveat + Patrick Hand + Architects Daughter** fonts from Google Fonts

---

## 🧩 State Management

All state lives in `App.jsx` and flows down via props:

| State | Type | Purpose |
|---|---|---|
| `notes` | `string` | Textarea value |
| `mode` | `string \| null` | Active translation mode |
| `showResults` | `boolean` | Toggle results section |
| `generating` | `boolean` | Spinner during fake generation |
| `quizKey` | `number` | Increment → resets all quiz answers |
| `analogyIndex` | `number` | Cycles through analogy pool |

---

## 📄 License

MIT © [Darshan-S-0](https://github.com/Darshan-S-0)

---

<p align="center">made with ✏️ + ☕ for students who can't even</p>
