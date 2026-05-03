const modules = [
  {
    id: "pii",
    title: "Handling PII and Company Data",
    description: "Learn how to recognize personal data and share it safely.",
    durationMinutes: 7,
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
      },
      {
        title: "Check before you send",
        body: [
          "A quick review before sharing can prevent most accidental exposure.",
          "Check the recipient, remove unneeded fields, look for hidden tabs, and use approved sharing controls."
        ],
        example: {
          type: "Spreadsheet review",
          title: "Vendor export ready to send",
          rows: [
            ["Visible fields", "Names, emails, phone numbers"],
            ["Internal notes", "Included"],
            ["Hidden tabs", "2 tabs"],
            ["Sharing method", "Attachment"]
          ]
        },
        question: {
          prompt: "What should you check before sending this spreadsheet?",
          options: [
            {
              id: "a",
              label: "Only that the file opens correctly",
              correct: false,
              feedback: "Not quite. You also need to check the recipient, unnecessary fields, hidden tabs, and sharing controls."
            },
            {
              id: "b",
              label: "Recipient, unnecessary fields, hidden tabs, and approved sharing controls",
              correct: true,
              feedback: "Good catch. A short checklist catches common ways personal data leaks before a file is sent."
            },
            {
              id: "c",
              label: "Nothing else if the vendor is waiting",
              correct: false,
              feedback: "Not quite. Urgency is a reason to be careful, not a reason to skip checks."
            }
          ]
        },
        takeaway: "Pause for a final data check before sending."
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
      },
      {
        prompt: "What should you check before sharing a spreadsheet externally?",
        options: [
          "Recipient, required fields, hidden tabs, and sharing controls",
          "Only the file name",
          "Only whether the vendor requested it"
        ],
        answer: 0
      }
    ],
    takeaways: [
      "Treat personal data as sensitive by default.",
      "Share the minimum data needed.",
      "Use approved tools and access controls.",
      "Report accidental exposure quickly.",
      "Check files before sending them externally."
    ]
  },
  {
    id: "phishing",
    title: "Phishing and Suspicious Messages",
    description: "Practice spotting suspicious emails, links, attachments, and urgent requests.",
    durationMinutes: 7,
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
      },
      {
        title: "Check the sender and domain",
        body: [
          "Attackers often use lookalike names or domains that feel almost right at a glance.",
          "Before opening a link, compare the sender with known company addresses and use the trusted company portal when possible."
        ],
        example: {
          type: "Email preview",
          title: "Salary document ready",
          rows: [
            ["From", "payroll@company-payroll.example"],
            ["Subject", "Updated salary document"],
            ["Message", "Sign in to view your updated salary document."]
          ]
        },
        question: {
          prompt: "What should you check before opening the link?",
          options: [
            {
              id: "a",
              label: "Whether the sender domain matches the real payroll service",
              correct: true,
              feedback: "Good catch. Lookalike domains are a common way to make fake messages feel familiar."
            },
            {
              id: "b",
              label: "Only whether the message uses your name",
              correct: false,
              feedback: "Not quite. Personalized messages can still be fake."
            },
            {
              id: "c",
              label: "Nothing, because payroll messages are important",
              correct: false,
              feedback: "Not quite. Important messages deserve a careful check before you click."
            }
          ]
        },
        takeaway: "Verify sender details before trusting a message."
      },
      {
        title: "Avoid fake login pages and risky attachments",
        body: [
          "Unexpected links can lead to fake login pages that collect your password or MFA codes.",
          "Unexpected attachments can also carry malware or hidden scripts. When in doubt, go to the service directly."
        ],
        example: {
          type: "Mailbox alert",
          title: "Your mailbox will be disabled",
          rows: [
            ["From", "it-support@example-security.net"],
            ["Link text", "Review mailbox now"],
            ["Request", "Sign in with company credentials"]
          ]
        },
        question: {
          prompt: "What is the safest action?",
          options: [
            {
              id: "a",
              label: "Use the link because it mentions your mailbox",
              correct: false,
              feedback: "Not quite. Fake login pages often mention familiar services."
            },
            {
              id: "b",
              label: "Go to the mailbox service directly or report the message",
              correct: true,
              feedback: "Good catch. Going directly avoids handing credentials to a fake page."
            },
            {
              id: "c",
              label: "Download the attachment first to see what it contains",
              correct: false,
              feedback: "Not quite. Unexpected attachments should be treated carefully before opening."
            }
          ]
        },
        takeaway: "Do not enter credentials from unexpected links."
      },
      {
        title: "Report safely",
        body: [
          "Reporting a suspicious message helps protect other employees too.",
          "Contact IT or use the approved reporting mailbox instead of forwarding suspicious links and attachments casually."
        ],
        example: {
          type: "Chat draft",
          title: "Team channel",
          rows: [
            ["Message", "Did anyone else get this strange invoice email?"],
            ["Attachment", "Invoice_Update.zip"],
            ["Link", "Included in forwarded email"]
          ]
        },
        question: {
          prompt: "What should you do instead of forwarding it to a group chat?",
          options: [
            {
              id: "a",
              label: "Use the approved suspicious-message reporting process",
              correct: true,
              feedback: "Good catch. Reporting gets the message to the right team without spreading risky links or files."
            },
            {
              id: "b",
              label: "Reply to the sender and ask if it is real",
              correct: false,
              feedback: "Not quite. Replying can confirm your address is active and continue the attack."
            },
            {
              id: "c",
              label: "Forward it to everyone so they can inspect it",
              correct: false,
              feedback: "Not quite. Forwarding suspicious content can spread the risk."
            }
          ]
        },
        takeaway: "Report suspicious messages using the approved process."
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
    durationMinutes: 7,
    steps: [
      {
        title: "Use unique passwords",
        body: [
          "Reusing a personal password for work can turn one unrelated breach into a company account problem.",
          "Use unique passwords for work systems, ideally stored in an approved password manager."
        ],
        example: {
          type: "Password decision",
          title: "New work system signup",
          rows: [
            ["Prompt", "Create a password"],
            ["Idea", "Reuse a personal shopping password"],
            ["Reason", "Easy to remember"]
          ]
        },
        question: {
          prompt: "What is the safer choice?",
          options: [
            {
              id: "a",
              label: "Reuse the personal password because it is familiar",
              correct: false,
              feedback: "Not quite. Reuse makes one stolen password useful in many places."
            },
            {
              id: "b",
              label: "Use a unique password, ideally in an approved password manager",
              correct: true,
              feedback: "Good catch. Unique passwords limit the damage if another service is breached."
            },
            {
              id: "c",
              label: "Use a shorter password so it is easier to type",
              correct: false,
              feedback: "Not quite. Convenience should not weaken account protection."
            }
          ]
        },
        takeaway: "Use unique passwords for work accounts."
      },
      {
        title: "Use MFA carefully",
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
      },
      {
        title: "Do not share accounts or passwords",
        body: [
          "Shared credentials remove accountability and can expose systems to people who should not have access.",
          "If someone needs access, use the approved access request process."
        ],
        example: {
          type: "Chat request",
          title: "Quick login request",
          rows: [
            ["Colleague", "Can I borrow your login for five minutes?"],
            ["Reason", "I need to finish a task quickly"],
            ["System", "Customer records"]
          ]
        },
        question: {
          prompt: "What should you do?",
          options: [
            {
              id: "a",
              label: "Share it only for a few minutes",
              correct: false,
              feedback: "Not quite. Short-term sharing still creates account and data risk."
            },
            {
              id: "b",
              label: "Say no and use the approved access process",
              correct: true,
              feedback: "Good catch. Access should be granted through approved controls, not borrowed passwords."
            },
            {
              id: "c",
              label: "Send the password in a private chat",
              correct: false,
              feedback: "Not quite. Private chat is still not a safe place to share credentials."
            }
          ]
        },
        takeaway: "Do not share accounts or passwords."
      },
      {
        title: "Respond to unusual account activity",
        body: [
          "Unusual sign-in alerts can mean someone is trying to use your account.",
          "Report the activity quickly and follow the password reset or security process your company provides."
        ],
        example: {
          type: "Security alert",
          title: "New sign-in detected",
          rows: [
            ["App", "Company drive"],
            ["Location", "Unknown country"],
            ["Time", "During your commute"],
            ["You started this?", "No"]
          ]
        },
        question: {
          prompt: "What should you do with this alert?",
          options: [
            {
              id: "a",
              label: "Ignore it unless files disappear",
              correct: false,
              feedback: "Not quite. Waiting can give an attacker more time."
            },
            {
              id: "b",
              label: "Report it and follow the account security process",
              correct: true,
              feedback: "Good catch. Fast reporting helps protect your account and company data."
            },
            {
              id: "c",
              label: "Approve future prompts so the alert stops appearing",
              correct: false,
              feedback: "Not quite. Approving prompts you did not start can let an attacker in."
            }
          ]
        },
        takeaway: "Report unusual account activity quickly."
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
      "Contact IT or forward to the approved security mailbox.",
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

const modulesHe = [
  {
    id: "pii",
    title: "טיפול במידע אישי ובמידע חברה",
    description: "למדו לזהות מידע אישי ולשתף אותו בצורה בטוחה.",
    durationMinutes: 7,
    steps: [
      {
        title: "מתייחסים למידע אישי בזהירות",
        body: [
          "מידע אישי הוא מידע שיכול לזהות אדם, למשל שם, כתובת אימייל, מספר טלפון, מספר זהות, כתובת, מספר חשבון או רשומת לקוח.",
          "כלל יומיומי פשוט: אם המידע מצביע על אדם מסוים, מטפלים בו בזהירות."
        ],
        example: {
          type: "תצוגה מקדימה של גיליון",
          title: "חידושי לקוחות.xlsx",
          rows: [
            ["לקוחה", "מאיה כהן"],
            ["אימייל", "maya@example.com"],
            ["טלפון", "+972-50-123-4567"],
            ["הערת חידוש", "צריך לעדכן כרטיס תשלום"]
          ]
        },
        question: {
          prompt: "איזה פריט בקובץ הזה צריך לגרום לכם לעצור לפני שיתוף?",
          options: [
            {
              id: "a",
              label: "רק שם הקובץ",
              correct: false,
              feedback: "לא בדיוק. שם הקובץ פחות חשוב מהפרטים האישיים שנמצאים בתוך הקובץ."
            },
            {
              id: "b",
              label: "שם הלקוחה, האימייל, הטלפון והערת החשבון",
              correct: true,
              feedback: "זיהוי טוב. הפרטים האלה מזהים אדם ולכן צריך לשתף אותם רק בדרכים מאושרות."
            },
            {
              id: "c",
              label: "שום דבר, כי זה גיליון עבודה רגיל",
              correct: false,
              feedback: "לא בדיוק. קבצי עבודה יומיומיים כוללים לעיתים קרובות מידע אישי רגיש."
            }
          ]
        },
        takeaway: "מתייחסים למידע אישי כרגיש כברירת מחדל."
      },
      {
        title: "משתפים רק את המינימום הדרוש",
        body: [
          "לפני שליחת קובץ, שאלו מה הנמען באמת צריך. קובץ קטן וממוקד מצמצם סיכון.",
          "הסירו עמודות מיותרות, גיליונות מוסתרים, צילומי מסך והערות שלא נחוצים למשימה."
        ],
        example: {
          type: "טיוטת אימייל",
          title: "נושא: רשימת לקוחות לספק",
          rows: [
            ["אל", "vendor@example.net"],
            ["קובץ מצורף", "all_customers_full_export.xlsx"],
            ["הודעה", "מצורף הייצוא המלא שביקשתם."]
          ]
        },
        question: {
          prompt: "מה הצעד הבטוח ביותר לפני שליחת הקובץ?",
          options: [
            {
              id: "a",
              label: "לשלוח מהר כי הספק ביקש את זה",
              correct: false,
              feedback: "לא בדיוק. ייצוא מלא עלול לכלול יותר מידע אישי ממה שהספק צריך."
            },
            {
              id: "b",
              label: "ליצור קובץ קטן ומאושר עם השדות הדרושים בלבד",
              correct: true,
              feedback: "זיהוי טוב. שיתוף המינימום הדרוש מצמצם את הנזק אם משהו משתבש."
            },
            {
              id: "c",
              label: "להעביר קודם לעמית כדי שהוא ישלח",
              correct: false,
              feedback: "לא בדיוק. העברה הלאה יכולה להפיץ מידע רגיש בלי לפתור את הסיכון."
            }
          ]
        },
        takeaway: "משתפים רק את המידע שנדרש לעבודה."
      },
      {
        title: "משתמשים בכלי שיתוף מאושרים",
        body: [
          "כלים מאושרים בדרך כלל כוללים בקרת גישה, אפשרות לתוקף קישור ותיעוד פעולות.",
          "קישורים ציבוריים, מכשירים אישיים ואימיילים פרטיים מקשים על הגנה על מידע חברה ולקוחות."
        ],
        example: {
          type: "חלון שיתוף קבצים",
          title: "שיתוף: צילומי מסך מתמיכה",
          rows: [
            ["גישה", "כל מי שיש לו את הקישור"],
            ["הורדה", "מותרת"],
            ["תוקף", "ללא"],
            ["תיקייה", "תמיכת לקוחות"]
          ]
        },
        question: {
          prompt: "מה כדאי לשנות לפני שיתוף התיקייה?",
          options: [
            {
              id: "a",
              label: "להגביל גישה לאנשים הספציפיים שצריכים אותה",
              correct: true,
              feedback: "זיהוי טוב. גישה ספציפית בטוחה יותר מקישור ציבורי, במיוחד כשיש מידע לקוחות."
            },
            {
              id: "b",
              label: "לתת לתיקייה שם פחות ברור",
              correct: false,
              feedback: "לא בדיוק. שינוי שם התיקייה לא קובע מי יכול לפתוח אותה."
            },
            {
              id: "c",
              label: "להשאיר את הקישור ציבורי כדי שלא יהיו בעיות גישה",
              correct: false,
              feedback: "לא בדיוק. נוחות לא צריכה לבוא על חשבון בקרת גישה למידע רגיש."
            }
          ]
        },
        takeaway: "משתמשים בכלים מאושרים ובבקרת גישה."
      },
      {
        title: "מדווחים מהר על טעויות",
        body: [
          "טעויות קורות. דיווח מהיר מאפשר לחברה לצמצם נזק, להסיר גישה או לפנות לגורמים הנכונים.",
          "לא מחכים לראות אם הבעיה תגדל."
        ],
        example: {
          type: "הודעת צ'אט",
          title: "ערוץ צוות",
          rows: [
            ["אתם", "שלחתי את קובץ הלקוחות לאיש קשר חיצוני לא נכון."],
            ["זמן", "לפני 2 דקות"],
            ["קובץ", "customer_cases_march.xlsx"]
          ]
        },
        question: {
          prompt: "מה צריך לעשות עכשיו?",
          options: [
            {
              id: "a",
              label: "למחוק את ההודעה שנשלחה ולקוות שאף אחד לא שם לב",
              correct: false,
              feedback: "לא בדיוק. מחיקת העותק שלכם לא בהכרח מסירה גישה או מצמצמת את הסיכון."
            },
            {
              id: "b",
              label: "לדווח מיד דרך תהליך האבטחה או הפרטיות המאושר",
              correct: true,
              feedback: "זיהוי טוב. דיווח מהיר עוזר לצוות המתאים לצמצם חשיפה."
            },
            {
              id: "c",
              label: "לחכות עד סוף היום ואז להזכיר את זה",
              correct: false,
              feedback: "לא בדיוק. עיכוב מקשה על צמצום חשיפת מידע."
            }
          ]
        },
        takeaway: "אם מידע נשלח למקום הלא נכון, מדווחים מהר."
      },
      {
        title: "בודקים לפני שליחה",
        body: [
          "בדיקה קצרה לפני שיתוף יכולה למנוע את רוב החשיפות בטעות.",
          "בדקו את הנמען, הסירו שדות לא נחוצים, חפשו גיליונות מוסתרים והשתמשו בבקרות שיתוף מאושרות."
        ],
        example: {
          type: "בדיקת גיליון",
          title: "ייצוא לספק מוכן לשליחה",
          rows: [
            ["שדות גלויים", "שמות, אימיילים, מספרי טלפון"],
            ["הערות פנימיות", "כלולות"],
            ["גיליונות מוסתרים", "2 גיליונות"],
            ["שיטת שיתוף", "קובץ מצורף"]
          ]
        },
        question: {
          prompt: "מה צריך לבדוק לפני שליחת הגיליון?",
          options: [
            {
              id: "a",
              label: "רק שהקובץ נפתח תקין",
              correct: false,
              feedback: "לא בדיוק. צריך לבדוק גם את הנמען, שדות מיותרים, גיליונות מוסתרים ובקרות שיתוף."
            },
            {
              id: "b",
              label: "נמען, שדות לא נחוצים, גיליונות מוסתרים ובקרות שיתוף מאושרות",
              correct: true,
              feedback: "זיהוי טוב. רשימת בדיקה קצרה תופסת דרכים נפוצות שבהן מידע אישי נחשף לפני שליחה."
            },
            {
              id: "c",
              label: "שום דבר נוסף אם הספק מחכה",
              correct: false,
              feedback: "לא בדיוק. דחיפות היא סיבה להיזהר, לא סיבה לדלג על בדיקות."
            }
          ]
        },
        takeaway: "עוצרים לבדיקת מידע אחרונה לפני שליחה."
      }
    ],
    quiz: [
      {
        prompt: "מהי הדרך הבטוחה ביותר לשתף מידע לקוחות?",
        options: [
          "להשתמש בכלי מאושר ולהגביל גישה למי שצריך",
          "לצרף את הייצוא המלא לאימייל פרטי",
          "ליצור קישור ציבורי כדי שהגישה תהיה קלה"
        ],
        answer: 0
      },
      {
        prompt: "מה כדאי לעשות לפני שליחת צילום מסך ממערכת לקוחות?",
        options: [
          "לבדוק אם הוא חושף מידע אישי ולהסיר כל מה שלא נחוץ",
          "לשלוח כמו שהוא אם הנמען הוא עמית",
          "להדביק אותו בערוץ צ'אט כדי לקבל עזרה מהר"
        ],
        answer: 0
      },
      {
        prompt: "מה התגובה הנכונה אחרי שליחת מידע אישי לנמען הלא נכון?",
        options: [
          "לדווח מהר באמצעות התהליך המאושר",
          "לחכות לראות אם מישהו עונה",
          "לשלוח הודעה נוספת שמבקשת להתעלם"
        ],
        answer: 0
      },
      {
        prompt: "מה צריך לבדוק לפני שיתוף גיליון עם גורם חיצוני?",
        options: [
          "נמען, שדות נדרשים, גיליונות מוסתרים ובקרות שיתוף",
          "רק את שם הקובץ",
          "רק אם הספק ביקש את הקובץ"
        ],
        answer: 0
      }
    ],
    takeaways: [
      "מתייחסים למידע אישי כרגיש כברירת מחדל.",
      "משתפים את המינימום הדרוש.",
      "משתמשים בכלים מאושרים ובבקרת גישה.",
      "מדווחים מהר על חשיפה בטעות.",
      "בודקים קבצים לפני שליחה חיצונית."
    ]
  },
  {
    id: "phishing",
    title: "פישינג והודעות חשודות",
    description: "תרגלו זיהוי אימיילים חשודים, קישורים, קבצים מצורפים ובקשות דחופות.",
    durationMinutes: 7,
    steps: [
      {
        title: "עוצרים לפני שלוחצים",
        body: [
          "הודעות חשודות יוצרות לעיתים לחץ: חשבוניות דחופות, חשבון נעול, קבצים מצורפים מפתיעים או בקשות ממישהו שמתחזה למנהל.",
          "עצירה קצרה נותנת זמן לבדוק את השולח, הקישור, הקובץ המצורף והבקשה."
        ],
        example: {
          type: "תצוגת אימייל",
          title: "חשבונית באיחור - נדרשת פעולה מיידית",
          rows: [
            ["מאת", "billing-alerts@payrnents-example.com"],
            ["קובץ מצורף", "Invoice_Update.zip"],
            ["הודעה", "פתחו היום כדי למנוע השעיית חשבון."]
          ]
        },
        question: {
          prompt: "איזה סימן אזהרה צריך לזהות קודם?",
          options: [
            {
              id: "a",
              label: "כתובת השולח, הטון הדחוף והקובץ המצורף הלא צפוי",
              correct: true,
              feedback: "זיהוי טוב. כמה סימני אזהרה מופיעים יחד, וזו סיבה טובה לעצור ולדווח."
            },
            {
              id: "b",
              label: "ההודעה קצרה",
              correct: false,
              feedback: "לא בדיוק. הודעות קצרות לא תמיד חשודות, אבל פרטי שולח לא תואמים ולחץ הם סימנים חשובים."
            },
            {
              id: "c",
              label: "יש קובץ ZIP, אז כנראה קל יותר להוריד אותו",
              correct: false,
              feedback: "לא בדיוק. קבצים דחוסים לא צפויים יכולים להיות מסוכנים."
            }
          ]
        },
        takeaway: "בודקים שולח, קישור, קובץ מצורף ובקשה לפני פעולה."
      },
      {
        title: "בודקים את השולח והדומיין",
        body: [
          "תוקפים משתמשים לעיתים בשמות או דומיינים דומים שנראים כמעט נכונים במבט ראשון.",
          "לפני פתיחת קישור, השוו את כתובת השולח לכתובות החברה המוכרות והעדיפו כניסה דרך הפורטל המוכר."
        ],
        example: {
          type: "תצוגת אימייל",
          title: "מסמך שכר מוכן",
          rows: [
            ["מאת", "payroll@company-payroll.example"],
            ["נושא", "מסמך שכר מעודכן"],
            ["הודעה", "התחברו כדי לצפות במסמך השכר המעודכן."]
          ]
        },
        question: {
          prompt: "מה צריך לבדוק לפני פתיחת הקישור?",
          options: [
            {
              id: "a",
              label: "האם דומיין השולח תואם לשירות השכר האמיתי",
              correct: true,
              feedback: "זיהוי טוב. דומיינים דומים הם דרך נפוצה לגרום להודעות מזויפות להרגיש מוכרות."
            },
            {
              id: "b",
              label: "רק אם ההודעה משתמשת בשם שלכם",
              correct: false,
              feedback: "לא בדיוק. גם הודעות אישיות יכולות להיות מזויפות."
            },
            {
              id: "c",
              label: "שום דבר, כי הודעות שכר הן חשובות",
              correct: false,
              feedback: "לא בדיוק. הודעות חשובות מצדיקות בדיקה זהירה לפני לחיצה."
            }
          ]
        },
        takeaway: "מאמתים פרטי שולח לפני שסומכים על הודעה."
      },
      {
        title: "נזהרים מדפי התחברות מזויפים וקבצים מסוכנים",
        body: [
          "קישורים לא צפויים יכולים להוביל לדפי התחברות מזויפים שאוספים סיסמאות או קודי MFA.",
          "גם קבצים מצורפים לא צפויים יכולים להכיל נוזקות או סקריפטים מוסתרים. כשיש ספק, נכנסים לשירות ישירות."
        ],
        example: {
          type: "התראת תיבת דואר",
          title: "תיבת הדואר תושבת",
          rows: [
            ["מאת", "it-support@example-security.net"],
            ["טקסט קישור", "בדיקת תיבה עכשיו"],
            ["בקשה", "התחברות עם פרטי חברה"]
          ]
        },
        question: {
          prompt: "מה הפעולה הבטוחה ביותר?",
          options: [
            {
              id: "a",
              label: "להשתמש בקישור כי הוא מזכיר את תיבת הדואר",
              correct: false,
              feedback: "לא בדיוק. דפי התחברות מזויפים מזכירים לעיתים שירותים מוכרים."
            },
            {
              id: "b",
              label: "להיכנס לשירות הדואר ישירות או לדווח על ההודעה",
              correct: true,
              feedback: "זיהוי טוב. כניסה ישירה מונעת מסירת פרטי התחברות לדף מזויף."
            },
            {
              id: "c",
              label: "להוריד קודם את הקובץ המצורף כדי לראות מה יש בו",
              correct: false,
              feedback: "לא בדיוק. קבצים מצורפים לא צפויים דורשים זהירות לפני פתיחה."
            }
          ]
        },
        takeaway: "לא מזינים פרטי התחברות מקישורים לא צפויים."
      },
      {
        title: "מדווחים בצורה בטוחה",
        body: [
          "דיווח על הודעה חשודה עוזר להגן גם על עובדים אחרים.",
          "פנו ל-IT או השתמשו בתיבת הדיווח המאושרת במקום להעביר קישורים וקבצים חשודים באופן לא רשמי."
        ],
        example: {
          type: "טיוטת צ'אט",
          title: "ערוץ צוות",
          rows: [
            ["הודעה", "עוד מישהו קיבל את אימייל החשבונית המוזר הזה?"],
            ["קובץ מצורף", "Invoice_Update.zip"],
            ["קישור", "כלול באימייל המועבר"]
          ]
        },
        question: {
          prompt: "מה כדאי לעשות במקום להעביר את ההודעה לצ'אט קבוצתי?",
          options: [
            {
              id: "a",
              label: "להשתמש בתהליך הדיווח המאושר להודעות חשודות",
              correct: true,
              feedback: "זיהוי טוב. דיווח מעביר את ההודעה לצוות הנכון בלי להפיץ קישורים או קבצים מסוכנים."
            },
            {
              id: "b",
              label: "להשיב לשולח ולשאול אם זה אמיתי",
              correct: false,
              feedback: "לא בדיוק. מענה יכול לאשר שהכתובת שלכם פעילה ולהמשיך את התקיפה."
            },
            {
              id: "c",
              label: "להעביר לכולם כדי שיוכלו לבדוק",
              correct: false,
              feedback: "לא בדיוק. העברת תוכן חשוד יכולה להפיץ את הסיכון."
            }
          ]
        },
        takeaway: "מדווחים על הודעות חשודות בתהליך המאושר."
      }
    ],
    quiz: [
      {
        prompt: "מה כדאי לעשות עם קישור התחברות לא צפוי?",
        options: [
          "לפתוח ולהתחבר מהר",
          "להיכנס לשירות ישירות או לדווח על ההודעה",
          "להעביר לצוות ולשאול מה דעתם"
        ],
        answer: 1
      },
      {
        prompt: "איזו בקשה היא סימן אזהרה נפוץ לפישינג?",
        options: [
          "בקשה לסיסמאות, קודי MFA, כרטיסי מתנה או תשלומים דחופים",
          "זימון ליומן מעמית מוכר",
          "ניוזלטר שבועי של החברה"
        ],
        answer: 0
      },
      {
        prompt: "מה עושים עם הודעה חשודה?",
        options: [
          "מדווחים עליה בתהליך המאושר",
          "עונים לשולח ושואלים אם זה אמיתי",
          "מעבירים אותה באופן לא רשמי לצ'אט קבוצתי"
        ],
        answer: 0
      }
    ],
    takeaways: [
      "עוצרים לפני שלוחצים.",
      "לא מזינים פרטי התחברות מקישורים לא צפויים.",
      "מדווחים על הודעות חשודות."
    ]
  },
  {
    id: "accounts",
    title: "סיסמאות, MFA ובטיחות חשבונות",
    description: "למדו הרגלים בטוחים יותר לסיסמאות, אישורי MFA ופעילות חשבון חריגה.",
    durationMinutes: 7,
    steps: [
      {
        title: "משתמשים בסיסמאות ייחודיות",
        body: [
          "שימוש חוזר בסיסמה אישית לעבודה יכול להפוך פריצה לשירות לא קשור לבעיה בחשבון החברה.",
          "השתמשו בסיסמאות ייחודיות למערכות עבודה, עדיף במנהל סיסמאות מאושר."
        ],
        example: {
          type: "החלטת סיסמה",
          title: "הרשמה למערכת עבודה חדשה",
          rows: [
            ["בקשה", "יצירת סיסמה"],
            ["רעיון", "שימוש חוזר בסיסמת קניות אישית"],
            ["סיבה", "קל לזכור"]
          ]
        },
        question: {
          prompt: "מה הבחירה הבטוחה יותר?",
          options: [
            {
              id: "a",
              label: "להשתמש שוב בסיסמה האישית כי היא מוכרת",
              correct: false,
              feedback: "לא בדיוק. שימוש חוזר הופך סיסמה שנגנבה במקום אחד לשימושית בכמה מקומות."
            },
            {
              id: "b",
              label: "להשתמש בסיסמה ייחודית, עדיף במנהל סיסמאות מאושר",
              correct: true,
              feedback: "זיהוי טוב. סיסמאות ייחודיות מצמצמות נזק אם שירות אחר נפרץ."
            },
            {
              id: "c",
              label: "להשתמש בסיסמה קצרה יותר כדי שיהיה קל להקליד",
              correct: false,
              feedback: "לא בדיוק. נוחות לא צריכה להחליש את הגנת החשבון."
            }
          ]
        },
        takeaway: "משתמשים בסיסמאות ייחודיות לחשבונות עבודה."
      },
      {
        title: "משתמשים ב-MFA בזהירות",
        body: [
          "הרגל חשבון טוב הוא פשוט: משתמשים בסיסמאות ייחודיות, נעזרים ב-MFA, ולא מאשרים התחברות שלא יזמתם.",
          "חשבונות משותפים ושימוש חוזר בסיסמאות גורמים לטעות אחת להתפשט לכמה מערכות."
        ],
        example: {
          type: "בקשת MFA",
          title: "לאשר התחברות?",
          rows: [
            ["אפליקציה", "דואר חברה"],
            ["מיקום", "לא ידוע"],
            ["זמן", "עכשיו"],
            ["אתם יזמתם?", "לא"]
          ]
        },
        question: {
          prompt: "מה צריך לעשות עם בקשת ה-MFA הזאת?",
          options: [
            {
              id: "a",
              label: "לאשר, כי בקשות MFA הן דבר רגיל",
              correct: false,
              feedback: "לא בדיוק. אף פעם לא מאשרים בקשה להתחברות שלא יזמתם."
            },
            {
              id: "b",
              label: "לדחות ולדווח על פעילות חשבון חריגה",
              correct: true,
              feedback: "זיהוי טוב. בקשת MFA לא צפויה יכולה להעיד שלמישהו יש את הסיסמה שלכם."
            },
            {
              id: "c",
              label: "להתעלם ולהמשיך לעבוד",
              correct: false,
              feedback: "לא בדיוק. התעלמות עלולה לפספס סימן לכך שהחשבון בסיכון."
            }
          ]
        },
        takeaway: "לא מאשרים בקשת MFA שלא יזמתם."
      },
      {
        title: "לא משתפים חשבונות או סיסמאות",
        body: [
          "שיתוף פרטי התחברות פוגע באחריות אישית ועלול לחשוף מערכות לאנשים שלא אמורים לקבל גישה.",
          "אם מישהו צריך גישה, משתמשים בתהליך בקשת הגישה המאושר."
        ],
        example: {
          type: "בקשת צ'אט",
          title: "בקשת התחברות מהירה",
          rows: [
            ["עמית", "אפשר להשתמש בלוגין שלך לחמש דקות?"],
            ["סיבה", "אני צריך לסיים משימה מהר"],
            ["מערכת", "רשומות לקוחות"]
          ]
        },
        question: {
          prompt: "מה צריך לעשות?",
          options: [
            {
              id: "a",
              label: "לשתף רק לכמה דקות",
              correct: false,
              feedback: "לא בדיוק. גם שיתוף קצר יוצר סיכון לחשבון ולמידע."
            },
            {
              id: "b",
              label: "לסרב ולהשתמש בתהליך הגישה המאושר",
              correct: true,
              feedback: "זיהוי טוב. גישה צריכה להינתן דרך בקרות מאושרות, לא דרך סיסמאות מושאלות."
            },
            {
              id: "c",
              label: "לשלוח את הסיסמה בצ'אט פרטי",
              correct: false,
              feedback: "לא בדיוק. צ'אט פרטי עדיין אינו מקום בטוח לשיתוף פרטי התחברות."
            }
          ]
        },
        takeaway: "לא משתפים חשבונות או סיסמאות."
      },
      {
        title: "מגיבים לפעילות חשבון חריגה",
        body: [
          "התראות התחברות חריגות יכולות להעיד שמישהו מנסה להשתמש בחשבון שלכם.",
          "דווחו מהר ופעלו לפי תהליך איפוס הסיסמה או האבטחה שהחברה מספקת."
        ],
        example: {
          type: "התראת אבטחה",
          title: "זוהתה התחברות חדשה",
          rows: [
            ["אפליקציה", "כונן חברה"],
            ["מיקום", "מדינה לא מוכרת"],
            ["זמן", "בזמן הנסיעה שלכם"],
            ["אתם יזמתם?", "לא"]
          ]
        },
        question: {
          prompt: "מה צריך לעשות עם ההתראה הזאת?",
          options: [
            {
              id: "a",
              label: "להתעלם אלא אם קבצים ייעלמו",
              correct: false,
              feedback: "לא בדיוק. המתנה יכולה לתת לתוקף יותר זמן."
            },
            {
              id: "b",
              label: "לדווח ולפעול לפי תהליך אבטחת החשבון",
              correct: true,
              feedback: "זיהוי טוב. דיווח מהיר עוזר להגן על החשבון ועל מידע החברה."
            },
            {
              id: "c",
              label: "לאשר בקשות עתידיות כדי שההתראה תפסיק להופיע",
              correct: false,
              feedback: "לא בדיוק. אישור בקשות שלא יזמתם יכול לאפשר לתוקף להיכנס."
            }
          ]
        },
        takeaway: "מדווחים מהר על פעילות חשבון חריגה."
      }
    ],
    quiz: [
      {
        prompt: "מהו הרגל סיסמאות בטוח יותר?",
        options: [
          "להשתמש באותה סיסמה זכירה בכל מקום",
          "להשתמש בסיסמאות ייחודיות, עדיף עם מנהל סיסמאות",
          "לשתף חשבון צוות מטעמי נוחות"
        ],
        answer: 1
      },
      {
        prompt: "מה עושים אם עמית מבקש להשתמש בשם המשתמש והסיסמה שלכם?",
        options: [
          "משתפים רק לכמה דקות",
          "מסרבים ומשתמשים בתהליך הגישה המאושר",
          "כותבים על פתק ואוספים אחר כך"
        ],
        answer: 1
      },
      {
        prompt: "על מה יכולה להעיד בקשת MFA לא צפויה?",
        options: [
          "ייתכן שמישהו מנסה להיכנס לחשבון שלכם",
          "הסיסמה שלכם בהחלט חזקה יותר עכשיו",
          "המערכת מבקשת סקר שגרתי"
        ],
        answer: 0
      }
    ],
    takeaways: [
      "משתמשים בסיסמאות ייחודיות.",
      "משתמשים ב-MFA בזהירות.",
      "לא משתפים חשבונות או סיסמאות.",
      "מדווחים על פעילות חשבון חריגה."
    ]
  }
];

const resourcesHe = [
  {
    title: "דיווח על הודעות חשודות",
    items: [
      "פנו ל-IT או העבירו לתיבת האבטחה המאושרת.",
      "אל תשיבו לשולח.",
      "אל תעבירו קבצים מצורפים חשודים לצ'אטים קבוצתיים."
    ]
  },
  {
    title: "רשימת בדיקה לטיפול במידע אישי",
    items: [
      "בדקו אם הקובץ מזהה אדם.",
      "הסירו מידע שאינו נחוץ.",
      "השתמשו בכלי שיתוף מאושרים ובגישה ספציפית.",
      "דווחו מהר על חשיפה בטעות."
    ]
  },
  {
    title: "רשימת בדיקה לבטיחות חשבון",
    items: [
      "השתמשו בסיסמאות ייחודיות.",
      "השתמשו במנהל סיסמאות כשזמין.",
      "דחו בקשות MFA לא צפויות.",
      "דווחו על התראות התחברות חריגות."
    ]
  },
  {
    title: "עשה ואל תעשה בשיתוף מידע",
    items: [
      "כן להשתמש בכלי שיתוף מאושרים.",
      "כן להגביל קישורים לאנשים או קבוצות מוגדרים.",
      "לא להשתמש בקישורים ציבוריים לקבצים רגישים.",
      "לא להוריד מידע חברה למכשירים אישיים."
    ]
  }
];

const contentByLanguage = {
  en: {
    dir: "ltr",
    name: "English",
    switchLabel: "עברית",
    brandTitle: "Security Training",
    brandSubtitle: "Practical workplace habits",
    nav: {
      training: "Training",
      progress: "Progress",
      resources: "Resources"
    },
    status: {
      notStarted: "Not started",
      inProgress: "In progress",
      complete: "Complete"
    },
    modules,
    resources,
    copy: {
      dashboardEyebrow: "Training",
      dashboardTitle: "Build practical security habits in a few short modules.",
      dashboardBody:
        "Scenario-based lessons help employees spot common risks, make safer choices, and know when to report an issue.",
      trainingModules: "Training modules",
      overallCompletion: "Overall completion",
      minutes: "minutes",
      start: "Start",
      continue: "Continue",
      review: "Review",
      module: "Module",
      of: "of",
      lessonProgress: "Lesson progress",
      dashboard: "Dashboard",
      back: "Back",
      startQuiz: "Start quiz",
      moduleSteps: "Module Steps",
      miniQuiz: "Mini quiz",
      goodCatch: "Good catch.",
      notQuite: "Not quite.",
      quizBody: "Answer a few quick questions to complete the module.",
      currentScore: "Current score",
      completeModule: "Complete module",
      completeEyebrow: "Complete",
      completeBody: "You completed the module. Keep these habits close during everyday work.",
      quizScore: "Quiz score",
      keyTakeaways: "Key Takeaways",
      returnDashboard: "Return to dashboard",
      reviewResources: "Review resources",
      reviewModule: "Review module",
      retakeQuiz: "Retake quiz",
      progressEyebrow: "Progress",
      progressTitle: "Your training progress",
      progressBody: "Track completed modules and continue anything still in progress. Progress is saved only in this browser.",
      score: "Score",
      resourcesEyebrow: "Resources",
      resourcesTitle: "Quick references for everyday decisions",
      resourcesBody: "Short checklists learners can return to after completing the training.",
      completed: "Completed",
      noScore: "No score",
      percentComplete: "complete",
      completeLessonsBeforeQuiz: "Complete the lesson steps before starting the quiz.",
      resetProgress: "Reset local progress",
      resetProgressBody: "Use this on shared machines or before a client walkthrough. It clears training progress stored in this browser only.",
      resetProgressConfirm: "Clear local training progress for this browser?",
      moduleNotFound: "Module not found."
    }
  },
  he: {
    dir: "rtl",
    name: "עברית",
    switchLabel: "English",
    brandTitle: "הדרכת אבטחת מידע",
    brandSubtitle: "הרגלים מעשיים לעבודה",
    nav: {
      training: "הדרכה",
      progress: "התקדמות",
      resources: "משאבים"
    },
    status: {
      notStarted: "טרם התחיל",
      inProgress: "בתהליך",
      complete: "הושלם"
    },
    modules: modulesHe,
    resources: resourcesHe,
    copy: {
      dashboardEyebrow: "הדרכה",
      dashboardTitle: "בונים הרגלי אבטחה מעשיים בכמה מודולים קצרים.",
      dashboardBody:
        "שיעורים מבוססי תרחישים עוזרים לעובדים לזהות סיכונים נפוצים, לבחור פעולה בטוחה יותר ולדעת מתי לדווח.",
      trainingModules: "מודולי הדרכה",
      overallCompletion: "השלמה כללית",
      minutes: "דקות",
      start: "התחלה",
      continue: "המשך",
      review: "סקירה",
      module: "מודול",
      of: "מתוך",
      lessonProgress: "התקדמות בשיעור",
      dashboard: "לוח הדרכה",
      back: "חזרה",
      startQuiz: "התחלת בוחן",
      moduleSteps: "שלבי המודול",
      miniQuiz: "בוחן קצר",
      goodCatch: "זיהוי טוב.",
      notQuite: "לא בדיוק.",
      quizBody: "ענו על כמה שאלות קצרות כדי להשלים את המודול.",
      currentScore: "ציון נוכחי",
      completeModule: "סיום המודול",
      completeEyebrow: "הושלם",
      completeBody: "השלמתם את המודול. שמרו את ההרגלים האלה קרוב לעבודה היומיומית.",
      quizScore: "ציון בבוחן",
      keyTakeaways: "דגשים מרכזיים",
      returnDashboard: "חזרה ללוח ההדרכה",
      reviewResources: "סקירת משאבים",
      reviewModule: "סקירת המודול",
      retakeQuiz: "ביצוע הבוחן מחדש",
      progressEyebrow: "התקדמות",
      progressTitle: "התקדמות ההדרכה שלכם",
      progressBody: "עקבו אחרי מודולים שהושלמו והמשיכו כל דבר שעדיין בתהליך. ההתקדמות נשמרת בדפדפן הזה בלבד.",
      score: "ציון",
      resourcesEyebrow: "משאבים",
      resourcesTitle: "הפניות קצרות להחלטות יומיומיות",
      resourcesBody: "רשימות בדיקה קצרות שאפשר לחזור אליהן אחרי ההדרכה.",
      completed: "הושלם",
      noScore: "אין ציון",
      percentComplete: "הושלם",
      completeLessonsBeforeQuiz: "השלימו את שלבי השיעור לפני התחלת הבוחן.",
      resetProgress: "איפוס התקדמות מקומית",
      resetProgressBody: "שימושי במחשבים משותפים או לפני הדגמה ללקוח. הפעולה מנקה רק את ההתקדמות שנשמרה בדפדפן הזה.",
      resetProgressConfirm: "לנקות את התקדמות ההדרכה המקומית בדפדפן הזה?",
      moduleNotFound: "המודול לא נמצא."
    }
  }
};

const storageKey = "security-training-progress-v1";
const app = document.querySelector("#app");
const languageToggle = document.querySelector("#languageToggle");

let currentLang = loadLanguage();
let progress = migrateProgress(loadProgress());
saveProgress();

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
languageToggle?.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "he" : "en";
  localStorage.setItem("security-training-language", currentLang);
  render();
});

function loadProgress() {
  try {
    const stored = localStorage.getItem(storageKey);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function loadLanguage() {
  const stored = localStorage.getItem("security-training-language");
  return stored === "en" ? "en" : "he";
}

function migrateProgress(storedProgress) {
  const migrated = { ...storedProgress };

  modules.forEach((module) => {
    const merged = mergeProgressRecords(
      migrated[module.id],
      migrated[`en:${module.id}`],
      migrated[`he:${module.id}`]
    );

    if (merged) migrated[module.id] = merged;
    delete migrated[`en:${module.id}`];
    delete migrated[`he:${module.id}`];
  });

  return migrated;
}

function mergeProgressRecords(...records) {
  const usableRecords = records.filter(Boolean);
  if (!usableRecords.length) return null;

  return usableRecords.reduce((merged, record) => {
    const next = { ...merged, ...record };
    const mergedScore = typeof merged.score === "number" ? merged.score : null;
    const recordScore = typeof record.score === "number" ? record.score : null;

    next.answers = {
      ...(merged.answers || {}),
      ...(record.answers || {})
    };
    next.completed = Boolean(merged.completed || record.completed);

    if (mergedScore !== null || recordScore !== null) {
      next.score = Math.max(mergedScore ?? 0, recordScore ?? 0);
    }

    next.completedAt = merged.completedAt || record.completedAt;
    return next;
  }, {});
}

function activeContent() {
  return contentByLanguage[currentLang];
}

function activeModules() {
  return activeContent().modules;
}

function activeResources() {
  return activeContent().resources;
}

function progressKey(moduleId) {
  return moduleId;
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function moduleProgress(module) {
  const stored = progress[progressKey(module.id)] || {};
  const answered = stored.answers ? Object.keys(stored.answers).length : 0;
  const completed = isModuleComplete(module, stored);
  const percent = completed
    ? 100
    : Math.round((answered / (module.steps.length + module.quiz.length)) * 100);

  return {
    ...stored,
    answered,
    completed,
    percent,
    statusKey: completed ? "complete" : answered > 0 ? "inProgress" : "notStarted"
  };
}

function isModuleComplete(module, stored) {
  const answers = stored.answers || {};
  return (
    Boolean(stored.completed) &&
    module.steps.every((_, index) => answers[`step-${index}`] !== undefined) &&
    module.quiz.every((_, index) => answers[`quiz-${index}`] !== undefined)
  );
}

function nextModuleHref(module) {
  const firstOpenStep = firstIncompleteStepIndex(module);

  if (firstOpenStep >= 0) return `#/module/${module.id}/${firstOpenStep}`;
  return `#/module/${module.id}/${module.steps.length}`;
}

function firstIncompleteStepIndex(module) {
  const answers = progress[progressKey(module.id)]?.answers || {};
  return module.steps.findIndex((_, index) => !answers[`step-${index}`]);
}

function allLessonStepsComplete(module) {
  return firstIncompleteStepIndex(module) === -1;
}

function setAnswer(moduleId, key, answer) {
  const keyId = progressKey(moduleId);
  progress[keyId] = progress[keyId] || {};
  progress[keyId].answers = progress[keyId].answers || {};
  progress[keyId].answers[key] = answer;
  saveProgress();
}

function completeModule(module, score) {
  const keyId = progressKey(module.id);
  progress[keyId] = progress[keyId] || {};
  progress[keyId].completed = true;
  progress[keyId].score = score;
  progress[keyId].completedAt = new Date().toISOString();
  saveProgress();
}

function retakeQuiz(module) {
  const keyId = progressKey(module.id);
  const moduleProgressRecord = progress[keyId];
  if (!moduleProgressRecord?.answers) return;

  Object.keys(moduleProgressRecord.answers).forEach((answerKey) => {
    if (answerKey.startsWith("quiz-")) delete moduleProgressRecord.answers[answerKey];
  });

  delete moduleProgressRecord.completed;
  delete moduleProgressRecord.score;
  delete moduleProgressRecord.completedAt;
  saveProgress();
  const quizHash = `#/module/${module.id}/${module.steps.length}`;
  if (window.location.hash === quizHash) {
    renderQuiz(module);
  } else {
    window.location.hash = quizHash;
  }
}

function resetLocalProgress() {
  progress = {};
  saveProgress();
  render();
}

function getRoute() {
  const raw = window.location.hash.replace(/^#\/?/, "");
  const [page, id, step] = raw.split("/");
  const rawStep = step ?? "0";
  const parsedStep = Number(rawStep);

  return {
    page: page || "training",
    id,
    step: Number.isInteger(parsedStep) ? parsedStep : NaN
  };
}

function render() {
  const route = getRoute();
  updateChrome();

  if (route.page === "module") {
    setActiveNav("module");
    renderModule(route.id, route.step);
  } else if (route.page === "progress") {
    setActiveNav("progress");
    renderProgress();
  } else if (route.page === "resources") {
    setActiveNav("resources");
    renderResources();
  } else {
    setActiveNav("training");
    renderDashboard();
  }

  app.focus({ preventScroll: true });
}

function updateChrome() {
  const content = activeContent();
  document.documentElement.lang = currentLang;
  document.documentElement.dir = content.dir;
  document.title = content.brandTitle;
  document.querySelector(".sidebar")?.setAttribute("aria-label", content.nav.training);
  document.querySelector(".brand")?.setAttribute("aria-label", content.brandTitle);
  document.querySelector("#brandTitle").textContent = content.brandTitle;
  document.querySelector("#brandSubtitle").textContent = content.brandSubtitle;
  document.querySelectorAll("[data-nav-label]").forEach((link) => {
    link.textContent = content.nav[link.dataset.navLabel];
  });
  if (languageToggle) languageToggle.textContent = content.switchLabel;
}

function setActiveNav(page) {
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const active = link.dataset.route === page || (page === "module" && link.dataset.route === "training");
    link.classList.toggle("active", active);
    if (active) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function renderDashboard() {
  const content = activeContent();
  const copy = content.copy;
  const modules = activeModules();
  const completed = modules.filter((module) => moduleProgress(module).completed).length;
  const overall = Math.round((completed / modules.length) * 100);

  app.innerHTML = `
    <header class="page-header">
      <div>
        <p class="eyebrow">${copy.dashboardEyebrow}</p>
        <h1>${copy.dashboardTitle}</h1>
        <p>${copy.dashboardBody}</p>
      </div>
      <section class="summary-panel" aria-label="Overall progress">
        <span class="summary-number">${overall}%</span>
        <p>${copy.overallCompletion}</p>
        ${progressBar(overall)}
      </section>
    </header>

    <section class="module-grid" aria-label="${copy.trainingModules}">
      ${modules.map(renderModuleCard).join("")}
    </section>
  `;
}

function renderModuleCard(module) {
  const content = activeContent();
  const copy = content.copy;
  const state = moduleProgress(module);
  const statusClass = state.statusKey === "notStarted" ? "not-started" : state.statusKey === "inProgress" ? "in-progress" : "complete";
  const action = state.completed ? copy.review : state.answered > 0 ? copy.continue : copy.start;
  const href = state.completed ? `#/module/${module.id}/0` : nextModuleHref(module);

  return `
    <article class="module-card">
      <div>
        <h2>${module.title}</h2>
        <p>${module.description}</p>
        <div class="module-meta">
          <span class="status-pill ${statusClass}">${content.status[state.statusKey]}</span>
          <span class="duration-pill">${module.durationMinutes} ${copy.minutes}</span>
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
  const content = activeContent();
  const copy = content.copy;
  const module = activeModules().find((item) => item.id === moduleId);
  if (!module) {
    app.innerHTML = `<section class="empty-state">${copy.moduleNotFound}</section>`;
    return;
  }

  if (!Number.isInteger(stepIndex) || stepIndex < 0) {
    window.location.hash = `#/module/${module.id}/0`;
    return;
  }

  if (stepIndex > module.steps.length) {
    window.location.hash = `#/module/${module.id}/${module.steps.length}`;
    return;
  }

  if (stepIndex === module.steps.length) {
    const firstOpenStep = firstIncompleteStepIndex(module);

    if (firstOpenStep >= 0) {
      window.location.hash = `#/module/${module.id}/${firstOpenStep}`;
      return;
    }

    renderQuiz(module);
    return;
  }

  const step = module.steps[stepIndex];
  const answerKey = `step-${stepIndex}`;
  const selected = progress[progressKey(module.id)]?.answers?.[answerKey];
  const selectedOption = step.question?.options.find((option) => option.id === selected);
  const canContinue = !step.question || Boolean(selectedOption);

  app.innerHTML = `
    <header class="page-header">
      <div>
        <p class="eyebrow">${copy.module} ${stepIndex + 1} ${copy.of} ${module.steps.length}</p>
        <h1>${module.title}</h1>
        <p>${module.description}</p>
      </div>
      <section class="summary-panel" aria-label="Module progress">
        <span class="summary-number">${Math.round(((stepIndex + 1) / (module.steps.length + 1)) * 100)}%</span>
        <p>${copy.lessonProgress}</p>
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
            ? `<div class="feedback ${selectedOption.correct ? "correct" : "incorrect"}" role="status" aria-live="polite">
                <strong>${selectedOption.correct ? copy.goodCatch : copy.notQuite}</strong>
                ${stripFeedbackLead(selectedOption.feedback)}
              </div>`
            : ""
        }
        <div class="lesson-actions">
          ${stepIndex > 0 ? `<a class="button secondary" href="#/module/${module.id}/${stepIndex - 1}">${copy.back}</a>` : `<a class="button secondary" href="#/training">${copy.dashboard}</a>`}
          ${
            canContinue
              ? `<a class="button" href="#/module/${module.id}/${stepIndex + 1}">${stepIndex === module.steps.length - 1 ? copy.startQuiz : copy.continue}</a>`
              : `<button class="button" disabled>${stepIndex === module.steps.length - 1 ? copy.startQuiz : copy.continue}</button>`
          }
        </div>
      </article>

      <aside class="scenario-panel">
        <h2>${copy.moduleSteps}</h2>
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
            <span>${copy.miniQuiz}</span>
          </li>
        </ol>
      </aside>
    </section>
  `;

  wireQuestionButtons(module.id);
}

function stripFeedbackLead(feedback) {
  return feedback
    .replace(/^(Good catch\.|Not quite\.)\s*/, "")
    .replace(/^(זיהוי טוב\.|לא בדיוק\.)\s*/, "");
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
  const copy = activeContent().copy;
  const answers = progress[progressKey(module.id)]?.answers || {};
  const quizAnswers = module.quiz.map((_, index) => answers[`quiz-${index}`]);
  const allAnswered = quizAnswers.every((answer) => answer !== undefined);
  const score = module.quiz.reduce((total, question, index) => {
    return total + (Number(quizAnswers[index]) === question.answer ? 1 : 0);
  }, 0);

  if (!allLessonStepsComplete(module)) {
    const firstOpenStep = firstIncompleteStepIndex(module);
    app.innerHTML = `<section class="empty-state">${copy.completeLessonsBeforeQuiz}</section>`;
    window.location.hash = `#/module/${module.id}/${Math.max(firstOpenStep, 0)}`;
    return;
  }

  if (isModuleComplete(module, progress[progressKey(module.id)] || {})) {
    renderCompletion(module);
    return;
  }

  app.innerHTML = `
    <header class="page-header">
      <div>
        <p class="eyebrow">${copy.miniQuiz}</p>
        <h1>${module.title}</h1>
        <p>${copy.quizBody}</p>
      </div>
      <section class="summary-panel">
        <span class="summary-number">${score}/${module.quiz.length}</span>
        <p>${copy.currentScore}</p>
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
        <a class="button secondary" href="#/module/${module.id}/${module.steps.length - 1}">${copy.back}</a>
        <button class="button" id="complete-module" ${allAnswered ? "" : "disabled"}>${copy.completeModule}</button>
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
    if (!allAnswered || !allLessonStepsComplete(module)) return;
    completeModule(module, score);
    renderCompletion(module);
  });
}

function renderCompletion(module) {
  const copy = activeContent().copy;
  const score = progress[progressKey(module.id)]?.score ?? 0;

  app.innerHTML = `
    <header class="page-header">
      <div>
        <p class="eyebrow">${copy.completeEyebrow}</p>
        <h1>${module.title}</h1>
        <p>${copy.completeBody}</p>
      </div>
      <section class="summary-panel">
        <span class="summary-number">${score}/${module.quiz.length}</span>
        <p>${copy.quizScore}</p>
      </section>
    </header>

    <section class="completion-panel">
      <h2>${copy.keyTakeaways}</h2>
      <ul>
        ${module.takeaways.map((takeaway) => `<li>${takeaway}</li>`).join("")}
      </ul>
      <div class="lesson-actions">
        <a class="button" href="#/training">${copy.returnDashboard}</a>
        <a class="button secondary" href="#/resources">${copy.reviewResources}</a>
        <a class="button secondary" href="#/module/${module.id}/0">${copy.reviewModule}</a>
        <button class="button secondary" id="retake-quiz" type="button">${copy.retakeQuiz}</button>
      </div>
    </section>
  `;

  document.querySelector("#retake-quiz")?.addEventListener("click", () => {
    retakeQuiz(module);
  });
}

function renderProgress() {
  const content = activeContent();
  const copy = content.copy;
  const modules = activeModules();

  app.innerHTML = `
    <header class="page-header">
      <div>
        <p class="eyebrow">${copy.progressEyebrow}</p>
        <h1>${copy.progressTitle}</h1>
        <p>${copy.progressBody}</p>
      </div>
    </header>

    <section class="progress-list">
      ${modules
        .map((module) => {
          const state = moduleProgress(module);
          return `
            <article class="progress-row">
              <div>
                <h2>${module.title}</h2>
                <p>${content.status[state.statusKey]}${state.score !== undefined ? ` · ${copy.score} ${state.score}/${module.quiz.length}` : ""}</p>
                ${progressBar(state.percent)}
              </div>
              <a class="button secondary" href="${state.completed ? `#/module/${module.id}/0` : nextModuleHref(module)}">${state.completed ? copy.review : copy.continue}</a>
            </article>
          `;
        })
        .join("")}
    </section>

    <section class="reset-panel">
      <div>
        <h2>${copy.resetProgress}</h2>
        <p>${copy.resetProgressBody}</p>
      </div>
      <button class="button danger" id="reset-progress" type="button">${copy.resetProgress}</button>
    </section>
  `;

  document.querySelector("#reset-progress")?.addEventListener("click", () => {
    if (window.confirm(copy.resetProgressConfirm)) resetLocalProgress();
  });
}

function renderResources() {
  const copy = activeContent().copy;
  const resources = activeResources();

  app.innerHTML = `
    <header class="page-header">
      <div>
        <p class="eyebrow">${copy.resourcesEyebrow}</p>
        <h1>${copy.resourcesTitle}</h1>
        <p>${copy.resourcesBody}</p>
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

function progressBar(percent) {
  const copy = activeContent().copy;
  return `
    <div class="progress-track" aria-label="${percent}% ${copy.percentComplete}">
      <div class="progress-fill" style="--progress: ${percent}%"></div>
    </div>
  `;
}
