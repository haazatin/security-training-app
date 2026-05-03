# Client-Ready Static Security Training App Plan

## Implementation Status

Implemented in the current app:

- Removed Results/admin navigation and rendering.
- Kept the app static with no backend, login, or database.
- Hardened invalid route handling and quiz access.
- Made progress shared across languages with local migration.
- Added quiz retry and local progress reset.
- Expanded Phishing and Account Safety modules in English and Hebrew.
- Added the optional PII sending checklist step in English and Hebrew.
- Updated styling toward a professional security-training interface.
- Updated README for the client-ready static app.

## 1. Goal

Turn the current one-page static security training prototype into a client-ready learner-facing web app.

The app should remain simple:

- No backend.
- No user management.
- No login.
- No admin dashboard.
- No organization-wide reporting.
- Progress saved locally in the learner's browser.

The experience should feel professional, polished, and clearly related to cybersecurity training for non-technical employees.

## 2. Product Scope

Keep the current training concept and the current three modules:

1. Handling PII and Company Data.
2. Phishing and Suspicious Messages.
3. Passwords, MFA, and Account Safety.

The app should support:

- English and Hebrew.
- RTL layout for Hebrew.
- Desktop and mobile.
- Learner dashboard.
- Module lessons.
- Scenario questions.
- Mini quizzes.
- Completion state.
- Progress page.
- Resources page.

Remove:

- Results page.
- Admin wording.
- Admin navigation.
- Demo admin view.
- Average score reporting across users or modules.

## 3. Target User

The target user is a non-technical employee who needs practical security awareness training.

Assumptions:

- The learner is not a security expert.
- The learner may handle personal data or company files.
- The learner needs short, realistic workplace examples.
- The learner should not feel blamed or intimidated.
- The learner should understand what to do next in real situations.

## 4. Desired Product Feel

The app should feel like:

- Professional enterprise security training.
- Calm and practical.
- Cyber-related, but not theatrical.
- Clear enough for non-technical employees.
- Polished enough to send to a client as a static deliverable.

Avoid:

- "Hacker movie" visuals.
- Scary red/black-only design.
- Dense policy language.
- Overly playful gamification.
- Marketing-page hero sections.
- Admin or analytics language.

## 5. Information Architecture

Primary navigation should include only:

- Training
- Progress
- Resources

Also keep:

- Language toggle.
- Brand/title area.

Remove `Results` from:

- Navigation in `index.html`.
- Route handling in `src/app.js`.
- Copy dictionaries.
- Any results-specific rendering functions if they are no longer used.
- README references.

## 6. Required Behavioral Fixes

Before visual work, fix the current behavior issues.

### 6.1 Invalid module routes must not crash

Current risk:

Direct links such as these can break rendering:

```text
#/module/pii/foo
#/module/pii/-1
#/module/pii/999
```

Required behavior:

- Unknown module ID should show a friendly "module not found" state.
- Non-numeric step should redirect or normalize to step `0`.
- Negative step should redirect or normalize to step `0`.
- Step beyond the final lesson step should only open the quiz if the lesson is eligible for quiz access.
- The app should never become blank because of a bad hash route.

### 6.2 Quiz cannot bypass lesson completion

Current risk:

A learner can open the quiz route directly and complete a module without answering the lesson scenarios.

Required behavior:

- A module can only be completed after all lesson scenario questions and quiz questions are answered.
- If the learner opens the quiz route before completing required lesson steps, redirect them to the first incomplete lesson step.
- The quiz start button should remain disabled until the current required step is answered.
- Completion should be based on required lesson answers plus quiz answers.

### 6.3 Progress must not be split by language

Current risk:

Progress is stored separately for English and Hebrew because the progress key includes the current language.

Required behavior:

- A learner who completes a module in English should see it completed after switching to Hebrew.
- A learner who completes a module in Hebrew should see it completed after switching to English.
- Language is a display preference, not a separate learner record.

