const modules = [
  {
    id: "pii",
    title: "Handling PII and Company Data",
    description: "Learn how to recognize personal data and share it safely.",
    durationMinutes: 6,
    steps: [
      {
        title: "Treat personal data with care",
        body: [
          "PII means information that can identify a person, such as a name, email address, phone number, ID number, address, account number, or customer record.",
          "A good everyday rule is simple: if the information points to a person, handle it carefully."
        ],
        example: {
          type: "Spreadsheet preview",
          title: "Customer renewals.xlsx",
          rows: [
            ["Customer", "Maya Cohen"],
            ["Email", "maya@example.com"],
            ["Phone", "+972-50-123-4567"],
            ["Renewal note", "Payment card needs update"]
          ]
        },
        question: {
          prompt: "Which item in this file should make you pause before sharing it?",
          options: [
            {
              id: "a",
              label: "Only the file name",
              correct: false,
              feedback: "Not quite. The file name matters less than the personal details inside the file."
            },
            {
              id: "b",
              label: "The customer name, email, phone, and account note",
              correct: true,
              feedback: "Good catch. These details identify a person and should be shared only through approved methods."
            },
            {
              id: "c",
              label: "Nothing, because it is a normal work spreadsheet",
              correct: false,
              feedback: "Not quite. Everyday business files often contain sensitive personal data."
            }
          ]
        },
        takeaway: "Treat personal data as sensitive by default."
      },
      {
        title: "Share the minimum needed",
        body: [
          "Before sending a file, ask what the recipient actually needs. Smaller extracts reduce risk.",
          "Remove extra columns, hidden tabs, screenshots, and notes that are not needed for the task."
        ],
        example: {
          type: "Email draft",
          title: "Subject: Customer list for vendor",
          rows: [
            ["To", "vendor@example.net"],
            ["Attachment", "all_customers_full_export.xlsx"],
            ["Message", "Here is the full export you asked for."]
          ]
        },
        question: {
          prompt: "What is the safest next step before sending this file?",
          options: [
            {
              id: "a",
              label: "Send it quickly because the vendor requested it",
              correct: false,
              feedback: "Not quite. A full export may include more personal data than the vendor needs."
            },
            {
              id: "b",
              label: "Create a smaller approved file with only the required fields",
              correct: true,
              feedback: "Good catch. Sharing the minimum needed lowers the impact if something goes wrong."
            },
            {
              id: "c",
              label: "Forward it to a colleague first so they can send it",
              correct: false,
              feedback: "Not quite. Forwarding can spread sensitive data without solving the risk."
            }
          ]
        },
        takeaway: "Share only what is needed for the work."
      },
      {
        title: "Use approved sharing tools",
        body: [
          "Approved tools usually give you access controls, expiration options, and audit trails.",
          "Public links, personal devices, and personal email accounts make it harder to protect company and customer data."
        ],
        example: {
          type: "File sharing dialog",
          title: "Share: Support screenshots",
          rows: [
            ["Access", "Anyone with the link"],
            ["Download", "Allowed"],
            ["Expiration", "None"],
            ["Folder", "Customer support"]
          ]
        },
        question: {
          prompt: "What should you change before sharing this folder?",
          options: [
            {
              id: "a",
              label: "Restrict access to the specific people who need it",
              correct: true,
              feedback: "Good catch. Specific access is safer than a public link, especially for customer information."
            },
            {
              id: "b",
              label: "Make the folder name less obvious",
              correct: false,
              feedback: "Not quite. Renaming the folder does not control who can open it."
            },
            {
              id: "c",
              label: "Leave it public so nobody has trouble opening it",
              correct: false,
              feedback: "Not quite. Convenience should not override access control for sensitive data."
            }
          ]
        },
        takeaway: "Use approved tools and access controls."
      },
      {
        title: "Report mistakes quickly",
        body: [
          "Mistakes happen. Fast reporting gives the company a chance to reduce harm, remove access, or contact the right people.",
          "Do not wait to see whether the problem becomes bigger."
        ],
        example: {
          type: "Chat message",
          title: "Team channel",
          rows: [
            ["You", "I sent the customer file to the wrong external contact."],
            ["Time", "2 minutes ago"],
            ["File", "customer_cases_march.xlsx"]
          ]
        },
        question: {
          prompt: "What should you do now?",
          options: [
            {
              id: "a",
              label: "Delete your sent message and hope nobody noticed",
              correct: false,
              feedback: "Not quite. Deleting your copy may not remove access or reduce the risk."
            },
            {
              id: "b",
              label: "Report it through the security or privacy process right away",
              correct: true,
              feedback: "Good catch. Quick reporting helps the right team limit exposure."
            },
            {
              id: "c",
              label: "Wait until the end of the day to mention it",
              correct: false,
              feedback: "Not quite. Delays make data exposure harder to contain."
            }
          ]
        },
        takeaway: "If data goes to the wrong place, report it quickly."
      }
    ],
    quiz: [
      {
        prompt: "Which is the safest way to share customer data?",
        options: [
          "Use an approved tool and limit access to people who need it",
          "Attach the full export to a personal email",
          "Create a public link so access is easy"
        ],
        answer: 0
      },
      {
        prompt: "What should you do before sending a screenshot from a customer system?",
        options: [
          "Check whether it exposes personal data and remove anything unnecessary",
          "Send it as-is if the recipient is a colleague",
          "Paste it into a chat channel for faster help"
        ],
        answer: 0
      },
      {
        prompt: "What is the right response after sending PII to the wrong recipient?",
        options: [
          "Report it quickly using the approved process",
          "Wait to see if anyone replies",
          "Send another message asking them to ignore it"
        ],
        answer: 0
      }
    ],
    takeaways: [
      "Treat personal data as sensitive by default.",
      "Share the minimum data needed.",
      "Use approved tools and access controls.",
      "Report accidental exposure quickly."
    ]
  },
  {
    id: "phishing",
    title: "Phishing and Suspicious Messages",
    description: "Practice spotting suspicious emails, links, attachments, and urgent requests.",
    durationMinutes: 5,
    steps: [
      {
        title: "Pause before clicking",
        body: [
          "Suspicious messages often create pressure: urgent invoices, locked accounts, surprise attachments, or requests from someone pretending to be a manager.",
          "A short pause gives you time to check the sender, link, attachment, and request."
        ],
        example: {
          type: "Email preview",
          title: "Invoice overdue - immediate action required",
          rows: [
            ["From", "billing-alerts@payrnents-example.com"],
            ["Attachment", "Invoice_Update.zip"],
            ["Message", "Open today to avoid account suspension."]
          ]
        },
        question: {
          prompt: "What warning sign should you notice first?",
          options: [
            {
              id: "a",
              label: "The sender address, urgent tone, and unexpected attachment",
              correct: true,
              feedback: "Good catch. Several warning signs appear together, which is a strong reason to stop and report it."
            },
            {
              id: "b",
              label: "The message is short",
              correct: false,
              feedback: "Not quite. Short messages are not always suspicious, but mismatched sender details and pressure are."
            },
            {
              id: "c",
              label: "The invoice has a ZIP attachment, so it must be easier to download",
              correct: false,
              feedback: "Not quite. Unexpected compressed attachments can be risky."
            }
          ]
        },
        takeaway: "Check sender, link, attachment, and request before acting."
      }
    ],
    quiz: [
      {
        prompt: "What should you do with an unexpected login link?",
        options: [
          "Open it and sign in quickly",
          "Navigate to the service directly or report the message",
          "Forward it to teammates to ask what they think"
        ],
        answer: 1
      },
      {
        prompt: "Which request is a common phishing warning sign?",
        options: [
          "A request for passwords, MFA codes, gift cards, or urgent payments",
          "A calendar invite from a known colleague",
          "A weekly company newsletter"
        ],
        answer: 0
      },
      {
        prompt: "What should you do with a suspicious message?",
        options: [
          "Report it using the approved process",
          "Reply and ask if it is real",
          "Forward it casually to a group chat"
        ],
        answer: 0
      }
    ],
    takeaways: [
      "Pause before clicking.",
      "Do not enter credentials from unexpected links.",
      "Report suspicious messages."
    ]
  },
  {
    id: "accounts",
    title: "Passwords, MFA, and Account Safety",
    description: "Learn safer habits for passwords, MFA prompts, and unusual account activity.",
    durationMinutes: 5,
    steps: [
      {
        title: "Protect account access",
        body: [
          "A strong account habit is simple: use unique passwords, rely on MFA, and never approve a sign-in you did not start.",
          "Shared logins and reused passwords make one mistake spread across many systems."
        ],
        example: {
          type: "MFA prompt",
          title: "Approve sign-in?",
          rows: [
            ["App", "Company mail"],
            ["Location", "Unknown"],
            ["Time", "Just now"],
            ["You started this?", "No"]
          ]
        },
        question: {
          prompt: "What should you do with this MFA prompt?",
          options: [
            {
              id: "a",
              label: "Approve it because MFA prompts are normal",
              correct: false,
              feedback: "Not quite. Never approve a prompt for a sign-in you did not start."
            },
            {
              id: "b",
              label: "Deny it and report unusual account activity",
              correct: true,
              feedback: "Good catch. An unexpected MFA prompt can mean someone has your password."
            },
            {
              id: "c",
              label: "Ignore it and continue working",
              correct: false,
              feedback: "Not quite. Ignoring the prompt may miss a sign that your account is at risk."
            }
          ]
        },
        takeaway: "Never approve an unexpected MFA prompt."
      }
    ],
    quiz: [
      {
        prompt: "What is a safer password habit?",
        options: [
          "Use the same memorable password everywhere",
          "Use unique passwords, ideally with a password manager",
          "Share a team account for convenience"
        ],
        answer: 1
      },
      {
        prompt: "What should you do if a colleague asks to borrow your login?",
        options: [
          "Share it only for a few minutes",
          "Say no and use the approved access process",
          "Write it on paper and collect it later"
        ],
        answer: 1
      },
      {
        prompt: "What can an unexpected MFA prompt indicate?",
        options: [
          "Someone may be trying to access your account",
          "Your password is definitely stronger now",
          "The system is asking for a routine survey"
        ],
        answer: 0
      }
    ],
    takeaways: [
      "Use unique passwords.",
      "Use MFA carefully.",
      "Do not share accounts or passwords.",
      "Report unusual account activity."
    ]
  }
];

