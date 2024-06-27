import { RiMicroscopeLine as icon } from "react-icons/ri";

export default {
  name: "equipment",
  title: "Обладнання",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Назва",
      type: "string",
    },
    {
      name: "description",
      title: "Опис",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "manufacturer",
      title: "Виробник",
      type: "reference",
      to: [{ type: "manufacturer" }],
    },
    {
      title: "Фото",
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          title: "Альтернативний текст",
          name: "alt",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
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
      manufacturer: "manufacturer.name",
      country: "manufacturer.country",
      image: "image",
      order: "order",
    },
    prepare(selection) {
      const { name, manufacturer, country, image, order } = selection;
      return {
        title: `${order} • ${name}`,
        subtitle: `${manufacturer} • ${country}`,
        media: image,
      };
    },
  },
};
