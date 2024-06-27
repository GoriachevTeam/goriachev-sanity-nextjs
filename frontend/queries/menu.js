import { groq } from "next-sanity";
export const menu = groq`
  *[_type == "page" && active == true] | order(order asc) {
    _id,
    'name': nav.name,
    'href': nav.slug.current,
  }
`;