const resources = [
  {
    title: "Report Suspicious Messages",
    items: [
      "Use the company reporting button or forward to the approved security mailbox.",
      "Do not reply to the sender.",
      "Do not forward suspicious attachments to group chats."
    ]
  },
  {
    title: "PII Handling Checklist",
    items: [
      "Check whether the file identifies a person.",
      "Remove data that is not needed.",
      "Use approved sharing tools and specific access.",
      "Report accidental exposure quickly."
    ]
  },
  {
    title: "Account Safety Checklist",
    items: [
      "Use unique passwords.",
      "Use a password manager when available.",
      "Deny unexpected MFA prompts.",
      "Report unusual login notifications."
    ]
  },
  {
    title: "Data Sharing Dos and Don'ts",
    items: [
      "Do use approved file sharing tools.",
      "Do restrict links to named people or groups.",
      "Don't use public links for sensitive files.",
      "Don't download company data to personal devices."
    ]
  }
];

const storageKey = "security-training-progress-v1";
const app = document.querySelector("#app");

let progress = loadProgress();

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);

function loadProgress() {
  try {
    const stored = localStorage.getItem(storageKey);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function moduleProgress(module) {
  const stored = progress[module.id] || {};
  const answered = stored.answers ? Object.keys(stored.answers).length : 0;
  const completed = Boolean(stored.completed);
  const percent = completed
    ? 100
    : Math.round((answered / (module.steps.length + module.quiz.length)) * 100);

  return {
    ...stored,
    answered,
    completed,
    percent,
    status: completed ? "Complete" : answered > 0 ? "In progress" : "Not started"
  };
}

function nextModuleHref(module) {
  const answers = progress[module.id]?.answers || {};
  const firstOpenStep = module.steps.findIndex((_, index) => !answers[`step-${index}`]);

  if (firstOpenStep >= 0) return `#/module/${module.id}/${firstOpenStep}`;
  return `#/module/${module.id}/${module.steps.length}`;
}

function setAnswer(moduleId, key, answer) {
  progress[moduleId] = progress[moduleId] || {};
  progress[moduleId].answers = progress[moduleId].answers || {};
  progress[moduleId].answers[key] = answer;
  saveProgress();
}

function completeModule(module, score) {
  progress[module.id] = progress[module.id] || {};
  progress[module.id].completed = true;
  progress[module.id].score = score;
  progress[module.id].completedAt = new Date().toISOString();
  saveProgress();
}

function getRoute() {
  const raw = window.location.hash.replace(/^#\/?/, "");
  const [page, id, step] = raw.split("/");
  return {
    page: page || "training",
    id,
    step: Number.parseInt(step || "0", 10)
  };
}

function render() {
  const route = getRoute();
  setActiveNav(route.page);

  if (route.page === "module") return renderModule(route.id, route.step || 0);
  if (route.page === "progress") return renderProgress();
  if (route.page === "resources") return renderResources();
  if (route.page === "results") return renderResults();
  renderDashboard();
}

function setActiveNav(page) {
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === page || (page === "module" && link.dataset.route === "training"));
  });
}

