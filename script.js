const careerAreas = {
  technology: {
    label: "Technology & IT",
    roles: [
      "Frontend Developer",
      "Software Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Web Developer",
      "Mobile App Developer",
      "QA Engineer",
      "Software Tester",
      "IT Support Specialist",
      "Technical Support Specialist",
      "Network Administrator",
      "Network Engineer",
      "Systems Administrator",
      "Database Administrator",
      "Data Analyst",
      "Data Engineer",
      "Cybersecurity Analyst",
      "Cloud Support Associate",
      "UI Developer"
    ]
  },

  business: {
    label: "Business & Administration",
    roles: [
      "Administrative Assistant",
      "Office Administrator",
      "Executive Assistant",
      "Business Analyst",
      "Management Trainee",
      "Business Development Associate",
      "Office Staff",
      "Administrative Officer",
      "Operations Assistant",
      "Business Support Associate"
    ]
  },

  finance: {
    label: "Finance & Accounting",
    roles: [
      "Accountant",
      "Accounting Assistant",
      "Accounting Associate",
      "Bookkeeper",
      "Financial Analyst",
      "Finance Assistant",
      "Audit Associate",
      "Junior Auditor",
      "Accounts Payable Associate",
      "Accounts Receivable Associate",
      "Payroll Assistant",
      "Banking Associate"
    ]
  },

  marketing: {
    label: "Marketing & Communications",
    roles: [
      "Marketing Specialist",
      "Marketing Assistant",
      "Digital Marketing Specialist",
      "Social Media Manager",
      "Social Media Specialist",
      "Content Writer",
      "Copywriter",
      "Communications Associate",
      "Public Relations Assistant",
      "SEO Specialist",
      "Brand Assistant"
    ]
  },

  sales: {
    label: "Sales & Retail",
    roles: [
      "Sales Representative",
      "Sales Associate",
      "Account Executive",
      "Retail Associate",
      "Retail Sales Associate",
      "Business Development Representative",
      "Store Associate",
      "Sales Coordinator",
      "Merchandising Assistant",
      "Real Estate Sales Agent"
    ]
  },

  hr: {
    label: "Human Resources",
    roles: [
      "HR Assistant",
      "HR Associate",
      "HR Generalist",
      "Recruiter",
      "Talent Acquisition Associate",
      "Recruitment Assistant",
      "Training Assistant",
      "Learning and Development Associate",
      "Payroll HR Assistant",
      "Employee Relations Assistant"
    ]
  },

  "customer-service": {
    label: "Customer Service",
    roles: [
      "Customer Service Representative",
      "Call Center Agent",
      "Technical Support Representative",
      "Client Services Associate",
      "Customer Success Associate",
      "Customer Support Specialist",
      "Chat Support Representative",
      "Email Support Representative",
      "Service Desk Representative"
    ]
  },

  healthcare: {
    label: "Healthcare",
    roles: [
      "Nurse",
      "Nursing Assistant",
      "Medical Assistant",
      "Pharmacy Assistant",
      "Healthcare Administrator",
      "Medical Receptionist",
      "Clinic Assistant",
      "Caregiver",
      "Laboratory Assistant",
      "Dental Assistant"
    ]
  },

  education: {
    label: "Education",
    roles: [
      "Teacher",
      "Teaching Assistant",
      "Tutor",
      "Academic Coordinator",
      "School Administrator",
      "Learning Support Assistant",
      "Preschool Teacher",
      "English Teacher",
      "Online Tutor",
      "Training Facilitator"
    ]
  },

  hospitality: {
    label: "Hospitality & Tourism",
    roles: [
      "Hotel Front Desk Associate",
      "Guest Services Associate",
      "Restaurant Staff",
      "Barista",
      "Food Service Crew",
      "Tourism Assistant",
      "Event Coordinator",
      "Reservations Agent",
      "Hotel Staff",
      "Travel Consultant"
    ]
  },

  engineering: {
    label: "Engineering",
    roles: [
      "Civil Engineer",
      "Mechanical Engineer",
      "Electrical Engineer",
      "Electronics Engineer",
      "Industrial Engineer",
      "Computer Engineer",
      "Engineering Assistant",
      "Junior Engineer",
      "Site Engineer",
      "Maintenance Engineer"
    ]
  },

  creative: {
    label: "Design & Creative",
    roles: [
      "Graphic Designer",
      "UI/UX Designer",
      "Video Editor",
      "Multimedia Designer",
      "Photographer",
      "Content Creator",
      "Motion Graphics Designer",
      "Layout Artist",
      "Junior Designer",
      "Video Production Assistant"
    ]
  },

  operations: {
    label: "Operations & Logistics",
    roles: [
      "Operations Assistant",
      "Operations Coordinator",
      "Logistics Coordinator",
      "Warehouse Associate",
      "Supply Chain Assistant",
      "Procurement Assistant",
      "Inventory Assistant",
      "Dispatch Coordinator",
      "Purchasing Assistant",
      "Production Assistant"
    ]
  },

  "project-management": {
    label: "Project Management",
    roles: [
      "Project Coordinator",
      "Project Assistant",
      "Junior Project Manager",
      "Project Management Associate",
      "Scrum Master",
      "PMO Assistant",
      "Implementation Coordinator"
    ]
  },

  research: {
    label: "Research",
    roles: [
      "Research Assistant",
      "Research Associate",
      "Market Research Analyst",
      "Laboratory Assistant",
      "Data Research Assistant",
      "Research Coordinator",
      "Field Research Assistant"
    ]
  },

  other: {
    label: "Other",
    roles: []
  }
};

const interviewTypeLabels = {
  behavioral: "Behavioral",
  "role-specific": "Role-Specific",
  mixed: "Mixed"
};

const difficultyLabels = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard"
};

