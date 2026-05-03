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

const modulesHe = [
  {
    id: "pii",
    title: "טיפול במידע אישי ובמידע חברה",
    description: "למדו לזהות מידע אישי ולשתף אותו בצורה בטוחה.",
    durationMinutes: 6,
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
      }
    ],
    takeaways: [
      "מתייחסים למידע אישי כרגיש כברירת מחדל.",
      "משתפים את המינימום הדרוש.",
      "משתמשים בכלים מאושרים ובבקרת גישה.",
      "מדווחים מהר על חשיפה בטעות."
    ]
  },
  {
    id: "phishing",
    title: "פישינג והודעות חשודות",
    description: "תרגלו זיהוי אימיילים חשודים, קישורים, קבצים מצורפים ובקשות דחופות.",
    durationMinutes: 5,
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
    durationMinutes: 5,
    steps: [
      {
        title: "מגנים על גישה לחשבון",
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
      "השתמשו בכפתור הדיווח של החברה או העבירו לתיבת האבטחה המאושרת.",
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
      resources: "Resources",
      results: "Results"
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
      progressEyebrow: "Progress",
      progressTitle: "Your training progress",
      progressBody: "Track completed modules and continue anything still in progress.",
      score: "Score",
      resourcesEyebrow: "Resources",
      resourcesTitle: "Quick references for everyday decisions",
      resourcesBody: "Short checklists learners can return to after completing the training.",
      resultsEyebrow: "Demo admin view",
      resultsTitle: "Local results summary",
      resultsBody:
        "This prototype stores progress in this browser only. A future backend can replace this view with organization-wide reporting.",
      modulesComplete: "Modules complete",
      completionRate: "Completion rate",
      browserProfile: "for this browser profile",
      averageQuizResult: "Average quiz result",
      acrossScores: "across available module scores",
      completed: "Completed",
      noScore: "No score",
      percentComplete: "complete",
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
      resources: "משאבים",
      results: "תוצאות"
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
      progressEyebrow: "התקדמות",
      progressTitle: "התקדמות ההדרכה שלכם",
      progressBody: "עקבו אחרי מודולים שהושלמו והמשיכו כל דבר שעדיין בתהליך.",
      score: "ציון",
      resourcesEyebrow: "משאבים",
      resourcesTitle: "הפניות קצרות להחלטות יומיומיות",
      resourcesBody: "רשימות בדיקה קצרות שאפשר לחזור אליהן אחרי ההדרכה.",
      resultsEyebrow: "תצוגת מנהל לדוגמה",
      resultsTitle: "סיכום תוצאות מקומי",
      resultsBody:
        "אב הטיפוס שומר התקדמות בדפדפן הזה בלבד. בעתיד אפשר להחליף תצוגה זו בדוחות ארגוניים מבוססי שרת.",
      modulesComplete: "מודולים הושלמו",
      completionRate: "שיעור השלמה",
      browserProfile: "בפרופיל הדפדפן הזה",
      averageQuizResult: "ציון בוחן ממוצע",
      acrossScores: "על בסיס ציוני המודולים הזמינים",
      completed: "הושלם",
      noScore: "אין ציון",
      percentComplete: "הושלם",
      moduleNotFound: "המודול לא נמצא."
    }
  }
};

const storageKey = "security-training-progress-v1";
const app = document.querySelector("#app");
const languageToggle = document.querySelector("#languageToggle");

let progress = loadProgress();
let currentLang = loadLanguage();

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
  return stored === "he" ? "he" : "en";
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
  return `${currentLang}:${moduleId}`;
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function moduleProgress(module) {
  const stored = progress[progressKey(module.id)] || {};
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
    statusKey: completed ? "complete" : answered > 0 ? "inProgress" : "notStarted"
  };
}

function nextModuleHref(module) {
  const answers = progress[progressKey(module.id)]?.answers || {};
  const firstOpenStep = module.steps.findIndex((_, index) => !answers[`step-${index}`]);

  if (firstOpenStep >= 0) return `#/module/${module.id}/${firstOpenStep}`;
  return `#/module/${module.id}/${module.steps.length}`;
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
  updateChrome();
  setActiveNav(route.page);

  if (route.page === "module") return renderModule(route.id, route.step || 0);
  if (route.page === "progress") return renderProgress();
  if (route.page === "resources") return renderResources();
  if (route.page === "results") return renderResults();
  renderDashboard();
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
    link.classList.toggle("active", link.dataset.route === page || (page === "module" && link.dataset.route === "training"));
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

  if (stepIndex >= module.steps.length) {
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
            ? `<div class="feedback ${selectedOption.correct ? "correct" : "incorrect"}">
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

  if (progress[progressKey(module.id)]?.completed) {
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
    if (!allAnswered) return;
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
      </div>
    </section>
  `;
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

    <section class="results-list">
      ${modules
        .map((module) => {
          const state = moduleProgress(module);
          return `
            <article class="result-row">
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
  `;
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

function renderResults() {
  const content = activeContent();
  const copy = content.copy;
  const modules = activeModules();
  const completed = modules.filter((module) => moduleProgress(module).completed).length;
  const averageScore = modules.reduce((total, module) => {
    const score = progress[progressKey(module.id)]?.score;
    return total + (typeof score === "number" ? score / module.quiz.length : 0);
  }, 0);

  app.innerHTML = `
    <header class="page-header">
      <div>
        <p class="eyebrow">${copy.resultsEyebrow}</p>
        <h1>${copy.resultsTitle}</h1>
        <p>${copy.resultsBody}</p>
      </div>
      <section class="summary-panel">
        <span class="summary-number">${completed}/${modules.length}</span>
        <p>${copy.modulesComplete}</p>
      </section>
    </header>

    <section class="results-list">
      <article class="result-row">
        <div>
          <h2>${copy.completionRate}</h2>
          <p>${Math.round((completed / modules.length) * 100)}% ${copy.browserProfile}</p>
        </div>
      </article>
      <article class="result-row">
        <div>
          <h2>${copy.averageQuizResult}</h2>
          <p>${Math.round((averageScore / modules.length) * 100)}% ${copy.acrossScores}</p>
        </div>
      </article>
      ${modules
        .map((module) => {
          const state = moduleProgress(module);
          return `
            <article class="result-row">
              <div>
                <h2>${module.title}</h2>
                <p>${content.status[state.statusKey]}${state.completedAt ? ` · ${copy.completed} ${new Date(state.completedAt).toLocaleDateString(currentLang === "he" ? "he-IL" : "en-US")}` : ""}</p>
              </div>
              <span class="score-pill">${state.score !== undefined ? `${state.score}/${module.quiz.length}` : copy.noScore}</span>
            </article>
          `;
        })
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
