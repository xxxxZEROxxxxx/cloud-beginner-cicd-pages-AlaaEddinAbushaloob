# CI/CD Pipeline with GitHub Actions & GitHub Pages

A static website demonstrating **Continuous Integration / Continuous Deployment (CI/CD)** using GitHub Actions and GitHub Pages.

**Student:** Alaa Eddin Jamal Abu Sahloob  
**Course:** Cloud Computing  
**Instructor:** Dr. Faten Abushmmala

---

## 🌐 Live Website

👉 **[View the live site](https://xxxxZEROxxxxx.github.io/cloud-beginner-cicd-pages-AlaaEddin/)**


---

## 📂 Project Structure

```
├── index.html          # Main webpage
├── style.css           # Styles (dark/light theme)
├── script.js           # Interactive features
├── README.md           # This file
└── .github/
    └── workflows/
        └── deploy.yml  # CI/CD pipeline definition
```

---

## 🚀 How It Works

1. Push code to the `main` branch.
2. GitHub Actions automatically runs the CI/CD workflow.
3. The workflow validates that `index.html`, `style.css`, and `script.js` exist.
4. If checks pass, the site is deployed to GitHub Pages.

---

## 🖥️ Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/xxxxZEROxxxxx/cloud-beginner-cicd-pages-AlaaEddin.git
   ```
2. Open `index.html` in your browser:
   ```bash
   # On macOS
   open index.html
   # On Windows
   start index.html
   # On Linux
   xdg-open index.html
   ```

---

## ✨ Features

- **CI/CD explanation** — What is CI/CD and why it matters
- **Pipeline visualization** — Step-by-step pipeline flow
- **Interactive demo** — Pipeline simulator, theme switcher, deploy counter
- **Dark & Light themes** — Toggle between dark and light mode
- **Responsive design** — Works on all screen sizes