function renderDashboard() {
  const completed = modules.filter((module) => moduleProgress(module).completed).length;
  const overall = Math.round((completed / modules.length) * 100);

  app.innerHTML = `
    <header class="page-header">
      <div>
        <p class="eyebrow">Training</p>
        <h1>Build practical security habits in a few short modules.</h1>
        <p>Scenario-based lessons help employees spot common risks, make safer choices, and know when to report an issue.</p>
      </div>
      <section class="summary-panel" aria-label="Overall progress">
        <span class="summary-number">${overall}%</span>
        <p>Overall completion</p>
        ${progressBar(overall)}
      </section>
    </header>

    <section class="module-grid" aria-label="Training modules">
      ${modules.map(renderModuleCard).join("")}
    </section>
  `;
}

function renderModuleCard(module) {
  const state = moduleProgress(module);
  const statusClass = state.status.toLowerCase().replace(" ", "-");
  const action = state.completed ? "Review" : state.answered > 0 ? "Continue" : "Start";
  const href = state.completed ? `#/module/${module.id}/0` : nextModuleHref(module);

  return `
    <article class="module-card">
      <div>
        <h2>${module.title}</h2>
        <p>${module.description}</p>
        <div class="module-meta">
          <span class="status-pill ${statusClass}">${state.status}</span>
          <span class="duration-pill">${module.durationMinutes} minutes</span>
        </div>
        ${progressBar(state.percent)}
      </div>
      <div class="card-actions">
        <a class="button" href="${href}">${action}</a>
      </div>
    </article>
  `;
}

