import { groq } from "next-sanity";

export const pagesQuery = groq`
    *[_type == "page" && active == true] {
        "slug": nav.slug.current,
        "updated": _updatedAt
    }
`;

export const servicesQuery = groq`
    *[_type == "typeOfService"] {
        "slug": slug.current,
        "updated": _updatedAt
    }
`;
