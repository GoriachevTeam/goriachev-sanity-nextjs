import { groq } from "next-sanity";
import {
  pageMeta,
  pageTitle,
  pageDescription,
  pageImage,
  pageSlug,
  contacts,
} from "@/queries/page";
import { menu } from "@/queries/menu";
import { serviceList } from "@/queries/services";

const about = groq`
  *[_type == "page" && nav.slug.current == "pro-tsentr"][0] | order(order asc) {
    description,
    "image": heroImage,
    title,
    "href": nav.slug.current,
  }
`;

export const homeQuery = groq`
  {
    'meta': ${pageMeta("holovna")},
    'menu': ${menu},
    'contacts': ${contacts},
    'services': {
      'list': ${serviceList()},
      'title': ${pageTitle("posluhy")},
      'href': ${pageSlug("posluhy")},
    },
    'about': ${about},
    'doctors': {
      'title': ${pageTitle("likari")},
      'href': ${pageSlug("likari")},
      'description': ${pageDescription("likari")},
      'image': ${pageImage("likari")},
    },
    'equipment': * [_type == "equipment"] | order(order asc)[0] {
      name,
      description,
      image,
      "manufacturer": manufacturer->name,
      "manufacturerCountry": manufacturer->country,
      'title': ${pageTitle("obladnennia")},
      'href': ${pageSlug("obladnennia")},
	  }
  }
`;
