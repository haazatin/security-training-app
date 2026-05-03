# Security Training Web App Design Document

## 1. Product Summary

The application is a simple web-based security training experience for non-technical employees. It teaches everyday security habits through short lessons, realistic workplace scenarios, quick questions, and clear feedback.

The first version should feel practical, calm, and approachable. The goal is not to scare users or overwhelm them with security jargon, but to help them recognize common risks and make better decisions during normal work.

## 2. Target Audience

Primary users are non-technical employees who handle company information, customer information, documents, email, messaging tools, and shared files as part of their daily work.

Assumptions:

- Users may not know security terminology.
- Users may handle personally identifiable information, also called PII.
- Users need practical examples more than abstract policy language.
- Training should be short enough to complete during a normal workday.

## 3. Training Goals

The MVP should teach basic security practices across three areas:

1. Phishing and suspicious messages.
2. Passwords, MFA, and account safety.
3. Handling PII and company data.

By the end of the training, learners should be able to:

- Spot common warning signs in suspicious emails and messages.
- Use safer account practices, including strong passwords and MFA.
- Recognize PII and sensitive company data.
- Share files and personal data using safer methods.
- Know when and how to report a possible security issue.

## 4. MVP Scope

The first build should include:

- Learner dashboard.
- Three training modules.
- Short lesson content for each module.
- Scenario-based questions.
- Immediate answer feedback.
- Final mini quiz per module.
- Completion and progress state.
- Basic admin-style results view, if implementation time allows.

Out of scope for the first version:

- Complex user management.
- Full LMS integration.
- Certificates.
- Advanced analytics.
- Custom content editor.
- Real email simulation campaigns.

## 5. Core User Flow

The basic learner flow is:

1. Open dashboard.
2. Select a module.
3. Read a short lesson section.
4. Answer a scenario question.
5. Receive immediate feedback.
6. Continue through the module.
7. Complete a mini quiz.
8. View completion summary and practical takeaways.
9. Return to dashboard.

Recommended first complete module:

**Handling PII and Company Data**

This module is highly relevant for non-technical employees and gives the product a concrete workplace value beyond generic security reminders.

## 6. Information Architecture

Primary navigation:

- Training
- Progress
- Resources

Optional admin navigation:

- Results
- Learners

### Training Dashboard

The dashboard should show module cards with:

- Module title.
- Short description.
- Estimated duration.
- Status: Not started, In progress, or Complete.
- Progress indicator.
- Primary action: Start, Continue, or Review.

### Module Page

Each module should include:

- Module title.
- Progress through lesson steps.
- Lesson content.
- Scenario card.
- Question options.
- Feedback state.
- Continue button.
- Completion summary.

### Resources Page

The resources page should include short, practical references:

- How to report suspicious messages.
- PII handling checklist.
- Account safety checklist.
- Data sharing dos and don'ts.

## 7. Module Structure

Each module should follow the same repeatable pattern:

1. Intro: why the topic matters.
2. Concept: one practical idea explained simply.
3. Scenario: realistic workplace situation.
4. Decision: user chooses an answer.
5. Feedback: explanation of the right choice.
6. Takeaway: one memorable behavior.
7. Mini quiz: 3 to 5 questions.
8. Completion: summary and next step.

Lessons should avoid dense paragraphs. Prefer short sections, examples, and direct language.

## 8. MVP Modules

### Module 1: Handling PII and Company Data

Purpose:

Teach employees how to recognize personal data and handle it carefully.

Topics:

- What counts as PII.
- Why PII needs extra care.
- Sharing only the minimum necessary data.
- Checking recipients before sending files.
- Avoiding screenshots or attachments that expose personal data.
- Using approved sharing tools.
- Reporting accidental exposure quickly.

Example scenarios:

- A manager asks for a customer spreadsheet to be emailed externally.
- A support employee wants to send a screenshot that includes customer details.
- A team member shares a document link with public access enabled.
- An employee downloads customer data to a personal device.

Key takeaways:

- Treat personal data as sensitive by default.
- Share the minimum data needed.
- Use approved tools and access controls.
- If data is sent to the wrong place, report it quickly.

### Module 2: Phishing and Suspicious Messages

Purpose:

Help employees recognize suspicious messages and respond safely.

Topics:

- Suspicious sender addresses.
- Urgent or threatening language.
- Unexpected attachments.
- Links that do not match the visible text.
- Requests for passwords, codes, payments, or gift cards.
- Reporting suspicious messages.