const behavioralQuestions = {
  easy: [
    "Tell me about yourself and what interests you about this role.",
    "Tell me about a school, personal, volunteer, or work project that you are proud of.",
    "Describe a time you had to learn something new to complete a task.",
    "Tell me about a time you worked with other people. What was your responsibility?",
    "Describe a mistake you made while working on something. What did you do after noticing it?",
    "How do you organize your work when you have more than one deadline?"
  ],

  medium: [
    "Tell me about a project where your first approach did not work. How did you adjust?",
    "Describe a disagreement you had with a teammate. How did you handle it?",
    "Tell me about a time you received feedback that required you to change your work.",
    "Describe a situation where you had several important tasks at the same time. How did you prioritize them?",
    "Tell me about a difficult problem that took longer than expected to solve. How did you keep making progress?",
    "Describe a time when instructions or requirements were unclear. What did you do before continuing?"
  ],

  hard: [
    "Tell me about a decision you made with incomplete information. What risks did you consider?",
    "Describe a project where you had to balance quality, time, and scope. What trade-offs did you make?",
    "Tell me about a time your work caused an unexpected problem for another person or team. How did you respond?",
    "Describe a situation where you strongly disagreed with a decision but still needed to move forward professionally.",
    "Tell me about a project or responsibility that did not achieve its goal. What would you do differently now?",
    "Describe a time when you had to influence a decision even though you were not the person in charge."
  ]
};

