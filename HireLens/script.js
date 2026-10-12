const roleLabels = {
  frontend: "Frontend Developer",
  software: "Software Developer",
  qa: "QA Engineer",
  "it-support": "IT Support Specialist"
};

const interviewTypeLabels = {
  behavioral: "Behavioral",
  technical: "Technical",
  mixed: "Mixed"
};

const difficultyLabels = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard"
};

const behavioralQuestions = {
  easy: [
    "Tell me about yourself and what interests you about this type of role.",
    "Describe a school, personal, or work project that you are proud of. What did you contribute?",
    "Tell me about a time you had to learn something new to complete a task.",
    "Describe a time you worked with other people on a project. What was your role?",
    "Tell me about a mistake you made while working on something. What did you do after noticing it?",
    "How do you organize your tasks when you have more than one deadline?"
  ],

  medium: [
    "Tell me about a project where your first approach did not work. How did you adjust?",
    "Describe a disagreement you had with a teammate about how a task should be done. How did you handle it?",
    "Tell me about a time you received feedback that required you to change your work.",
    "Describe a situation where you had several important tasks at the same time. How did you decide what to do first?",
    "Tell me about a technical problem that took longer than expected to solve. How did you keep making progress?",
    "Describe a time when requirements were unclear. What did you do before continuing the work?"
  ],

  hard: [
    "Tell me about a decision you made with incomplete information. What risks did you consider and what happened afterward?",
    "Describe a project where you had to balance quality, time, and scope. What trade-offs did you make?",
    "Tell me about a time your work caused an unexpected problem for another person or part of a project. How did you respond?",
    "Describe a situation where you strongly disagreed with a technical or project decision but still needed to move forward professionally.",
    "Tell me about a project that failed to meet an important goal. What would you do differently if you were responsible for it again?",
    "Describe a situation where you had to influence a team decision even though you were not the project leader."
  ]
};

