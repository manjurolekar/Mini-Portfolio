# ApnoAI Task 3 — Your Mini Portfolio

A responsive personal portfolio built with React, Vite, and plain CSS. This is a **separate project** from your Task 2 React Profile Card, so it will not overwrite the existing Task 2 files or Vercel URL.

## Before running

1. Copy your existing personal photo from your Task 2 project:
   `react-profile-card\public\profile.jpg`
2. Paste it into this project's `public` folder as:
   `apnoai-mini-portfolio\public\profile.jpg`
3. Open `src/App.jsx` and replace `YOUR_EMAIL@example.com` with your real email address.
4. Review project descriptions and make sure every statement reflects work you actually did. Replace any generic GitHub profile links with individual project repository URLs when available.

If `profile.jpg` is missing, the site shows a fallback with your initials instead.

## Run locally (Windows)

Open Command Prompt in this folder and run:

```bat
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173/`.

Test the production build before deployment:

```bat
npm run build
```

## GitHub and Vercel deployment

Create a **new GitHub repository** for this Task 3 project, for example `apnoai-mini-portfolio`. Do not reuse or overwrite `react-profile-card`.

In this folder, run:

```bat
git init
git branch -M main
git add .
git commit -m "Create ApnoAI mini portfolio"
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/apnoai-mini-portfolio.git
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with your GitHub username and create the repository on GitHub first. If `origin` already exists in this new folder, inspect it with `git remote -v` rather than adding a second origin.

Then sign in to Vercel, choose **Add New → Project**, import the new `apnoai-mini-portfolio` GitHub repository, and deploy. Vite defaults should be detected automatically:
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

After deployment, each successful push to the connected GitHub `main` branch should trigger a new Vercel deployment. Confirm the deployment is **Ready** before submitting the URL.

## Update after editing

Use the included `deploy.bat` after you have configured the GitHub remote. It runs the production build, commits changed files, and pushes to `main`. Vercel should redeploy automatically if the repository is connected.

## Important about ApnoAI

The dashboard screenshot showed the task window as October 26–30, 2026, but did not include the full Task 3 rubric. Treat this as a preparation project and compare it against the official task instructions once available. Do not submit until you have checked any required features, links, and AI-use disclosure.


## JSX / React runtime note

This project includes `vite.config.js` with the official Vite React plugin and explicit React imports in `src/main.jsx` and `src/App.jsx` to avoid the `React is not defined` runtime error in classic JSX transform setups.


## Email contact button and 3D effects

The Email Me button opens a Gmail compose window in the browser addressed to `manjurolekar315@gmail.com`, so Windows does not need a default desktop mail app. Visitors must sign in to Gmail to send a message.

CSS includes 3D tilt, floating portrait-card motion, orbit motion, and hover depth on project and skill cards. Motion is reduced for users whose operating system requests reduced motion.
"# Mini-Portfolio" 
"# Mini-Portfolio" 
