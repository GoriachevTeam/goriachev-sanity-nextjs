import { groq } from "next-sanity";
import { menu } from "@/queries/menu";
import { pageMeta, contacts, pageTitle } from "@/queries/page";

const equipmentList = groq`
  *[_type == "equipment"] | order(order asc) {
    _id,
    name,
    description,
    image,
    'manufacturer': manufacturer->name,
    'manufacturerCountry': manufacturer->country,
  }
`;
export const equipmentQuery = groq`
  {
    'meta': ${pageMeta("obladnennia")},
    'title': ${pageTitle("obladnennia")},
    'menu': ${menu},
    'contacts': ${contacts},
    'equipment': ${equipmentList},
  }
`;
