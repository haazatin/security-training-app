# Security Training Web App

A static, client-deliverable security awareness training app for non-technical employees.

The app teaches practical workplace security habits through short lessons, realistic scenarios, immediate feedback, mini quizzes, local progress tracking, and quick-reference resources.

## What Is Included

- Learner dashboard
- Three training modules
- English and Hebrew language modes
- Right-to-left layout for Hebrew
- Scenario-based lesson questions
- Immediate answer feedback
- Mini quizzes
- Quiz retry flow
- Completion tracking in `localStorage`
- Progress page with local reset action
- Resources page
- GitHub Pages deployment workflow

## What Is Not Included

- Backend
- Login or user management
- Database
- Organization-wide reporting
- Admin dashboard
- Compliance-grade completion records

Progress is saved only in the learner's current browser.

## Run Locally

No build step is required.

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## Reset Progress

Use the reset action on the **Progress** page. It clears local training progress for the current browser only.

## Deploy as Static Files

Host these files from any static web server:

- `index.html`
- `styles.css`
- `src/app.js`

Examples:

- GitHub Pages
- Netlify
- Vercel
- Azure Static Web Apps
- S3 and CloudFront
- Nginx, Apache, or IIS

## GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/pages.yml`.

In GitHub:

1. Open the repository settings.
2. Go to **Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to the `main` branch.

GitHub Pages will publish the static site automatically.

## Language Support

The app defaults to Hebrew for new visitors. Learners can switch between Hebrew and English from the sidebar. Their selected language is stored in `localStorage`.

Progress is shared across languages, so completing a module in one language also marks it complete in the other.

## Edit Training Content

Training content lives in:

```text
src/app.js
```

Look for the `modules` and `modulesHe` arrays. Each module contains:

- title
- description
- lesson steps
- workplace examples
- scenario questions
- quiz questions
- takeaways

For a future larger version, this content can be moved into separate JSON files or loaded from a backend.
