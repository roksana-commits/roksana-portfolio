import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outputDir = join(process.cwd(), "dist", "public");
const siteUrl = "https://roksana-portfolio.roksana-portfolio-website.workers.dev";

const pages = {
  about: {
    title: "About Roksana | Technical SEO & AI Search Specialist",
    description: "Learn about Roksana, a Technical SEO, AI Search Optimization, and Data Intelligence Specialist with 7+ years of experience in SEO, research, web data, and digital operations.",
  },
  privacy: {
    title: "Privacy Policy | Roksana",
    description: "Privacy policy for the Roksana portfolio website.",
  },
  terms: {
    title: "Terms of Use | Roksana",
    description: "Terms of use for the Roksana portfolio website.",
  },
  cookies: {
    title: "Cookie Policy | Roksana",
    description: "Cookie information for the Roksana portfolio website.",
  },
  disclaimer: {
    title: "Disclaimer | Roksana",
    description: "Disclaimer for the Roksana portfolio website.",
  },
};

const template = await readFile(join(outputDir, "index.html"), "utf8");

for (const [route, meta] of Object.entries(pages)) {
  const url = `${siteUrl}/${route}/`;
  let html = template;
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${meta.title}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*"\s*\/>/i, `<meta name="description" content="${meta.description}" />`);
  html = html.replace(/<meta name="robots" content="[^"]*"\s*\/>/i, `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/i, `<link rel="canonical" href="${url}" />`);
  html = html.replace(/(<meta property="og:title" content=")[^"]*("\s*\/>)/i, `$1${meta.title}$2`);
  html = html.replace(/(<meta property="og:description" content=")[^"]*("\s*\/>)/i, `$1${meta.description}$2`);
  html = html.replace(/(<meta property="og:url" content=")[^"]*("\s*\/>)/i, `$1${url}$2`);
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*("\s*\/>)?/i, `$1${meta.title}$2`);
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*("\s*\/>)?/i, `$1${meta.description}$2`);
  await mkdir(join(outputDir, route), { recursive: true });
  await writeFile(join(outputDir, route, "index.html"), html, "utf8");
}

const sitemapUrls = [
  `${siteUrl}/`,
  ...Object.keys(pages).map((route) => `${siteUrl}/${route}/`),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.map((url) => `  <url>\n    <loc>${url}</loc>\n  </url>`).join("\n")}\n</urlset>\n`;
await writeFile(join(outputDir, "sitemap.xml"), sitemap, "utf8");

console.log(`Generated ${Object.keys(pages).length} route-specific SEO HTML pages and sitemap.`);
