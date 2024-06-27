import { groq } from "next-sanity";
import { menu } from "@/queries/menu";
export const pageMeta = (page = "") => groq`
  * [_type == "page" && nav.slug.current == '${page}'][0] {
    "title": meta.title,
    'description': meta.description
  }
`;

export const pageTitle = (page = "") =>
  groq` *[_type == "page" && nav.slug.current == '${page}'][0].title `;

export const pageSubtitle = (page = "") =>
  groq` *[_type == "page" && nav.slug.current == '${page}'][0].subtitle `;

export const pageDescription = (page = "") =>
  groq` *[_type == "page" && nav.slug.current == '${page}'][0].description `;

export const pageImage = (page = "") =>
  groq` *[_type == "page" && nav.slug.current == '${page}'][0].heroImage `;

export const pageHref = (page = "") =>
  groq` *[_type == "page" && nav.slug.current == '${page}'][0].nav.slug.current `;

export const pageSlug = (page = "") =>
  groq` *[_type == "page" && nav.slug.current == '${page}'][0].nav.slug.current `;

export const contacts = groq`
  *[ _type == "contacts"][0] {
    city,
    address1,
    address2,
    phones,
    mapLink
  }
`;

export const newsQuery = groq`
  {
    'meta': ${pageMeta("news")},
    'menu': ${menu},
    'contacts': ${contacts},
    'title': ${pageTitle("news")},
  }
`;

export const offersQuery = groq`
  {
    'meta': ${pageMeta("offers")},
    'menu': ${menu},
    'contacts': ${contacts},
  }
`;

export const contactsQuery = groq`
  {
    'meta': ${pageMeta("kontakty")},
    'menu': ${menu},
    'contacts': ${contacts},
  }
`;
