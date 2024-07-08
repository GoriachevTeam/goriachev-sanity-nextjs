const BASE_URL = "https://goriachev.com.ua";
import { getClient } from "@/utils/sanity";
import { pagesQuery, servicesQuery } from "@/queries/sitemap";

function generateSiteMap(pages, services) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${BASE_URL}</loc>
       <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${BASE_URL}/contacts</loc>
       <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
       <priority>0.8</priority>
     </url>
     ${pages
       .map(({ slug, updated }) => {
         return `
       <url>
           <loc>${`${BASE_URL}/${slug}`}</loc>
           <lastmod>${new Date(updated).toISOString().split("T")[0]}</lastmod>
           <priority>0.7</priority>
       </url>
     `;
       })
       .join("")}
       ${services
         .map(({ slug, updated }) => {
           return `
       <url>
           <loc>${`${BASE_URL}/posluhy/${slug}`}</loc>
           <lastmod>${new Date(updated).toISOString().split("T")[0]}</lastmod>
           <priority>0.6</priority>
       </url>
     `;
         })
         .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const pages = await getClient().fetch(pagesQuery);
  const services = await getClient().fetch(servicesQuery);

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(pages, services);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
