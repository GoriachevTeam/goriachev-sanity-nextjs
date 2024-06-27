import { RiEye2Line as icon } from "react-icons/ri";

export default {
  title: "Послуги",
  name: "typeOfService",
  type: "document",
  icon,
  fields: [
    {
      title: "Назва",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Короткий опис",
      name: "summary",
      type: "string",
    },
    {
      title: "Опис",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "URL",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Послуги",
      name: "services",
      type: "array",
      of: [{ type: "service" }],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: "Іконка",
      name: "icon",
      type: "image",
    },
    {
      name: "meta",
      title: "SEO",
      type: "seo",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: false,
    },
  ],
  orderings: [
    {
      title: "Order, Asc",
      name: "siteOrderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Order, Desc",
      name: "siteOrderDesc",
      by: [{ field: "order", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      name: "name",
      image: "icon",
      order: "order",
    },
    prepare(selection) {
      const { name, image, order } = selection;
      return {
        title: `${order} • ${name}`,
        media: image,
      };
    },
  },
};
