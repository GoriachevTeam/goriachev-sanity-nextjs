import { groq } from "next-sanity";
import { menu } from "@/queries/menu";
import { pageMeta, contacts, pageTitle } from "@/queries/page";

const typeOfService = groq`
  *[_type == "typeOfService"] | order(order asc) {
    _id,
    name,
    summary,
    services,
  }
`;

export const pricesQuery = groq`
  {
    'meta': ${pageMeta("tsiny")},
    'title': ${pageTitle("tsiny")},
    'menu': ${menu},
    'contacts': ${contacts},
    'typeOfService': ${typeOfService},
  }
`;