const roleSpecificQuestions = {
  technology: {
    easy: [
      "What technical skills do you think are most important for a {role}?",
      "How do you normally approach troubleshooting a technical problem?",
      "How do you make sure your technical work is accurate before considering it finished?",
      "What tools or technologies have you used that would be relevant to a {role}?",
      "How do you learn a technology or tool that you have not used before?",
      "How would you explain a technical problem to someone without a technical background?"
    ],

    medium: [
      "You encounter a technical problem that you cannot reproduce consistently. How would you investigate it?",
      "How would you approach a task as a {role} when the requirements are incomplete or unclear?",
      "A system works correctly but has become noticeably slower. How would you start investigating the cause?",
      "How do you decide whether a technical issue should be fixed immediately or scheduled for later?",
      "How would you test a change before releasing or applying it to users?",
      "A third-party service your system depends on becomes unreliable. How would you reduce the impact on users?"
    ],

    hard: [
      "A production system begins failing intermittently under heavier usage. Walk me through how you would investigate the issue.",
      "How would you approach a technical decision where the fastest solution creates more maintenance work later?",
      "A major change must be released quickly but cannot be fully tested. How would you manage the technical risk?",
      "How would you diagnose a problem that appears to involve the frontend, backend, network, and external services at the same time?",
      "What factors would you consider before replacing a working technical solution with a newer technology?",
      "As a {role}, how would you design your work so that another person could understand, maintain, and troubleshoot it later?"
    ]
  },

  business: {
    easy: [
      "What responsibilities do you think are most important for a {role}?",
      "How do you organize documents, information, or tasks so that they are easy to find later?",
      "How would you prioritize several routine requests that arrive at the same time?",
      "How do you make sure written information is accurate before sending it to someone?",
      "What would you do if someone gave you instructions that were incomplete?",
      "How would you handle confidential business information?"
    ],

    medium: [
      "You receive two urgent requests from different managers at the same time. How would you decide what to handle first?",
      "How would you improve an administrative process that repeatedly causes delays?",
      "A report contains information from several departments and some of the data conflicts. What would you do?",
      "How would you prepare for an important meeting involving several stakeholders?",
      "Someone asks you for information that you are not authorized to share. How would you handle it?",
      "How would you keep track of a business task that depends on several people completing work before a deadline?"
    ],

    hard: [
      "A recurring business process is inefficient, but the team is used to doing it the same way. How would you propose and implement an improvement?",
      "You discover that an important decision was made using incomplete information. How would you respond?",
      "Several departments have competing priorities for the same limited resource. How would you help organize the decision?",
      "How would you design a process that improves efficiency without reducing accuracy or accountability?",
      "A senior stakeholder asks you to rush a task in a way that may create errors. How would you handle the situation?",
      "As a {role}, how would you identify whether an operational problem is caused by people, process, information, or technology?"
    ]
  },

  finance: {
    easy: [
      "What steps would you take to make sure financial records are accurate?",
      "What is the purpose of reconciling financial records?",
      "How would you organize financial documents that may need to be reviewed later?",
      "Why is confidentiality important when handling financial information?",
      "How would you respond if you noticed a simple error in a financial record?",
      "What skills do you think are most important for a {role}?"
    ],

    medium: [
      "You find a discrepancy between a ledger balance and its supporting records. How would you investigate it?",
      "How would you prioritize several financial reports that are due at the same time?",
      "How would you explain a financial discrepancy to someone without an accounting background?",
      "You receive a document with missing information that is needed to complete a transaction. What would you do?",
      "How would you reduce the chance of repeated data-entry errors in a financial process?",
      "How would you verify that a financial report is complete before submitting it?"
    ],

    hard: [
      "You discover a recurring financial discrepancy that previous reports did not identify. How would you investigate the root cause?",
      "How would you balance accuracy and deadline pressure during a high-volume reporting period?",
      "What controls would you recommend to reduce recurring errors in a financial process?",
      "A manager asks you to change the presentation of financial information in a way that could be misleading. How would you respond?",
      "How would you investigate a large unexplained variance between expected and actual financial results?",
      "As a {role}, how would you communicate a financial risk that senior stakeholders may not want to hear?"
    ]
  },

  marketing: {
    easy: [
      "What is the main purpose of a marketing campaign?",
      "What factors would you consider when creating content for a target audience?",
      "How would you organize a simple social media content calendar?",
      "What information would you want to know before promoting a new product or service?",
      "How would you make sure marketing content follows a consistent brand message?",
      "What skills would you bring to a {role} position?"
    ],

    medium: [
      "How would you determine whether a marketing campaign was successful?",
      "A campaign is receiving engagement but very few conversions. What would you investigate?",
      "How would you adapt the same campaign for two audiences with different needs?",
      "A piece of content performs poorly compared with previous posts. What would you examine before changing the strategy?",
      "How would you decide which marketing channel to use for a limited budget?",
      "How would you respond if stakeholders wanted a campaign direction that did not match the target audience?"
    ],

    hard: [
      "Marketing performance declines even though traffic has increased. How would you investigate what is happening?",
      "How would you decide whether to continue, modify, or stop an underperforming campaign?",
      "How would you defend a campaign strategy when stakeholders disagree about the target audience?",
      "A campaign performs strongly on engagement metrics but poorly on business outcomes. How would you evaluate it?",
      "How would you design an experiment to compare two marketing approaches fairly?",
      "As a {role}, how would you balance short-term performance goals with long-term brand value?"
    ]
  },

  sales: {
    easy: [
      "How would you start a conversation with a potential customer?",
      "What questions would you ask before recommending a product or service?",
      "How would you handle a customer who says they need more time before deciding?",
      "What does good customer service mean in a sales role?",
      "How would you learn the details of a product you need to sell?",
      "What qualities are important for a successful {role}?"
    ],

    medium: [
      "A customer says your product is too expensive. How would you respond?",
      "How would you follow up with a potential customer without becoming too aggressive?",
      "A customer is interested but unsure which option best fits their needs. How would you guide them?",
      "How would you prioritize leads when you cannot contact everyone immediately?",
      "You are not meeting your sales target. What would you review before changing your approach?",
      "How would you handle a situation where making a sale would require promising something the company cannot guarantee?"
    ],

    hard: [
      "A major customer is considering a competitor with a lower price. How would you approach the conversation?",
      "How would you recover a customer relationship after an important expectation was not met?",
      "Sales targets are increasing while lead quality is decreasing. How would you adapt your approach?",
      "How would you evaluate whether a sales problem comes from the product, target market, pricing, or sales process?",
      "A short-term sales opportunity may create a poor long-term customer fit. How would you decide whether to pursue it?",
      "As a {role}, how would you balance individual targets with maintaining trust and long-term customer relationships?"
    ]
  },

  hr: {
    easy: [
      "What information would you review before contacting a job applicant?",
      "Why is confidentiality important in human resources?",
      "How would you organize applicant or employee records?",
      "What qualities would you look for when screening candidates for a role?",
      "How would you communicate professionally with an applicant who was not selected?",
      "What skills are important for someone working as a {role}?"
    ],

    medium: [
      "Two candidates have similar qualifications but very different experiences. How would you compare them fairly?",
      "An employee approaches you with a concern involving their manager. How would you handle the conversation?",
      "How would you reduce bias when screening applicants?",
      "A candidate accepts an interview but repeatedly reschedules. How would you handle the situation?",
      "How would you respond if an employee asked you for information that should remain confidential?",
      "How would you evaluate whether a recruitment process is working effectively?"
    ],

    hard: [
      "A hiring manager wants to reject a candidate for a reason unrelated to the actual job requirements. How would you respond?",
      "How would you investigate a sensitive workplace complaint while remaining fair to everyone involved?",
      "Employee turnover increases significantly within one department. How would you investigate possible causes?",
      "How would you balance employee confidentiality with management's need for relevant information?",
      "A company urgently needs to hire many employees without lowering selection quality. How would you improve the recruitment process?",
      "As a {role}, how would you handle a situation where business pressure conflicts with fair HR practice?"
    ]
  },

  "customer-service": {
    easy: [
      "How would you greet and assist a customer who is unsure what they need?",
      "What information would you collect before trying to solve a customer's problem?",
      "How would you explain a process to a customer who is unfamiliar with it?",
      "How would you respond to a customer who is frustrated but still speaking respectfully?",
      "What does good customer service mean to you?",
      "What skills are important for a {role}?"
    ],

    medium: [
      "A customer is frustrated because their issue has already been transferred twice. How would you handle the conversation?",
      "How would you handle a customer request that you cannot approve yourself?",
      "A customer says the solution you provided did not work. What would you do next?",
      "How would you handle several customers waiting for assistance at the same time?",
      "A customer misunderstands a policy and believes the company made an error. How would you explain the situation?",
      "How would you document a customer issue so another representative can continue helping them?"
    ],

    hard: [
      "A customer demands an exception to a policy and threatens to escalate the issue. How would you handle it?",
      "Several customers are reporting the same unresolved issue. What would you do beyond handling each case individually?",
      "How would you balance response speed with accuracy during an unusually high volume of customer requests?",
      "A customer is extremely upset about a problem caused by another department. How would you take ownership without making promises you cannot keep?",
      "You discover that the standard support process is making a recurring customer problem worse. What would you do?",
      "As a {role}, how would you handle a situation where customer satisfaction conflicts with company policy?"
    ]
  },

  healthcare: {
    easy: [
      "How do you make sure important patient or client information is communicated accurately?",
      "How would you respond to someone who is anxious or confused about a healthcare process?",
      "Why is confidentiality important when handling healthcare information?",
      "How would you make sure instructions are correctly understood?",
      "What would you do if you noticed information in a patient or client record that appears incomplete?",
      "What qualities are important for a {role}?"
    ],

    medium: [
      "You have several important responsibilities at once and one patient's needs suddenly change. How would you prioritize?",
      "How would you respond if you noticed information in a patient's record that may be incorrect?",
      "How would you communicate an important concern to another healthcare professional?",
      "A patient or family member is frustrated about a delay. How would you handle the conversation?",
      "How would you respond if someone asked you to perform a task outside your authority or level of training?",
      "How would you maintain confidentiality in a busy environment where several people can hear conversations?"
    ],

    hard: [
      "How would you respond when a patient's needs conflict with established procedures or resource limitations?",
      "You identify a potential safety issue that others have overlooked. How would you handle the situation?",
      "How would you maintain accurate communication during a high-pressure situation involving multiple professionals?",
      "You notice repeated communication errors during handovers. How would you help reduce the risk?",
      "A patient refuses an important recommendation. How would you communicate professionally while respecting their rights?",
      "As a {role}, how would you respond when workload pressure creates a possible risk to safety or quality?"
    ]
  },

  education: {
    easy: [
      "How would you explain a difficult concept to someone learning it for the first time?",
      "How would you prepare for a lesson, tutoring session, or learning activity?",
      "How would you encourage a learner who is struggling?",
      "How would you check whether a learner understood what you explained?",
      "How would you keep learning materials organized?",
      "What qualities are important for a {role}?"
    ],

    medium: [
      "Students in the same class understand a lesson at very different speeds. How would you adapt your approach?",
      "How would you determine whether students actually understood a lesson?",
      "How would you handle a student who repeatedly becomes disengaged during class?",
      "A learner continues making the same mistake even after several explanations. What would you change?",
      "How would you respond to a parent or guardian asking about a student's progress?",
      "How would you handle limited time when several learners need individual support?"
    ],

    hard: [
      "How would you balance curriculum requirements with different learning needs?",
      "A teaching approach that normally works is unsuccessful with a particular group. How would you redesign it?",
      "How would you handle a disagreement with a parent or stakeholder about a student's progress?",
      "Assessment results show that many learners misunderstood the same concept. How would you respond?",
      "How would you support a struggling learner without lowering expectations unfairly?",
      "As a {role}, how would you decide whether a learning problem is caused by the material, teaching method, environment, or another factor?"
    ]
  },

  hospitality: {
    easy: [
      "How would you welcome a guest or customer professionally?",
      "How would you handle a guest asking a question you do not know the answer to?",
      "Why is attention to detail important in hospitality?",
      "How would you stay organized during a busy service period?",
      "How would you respond to a simple guest complaint?",
      "What qualities are important for a {role}?"
    ],

    medium: [
      "A guest arrives before their reservation or service is ready. How would you handle the situation?",
      "How would you respond to a guest who is unhappy with the service they received?",
      "Several guests need assistance at the same time. How would you prioritize them?",
      "A guest requests something outside normal policy. What would you do?",
      "How would you coordinate with another department to resolve a guest issue?",
      "How would you handle a reservation or booking error discovered when the guest arrives?"
    ],

    hard: [
      "A high-value guest is extremely dissatisfied during a very busy period. How would you manage the situation?",
      "Several service failures occur at the same time and staff resources are limited. How would you prioritize?",
      "A guest demands compensation beyond what you are authorized to provide. How would you handle it?",
      "How would you investigate repeated negative feedback about one part of the guest experience?",
      "A team member makes an error that directly affects a guest. How would you recover the experience while handling the internal issue professionally?",
      "As a {role}, how would you balance guest satisfaction, company policy, and operational limitations?"
    ]
  },

  engineering: {
    easy: [
      "What steps would you follow before beginning an engineering task or design?",
      "Why are measurements, specifications, and documentation important in engineering work?",
      "How do you check your work for errors?",
      "How would you approach learning a tool or standard you have not used before?",
      "Why is safety important in engineering decisions?",
      "What technical strengths would you bring to a {role} position?"
    ],

    medium: [
      "A design meets the basic requirement but exceeds the available budget. How would you approach the problem?",
      "You discover that actual site or project conditions differ from the original plan. What would you do?",
      "How would you investigate a repeated equipment, design, or process failure?",
      "How would you explain a technical engineering concern to a non-engineering stakeholder?",
      "Several design options meet the requirements. How would you compare them?",
      "How would you respond if a deadline required a faster solution but you still had unresolved technical concerns?"
    ],

    hard: [
      "A project requirement conflicts with a safety or technical standard. How would you handle the issue?",
      "A system passes calculations or testing but fails under real operating conditions. How would you investigate?",
      "How would you evaluate a design trade-off between cost, reliability, maintainability, and performance?",
      "A significant engineering error is discovered after work has already progressed. How would you respond?",
      "How would you manage technical uncertainty when a project decision cannot be delayed?",
      "As a {role}, how would you defend a safer or more reliable option when stakeholders prefer a cheaper alternative?"
    ]
  },

  creative: {
    easy: [
      "Walk me through how you normally begin a creative project.",
      "How do you use feedback when improving creative work?",
      "How do you organize project files and versions while working?",
      "How do you decide whether a design or edit is finished?",
      "Where do you normally look for references or inspiration?",
      "What creative strengths would you bring to a {role}?"
    ],

    medium: [
      "A client asks for major revisions shortly before the deadline. How would you prioritize the changes?",
      "How do you balance your own creative judgment with a client's requirements?",
      "How would you handle inconsistent visual material that still needs to feel like one project?",
      "A client gives vague feedback such as 'make it better.' How would you clarify what they actually want?",
      "How would you manage several versions of the same creative project without losing track of changes?",
      "How would you explain and defend a creative decision to someone who prefers another direction?"
    ],

    hard: [
      "How would you respond if a stakeholder rejects a direction you strongly believe is the best solution?",
      "A project has strong individual assets but feels inconsistent as a whole. How would you diagnose and fix the problem?",
      "How would you protect quality when scope increases but the deadline does not move?",
      "A client's requested change may make the final output less effective. How would you communicate your concern?",
      "How would you recover a project when key source material is poor quality or incomplete?",
      "As a {role}, how would you decide when to follow a creative trend and when to intentionally avoid it?"
    ]
  },

  operations: {
    easy: [
      "How would you organize daily operational tasks?",
      "Why is accurate inventory or process documentation important?",
      "How would you handle a delay in a routine process?",
      "How do you make sure instructions are followed consistently?",
      "What would you do if an expected delivery or resource did not arrive?",
      "What skills are important for a {role}?"
    ],

    medium: [
      "A delivery delay may affect several downstream tasks. How would you respond?",
      "How would you investigate a recurring inventory discrepancy?",
      "You have limited staff and several urgent operational tasks. How would you prioritize?",
      "How would you improve a process that repeatedly causes unnecessary waiting?",
      "A supplier provides incomplete or incorrect items. What steps would you take?",
      "How would you track whether a new operational procedure is actually improving performance?"
    ],

    hard: [
      "A major supply disruption affects critical operations. How would you develop a response plan?",
      "How would you balance inventory availability with the cost of holding too much stock?",
      "A process performs well most of the time but occasionally creates major delays. How would you investigate the cause?",
      "How would you redesign an operational workflow that involves several teams with conflicting priorities?",
      "A short-term workaround keeps operations running but creates long-term risk. How would you decide when to replace it?",
      "As a {role}, how would you determine whether an operational failure is caused by planning, people, suppliers, systems, or process design?"
    ]
  },

  "project-management": {
    easy: [
      "What information would you want before creating a project plan?",
      "How would you keep track of project tasks and deadlines?",
      "Why is clear communication important in project management?",
      "How would you follow up on an overdue task professionally?",
      "What would you include in a basic project status update?",
      "What qualities are important for a {role}?"
    ],

    medium: [
      "A critical task is late and may affect the rest of the project. How would you respond?",
      "Two team members disagree about who is responsible for a task. How would you handle it?",
      "A stakeholder requests a new feature after the project scope has already been agreed. What would you do?",
      "How would you identify and track project risks?",
      "How would you communicate bad news about a project delay to stakeholders?",
      "Several tasks are behind schedule but the deadline cannot move. How would you help the team reprioritize?"
    ],

    hard: [
      "A project is on schedule but important quality problems are appearing. How would you respond?",
      "Several senior stakeholders want conflicting outcomes from the same project. How would you manage expectations?",
      "A project has exceeded its budget while significant work remains. How would you approach the situation?",
      "How would you decide whether to reduce scope, extend the timeline, or add resources to a troubled project?",
      "A major project risk occurs despite having been identified earlier. How would you lead the response and review what happened?",
      "As a {role}, how would you balance stakeholder expectations with what the delivery team can realistically accomplish?"
    ]
  },

  research: {
    easy: [
      "How would you organize information collected during a research task?",
      "Why is it important to verify the reliability of a source?",
      "How would you document where information or data came from?",
      "What would you do if you found two sources that disagree?",
      "How do you reduce mistakes when entering or reviewing research data?",
      "What skills are important for a {role}?"
    ],

    medium: [
      "How would you choose between several possible sources of data for a research question?",
      "You discover missing values in an important dataset. How would you respond?",
      "How would you explain research findings to someone who is unfamiliar with the topic?",
      "How would you reduce bias when collecting or interpreting information?",
      "A research task produces results different from what you expected. What would you investigate before drawing a conclusion?",
      "How would you maintain consistency when several people are collecting data for the same project?"
    ],

    hard: [
      "Two reliable sources produce conflicting findings. How would you evaluate the disagreement?",
      "How would you respond if a stakeholder wanted you to emphasize only the findings that support their preferred conclusion?",
      "A dataset is large but its quality is uncertain. How would you determine whether it is suitable for analysis?",
      "How would you redesign a research approach after discovering that the original method cannot answer the question properly?",
      "How would you distinguish correlation, coincidence, and plausible causation when interpreting results?",
      "As a {role}, how would you communicate uncertainty without making the research appear useless?"
    ]
  },

  other: {
    easy: [
      "What responsibilities do you expect to handle as a {role}?",
      "What skills do you think are most important for a {role}?",
      "What experience has prepared you for a {role} position?",
      "How would you approach learning a task you have never done before as a {role}?",
      "How would you make sure your work is accurate?",
      "How would you communicate with someone who needs your help or work output?"
    ],

    medium: [
      "Imagine you encounter a problem in your work as a {role} that you have never seen before. How would you approach it?",
      "How would you prioritize several important responsibilities as a {role}?",
      "How would you respond if the instructions for an important task were unclear?",
      "What would you do if you realized that your first approach to a task was not working?",
      "How would you handle feedback that required significant changes to your work?",
      "How would you measure whether you were performing effectively as a {role}?"
    ],

    hard: [
      "As a {role}, how would you make a difficult decision when you do not have all the information you want?",
      "How would you balance quality, speed, and limited resources in a {role} position?",
      "How would you respond if a stakeholder asked you to take an approach you believed could create a serious problem?",
      "How would you investigate a recurring problem that has no obvious cause?",
      "How would you improve a process that technically works but creates repeated frustration or delays?",
      "What risks do you think a strong {role} should learn to identify before they become major problems?"
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
  document.getElementById(
    "setupView"
  );

const interviewView =
  document.getElementById(
    "interviewView"
  );

const resultsView =
  document.getElementById(
    "resultsView"
  );

const setupForm =
  document.getElementById(
    "setupForm"
  );

const careerArea =
  document.getElementById(
    "careerArea"
  );

const jobRole =
  document.getElementById(
    "jobRole"
  );

const customRole =
  document.getElementById(
    "customRole"
  );

const interviewType =
  document.getElementById(
    "interviewType"
  );

const difficulty =
  document.getElementById(
    "difficulty"
  );

const questionCount =
  document.getElementById(
    "questionCount"
  );

const setupError =
  document.getElementById(
    "setupError"
  );

const previewCareer =
  document.getElementById(
    "previewCareer"
  );

const previewRole =
  document.getElementById(
    "previewRole"
  );

const previewType =
  document.getElementById(
    "previewType"
  );

const previewDifficulty =
  document.getElementById(
    "previewDifficulty"
  );

const previewCount =
  document.getElementById(
    "previewCount"
  );

const sessionRole =
  document.getElementById(
    "sessionRole"
  );

const sessionType =
  document.getElementById(
    "sessionType"
  );

const sessionDifficulty =
  document.getElementById(
    "sessionDifficulty"
  );

const sessionQuestionTotal =
  document.getElementById(
    "sessionQuestionTotal"
  );

const sidebarProgressText =
  document.getElementById(
    "sidebarProgressText"
  );

const sidebarProgressBar =
  document.getElementById(
    "sidebarProgressBar"
  );

const questionNumber =
  document.getElementById(
    "questionNumber"
  );

const questionCategory =
  document.getElementById(
    "questionCategory"
  );

const questionText =
  document.getElementById(
    "questionText"
  );

const answerInput =
  document.getElementById(
    "answerInput"
  );

const answerTimer =
  document.getElementById(
    "answerTimer"
  );

const wordCount =
  document.getElementById(
    "wordCount"
  );

const answerError =
  document.getElementById(
    "answerError"
  );

const speechPanel =
  document.getElementById(
    "speechPanel"
  );

const speechStatus =
  document.getElementById(
    "speechStatus"
  );

const startMicButton =
  document.getElementById(
    "startMicButton"
  );

const stopMicButton =
  document.getElementById(
    "stopMicButton"
  );

const finishAnswerButton =
  document.getElementById(
    "finishAnswerButton"
  );

const nextQuestionButton =
  document.getElementById(
    "nextQuestionButton"
  );

const endSessionButton =
  document.getElementById(
    "endSessionButton"
  );

const resultCompleted =
  document.getElementById(
    "resultCompleted"
  );

const resultWords =
  document.getElementById(
    "resultWords"
  );

const resultTime =
  document.getElementById(
    "resultTime"
  );

const resultFillers =
  document.getElementById(
    "resultFillers"
  );

const resultsSessionLine =
  document.getElementById(
    "resultsSessionLine"
  );

const reviewCount =
  document.getElementById(
    "reviewCount"
  );

const reviewList =
  document.getElementById(
    "reviewList"
  );

const practiceAgainButton =
  document.getElementById(
    "practiceAgainButton"
  );

const brandLink =
  document.getElementById(
    "brandLink"
  );

let session = null;

let timerInterval = null;

let recognition = null;

let speechSupported = false;

let isListening = false;

let speechBaseText = "";

let speechFinalText = "";

let speechEndedWithError =
  false;

function escapeHtml(value) {
  return String(
    value ?? ""
  ).replace(
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

function shuffle(items) {
  const copy = [
    ...items
  ];

  for (
    let index =
      copy.length - 1;
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

function countWords(text) {
  const cleaned =
    String(
      text || ""
    ).trim();

  if (!cleaned) {
    return 0;
  }

  return cleaned
    .split(/\s+/)
    .filter(Boolean)
    .length;
}

function countFillerPhrases(
  text
) {
  const normalized =
    String(
      text || ""
    ).toLowerCase();

  let total = 0;

  fillerPhrases.forEach(
    (phrase) => {
      const escaped =
        phrase.replace(
          /[.*+?^${}()|[\]\\]/g,
          "\\$&"
        );

      const pattern =
        new RegExp(
          `\\b${escaped}\\b`,
          "gi"
        );

      const matches =
        normalized.match(
          pattern
        );

      total +=
        matches?.length ||
        0;
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
        Number(
          totalSeconds
        ) || 0
      )
    );

  const minutes =
    Math.floor(
      safeSeconds /
      60
    );

  const seconds =
    safeSeconds %
    60;

  return `${String(
    minutes
  ).padStart(
    2,
    "0"
  )}:${String(
    seconds
  ).padStart(
    2,
    "0"
  )}`;
}

function getCareerLabel() {
  return (
    careerAreas[
      careerArea.value
    ]?.label ||
    "Other"
  );
}

function getSelectedRole() {
  if (
    jobRole.value ===
    "__custom__"
  ) {
    return (
      customRole.value
        .trim() ||
      "Custom Role"
    );
  }

  return (
    jobRole.value ||
    "Custom Role"
  );
}

function updateCustomRoleVisibility() {
  const useCustom =
    jobRole.value ===
    "__custom__";

  customRole
    .classList
    .toggle(
      "hidden",
      !useCustom
    );

  customRole.required =
    useCustom;

  if (!useCustom) {
    customRole.value =
      "";
  }
}

function populateRoles() {
  const selectedArea =
    careerArea.value;

  const area =
    careerAreas[
      selectedArea
    ];

  jobRole.innerHTML =
    "";

  area.roles.forEach(
    (role) => {
      const option =
        document.createElement(
          "option"
        );

      option.value =
        role;

      option.textContent =
        role;

      jobRole.appendChild(
        option
      );
    }
  );

  const customOption =
    document.createElement(
      "option"
    );

  customOption.value =
    "__custom__";

  customOption.textContent =
    "Other / Custom Role";

  jobRole.appendChild(
    customOption
  );

  if (
    selectedArea ===
    "other"
  ) {
    jobRole.value =
      "__custom__";
  }

  updateCustomRoleVisibility();

  updateSetupPreview();
}

function updateSetupPreview() {
  previewCareer.textContent =
    getCareerLabel();

  previewRole.textContent =
    getSelectedRole();

  previewType.textContent =
    interviewTypeLabels[
      interviewType.value
    ];

  previewDifficulty
    .textContent =
      difficultyLabels[
        difficulty.value
      ];

  previewCount.textContent =
    `${questionCount.value} Questions`;
}

function fillRoleTemplate(
  text,
  role
) {
  return text.replace(
    /\{role\}/gi,
    role
  );
}

function createQuestion(
  text,
  category,
  level,
  role,
  career
) {
  return {
    id:
      `${category}-${level}-${Math.random()
        .toString(36)
        .slice(2)}`,

    text:
      fillRoleTemplate(
        text,
        role
      ),

    category,
    difficulty:
      level,
    role,
    career
  };
}

function getFallbackLevels(
  selectedDifficulty
) {
  if (
    selectedDifficulty ===
    "easy"
  ) {
    return [
      "medium",
      "hard"
    ];
  }

  if (
    selectedDifficulty ===
    "hard"
  ) {
    return [
      "medium",
      "easy"
    ];
  }

  return [
    "easy",
    "hard"
  ];
}

function pickByDifficulty(
  bank,
  selectedDifficulty,
  amount,
  category,
  role,
  career
) {
  const output = [];

  const selectedPool =
    shuffle(
      bank[
        selectedDifficulty
      ] || []
    );

  selectedPool
    .slice(
      0,
      amount
    )
    .forEach(
      (text) => {
        output.push(
          createQuestion(
            text,
            category,
            selectedDifficulty,
            role,
            career
          )
        );
      }
    );

  let remaining =
    amount -
    output.length;

  if (
    remaining <= 0
  ) {
    return output;
  }

  const fallbackLevels =
    getFallbackLevels(
      selectedDifficulty
    );

  for (
    const level
    of fallbackLevels
  ) {
    if (
      remaining <= 0
    ) {
      break;
    }

    const candidates =
      shuffle(
        bank[level] ||
        []
      );

    const take =
      Math.min(
        remaining,
        candidates.length
      );

    candidates
      .slice(
        0,
        take
      )
      .forEach(
        (text) => {
          output.push(
            createQuestion(
              text,
              category,
              level,
              role,
              career
            )
          );
        }
      );

    remaining =
      amount -
      output.length;
  }

  return output;
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
    if (
      first[index]
    ) {
      output.push(
        first[index]
      );
    }

    if (
      second[index]
    ) {
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
  const careerBank =
    roleSpecificQuestions[
      config.career
    ] ||
    roleSpecificQuestions
      .other;

  if (
    config.interviewType ===
    "behavioral"
  ) {
    return pickByDifficulty(
      behavioralQuestions,
      config.difficulty,
      config.questionCount,
      "behavioral",
      config.role,
      config.career
    );
  }

  if (
    config.interviewType ===
    "role-specific"
  ) {
    return pickByDifficulty(
      careerBank,
      config.difficulty,
      config.questionCount,
      "role-specific",
      config.role,
      config.career
    );
  }

  const roleCount =
    Math.ceil(
      config.questionCount /
      2
    );

  const behavioralCount =
    config.questionCount -
    roleCount;

  const roleQuestions =
    pickByDifficulty(
      careerBank,
      config.difficulty,
      roleCount,
      "role-specific",
      config.role,
      config.career
    );

  const behavioral =
    pickByDifficulty(
      behavioralQuestions,
      config.difficulty,
      behavioralCount,
      "behavioral",
      config.role,
      config.career
    );

  return interleaveQuestions(
    roleQuestions,
    behavioral
  ).slice(
    0,
    config.questionCount
  );
}

function showView(name) {
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
    name ===
    "setup"
  ) {
    setupView
      .classList
      .remove(
        "hidden"
      );
  }

  if (
    name ===
    "interview"
  ) {
    interviewView
      .classList
      .remove(
        "hidden"
      );
  }

  if (
    name ===
    "results"
  ) {
    resultsView
      .classList
      .remove(
        "hidden"
      );
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function currentQuestion() {
  return (
    session
      ?.questions[
        session.currentIndex
      ] ||
    null
  );
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
  if (!timerInterval) {
    return;
  }

  clearInterval(
    timerInterval
  );

  timerInterval =
    null;
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

function updateProgress() {
  if (!session) {
    return;
  }

  const current =
    session.currentIndex +
    1;

  const total =
    session.questions
      .length;

  const percent =
    (
      current /
      total
    ) *
    100;

  sidebarProgressText
    .textContent =
      `${current} / ${total}`;

  if (
    window.innerWidth <=
    760
  ) {
    sidebarProgressBar
      .style.width =
        `${percent}%`;

    sidebarProgressBar
      .style.height =
        "100%";
  } else {
    sidebarProgressBar
      .style.height =
        `${percent}%`;

    sidebarProgressBar
      .style.width =
        "100%";
  }

  sessionRole.textContent =
    session.config.role;

  sessionType.textContent =
    interviewTypeLabels[
      session.config
        .interviewType
    ];

  sessionDifficulty
    .textContent =
      difficultyLabels[
        session.config
          .difficulty
      ];

  sessionQuestionTotal
    .textContent =
      total;
}

function resetSpeechControls() {
  speechPanel
    .classList
    .remove(
      "listening"
    );

  if (
    !speechSupported
  ) {
    startMicButton.disabled =
      true;

    stopMicButton.disabled =
      true;

    speechStatus.textContent =
      "Speech recognition is unavailable in this browser. You can still type your answer.";

    return;
  }

  startMicButton.disabled =
    session
      ?.currentFinished ||
    false;

  stopMicButton.disabled =
    true;

  speechStatus.textContent =
    "Microphone ready. Your transcript remains editable after transcription stops.";
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

  answerInput.value =
    "";

  answerInput.readOnly =
    false;

  answerError.textContent =
    "";

  wordCount.textContent =
    "0";

  answerTimer.textContent =
    "00:00";

  const current =
    session.currentIndex +
    1;

  const total =
    session.questions
      .length;

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

  const categoryLabel =
    question.category ===
    "role-specific"
      ? "ROLE-SPECIFIC"
      : "BEHAVIORAL";

  questionCategory.textContent =
    `${categoryLabel} · ${question.difficulty.toUpperCase()}`;

  questionText.textContent =
    question.text;

  finishAnswerButton.disabled =
    false;

  nextQuestionButton.disabled =
    true;

  nextQuestionButton.innerHTML =
    current === total
      ? "View Debrief <span>→</span>"
      : "Next Question <span>→</span>";

  updateProgress();

  resetSpeechControls();

  startTimer();

  setTimeout(
    () => {
      answerInput.focus();
    },
    100
  );
}

function validateSetup() {
  setupError.textContent =
    "";

  if (
    jobRole.value ===
      "__custom__" &&
    !customRole.value.trim()
  ) {
    setupError.textContent =
      "Enter the job role you want to practice for.";

    customRole.focus();

    return false;
  }

  return true;
}

function startInterview(
  event
) {
  event.preventDefault();

  if (!validateSetup()) {
    return;
  }

  const config = {
    career:
      careerArea.value,

    careerLabel:
      getCareerLabel(),

    role:
      getSelectedRole(),

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
      "HireLens could not prepare enough questions for this session. Please try another setup.";

    return;
  }

  session = {
    config,
    questions,
    answers: [],
    currentIndex: 0,
    currentFinished:
      false,
    active: true,
    startedAt:
      Date.now(),
    questionStartedAt:
      Date.now()
  };

  showView(
    "interview"
  );

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
      "Enter or transcribe an answer before finishing this question.";

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

  session.answers.push({
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
      countWords(
        text
      ),

    fillerCount:
      countFillerPhrases(
        text
      ),

    durationSeconds
  });

  session.currentFinished =
    true;

  stopTimer();

  answerTimer.textContent =
    formatTime(
      durationSeconds
    );

  answerInput.readOnly =
    true;

  speechPanel
    .classList
    .remove(
      "listening"
    );

  startMicButton.disabled =
    true;

  stopMicButton.disabled =
    true;

  finishAnswerButton.disabled =
    true;

  nextQuestionButton.disabled =
    false;

  speechStatus.textContent =
    "Answer saved. Continue whenever you are ready.";
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
    session.questions
      .length -
    1;

  if (isLast) {
    showResults();
    return;
  }

  session.currentIndex +=
    1;

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

  const message =
    !session.currentFinished &&
    draft
      ? "End the interview? Your unfinished current response will not be included in the debrief."
      : "End this interview? Remaining questions will be skipped.";

  const confirmed =
    window.confirm(
      message
    );

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
      "This response is fairly short. If the question asks for an explanation or example, try adding more specific detail on another attempt."
    );
  } else if (
    answer.wordCount >
    220
  ) {
    checks.push(
      "This response is fairly long. Review whether some points can be communicated more directly."
    );
  } else {
    checks.push(
      "The response falls within a moderate practice length. This is only a length observation, not a quality score."
    );
  }

  if (
    answer.fillerCount ===
    0
  ) {
    checks.push(
      "No selected filler phrases were detected in the transcript or typed response."
    );
  } else if (
    answer.fillerCount ===
    1
  ) {
    checks.push(
      "1 selected filler phrase was detected. This is an approximate text-based count."
    );
  } else {
    checks.push(
      `${answer.fillerCount} selected filler phrases were detected. This is an approximate text-based count.`
    );
  }

  checks.push(
    `You spent ${formatTime(
      answer.durationSeconds
    )} on this response. This includes thinking, typing, transcription, and editing.`
  );

  if (
    answer.category ===
    "behavioral"
  ) {
    checks.push(
      "For behavioral practice, review whether your answer gives enough context, explains what you personally did, and describes the result. Full STAR analysis will be added with AI feedback in Stage 2."
    );
  }

  if (
    answer.category ===
    "role-specific"
  ) {
    checks.push(
      "This version does not determine whether the role-specific content is correct. Technical and professional-content feedback will be added in Stage 2."
    );
  }

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
        No completed answers were saved before the session ended.
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

      const category =
        answer.category ===
        "role-specific"
          ? "ROLE-SPECIFIC"
          : "BEHAVIORAL";

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
              ${category}
              ·
              ${escapeHtml(
                answer.difficulty.toUpperCase()
              )}
            </span>

          </span>

          <span class="review-toggle">
            OPEN +
          </span>

        </summary>

        <div class="review-body">

          <span class="review-answer-label">
            YOUR RESPONSE
          </span>

          <p class="review-answer">${escapeHtml(
            answer.text
          )}</p>

          <div class="review-metrics">

            <span>
              ${answer.wordCount} WORDS
            </span>

            <span>
              ${formatTime(
                answer.durationSeconds
              )} ANSWERING TIME
            </span>

            <span>
              ${answer.fillerCount} APPROX. FILLERS
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

          if (!toggle) {
            return;
          }

          toggle.textContent =
            item.open
              ? "CLOSE −"
              : "OPEN +";
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

  showView(
    "results"
  );

  const completed =
    session.answers.length;

  const total =
    session.questions.length;

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
    `${session.config.careerLabel} · ${session.config.role} · ${
      interviewTypeLabels[
        session.config.interviewType
      ]
    } · ${
      difficultyLabels[
        session.config.difficulty
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

  answerInput.value =
    "";

  showView(
    "setup"
  );

  updateSetupPreview();

  setTimeout(
    () => {
      careerArea.focus();
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

      speechPanel
        .classList
        .add(
          "listening"
        );

      answerInput.readOnly =
        true;

      startMicButton.disabled =
        true;

      stopMicButton.disabled =
        false;

      speechStatus.textContent =
        "Listening. Speak normally, then stop the microphone to edit the transcript.";
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

      speechPanel
        .classList
        .remove(
          "listening"
        );

      const messages = {
        "not-allowed":
          "Microphone permission was denied. Your current answer was preserved and you can continue by typing.",

        "service-not-allowed":
          "Speech recognition permission is unavailable. Your answer was preserved and you can continue by typing.",

        "audio-capture":
          "HireLens could not detect a microphone. Check your device and browser microphone settings.",

        "no-speech":
          "No speech was detected. Your existing answer was preserved.",

        network:
          "The browser speech service encountered a network problem. Your existing answer was preserved.",

        aborted:
          "Microphone transcription stopped. Your answer was preserved.",

        language:
          "The browser could not use the selected speech language."
      };

      speechStatus.textContent =
        messages[
          event.error
        ] ||
        `Speech recognition stopped because of a browser service error (${event.error}). Your current answer was preserved.`;

      answerInput.readOnly =
        false;

      isListening =
        false;

      startMicButton.disabled =
        !speechSupported ||
        session
          ?.currentFinished;

      stopMicButton.disabled =
        true;

      updateWordCount();
    };

  recognition.onend =
    () => {
      isListening =
        false;

      speechPanel
        .classList
        .remove(
          "listening"
        );

      answerInput.readOnly =
        session
          ?.currentFinished ||
        false;

      startMicButton.disabled =
        !speechSupported ||
        session
          ?.currentFinished;

      stopMicButton.disabled =
        true;

      if (
        !speechEndedWithError &&
        session &&
        !session.currentFinished
      ) {
        speechStatus.textContent =
          "Microphone stopped. Your transcript is preserved and editable.";
      }

      updateWordCount();
    };

  resetSpeechControls();
}

function startListening() {
  if (
    !speechSupported ||
    !recognition ||
    isListening ||
    session
      ?.currentFinished
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
    console.error(
      error
    );

    speechStatus.textContent =
      "The microphone could not start. You can continue by typing.";

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
    console.error(
      error
    );
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
      console.error(
        error
      );
    }
  }

  isListening =
    false;

  speechPanel
    ?.classList
    .remove(
      "listening"
    );

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

careerArea.addEventListener(
  "change",
  () => {
    populateRoles();
  }
);

jobRole.addEventListener(
  "change",
  () => {
    updateCustomRoleVisibility();
    updateSetupPreview();
  }
);

customRole.addEventListener(
  "input",
  updateSetupPreview
);

interviewType.addEventListener(
  "change",
  updateSetupPreview
);

difficulty.addEventListener(
  "change",
  updateSetupPreview
);

questionCount.addEventListener(
  "change",
  updateSetupPreview
);

setupForm.addEventListener(
  "submit",
  startInterview
);

answerInput.addEventListener(
  "input",
  updateWordCount
);

startMicButton.addEventListener(
  "click",
  startListening
);

stopMicButton.addEventListener(
  "click",
  stopListening
);

finishAnswerButton.addEventListener(
  "click",
  finishCurrentAnswer
);

nextQuestionButton.addEventListener(
  "click",
  nextQuestion
);

endSessionButton.addEventListener(
  "click",
  endSession
);

practiceAgainButton.addEventListener(
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

window.addEventListener(
  "resize",
  () => {
    if (
      session &&
      session.active
    ) {
      updateProgress();
    }
  }
);

populateRoles();

initializeSpeechRecognition();

showView(
  "setup"
);
