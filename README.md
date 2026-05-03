# Security Training Web App

A static, client-deliverable security training app for non-technical employees.

The app teaches practical workplace security habits through short modules, realistic scenarios, immediate feedback, mini quizzes, progress tracking, and quick-reference resources.

## What Is Included

- Learner dashboard
- Three training modules
- Scenario-based questions
- Immediate answer feedback
- Mini quizzes
- Completion tracking in `localStorage`
- Resources page
- Demo results view
- GitHub Pages deployment workflow

## Run Locally

No build step is required.

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

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

## Edit Training Content

Training content lives in:

```text
src/app.js
```

Look for the `modules` array. Each module contains:

- title
- description
- lesson steps
- workplace examples
- scenario questions
- quiz questions
- takeaways

For a future larger version, this content can be moved into separate JSON files or loaded from a backend.