Suggested implementation:

```js
function progressKey(moduleId) {
  return moduleId;
}
```

Optional but useful:

- Add a small migration from old keys such as `en:pii` and `he:pii` into `pii`.

### 6.4 Remove admin results logic

Because this version has no admin area:

- Remove the `Results` route.
- Remove the local results summary page.
- Remove average quiz result calculations.
- Remove "demo admin view" copy.
- Remove admin-facing README language.

The learner-facing Progress page should remain.

## 7. Learner Experience Requirements

### Dashboard

The dashboard should show:

- Clear title and short intro.
- Overall learner progress.
- Three module cards.
- Status for each module:
  - Not started
  - In progress
  - Complete
- Estimated time.
- Start, Continue, or Review action.

Dashboard should not look like a landing page. It should feel like the actual training workspace.

### Module Screen

Each module screen should show:

- Module title.
- Current step title.
- Short lesson text.
- Workplace-style cyber/security example.
- Scenario question.
- Answer options.
- Immediate feedback after selection.
- Continue/back controls.
- Step progress.

Required:

- Learner must answer a scenario before moving to the next step.
- Feedback must explain why the answer is correct or incorrect.
- Correct/incorrect states should be visually clear and accessible.

### Quiz Screen

Each module should end with a mini quiz.

Required:

- 3 to 5 questions per module.
- User must answer all questions before completion.
- Show current score while answering.
- Provide a clear completion action.
- Add retry behavior.

Recommended retry behavior:

- After completion, show score and key takeaways.
- Include a "Retake quiz" or "Try again" option.
- Retaking should clear only quiz answers and score for that module, not lesson progress.

### Completion Screen

Completion screen should show:

- Clear completion confirmation.
- Quiz score.
- Key takeaways.
- Return to dashboard button.
- Review resources button.
- Review module button.
- Optional retake quiz button.

### Progress Page

Progress page should show:

- Each module.
- Completion status.
- Progress bar.
- Score if completed.
- Continue or Review action.
- A small reset-progress action.

Reset progress guidance:

- This app stores progress in the current browser only.
- A reset button is useful for client demos and shared machines.
- Place it in the Progress page, not as a prominent dashboard action.
- Confirm before clearing progress.

Suggested confirmation text:

```text
Clear local training progress for this browser?
```

### Resources Page

Resources should be learner-facing quick references.

Include:

- Report suspicious messages.
- PII handling checklist.
- Account safety checklist.
- Data sharing dos and don'ts.

Do not include admin/reporting language.

## 8. Content Expansion Plan

Keep all three current modules, but expand Phishing and Account Safety so they feel as complete as the PII module.

### 8.1 Handling PII and Company Data

Current module is already the strongest. Keep the existing structure and lightly improve it.

Recommended final structure:

1. Treat personal data with care.
2. Share the minimum needed.
3. Use approved sharing tools.
4. Report mistakes quickly.
5. Optional added step: Before you send checklist.

Optional new step:

**Before you send checklist**

Scenario:

A user is about to send a spreadsheet to a vendor. The file includes customer names, emails, phone numbers, internal notes, and hidden tabs.

Question:

What should you check before sending?

Correct answer should include:

- Confirm the recipient.
- Remove unnecessary fields.
- Check hidden tabs.
- Use approved sharing controls.

### 8.2 Phishing and Suspicious Messages

Expand from one lesson step to 3 or 4 lesson steps.

Recommended structure:

1. Pause before clicking.
2. Check the sender and domain.
3. Watch links, fake login pages, and attachments.
4. Report instead of replying or forwarding casually.

Example scenarios:

#### Step 1: Pause before clicking

Keep current urgent invoice scenario.

Teaching point:

- Urgency, unexpected attachment, and odd sender details are warning signs.

#### Step 2: Check the sender and domain

Scenario:

An email appears to come from payroll, but the sender address uses a lookalike domain.

