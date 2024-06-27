import { groq } from "next-sanity";
import { menu } from "@/queries/menu";
import { pageMeta, contacts, pageTitle } from "@/queries/page";

const content = groq`
  *[_type == "page" && nav.slug.current == 'pro-tsentr'][0] {
    content,
  }
`;

export const aboutQuery = groq`
  {
    'meta': ${pageMeta("pro-tsentr")},
    'title': ${pageTitle("pro-tsentr")},
    'menu': ${menu},
    'contacts': ${contacts},
    'page': ${content},
  }
`;
