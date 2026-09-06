export interface ExperienceEntry {
  role: string;
  organization: string;
  period: string;
  /** Sector and scale of the work, e.g. "Thermal Power Plant, 1386 MW".
   * This is what evidences the range the summary claims, so it renders
   * alongside the organization rather than being folded into a bullet. */
  context?: string;
  /** Country only, no city -- the original resume redacts city names. */
  country?: string;
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
    "A hands-on Document Control professional combining operations, reporting, analytics, and systems development with independently authored work in governance, document management, and research.",
  summary:
    "5+ years in document control across multi-project building construction, wastewater treatment, and thermal power environments, based in Morocco. Hands-on with Aconex/EDMS operations, Power BI/DAX reporting, and developing practical tools where no formal system was available.",
  roles: [
    {
      role: "Document Controller",
      organization: "JESA S.A (JV OCP & Worley)",
      period: "05/2023 – Present",
      context:
        "Multi-Project Building Construction (Education, Residential & Public Facilities)",
      country: "Morocco",
      bullets: [
        "Managed document control within Aconex, ensuring document integrity, version control, metadata governance, and timely information flow across multidisciplinary engineering teams.",
        "Designed and maintained Power BI dashboards supporting project governance, supplier performance, document review status, and management reporting.",
        "Provided user training and guidance on workflows, transmittals, metadata standards, and Aconex best practices.",
        "Ensured compliance with document control procedures through structured management and classification.",
      ],
    },
    {
      role: "Document Controller",
      organization: "Societe Nouvelle des Conduites d'Eau (SNCE)",
      period: "02/2022 – 05/2023",
      context: "Wastewater Treatment Plant (~10,000 m3/day)",
      country: "Morocco",
      bullets: [
        "Developed a custom web-based document management application from scratch, in the absence of a formal EDMS, supporting document storage, user access, version control, metadata management, and reporting.",
        "Implemented document control standards, naming conventions, metadata structures, and filing systems to improve document consistency and retrieval efficiency.",
        "Performed rigorous quality checks to ensure documentation accuracy, completeness, and consistency.",
      ],
    },
    {
      role: "Solutions Developer",
      organization: "Freelance",
      period: "02/2018 – 01/2022",
      context: "Small Business Digital Solutions",
      country: "Morocco (Remote)",
      bullets: [
        "Built web-based document and inventory management systems for small businesses, applying structured data organization and version control principles.",
        "Developed Power BI dashboards for small and medium-sized businesses, transforming operational data into KPI reports and interactive dashboards.",
      ],
    },
    {
      role: "Document Controller",
      organization: "Daewoo Engineering & Construction Co.,Ltd",
      period: "01/2017 – 01/2018",
      context: "Thermal Power Plant, 1386 MW (Piping Department)",
      country: "Morocco",
      bullets: [
        "Managed the full lifecycle of project documentation, from registration and updates to final archiving.",
        "Controlled and delivered final documentation packages, ensuring compliance with project standards, client requirements, and contractual obligations.",
      ],
    },
  ],
  education: [
    {
      credential: "DUT (University Degree in Technology)",
      focus: "Electrical Engineering & Industrial Computing: Automated Systems and Industrial Networks",
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
      items: ["English (proficient)", "French (proficient)", "Arabic (native)"],
    },
  ],
  contact: {
    email: "taha.maatof@gmail.com",
    linkedin: "https://www.linkedin.com/in/taha-maatof/", 
    // -- paste the real URL here once provided; the
    // Contact section on ExperiencePage.tsx already renders a matching button automatically.
  },
};