const technicalQuestions = {
  frontend: {
    easy: [
      "What is the difference between HTML, CSS, and JavaScript in a web application?",
      "What is semantic HTML, and why is it useful?",
      "Explain the CSS box model in your own words.",
      "What is the difference between an ID and a class in HTML and CSS?",
      "What does responsive web design mean?",
      "What is the purpose of an event listener in JavaScript?"
    ],

    medium: [
      "Explain the difference between let, const, and var in JavaScript and when you would use each.",
      "How does the browser DOM relate to the HTML document, and how can JavaScript change it?",
      "What is the difference between synchronous and asynchronous JavaScript?",
      "How would you fetch data from an API and handle a failed request?",
      "What problems can occur when building a responsive layout, and how would you test it across screen sizes?",
      "Explain event bubbling and give an example of when event delegation can be useful."
    ],

    hard: [
      "A page becomes noticeably slow after rendering several hundred interactive items. How would you investigate and improve its frontend performance?",
      "Explain how the JavaScript event loop, call stack, task queue, and microtask queue affect asynchronous code execution.",
      "How would you design a frontend that must remain usable when an API is slow, partially unavailable, or returns incomplete data?",
      "What are some causes of layout shifts and poor Core Web Vitals, and how would you reduce them?",
      "How would you prevent cross-site scripting when rendering data received from users or external APIs?",
      "You need to manage shared UI state in a large vanilla JavaScript application without introducing a framework. How would you structure it?"
    ]
  },

  software: {
    easy: [
      "What is the difference between a variable, a function, and an object?",
      "What is an algorithm, and why is it useful to think about algorithms before coding?",
      "Explain the difference between an array and an object.",
      "What is the purpose of a loop in programming?",
      "What is debugging, and what steps do you normally follow when a program does not work?",
      "What is version control, and why would a developer use Git?"
    ],

    medium: [
      "What is the difference between procedural programming and object-oriented programming?",
      "Explain encapsulation and give a simple programming example.",
      "How would you break down a large programming task into smaller pieces before writing code?",
      "What is the difference between a stack and a queue, and where might each be useful?",
      "How would you investigate a bug that only happens sometimes and cannot be reproduced consistently?",
      "What does time complexity describe, and why can it matter when choosing an algorithm?"
    ],

    hard: [
      "How would you design a system where multiple parts of the application need to update the same data safely?",
      "A production service is returning correct results but has become much slower as the number of users grows. How would you investigate the bottleneck?",
      "Explain the trade-offs between storing duplicated data for faster reads and keeping data normalized for consistency.",
      "How would you design error handling for a multi-step process where some operations can succeed while later operations fail?",
      "How would you approach refactoring a large codebase that works but has tightly coupled components and very little documentation?",
      "Explain how you would evaluate whether a new abstraction improves a codebase or simply makes it more complicated."
    ]
  },

  qa: {
    easy: [
      "What is software testing, and why is it important?",
      "What is the difference between an expected result and an actual result in a test case?",
      "What information should a useful bug report contain?",
      "What is the difference between functional and non-functional testing?",
      "What is regression testing?",
      "What would you check first when testing a login form?"
    ],

    medium: [
      "How would you design test cases for a registration form with required fields and validation rules?",
      "What is the difference between severity and priority when reporting a defect?",
      "How would you decide which tests should be performed first when there is limited testing time?",
      "Explain boundary value analysis and give an example.",
      "A developer says they cannot reproduce a bug you reported. What would you do next?",
      "How would you test a feature that depends on an unreliable third-party API?"
    ],

    hard: [
      "You have a release with many changes but only a few hours for testing. How would you build a risk-based test strategy?",
      "How would you test a system where the same action can be performed simultaneously by multiple users?",
      "A defect appears only in production and not in the test environment. How would you investigate the difference?",
      "How would you decide which test cases are good candidates for automation and which should remain manual?",
      "How would you validate data consistency across a frontend, API, and database after a complex transaction?",
      "A product team wants to release despite an unresolved high-severity defect. What information would you provide to help them make the decision?"
    ]
  },

  "it-support": {
    easy: [
      "A user says their computer has no internet connection. What would you check first?",
      "What is the difference between restarting a device and resetting it?",
      "What is an IP address used for?",
      "What is the purpose of DNS?",
      "A user cannot log in even though they believe their password is correct. What basic checks would you perform?",
      "Why is it important to document support incidents and their solutions?"
    ],

    medium: [
      "A computer can access local network resources but cannot access websites. How would you troubleshoot the issue?",
      "How would you diagnose a Windows computer that suddenly became very slow?",
      "A user reports that Wi-Fi works on their phone but not on their laptop. What would you investigate?",
      "Explain the difference between DHCP and a static IP configuration.",
      "A printer is visible on the network but jobs remain stuck in the print queue. How would you troubleshoot it?",
      "How would you distinguish between a hardware problem, operating-system problem, and network problem when troubleshooting a user's device?"
    ],

    hard: [
      "Several users on one floor lose network access while users elsewhere are unaffected. How would you isolate the problem?",
      "A user repeatedly experiences account lockouts even after changing their password. How would you investigate the cause?",
      "A workstation can reach an IP address but cannot access the same server using its hostname. What does that suggest and how would you troubleshoot it?",
      "After a network change, some systems work while others cannot reach a remote subnet. How would you use addressing, routing, and interface information to investigate?",
      "A critical employee laptop may be infected with malware. What steps would you take while protecting company data and limiting further risk?",
      "Users report intermittent connectivity that disappears before you can inspect it. What logs, monitoring information, and tests would you collect to diagnose the issue?"
    ]
  }
};

const fillerPhrases = [
  "um",
  "uh",
  "erm",
  "you know",
  "i mean",
  "basically",
  "actually",
  "kind of",
  "sort of"
];

const setupView =
  document.getElementById("setupView");

const interviewView =
  document.getElementById("interviewView");

const resultsView =
  document.getElementById("resultsView");

const setupForm =
  document.getElementById("setupForm");

const jobRole =
  document.getElementById("jobRole");

const interviewType =
  document.getElementById("interviewType");