Example scenarios:

- An email claims an invoice is overdue and includes an attachment.
- A message asks the employee to approve an MFA prompt.
- A fake login page asks for company credentials.
- A manager-like message requests an urgent payment.

Key takeaways:

- Pause before clicking.
- Check sender, link, attachment, and request.
- Do not enter credentials from unexpected links.
- Report suspicious messages instead of forwarding them casually.

### Module 3: Passwords, MFA, and Account Safety

Purpose:

Teach safer account habits in plain language.

Topics:

- Strong and unique passwords.
- Password managers.
- MFA and approval prompts.
- Shared accounts and credential reuse.
- Suspicious login notifications.
- What to do if an account may be compromised.

Example scenarios:

- An employee receives an MFA prompt they did not initiate.
- A colleague asks to borrow a login.
- A user reuses a password from a personal account.
- A browser prompts to save a password on a shared computer.

Key takeaways:

- Use unique passwords.
- Use MFA carefully.
- Never approve an unexpected MFA prompt.
- Do not share accounts or passwords.
- Report unusual account activity.

## 9. Visual Design Direction

The interface should feel calm, professional, and work-focused.

Recommended style:

- Light neutral background.
- White or very light surfaces.
- Clear typography.
- Restrained color palette.
- Blue for active learning states.
- Green for completion and correct answers.
- Amber for caution and review states.
- Red only for serious warnings or incorrect answers.

Avoid:

- Dark hacker themes.
- Overly dramatic threat imagery.
- Dense legal or compliance language.
- Marketing-style hero sections.
- Decorative visuals that do not help the lesson.

Visual examples should resemble familiar workplace tools:

- Email message preview.
- File sharing dialog.
- Login or MFA prompt.
- Spreadsheet preview.
- Chat message.

## 10. Interaction Design

Important interaction patterns:

- Scenario cards should feel interactive and focused.
- Answer choices should be clear and easy to scan.
- Feedback should appear immediately after selection.
- Users should understand why an answer is right or wrong.
- Progress should be visible but not distracting.
- The learner should always know what to do next.

Feedback tone:

- Correct answer: "Good catch" followed by a short explanation.
- Incorrect answer: "Not quite" followed by what to look for next time.
- Serious issue: direct but calm language.

## 11. Content Principles

Content should be:

- Plainspoken.
- Practical.
- Scenario-driven.
- Short.
- Specific.
- Supportive rather than punitive.

Avoid:

- Acronyms without explanation.
- Policy-heavy paragraphs.
- Blaming the learner.
- Fear-based language.
- Long quizzes that feel like exams.

## 12. Initial Screen Concepts

### Dashboard

The dashboard should show:

- Greeting or page title.
- Overall progress.
- Three module cards.
- Resource shortcut.
- Optional reminder of unfinished training.

Example module card content:

- Handling PII and Company Data
- Learn how to recognize personal data and share it safely.
- 6 minutes
- Status: Not started
- Button: Start

### Module Lesson Screen

The lesson screen should show:

- Module title.
- Step progress.
- Short lesson content.
- Workplace-style example.
- Question area.
- Feedback panel after answer.
- Continue button.

### Completion Screen

The completion screen should show:

- Completion confirmation.
- Score or result.
- Three key takeaways.
- Button to return to dashboard.
- Button to review resources.

## 13. Success Metrics

For the MVP, success can be measured by:

- Module completion rate.
- Quiz pass rate.
- Average number of attempts per question.
- Time to completion.
- Number of learners who open resources.
- Learner confidence feedback, if a short survey is added.

## 14. Implementation Notes

Recommended first implementation path:

1. Build the learner dashboard.
2. Build one complete module: Handling PII and Company Data.
3. Create reusable module and question data structures.
4. Add the other two modules using the same structure.
5. Add persistent progress using local storage for the first prototype.
6. Add a simple results view if needed.

For a prototype, all content can live in static data files. Authentication and server-side storage can wait until the core training experience feels right.

## 15. Open Questions

- Should completion require a passing score?
- What score should count as passing?
- Should learners be able to retry immediately?
- Should the app support Hebrew, English, or both?
- Who receives completion results?
- Is this for internal employees only or external customers as well?
- Are there specific company policies that must be referenced?

## 16. Recommended Next Step

Create a clickable prototype or first working web version with:

- Dashboard.
- Complete PII module.
- Local progress tracking.
- Responsive layout.

Once the PII module feels right, the remaining modules can use the same interaction model and content structure.
