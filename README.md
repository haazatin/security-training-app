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
- Completion submission to a configured Google Apps Script endpoint
- GitHub Pages deployment workflow

## What Is Not Included

- Backend
- Login or user management
- Database
- Organization-wide reporting
- Admin dashboard
- Strong identity verification

Progress is saved in the learner's current browser until the learner submits completion. Completion submission sends the employee ID and module completion results to the configured Google Apps Script endpoint.

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

## Completion Submission

After all modules are complete, the dashboard and Progress page show a completion submission panel. The learner enters a numeric employee ID with 4 to 6 digits. The app submits completion data to the configured Google Apps Script web app URL in `src/app.js`.

The app remains static. It does not contain Google credentials and does not write directly to Google Sheets. The Google Sheet should stay private, and the Apps Script web app should run as the script owner so learners can submit completion without receiving Sheet access.

Recommended Sheet columns:

```text
submitted_at
employee_id
training_version
app_version
language
pii_completed
pii_score
phishing_completed
phishing_score
accounts_completed
accounts_score
total_score
max_score
submission_id
user_agent
status
```

Recommended Apps Script deployment:

1. Create a private Google Sheet for completion records.
2. Open **Extensions -> Apps Script** from that Sheet.
3. Add a `doPost(e)` endpoint that validates payloads and appends known columns only.
4. Deploy as **Web app**.
5. Set **Execute as** to the script owner.
6. Set access according to the training audience, commonly **Anyone** for a lightweight static deployment.
7. Copy the `/exec` web app URL into `completionSubmissionUrl` in `src/app.js`.

This completion flow is useful for lightweight tracking, but it does not strongly prove identity because employee ID is self-entered. Use authentication or an identity-provider integration if stronger proof is required.

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