const difficulty =
  document.getElementById("difficulty");

const questionCount =
  document.getElementById("questionCount");

const setupError =
  document.getElementById("setupError");

const sessionRole =
  document.getElementById("sessionRole");

const sessionType =
  document.getElementById("sessionType");

const sessionDifficulty =
  document.getElementById("sessionDifficulty");

const sessionQuestionTotal =
  document.getElementById("sessionQuestionTotal");

const sidebarProgressText =
  document.getElementById("sidebarProgressText");

const sidebarProgressBar =
  document.getElementById("sidebarProgressBar");

const questionNumber =
  document.getElementById("questionNumber");

const questionCategory =
  document.getElementById("questionCategory");

const questionText =
  document.getElementById("questionText");

const answerInput =
  document.getElementById("answerInput");

const wordCount =
  document.getElementById("wordCount");

const answerTimer =
  document.getElementById("answerTimer");

const answerError =
  document.getElementById("answerError");

const speechStatus =
  document.getElementById("speechStatus");

const startMicButton =
  document.getElementById("startMicButton");

const stopMicButton =
  document.getElementById("stopMicButton");

const finishAnswerButton =
  document.getElementById("finishAnswerButton");

const nextQuestionButton =
  document.getElementById("nextQuestionButton");

const endSessionButton =
  document.getElementById("endSessionButton");

const resultCompleted =
  document.getElementById("resultCompleted");

const resultWords =
  document.getElementById("resultWords");

const resultTime =
  document.getElementById("resultTime");

const resultFillers =
  document.getElementById("resultFillers");

const resultsSessionLine =
  document.getElementById("resultsSessionLine");

const reviewCount =
  document.getElementById("reviewCount");

const reviewList =
  document.getElementById("reviewList");

const practiceAgainButton =
  document.getElementById("practiceAgainButton");

const brandLink =
  document.getElementById("brandLink");

let session = null;

let timerInterval = null;

let recognition = null;

let speechSupported = false;

let isListening = false;

let speechBaseText = "";

let speechFinalText = "";

let speechEndedWithError = false;

function shuffle(items) {
  const copy = [...items];

  for (
    let index = copy.length - 1;
    index > 0;
    index -= 1
  ) {
    const randomIndex =
      Math.floor(
        Math.random() *
        (index + 1)
      );

    [
      copy[index],
      copy[randomIndex]
    ] = [
      copy[randomIndex],
      copy[index]
    ];
  }

  return copy;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(
      /[&<>"']/g,
      (character) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;"
        })[character]
    );
}

function titleCase(value) {
  if (!value) {
    return "";
  }

  return String(value)
    .charAt(0)
    .toUpperCase() +
    String(value).slice(1);
}

function countWords(text) {
  const cleaned =
    String(text || "")
      .trim();

  if (!cleaned) {
    return 0;
  }

  return cleaned
    .split(/\s+/)
    .filter(Boolean)
    .length;
}

function countFillerPhrases(text) {
  const normalized =
    String(text || "")
      .toLowerCase();

  let total = 0;

  fillerPhrases.forEach(
    (phrase) => {
      const escapedPhrase =
        phrase.replace(
          /[.*+?^${}()|[\]\\]/g,
          "\\$&"
        );

      const pattern =
        new RegExp(
          `\\b${escapedPhrase}\\b`,
          "gi"
        );

      const matches =
        normalized.match(pattern);

      total +=
        matches?.length || 0;
    }
  );

  return total;
}

function formatTime(
  totalSeconds
) {
  const safeSeconds =
    Math.max(
      0,
      Math.floor(
        Number(totalSeconds) || 0
      )
    );

  const minutes =
    Math.floor(
      safeSeconds / 60
    );

  const seconds =
    safeSeconds % 60;

  return `${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(
    2,
    "0"
  )}`;
}

function createQuestion(
  text,
  category,
  level,
  role
) {
  return {
    id:
      `${category}-${level}-${Math.random()
        .toString(36)
        .slice(2)}`,

    text,
    category,
    difficulty: level,
    role
  };
}

