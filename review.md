# Security Training App Review

This review captures issues found in the static training app and the recommended next implementation phase.

## Implementation Status

Findings 1-4 were implemented after the current live version was tagged as `stable-hebrew-default`.

Remaining suggested next-phase items:

- Expand the phishing and account safety modules to match the depth of the PII module.
- Add pass criteria and retry behavior for quizzes.
- Move training content out of `src/app.js` into structured content files.
- Run QA across desktop, mobile, English, Hebrew, keyboard navigation, and direct-link routes.

## Findings

### 1. Invalid module steps can crash rendering

**Location:** `src/app.js:1063-1079`  
**Priority:** P2

The route parser accepts any step value, then `renderModule` indexes `module.steps` without validating it. A URL like:

```text
#/module/pii/foo
#/module/pii/-1
```

can make `step` undefined and cause the next access to `step.question` to throw, leaving the app blank.

**Recommended fix:**

- Validate the parsed route step before rendering.
- Reject or clamp non-integer values.
- Redirect negative values to step `0`.
- Redirect values beyond the final valid step to the quiz or dashboard.
- Show the existing "module not found" empty state for invalid module IDs.

### 2. Quiz completion can bypass lesson completion

**Location:** `src/app.js:1168-1170`  
**Priority:** P2

A learner can open a quiz route directly, for example:

```text
#/module/pii/4
```

Then they can answer the quiz and complete the module without answering the lesson scenario questions.

For compliance-style training, completion should require the full training path, not only the final quiz.

**Recommended fix:**

- Require all lesson steps to be answered before the quiz can be completed.
- If a learner opens the quiz directly, redirect them to the first incomplete lesson step.
- Keep the quiz route available only after all required lesson answers exist.
- Optionally show a short message such as "Complete the lesson steps before starting the quiz."

### 3. Progress is split by language

**Location:** `src/app.js:1013-1015`  
**Priority:** P2

`progressKey` includes `currentLang`, so completing a module in English does not count in Hebrew, and completing it in Hebrew does not count in English.

Current behavior:

```js
function progressKey(moduleId) {
  return `${currentLang}:${moduleId}`;
}
```

This makes language behave like a separate learner record. Unless this is intentional, language should affect content display only, not completion state.

**Recommended fix:**

- Store progress by module ID only.
- Keep selected language as a separate preference.
- Example:

```js
function progressKey(moduleId) {
  return moduleId;
}
```

- If existing browser data matters, add a small migration from `en:moduleId` or `he:moduleId` to `moduleId`.

### 4. Average score includes unattempted modules as zero

**Location:** `src/app.js:1470-1498`  
**Priority:** P3

The results copy says the average is across available module scores, but the calculation divides by all modules. After one completed module with a perfect score, the displayed average becomes `33%` because the two unattempted modules count as zero.

This makes the results view look much worse than the learner actually performed.

**Recommended fix:**

- Calculate the average only across modules that have a numeric score.
- If no scores exist, show `No score` instead of `0%`.
- Keep completion rate separate from quiz average.

## Suggested Next Phase

The next phase should be **pilot-ready training**.

Recommended implementation sequence:

1. Fix route validation and invalid-step handling.
2. Prevent quiz completion until all required lesson steps are answered.
3. Make module progress language-independent.
4. Fix average score calculation in the results view.
5. Expand the phishing and account safety modules to match the depth of the PII module.
6. Add pass criteria and retry behavior for quizzes.
7. Move training content out of `src/app.js` into structured content files.
8. Run QA across desktop, mobile, English, Hebrew, keyboard navigation, and direct-link routes.

## Product Direction

After the above fixes, decide whether the app remains a static prototype or moves toward a real training product.

If it remains static:

- Keep `localStorage` progress.
- Focus on content quality, accessibility, and deployability.
- Treat the Results page as a local demo only.

If it becomes a real internal training tool:

- Add learner identity.
- Add durable completion records.
- Add organization-wide admin reporting.
- Add exportable results.
- Consider authentication and role-based access.

## Verification Notes

The current JavaScript syntax was checked with:

```bash
node --check src/app.js
```

The syntax check passed.
