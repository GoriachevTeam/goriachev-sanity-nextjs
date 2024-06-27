import { groq } from "next-sanity";
import { menu } from "@/queries/menu";
import { pageMeta, contacts, pageTitle } from "@/queries/page";

export const serviceList = (max = 6) => groq`
  *[_type == "typeOfService"] | order(order asc) [0...${max}] {
    _id,
    name,
    summary,
    "slug": slug.current,
    "icon": icon.asset->url
  }
`;

export const servicesQuery = groq`
  {
    'meta': ${pageMeta("posluhy")},
    'title': ${pageTitle("posluhy")},
    'menu': ${menu},
    'contacts': ${contacts},
    'services': ${serviceList(99)},
  }
`;

const serviceMeta = groq`
  *[_type == "typeOfService" && slug.current == $slug][0] {
    "title": meta.title,
    'description': meta.description
  }
`;

export const servicesSlugs = groq`
  *[_type == "typeOfService"].slug.current
`;

export const serviceQuery = groq`
  *[_type == "typeOfService" && slug.current == $slug][0] {
    'menu': ${menu},
    'contacts': ${contacts},
    'meta': ${serviceMeta},
    description,
    name,
    services,
  }
`;