function pickByDifficulty(
  bank,
  selectedDifficulty,
  amount,
  category,
  role
) {
  const primary =
    shuffle(
      bank[selectedDifficulty]
    );

  const chosen =
    primary
      .slice(
        0,
        Math.min(
          amount,
          primary.length
        )
      )
      .map(
        (text) =>
          createQuestion(
            text,
            category,
            selectedDifficulty,
            role
          )
      );

  let remaining =
    amount -
    chosen.length;

  if (remaining <= 0) {
    return chosen;
  }

  let fallbackLevels = [];

  if (
    selectedDifficulty ===
    "easy"
  ) {
    fallbackLevels = [
      "medium"
    ];
  }

  if (
    selectedDifficulty ===
    "hard"
  ) {
    fallbackLevels = [
      "medium"
    ];
  }

  if (
    selectedDifficulty ===
    "medium"
  ) {
    fallbackLevels = [
      "hard",
      "easy"
    ];
  }

  for (
    const fallbackLevel
    of fallbackLevels
  ) {
    if (remaining <= 0) {
      break;
    }

    const candidates =
      shuffle(
        bank[fallbackLevel]
      );

    const take =
      Math.min(
        remaining,
        selectedDifficulty ===
          "medium"
          ? Math.ceil(
              remaining / 2
            )
          : remaining
      );

    chosen.push(
      ...candidates
        .slice(0, take)
        .map(
          (text) =>
            createQuestion(
              text,
              category,
              fallbackLevel,
              role
            )
        )
    );

    remaining =
      amount -
      chosen.length;
  }

  return chosen;
}

function interleaveQuestions(
  first,
  second
) {
  const output = [];

  const longest =
    Math.max(
      first.length,
      second.length
    );

  for (
    let index = 0;
    index < longest;
    index += 1
  ) {
    if (first[index]) {
      output.push(
        first[index]
      );
    }

    if (second[index]) {
      output.push(
        second[index]
      );
    }
  }

  return output;
}

function buildQuestionSet(
  config
) {
  const total =
    config.questionCount;

  if (
    config.interviewType ===
    "behavioral"
  ) {
    return pickByDifficulty(
      behavioralQuestions,
      config.difficulty,
      total,
      "behavioral",
      config.role
    );
  }

  if (
    config.interviewType ===
    "technical"
  ) {
    return pickByDifficulty(
      technicalQuestions[
        config.role
      ],
      config.difficulty,
      total,
      "technical",
      config.role
    );
  }

  const technicalCount =
    Math.ceil(
      total / 2
    );

  const behavioralCount =
    total -
    technicalCount;

  const technical =
    pickByDifficulty(
      technicalQuestions[
        config.role
      ],
      config.difficulty,
      technicalCount,
      "technical",
      config.role
    );

  const behavioral =
    pickByDifficulty(
      behavioralQuestions,
      config.difficulty,
      behavioralCount,
      "behavioral",
      config.role
    );

  return interleaveQuestions(
    technical,
    behavioral
  ).slice(
    0,
    total
  );
}