Example:

```text
From: payroll@company-payroll.example
Subject: Salary document ready
Message: Sign in to view your updated salary document.
```

Question:

What should you check before opening the link?

Correct answer:

- Verify the sender/domain and access payroll through the known company portal.

#### Step 3: Links, fake login pages, and attachments

Scenario:

A message says the user's mailbox will be disabled and links to a login page.

Question:

What is the safest action?

Correct answer:

- Do not use the link. Go to the service directly or report the message.

#### Step 4: Report safely

Scenario:

A user receives a suspicious message and wants to ask teammates if it is real.

Question:

What should they do?

Correct answer:

- Use the approved reporting process instead of forwarding attachments or links to a group chat.

Key takeaways:

- Pause before clicking.
- Check sender, link, attachment, and request.
- Do not enter credentials from unexpected links.
- Report suspicious messages using the approved process.

### 8.3 Passwords, MFA, and Account Safety

Expand from one lesson step to 3 or 4 lesson steps.

Recommended structure:

1. Use unique passwords.
2. Use MFA carefully.
3. Do not share accounts or passwords.
4. Respond to unusual account activity.

Example scenarios:

#### Step 1: Unique passwords

Scenario:

An employee wants to reuse a personal password for a work system because it is easy to remember.

Question:

What is the safer choice?

Correct answer:

- Use a unique password, ideally stored in an approved password manager.

#### Step 2: Unexpected MFA prompt

Keep current MFA prompt scenario.

Teaching point:

- Never approve a sign-in you did not start.

#### Step 3: Account sharing

Scenario:

A colleague asks to borrow a login to finish a task quickly.

Question:

What should the learner do?

Correct answer:

- Do not share credentials. Use the approved access process.

#### Step 4: Suspicious login alert

Scenario:

The learner receives a sign-in alert from an unknown location.

Question:

What should they do?

Correct answer:

- Report unusual account activity and follow the password reset/security process.

Key takeaways:

- Use unique passwords.
- Use MFA carefully.
- Never approve unexpected MFA prompts.
- Do not share accounts or passwords.
- Report unusual account activity.

## 9. Visual Design Direction

The design should become more professional and cyber-related while staying readable and calm.

### Visual Personality

Target style:

- Enterprise security.
- Clean, confident, practical.
- Slightly technical.
- Trustworthy.
- Modern but not flashy.

### Color Direction

Recommended palette:

- Deep navy or charcoal for sidebar/header.
- White or very light gray content surfaces.
- Electric blue or cyan accent.
- Green for correct/completed.
- Amber for caution/in-progress.
- Red only for incorrect or serious warnings.

Avoid:

- A one-note dark blue app where everything blends together.
- Heavy purple gradients.
- Red/black alarmist styling.
- Decorative background blobs.

### Layout Direction

Recommended:

- Dark professional sidebar or top rail.
- Clean module cards.
- Clear progress bars.
- Scenario examples styled as real workplace/security UI.
- Slightly stronger visual hierarchy.
- Better spacing between lesson content, example, and question.

Use cards only for:

- Module cards.
- Scenario examples.
- Question panels.
- Resource items.
- Completion panels.

Do not nest cards inside cards in a visually heavy way.

### Cyber-Specific UI Treatment

Use cyber/security cues through practical interface elements:

- Shield or lock icon in brand mark.
- Security status labels.
- Email preview cards.
- File permission cards.
- MFA prompt cards.
- Access control examples.
- Subtle technical grid or line detail only if it does not distract.

If adding icons:

- Prefer simple inline SVG or an existing icon library if already available.
- Because this is a static app with no build step, avoid adding dependencies unless necessary.
- Icons should support meaning, not decorate every surface.

### Typography

Use system fonts or an already available font stack.

Requirements:

- No viewport-width font scaling.
- No negative letter spacing.
- Text must fit on mobile and in Hebrew.
- Buttons must not wrap awkwardly or overflow.
- Hebrew text should remain readable in RTL.

