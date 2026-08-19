export interface ExperienceEntry {
  role: string;
  organization: string;
  period: string;
  bullets: string[];
}

export interface EducationEntry {
  credential: string;
  focus: string;
  institution: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ContactInfo {
  email: string;
  linkedin?: string;
  phone?: string;
  location?: string;
}

export interface ExperienceContent {
  positioningStatement: string;
  summary: string;
  roles: ExperienceEntry[];
  education: EducationEntry[];
  skills: SkillGroup[];
  contact: ContactInfo;
}

export const experience: ExperienceContent = {
  positioningStatement:
    "A hands-on Document Control professional combining EDMS operations, reporting and analytics, practical systems development, and independently authored governance research.",
  summary:
    "5+ years in document control across multi-project building construction, wastewater treatment, and thermal power environments, based in Morocco. Hands-on with Aconex/EDMS operations, Power BI/DAX reporting, and developing practical tools where no formal system was available.",
  roles: [
    {
      role: "Document Controller",
      organization: "Company S.A.",
      period: "05/2023 – Present",
      bullets: [
        "Managed the document-control function within Aconex.",
        "Ensured document integrity, version control, metadata governance, and timely information flow across multidisciplinary engineering teams.",
        "Designed and maintained Power BI solutions supporting project governance, supplier performance, document review status, and management reporting.",
        "Provided user training and guidance on workflows, transmittals, metadata standards, and Aconex practices.",
        "Supported compliance with document-control procedures through structured document management and classification.",
      ],
    },
    {
      role: "Document Controller",
      organization: "Company2",
      period: "02/2022 – 05/2023",
      bullets: [
        "Developed a custom document-management web application from scratch where no formal EDMS was available.",
        "The application supported document storage, version control, metadata management, and reporting.",
        "Implemented document-control standards, naming conventions, metadata structures, and filing systems.",
        "Performed quality checks for documentation accuracy, completeness, and consistency.",
      ],
    },
    {
      role: "Solutions Developer",
      organization: "Freelance / Self-employed",
      period: "02/2018 – 01/2022",
      bullets: [
        "Developed Power BI dashboards for SMEs and translated operational data into KPI reporting and interactive dashboards.",
        "Designed and delivered websites and small applications for local businesses.",
        "Converted operational data into KPI reports and interactive dashboards.",
      ],
    },
    {
      role: "Document Controller",
      organization: "Company3",
      period: "01/2017 – 01/2018",
      bullets: [
        "Managed the full lifecycle of project documentation: registration, updates, final archiving.",
        "Ensured compliance with project standards, client requirements, and contractual requirements.",
        "Controlled and delivered final documentation packages to clients.",
      ],
    },
  ],
  education: [
    {
      credential: "DUT (University Degree in Technology)",
      focus: "Electrical Engineering & Industrial Computing — Automated Systems and Industrial Networks",
      institution: "IUT of Nîmes, France",
    },
  ],
  skills: [
    {
      title: "Document Control",
      items: ["Version Control", "Aconex (EDMS)", "Metadata", "Transmittals", "Document Lifecycle"],
    },
    {
      title: "Core Competencies",
      items: ["Information Governance", "Workflow Management", "Process Improvement", "Practical Systems Development"],
    },
    {
      title: "Reporting & Analytics",
      items: ["Power BI", "DAX", "KPI Reporting", "Dashboard Development"],
    },
    {
      title: "Languages",
      items: ["English — proficient", "French — proficient", "Arabic — native"],
    },
  ],
  contact: {
    email: "taha.maatof@gmail.com",
    linkedin: "https://www.linkedin.com/in/taha-maatof/", 
    // -- paste the real URL here once provided; the
    // Contact section on ExperiencePage.tsx already renders a matching button automatically.
  },
};