function showView(
  viewName
) {
  setupView.classList.add(
    "hidden"
  );

  interviewView.classList.add(
    "hidden"
  );

  resultsView.classList.add(
    "hidden"
  );

  if (
    viewName === "setup"
  ) {
    setupView.classList.remove(
      "hidden"
    );
  }

  if (
    viewName === "interview"
  ) {
    interviewView.classList.remove(
      "hidden"
    );
  }

  if (
    viewName === "results"
  ) {
    resultsView.classList.remove(
      "hidden"
    );
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function currentQuestion() {
  if (!session) {
    return null;
  }

  return session.questions[
    session.currentIndex
  ];
}

function elapsedQuestionSeconds() {
  if (
    !session ||
    !session.questionStartedAt
  ) {
    return 0;
  }

  return Math.floor(
    (
      Date.now() -
      session.questionStartedAt
    ) /
    1000
  );
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(
      timerInterval
    );

    timerInterval = null;
  }
}

function updateTimerDisplay() {
  if (
    !session ||
    session.currentFinished
  ) {
    return;
  }

  answerTimer.textContent =
    formatTime(
      elapsedQuestionSeconds()
    );
}

function startTimer() {
  stopTimer();

  updateTimerDisplay();

  timerInterval =
    setInterval(
      updateTimerDisplay,
      500
    );
}

function updateWordCount() {
  wordCount.textContent =
    countWords(
      answerInput.value
    );
}

function updateSessionSidebar() {
  const current =
    session.currentIndex + 1;

  const total =
    session.questions.length;

  sidebarProgressText.textContent =
    `${current} / ${total}`;

  sidebarProgressBar.style.width =
    `${(
      current /
      total
    ) * 100}%`;

  sessionRole.textContent =
    roleLabels[
      session.config.role
    ];

  sessionType.textContent =
    interviewTypeLabels[
      session.config
        .interviewType
    ];

  sessionDifficulty.textContent =
    difficultyLabels[
      session.config.difficulty
    ];

  sessionQuestionTotal.textContent =
    total;
}

function resetSpeechControls() {
  if (!speechSupported) {
    startMicButton.disabled =
      true;

    stopMicButton.disabled =
      true;

    speechStatus.textContent =
      "Speech recognition is not available in this browser. You can still type your answer.";

    return;
  }

  startMicButton.disabled =
    session?.currentFinished ||
    false;

  stopMicButton.disabled =
    true;

  speechStatus.textContent =
    "Microphone is ready. Your transcript will remain editable after transcription stops.";
}

function renderQuestion() {
  const question =
    currentQuestion();

  if (!question) {
    showResults();
    return;
  }

  stopRecognitionForTransition();

  session.currentFinished =
    false;

  session.questionStartedAt =
    Date.now();

  answerInput.value = "";

  answerInput.readOnly =
    false;

  answerError.textContent =
    "";

  wordCount.textContent =
    "0";

  answerTimer.textContent =
    "00:00";

  const current =
    session.currentIndex + 1;

  const total =
    session.questions.length;

  questionNumber.textContent =
    `QUESTION ${String(
      current
    ).padStart(
      2,
      "0"
    )} / ${String(
      total
    ).padStart(
      2,
      "0"
    )}`;

  questionCategory.textContent =
    `${question.category.toUpperCase()} · ${question.difficulty.toUpperCase()}`;

  questionText.textContent =
    question.text;

  finishAnswerButton.disabled =
    false;

  nextQuestionButton.disabled =
    true;

  nextQuestionButton.innerHTML =
    current === total
      ? `View Results <span>→</span>`
      : `Next Question <span>→</span>`;

  updateSessionSidebar();

  resetSpeechControls();

  startTimer();

  setTimeout(
    () => {
      answerInput.focus();
    },
    100
  );
}

function startInterview(
  event
) {
  event.preventDefault();

  setupError.textContent =
    "";

  const config = {
    role:
      jobRole.value,

    interviewType:
      interviewType.value,

    difficulty:
      difficulty.value,

    questionCount:
      Number(
        questionCount.value
      )
  };

  const questions =
    buildQuestionSet(
      config
    );

  if (
    questions.length !==
    config.questionCount
  ) {
    setupError.textContent =
      "HireLens could not prepare this session. Please try another setup.";

    return;
  }

  session = {
    config,
    questions,
    answers: [],
    currentIndex: 0,
    currentFinished: false,
    active: true,
    startedAt: Date.now(),
    questionStartedAt:
      Date.now()
  };

  showView("interview");

  renderQuestion();
}

function finishCurrentAnswer() {
  if (
    !session ||
    session.currentFinished
  ) {
    return;
  }

  const text =
    answerInput.value
      .trim();

  if (!text) {
    answerError.textContent =
      "Write or transcribe an answer before finishing this question.";

    answerInput.focus();

    return;
  }

  answerError.textContent =
    "";

  if (isListening) {
    stopListening();
  }

  const question =
    currentQuestion();

  const durationSeconds =
    elapsedQuestionSeconds();

  const answer = {
    questionId:
      question.id,

    question:
      question.text,

    category:
      question.category,

    difficulty:
      question.difficulty,

    text,

    wordCount:
      countWords(text),

    fillerCount:
      countFillerPhrases(
        text
      ),

    durationSeconds
  };

  session.answers.push(
    answer
  );

  session.currentFinished =
    true;

  stopTimer();

  answerTimer.textContent =
    formatTime(
      durationSeconds
    );

  answerInput.readOnly =
    true;

  startMicButton.disabled =
    true;

  stopMicButton.disabled =
    true;

  finishAnswerButton.disabled =
    true;

  nextQuestionButton.disabled =
    false;

  speechStatus.textContent =
    "Answer saved. Continue when you are ready.";
}

function nextQuestion() {
  if (
    !session ||
    !session.currentFinished
  ) {
    return;
  }

  const isLast =
    session.currentIndex >=
    session.questions.length -
      1;

  if (isLast) {
    showResults();
    return;
  }

  session.currentIndex += 1;

  renderQuestion();
}

function endSession() {
  if (
    !session ||
    !session.active
  ) {
    return;
  }

  const draft =
    answerInput.value
      .trim();

  let message =
    "End this interview now? Remaining questions will be skipped.";

  if (
    !session.currentFinished &&
    draft
  ) {
    message =
      "End this interview now? Your current unfinished draft will not be counted in the results.";
  }

  const confirmed =
    window.confirm(message);

  if (!confirmed) {
    return;
  }

  showResults();
}

function totalAnswerTime() {
  return session.answers
    .reduce(
      (
        total,
        answer
      ) =>
        total +
        answer.durationSeconds,
      0
    );
}

function totalWords() {
  return session.answers
    .reduce(
      (
        total,
        answer
      ) =>
        total +
        answer.wordCount,
      0
    );
}

function totalFillers() {
  return session.answers
    .reduce(
      (
        total,
        answer
      ) =>
        total +
        answer.fillerCount,
      0
    );
}

function practiceChecks(
  answer
) {
  const checks = [];

  if (
    answer.wordCount <
    25
  ) {
    checks.push(
      "This was a short response. For questions that ask for an example or explanation, you may want to practice adding more concrete detail."
    );
  } else if (
    answer.wordCount >
    220
  ) {
    checks.push(
      "This was a long response. On another practice attempt, check whether any points can be made more directly."
    );
  } else {
    checks.push(
      "The response length falls within a moderate practice range. This is only a length check, not a quality score."
    );
  }

  if (
    answer.fillerCount ===
    0
  ) {
    checks.push(
      "No selected filler phrases were detected in the transcript or typed answer."
    );
  } else if (
    answer.fillerCount <=
    2
  ) {
    checks.push(
      `${answer.fillerCount} selected filler phrase${answer.fillerCount === 1 ? "" : "s"} detected. This count is approximate.`
    );
  } else {
    checks.push(
      `${answer.fillerCount} selected filler phrases were detected. You can review where they appeared and practice replacing some of them with a pause.`
    );
  }

  checks.push(
    `You spent ${formatTime(
      answer.durationSeconds
    )} on this response. This includes thinking, typing, transcription, and editing.`
  );

  return checks;
}

function renderReviewItems() {
  reviewList.innerHTML =
    "";

  if (
    session.answers.length ===
    0
  ) {
    reviewList.innerHTML = `
      <p class="summary-disclaimer">
        No answers were completed before the session ended.
      </p>
    `;

    return;
  }

  session.answers.forEach(
    (
      answer,
      index
    ) => {
      const item =
        document.createElement(
          "details"
        );

      item.className =
        "review-item";

      const checks =
        practiceChecks(
          answer
        );

      item.innerHTML = `
        <summary>

          <span class="review-index">
            ${String(
              index + 1
            ).padStart(
              2,
              "0"
            )}
          </span>

          <span class="review-question">

            <strong>
              ${escapeHtml(
                answer.question
              )}
            </strong>

            <span>
              ${escapeHtml(
                answer.category.toUpperCase()
              )}
              ·
              ${escapeHtml(
                answer.difficulty.toUpperCase()
              )}
            </span>

          </span>

          <span class="review-toggle">
            REVIEW +
          </span>

        </summary>

        <div class="review-body">

          <span class="review-answer-label">
            YOUR ANSWER
          </span>

          <p class="review-answer">${escapeHtml(
            answer.text
          )}</p>

          <div class="review-metrics">

            <span>
              ${answer.wordCount} words
            </span>

            <span>
              ${formatTime(
                answer.durationSeconds
              )} answering time
            </span>

            <span>
              ${answer.fillerCount} approx. fillers
            </span>

          </div>

          <div class="practice-checks">

            <span class="check-label">
              BASIC PRACTICE CHECKS · NOT AI FEEDBACK
            </span>

            <ul>

              ${checks
                .map(
                  (check) =>
                    `<li>${escapeHtml(
                      check
                    )}</li>`
                )
                .join("")}

            </ul>

          </div>

        </div>
      `;

      item.addEventListener(
        "toggle",
        () => {
          const toggle =
            item.querySelector(
              ".review-toggle"
            );

          if (toggle) {
            toggle.textContent =
              item.open
                ? "CLOSE −"
                : "REVIEW +";
          }
        }
      );

      reviewList.appendChild(
        item
      );
    }
  );
}

function showResults() {
  if (!session) {
    return;
  }

  stopTimer();

  stopRecognitionForTransition();

  session.active =
    false;

  showView("results");

  const total =
    session.questions.length;

  const completed =
    session.answers.length;

  resultCompleted.textContent =
    `${completed} / ${total}`;

  resultWords.textContent =
    totalWords();

  resultTime.textContent =
    formatTime(
      totalAnswerTime()
    );

  resultFillers.textContent =
    totalFillers();

  resultsSessionLine.textContent =
    `${roleLabels[
      session.config.role
    ]} · ${
      interviewTypeLabels[
        session.config
          .interviewType
      ]
    } · ${
      difficultyLabels[
        session.config
          .difficulty
      ]
    }`;

  reviewCount.textContent =
    `${completed} completed ${
      completed === 1
        ? "answer"
        : "answers"
    }`;

  renderReviewItems();
}

function practiceAgain() {
  stopTimer();

  stopRecognitionForTransition();

  session = null;

  answerInput.value = "";

  showView("setup");

  setTimeout(
    () => {
      jobRole.focus();
    },
    100
  );
}

function initializeSpeechRecognition() {
  const Recognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!Recognition) {
    speechSupported =
      false;

    resetSpeechControls();

    return;
  }

  speechSupported =
    true;

  recognition =
    new Recognition();

  recognition.lang =
    "en-US";

  recognition.continuous =
    true;

  recognition.interimResults =
    true;

  recognition.maxAlternatives =
    1;

  recognition.onstart =
    () => {
      isListening =
        true;

      speechEndedWithError =
        false;

      answerInput.readOnly =
        true;

      startMicButton.disabled =
        true;

      stopMicButton.disabled =
        false;

      speechStatus.textContent =
        "Listening... Speak normally. Stop the microphone when you want to edit the transcript.";
    };

  recognition.onresult =
    (event) => {
      let interimText = "";

      for (
        let index =
          event.resultIndex;
        index <
        event.results.length;
        index += 1
      ) {
        const transcript =
          event.results[
            index
          ][0]
            .transcript
            .trim();

        if (
          event.results[
            index
          ].isFinal
        ) {
          speechFinalText +=
            `${transcript} `;
        } else {
          interimText +=
            `${transcript} `;
        }
      }

      const pieces = [
        speechBaseText,
        speechFinalText.trim(),
        interimText.trim()
      ].filter(Boolean);

      answerInput.value =
        pieces.join(" ");

      updateWordCount();
    };

  recognition.onerror =
    (event) => {
      speechEndedWithError =
        true;

      const messages = {
        "not-allowed":
          "Microphone permission was denied. You can continue by typing your answer.",

        "service-not-allowed":
          "Speech recognition permission is unavailable. You can continue by typing your answer.",

        "audio-capture":
          "HireLens could not detect a microphone. Check your device and browser microphone settings.",

        "no-speech":
          "No speech was detected. Your existing answer was preserved.",

        network:
          "The browser speech service had a network problem. Your existing answer was preserved.",

        aborted:
          "Microphone transcription stopped.",

        language:
          "The browser could not use the selected speech language."
      };

      speechStatus.textContent =
        messages[
          event.error
        ] ||
        `Speech recognition stopped because of a browser service error (${event.error}). Your answer was preserved.`;

      answerInput.readOnly =
        false;

      isListening =
        false;

      startMicButton.disabled =
        !speechSupported ||
        session?.currentFinished;

      stopMicButton.disabled =
        true;
    };

  recognition.onend =
    () => {
      isListening =
        false;

      answerInput.readOnly =
        session?.currentFinished ||
        false;

      startMicButton.disabled =
        !speechSupported ||
        session?.currentFinished;

      stopMicButton.disabled =
        true;

      if (
        !speechEndedWithError &&
        session &&
        !session.currentFinished
      ) {
        speechStatus.textContent =
          "Microphone stopped. Your transcript is preserved and can now be edited.";
      }
    };

  resetSpeechControls();
}