## 10. Accessibility and UX Requirements

Required:

- Keyboard users can navigate all buttons and links.
- Focus states are visible.
- Buttons have clear labels.
- Progress bars have accessible labels.
- Color is not the only indicator of correctness.
- Correct/incorrect feedback includes text.
- App does not trap focus.
- Hash route changes should move focus to the main content or otherwise keep navigation understandable.

Recommended:

- Add `aria-current="page"` to active navigation links.
- Add `aria-live` to feedback or completion status if practical.
- Ensure contrast meets normal readable standards.

## 11. Technical Constraints

The app should remain:

- Static HTML, CSS, and JavaScript.
- No build step required.
- Deployable to GitHub Pages or any static host.
- Able to run with `python3 -m http.server 4173`.

Do not add:

- Backend.
- Database.
- Authentication.
- User management.
- Heavy framework.
- Build process unless specifically approved.

Current likely files:

- `index.html`
- `styles.css`
- `src/app.js`
- `README.md`
- `security-training-design.md`
- `review.md`

## 12. Suggested Implementation Sequence

### Step 1: Scope cleanup

- Remove Results nav item.
- Remove Results route.
- Remove Results rendering function if unused.
- Remove admin/demo copy.
- Update README.

### Step 2: Behavior hardening

- Validate route step values.
- Prevent quiz bypass.
- Make progress language-independent.
- Add optional local progress migration.
- Add reset progress action on Progress page.

### Step 3: Content expansion

- Expand Phishing module to 3-4 steps.
- Expand Passwords/MFA module to 3-4 steps.
- Optionally add one checklist step to PII.
- Keep English and Hebrew content aligned.
- Keep quiz questions aligned with expanded content.

### Step 4: Visual redesign

- Update color palette.
- Improve sidebar/nav styling.
- Improve module cards.
- Improve scenario/example styling.
- Improve feedback states.
- Add professional cyber/security cues.
- Preserve responsive behavior.
- Preserve RTL behavior.

### Step 5: Learner polish

- Add quiz retry.
- Improve completion screen.
- Improve Progress page.
- Add visible focus styles.
- Ensure all buttons and links have stable dimensions.

### Step 6: QA

Test manually:

- Dashboard in English.
- Dashboard in Hebrew.
- Each module in English.
- Each module in Hebrew.
- Direct invalid routes.
- Direct quiz route before lesson completion.
- Language switching after progress exists.
- Reset progress.
- Mobile viewport.
- Keyboard navigation.
- GitHub Pages/static hosting path.

## 13. Acceptance Criteria

The work is complete when:

- The app has only Training, Progress, and Resources navigation.
- No admin/results section remains.
- All three modules exist in English and Hebrew.
- Phishing and Passwords/MFA have expanded lesson content.
- Learner progress is shared across languages.
- Invalid routes do not crash the app.
- Quiz completion cannot bypass lesson steps.
- Learners can complete, review, and retry modules.
- Progress can be reset locally.
- Visual design feels professional and cyber-related.
- Mobile layout is usable.
- Hebrew RTL layout is usable.
- App runs without a build step.
- README reflects the client-ready static app.

## 14. README Updates Needed

Update `README.md` to explain:

- This is a static learner-facing training app.
- There is no backend and no user management.
- Progress is saved in the current browser using `localStorage`.
- To reset progress, use the Progress page.
- How to run locally.
- How to deploy as static files.
- How to edit training content.

Remove README references to:

- Demo results view.
- Admin view.
- Organization-wide reporting as existing functionality.

## 15. Final Product Note

This version should be good enough for a client to use as a lightweight security-awareness training page or static internal resource.

It is not intended to prove compliance completion across an organization, because there is no backend identity or durable reporting. If a client later needs official tracking, the next product phase should add authentication, learner records, and admin reporting.