function renderModule(moduleId, stepIndex) {
  const module = modules.find((item) => item.id === moduleId);
  if (!module) {
    app.innerHTML = `<section class="empty-state">Module not found.</section>`;
    return;
  }

  if (stepIndex >= module.steps.length) {
    renderQuiz(module);
    return;
  }

  const step = module.steps[stepIndex];
  const answerKey = `step-${stepIndex}`;
  const selected = progress[module.id]?.answers?.[answerKey];
  const selectedOption = step.question?.options.find((option) => option.id === selected);
  const canContinue = !step.question || Boolean(selectedOption);

  app.innerHTML = `
    <header class="page-header">
      <div>
        <p class="eyebrow">Module ${stepIndex + 1} of ${module.steps.length}</p>
        <h1>${module.title}</h1>
        <p>${module.description}</p>
      </div>
      <section class="summary-panel" aria-label="Module progress">
        <span class="summary-number">${Math.round(((stepIndex + 1) / (module.steps.length + 1)) * 100)}%</span>
        <p>Lesson progress</p>
        ${progressBar(Math.round(((stepIndex + 1) / (module.steps.length + 1)) * 100))}
      </section>
    </header>

    <section class="lesson-layout">
      <article class="lesson-panel">
        <h2>${step.title}</h2>
        ${step.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        ${renderExample(step.example)}
        ${renderQuestion(module, step.question, answerKey, selected)}
        ${
          selectedOption
            ? `<div class="feedback ${selectedOption.correct ? "correct" : "incorrect"}">
                <strong>${selectedOption.correct ? "Good catch." : "Not quite."}</strong>
                ${selectedOption.feedback.replace(/^(Good catch\.|Not quite\.)\s*/, "")}
              </div>`
            : ""
        }
        <div class="lesson-actions">
          ${stepIndex > 0 ? `<a class="button secondary" href="#/module/${module.id}/${stepIndex - 1}">Back</a>` : `<a class="button secondary" href="#/training">Dashboard</a>`}
          ${
            canContinue
              ? `<a class="button" href="#/module/${module.id}/${stepIndex + 1}">${stepIndex === module.steps.length - 1 ? "Start quiz" : "Continue"}</a>`
              : `<button class="button" disabled>${stepIndex === module.steps.length - 1 ? "Start quiz" : "Continue"}</button>`
          }
        </div>
      </article>

      <aside class="scenario-panel">
        <h2>Module Steps</h2>
        <ol class="step-list">
          ${module.steps
            .map(
              (item, index) => `
                <li class="${index === stepIndex ? "active" : index < stepIndex ? "done" : ""}">
                  <span class="step-index">${index + 1}</span>
                  <span>${item.title}</span>
                </li>
              `
            )
            .join("")}
          <li>
            <span class="step-index">${module.steps.length + 1}</span>
            <span>Mini quiz</span>
          </li>
        </ol>
      </aside>
    </section>
  `;

  wireQuestionButtons(module.id);
}