function startListening() {
  if (
    !speechSupported ||
    !recognition ||
    isListening ||
    session?.currentFinished
  ) {
    return;
  }

  answerError.textContent =
    "";

  speechBaseText =
    answerInput.value
      .trim();

  speechFinalText =
    "";

  speechEndedWithError =
    false;

  try {
    recognition.start();
  } catch (error) {
    console.error(error);

    speechStatus.textContent =
      "The microphone could not start. You can continue typing your answer.";

    answerInput.readOnly =
      false;
  }
}

function stopListening() {
  if (
    !recognition ||
    !isListening
  ) {
    return;
  }

  try {
    recognition.stop();
  } catch (error) {
    console.error(error);
  }
}

function stopRecognitionForTransition() {
  if (
    recognition &&
    isListening
  ) {
    try {
      recognition.abort();
    } catch (error) {
      console.error(error);
    }
  }

  isListening =
    false;

  speechBaseText =
    "";

  speechFinalText =
    "";

  answerInput.readOnly =
    false;
}

function hasUnfinishedWork() {
  if (
    !session ||
    !session.active
  ) {
    return false;
  }

  return (
    session.answers.length >
      0 ||
    answerInput.value
      .trim().length >
      0
  );
}

setupForm.addEventListener(
  "submit",
  startInterview
);

answerInput.addEventListener(
  "input",
  updateWordCount
);

startMicButton
  .addEventListener(
    "click",
    startListening
  );

stopMicButton
  .addEventListener(
    "click",
    stopListening
  );

finishAnswerButton
  .addEventListener(
    "click",
    finishCurrentAnswer
  );

nextQuestionButton
  .addEventListener(
    "click",
    nextQuestion
  );

endSessionButton
  .addEventListener(
    "click",
    endSession
  );

practiceAgainButton
  .addEventListener(
    "click",
    practiceAgain
  );

brandLink.addEventListener(
  "click",
  (event) => {
    event.preventDefault();

    if (
      hasUnfinishedWork()
    ) {
      const confirmed =
        window.confirm(
          "Leave this interview and clear the unfinished session?"
        );

      if (!confirmed) {
        return;
      }
    }

    practiceAgain();
  }
);

window.addEventListener(
  "beforeunload",
  (event) => {
    if (
      !hasUnfinishedWork()
    ) {
      return;
    }

    event.preventDefault();

    event.returnValue =
      "";
  }
);

initializeSpeechRecognition();

showView("setup");