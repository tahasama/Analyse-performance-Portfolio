import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL("../", import.meta.url));
const outputDir = join(rootDir, "dist");
const templatePath = join(outputDir, "index.html");
const configPath = join(rootDir, "site.config.json");
const markerPattern = /<!-- route-meta:start -->[\s\S]*?<!-- route-meta:end -->/;

const siteConfig = JSON.parse(await readFile(configPath, "utf8"));
const SITE_URL = siteConfig.siteUrl.replace(/\/$/, "");
const SOCIAL_IMAGE = `${SITE_URL}/og-image.png`;

if (!/^https?:\/\//.test(SITE_URL)) {
  throw new Error("site.config.json must contain an absolute siteUrl.");
}

const routes = [
  {
    path: "/",
    title: "Maatof Taha · Performance Systems, Standards & Knowledge",
    description:
      "Applied performance systems for Document Control, plus independent work in performance governance, document management and professional research.",
    pageType: "ProfilePage",
  },
  {
    path: "/architecture",
    title: "DCIOM Framework · Maatof Taha",
    description:
      "The architecture connecting document management, reporting and decision into one governed performance system.",
    entity: { type: "CreativeWork", name: "DCIOM Framework" },
  },
  {
    path: "/standard",
    title: "Document Management Standard · Maatof Taha",
    description:
      "An independently authored document management standard for controlled project information, with traceable Rules, Routes and configurable conformance checks.",
    entity: { type: "CreativeWork", name: "Document Management Standard" },
  },
  {
    path: "/research",
    title: "Documentation Body of Knowledge · Maatof Taha",
    description:
      "An independently authored architectural map of the documentation profession, its disciplines, patterns and practical relationships.",
    entity: { type: "Book", name: "Documentation Body of Knowledge" },
  },
  {
    path: "/experience",
    title: "Experience · Maatof Taha",
    description:
      "Document Control experience, education, capabilities, contact details and downloadable resume.",
    pageType: "ProfilePage",
  },
  {
    path: "/project/c1-status",
    title: "Status & Visibility · Maatof Taha",
    description:
      "A live, consolidated picture of every document's current state. No scoring, no judgment, just what's true right now.",
    entity: { type: "CreativeWork", name: "Status & Visibility" },
  },
  {
    path: "/project/c2-performance",
    title: "Flow & Performance · Maatof Taha",
    description:
      "Converts operational state into one comparable performance signal per discipline, contractor, and reviewer.",
    entity: { type: "CreativeWork", name: "Flow & Performance" },
  },
  {
    path: "/project/c3-findings-advisory",
    title: "Findings & Advisory · Maatof Taha",
    description:
      "Diagnoses performance failures by type (capacity, execution, or control) and routes ranked findings to the function positioned to respond.",
    entity: { type: "CreativeWork", name: "Findings & Advisory" },
  },
  {
    path: "/project/c4-process-action",
    title: "Process & Action · Maatof Taha",
    description:
      "Compares this quarter against last, concludes what actually moved, and determines what that movement justifies.",
    entity: { type: "CreativeWork", name: "Process & Action" },
  },
  {
    path: "/project/c5-strategy-impact",
    title: "Strategy & Impact · Maatof Taha",
    description:
      "Projects current trajectory forward and simulates what intervention would be required to hit a target.",
    entity: { type: "CreativeWork", name: "Strategy & Impact" },
  },
  {
    path: "/project/c6-questionnaire-tracking",
    title: "Commitment & Tracking · Maatof Taha",
    description:
      "Turns governance meetings into binding, named commitments, then reconciles them against what actually happened.",
    entity: { type: "CreativeWork", name: "Commitment & Tracking" },
  },
];

const personId = `${SITE_URL}/#person`;
const websiteId = `${SITE_URL}/#website`;

const htmlEscape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const canonicalUrl = (path) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

const createStructuredData = (route) => {
  const url = canonicalUrl(route.path);
  const pageId = `${url}#webpage`;
  const page = {
    "@type": route.pageType ?? "WebPage",
    "@id": pageId,
    url,
    name: route.title,
    description: route.description,
    isPartOf: { "@id": websiteId },
    inLanguage: "en",
  };

  const graph = [
    {
      "@type": "Person",
      "@id": personId,
      name: "Maatof Taha",
      url: `${SITE_URL}/`,
      knowsAbout: [
        "Document Control",
        "Document Management",
        "Performance Governance",
        "Documentation Research",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${SITE_URL}/`,
      name: "Maatof Taha",
      author: { "@id": personId },
      inLanguage: "en",
    },
    page,
  ];

  if (route.entity) {
    const entityId = `${url}#work`;
    page.mainEntity = { "@id": entityId };
    graph.push({
      "@type": route.entity.type,
      "@id": entityId,
      name: route.entity.name,
      description: route.description,
      url,
      author: { "@id": personId },
      inLanguage: "en",
    });
  } else {
    page.mainEntity = { "@id": personId };
  }

  if (route.path === "/") {
    const listId = `${SITE_URL}/#authored-works`;
    page.hasPart = { "@id": listId };
    graph.push({
      "@type": "ItemList",
      "@id": listId,
      name: "Authored works",
      itemListElement: [
        { position: 1, path: "/architecture", name: "DCIOM Framework" },
        { position: 2, path: "/standard", name: "Document Management Standard" },
        { position: 3, path: "/research", name: "Documentation Body of Knowledge" },
      ].map((item) => ({
        "@type": "ListItem",
        position: item.position,
        url: canonicalUrl(item.path),
        name: item.name,
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
};

const createMetaBlock = (route) => {
  const url = canonicalUrl(route.path);
  const title = htmlEscape(route.title);
  const description = htmlEscape(route.description);
  const openGraphType = route.entity ? "article" : "website";
  const structuredData = JSON.stringify(createStructuredData(route)).replaceAll(
    "<",
    "\\u003c",
  );

  return `<!-- route-meta:start -->
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="author" content="Maatof Taha" />
    <link rel="canonical" href="${url}" />

    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="${openGraphType}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:site_name" content="Maatof Taha" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:image" content="${SOCIAL_IMAGE}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Maatof Taha portfolio" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${SOCIAL_IMAGE}" />
    <meta name="twitter:image:alt" content="Maatof Taha portfolio" />

    <script type="application/ld+json">${structuredData}</script>
    <!-- route-meta:end -->`;
};

const template = await readFile(templatePath, "utf8");
if (!markerPattern.test(template)) {
  throw new Error("The route metadata markers are missing from dist/index.html.");
}

for (const route of routes) {
  const html = template.replace(markerPattern, createMetaBlock(route));
  const relativePath =
    route.path === "/" ? "index.html" : `${route.path.slice(1)}.html`;
  const outputPath = join(outputDir, relativePath);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html, "utf8");
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${canonicalUrl(route.path)}</loc></url>`).join("\n")}
</urlset>
`;

const robots = `User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

await writeFile(join(outputDir, "sitemap.xml"), sitemap, "utf8");
await writeFile(join(outputDir, "robots.txt"), robots, "utf8");

console.log(
  `Generated crawler metadata, sitemap and robots.txt for ${routes.length} public routes.`,
);