function renderQuestion(module, question, answerKey, selected) {
  if (!question) return "";

  return `
    <section class="scenario-panel">
      <h3>${question.prompt}</h3>
      <div class="question-options" data-answer-key="${answerKey}">
        ${question.options
          .map((option) => {
            const isSelected = selected === option.id;
            const stateClass = isSelected ? (option.correct ? "correct selected" : "incorrect selected") : "";
            return `<button class="option-button ${stateClass}" data-module="${module.id}" data-answer="${option.id}">${option.label}</button>`;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderExample(example) {
  if (!example) return "";

  return `
    <section class="workplace-example" aria-label="${example.type}">
      <div class="example-header">
        <span>${example.type}</span>
        <span>${example.title}</span>
      </div>
      <div class="example-body">
        <dl>
          ${example.rows.map(([label, value]) => `<dt>${label}</dt><dd>${value}</dd>`).join("")}
        </dl>
      </div>
    </section>
  `;
}

function wireQuestionButtons(moduleId) {
  document.querySelectorAll(".question-options").forEach((group) => {
    group.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        setAnswer(moduleId, group.dataset.answerKey, button.dataset.answer);
        render();
      });
    });
  });
}

function renderQuiz(module) {
  const answers = progress[module.id]?.answers || {};
  const quizAnswers = module.quiz.map((_, index) => answers[`quiz-${index}`]);
  const allAnswered = quizAnswers.every((answer) => answer !== undefined);
  const score = module.quiz.reduce((total, question, index) => {
    return total + (Number(quizAnswers[index]) === question.answer ? 1 : 0);
  }, 0);

  if (progress[module.id]?.completed) {
    renderCompletion(module);
    return;
  }

  app.innerHTML = `
    <header class="page-header">
      <div>
        <p class="eyebrow">Mini quiz</p>
        <h1>${module.title}</h1>
        <p>Answer a few quick questions to complete the module.</p>
      </div>
      <section class="summary-panel">
        <span class="summary-number">${score}/${module.quiz.length}</span>
        <p>Current score</p>
      </section>
    </header>

    <section class="quiz-panel">
      ${module.quiz
        .map(
          (question, index) => `
            <section class="scenario-panel">
              <h2>${index + 1}. ${question.prompt}</h2>
              <div class="question-options quiz-options" data-answer-key="quiz-${index}">
                ${question.options
                  .map((option, optionIndex) => {
                    const selected = Number(quizAnswers[index]) === optionIndex;
                    const state = selected
                      ? optionIndex === question.answer
                        ? "correct selected"
                        : "incorrect selected"
                      : "";
                    return `<button class="option-button ${state}" data-answer="${optionIndex}">${option}</button>`;
                  })
                  .join("")}
              </div>
            </section>
          `
        )
        .join("")}

      <div class="lesson-actions">
        <a class="button secondary" href="#/module/${module.id}/${module.steps.length - 1}">Back</a>
        <button class="button" id="complete-module" ${allAnswered ? "" : "disabled"}>Complete module</button>
      </div>
    </section>
  `;

  document.querySelectorAll(".quiz-options").forEach((group) => {
    group.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        setAnswer(module.id, group.dataset.answerKey, button.dataset.answer);
        render();
      });
    });
  });

  document.querySelector("#complete-module")?.addEventListener("click", () => {
    if (!allAnswered) return;
    completeModule(module, score);
    renderCompletion(module);
  });
}

function renderCompletion(module) {
  const score = progress[module.id]?.score ?? 0;

  app.innerHTML = `
    <header class="page-header">
      <div>
        <p class="eyebrow">Complete</p>
        <h1>${module.title}</h1>
        <p>You completed the module. Keep these habits close during everyday work.</p>
      </div>
      <section class="summary-panel">
        <span class="summary-number">${score}/${module.quiz.length}</span>
        <p>Quiz score</p>
      </section>
    </header>

    <section class="completion-panel">
      <h2>Key Takeaways</h2>
      <ul>
        ${module.takeaways.map((takeaway) => `<li>${takeaway}</li>`).join("")}
      </ul>
      <div class="lesson-actions">
        <a class="button" href="#/training">Return to dashboard</a>
        <a class="button secondary" href="#/resources">Review resources</a>
        <a class="button secondary" href="#/module/${module.id}/0">Review module</a>
      </div>
    </section>
  `;
}

function renderProgress() {
  app.innerHTML = `
    <header class="page-header">
      <div>
        <p class="eyebrow">Progress</p>
        <h1>Your training progress</h1>
        <p>Track completed modules and continue anything still in progress.</p>
      </div>
    </header>

    <section class="results-list">
      ${modules
        .map((module) => {
          const state = moduleProgress(module);
          return `
            <article class="result-row">
              <div>
                <h2>${module.title}</h2>
                <p>${state.status}${state.score !== undefined ? ` · Score ${state.score}/${module.quiz.length}` : ""}</p>
                ${progressBar(state.percent)}
              </div>
              <a class="button secondary" href="${state.completed ? `#/module/${module.id}/0` : nextModuleHref(module)}">${state.completed ? "Review" : "Continue"}</a>
            </article>
          `;
        })
        .join("")}
    </section>
  `;
}

function renderResources() {
  app.innerHTML = `
    <header class="page-header">
      <div>
        <p class="eyebrow">Resources</p>
        <h1>Quick references for everyday decisions</h1>
        <p>Short checklists learners can return to after completing the training.</p>
      </div>
    </header>

    <section class="resource-grid">
      ${resources
        .map(
          (resource) => `
            <article class="resource-item">
              <h2>${resource.title}</h2>
              <ul>
                ${resource.items.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function renderResults() {
  const completed = modules.filter((module) => moduleProgress(module).completed).length;
  const averageScore = modules.reduce((total, module) => {
    const score = progress[module.id]?.score;
    return total + (typeof score === "number" ? score / module.quiz.length : 0);
  }, 0);

  app.innerHTML = `
    <header class="page-header">
      <div>
        <p class="eyebrow">Demo admin view</p>
        <h1>Local results summary</h1>
        <p>This prototype stores progress in this browser only. A future backend can replace this view with organization-wide reporting.</p>
      </div>
      <section class="summary-panel">
        <span class="summary-number">${completed}/${modules.length}</span>
        <p>Modules complete</p>
      </section>
    </header>

    <section class="results-list">
      <article class="result-row">
        <div>
          <h2>Completion rate</h2>
          <p>${Math.round((completed / modules.length) * 100)}% for this browser profile</p>
        </div>
      </article>
      <article class="result-row">
        <div>
          <h2>Average quiz result</h2>
          <p>${Math.round((averageScore / modules.length) * 100)}% across available module scores</p>
        </div>
      </article>
      ${modules
        .map((module) => {
          const state = moduleProgress(module);
          return `
            <article class="result-row">
              <div>
                <h2>${module.title}</h2>
                <p>${state.status}${state.completedAt ? ` · Completed ${new Date(state.completedAt).toLocaleDateString()}` : ""}</p>
              </div>
              <span class="score-pill">${state.score !== undefined ? `${state.score}/${module.quiz.length}` : "No score"}</span>
            </article>
          `;
        })
        .join("")}
    </section>
  `;
}

function progressBar(percent) {
  return `
    <div class="progress-track" aria-label="${percent}% complete">
      <div class="progress-fill" style="--progress: ${percent}%"></div>
    </div>
  `;
}
