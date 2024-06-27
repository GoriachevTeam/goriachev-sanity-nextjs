import { groq } from "next-sanity";
import { menu } from "@/queries/menu";
import { pageMeta, contacts, pageTitle } from "@/queries/page";

const doctorList = groq`
  *[_type == "doctor"] | order(order asc) {
    _id,
    experience,
    image,
    name,
    "bio": short,
    specialty,
  }
`;

export const doctorsQuery = groq`
  {
    'meta': ${pageMeta("likari")},
    'title': ${pageTitle("likari")},
    'menu': ${menu},
    'contacts': ${contacts},
    'doctors': ${doctorList}
  }
`;
