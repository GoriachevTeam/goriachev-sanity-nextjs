import { RiSurgicalMaskLine as icon } from "react-icons/ri";

export default {
  name: "doctor",
  title: "Лікарі",
  type: "document",
  icon: icon,
  fields: [
    {
      name: "name",
      title: "ПІБ",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "specialty",
      title: "Фах",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Стаж",
      name: "experience",
      type: "string",
      hidden: true,
    },
    {
      title: "Короткий опис",
      name: "short",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Біографія",
      name: "bio",
      type: "array",
      of: [{ type: "block" }],
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
        },
      ],
    },
    {
      title: "URL",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200,
      },
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: false,
    },
  ],
  preview: {
    select: {
      name: "name",
      specialty: "specialty",
      country: "manufacturer.country",
      image: "image",
      order: "order",
    },
    prepare(selection) {
      const { name, specialty, image, order } = selection;
      return {
        title: `${order} • ${name}`,
        subtitle: specialty,
        media: image,
      };
    },
  },
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
