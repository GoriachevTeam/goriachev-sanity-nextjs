import { groq } from "next-sanity";
import { menu } from "@/queries/menu";
import { pageMeta, contacts, pageTitle } from "@/queries/page";

const content = groq`
  *[_type == "page" && nav.slug.current == 'thanks'][0] {
    content,
  }
`;

export const thanksQuery = groq`
  {
    'meta': ${pageMeta("thanks")},
    'title': ${pageTitle("thanks")},
    'menu': ${menu},
    'contacts': ${contacts},
    'page': ${content},
  }
`;
