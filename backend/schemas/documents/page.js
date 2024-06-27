import { RiPagesLine as icon } from "react-icons/ri";

export default {
  name: "page",
  title: "Сторінки",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Заголовок",
      type: "string",
    },
    {
      name: "active",
      title: "Активна",
      type: "boolean",
    },
    {
      title: "Опис",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Контент",
      name: "content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
    {
      name: "heroImage",
      title: "Хероу",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          title: "Альтернативний текст",
          name: "alt",
          type: "string",
        },
      ],
    },
    {
      name: "nav",
      title: "Навігація",
      type: "navItem",
      options: { collapsible: true, collapsed: true },
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
};
