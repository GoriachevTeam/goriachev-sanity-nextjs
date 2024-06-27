import { RiCoinsLine as icon } from "react-icons/ri";

export default {
  title: "Послуги",
  name: "service",
  type: "object",
  icon,
  fields: [
    {
      title: "Назва",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Ціна",
      name: "price",
      type: "number",
      validation: (Rule) => Rule.required().integer(),
    },
    {
      title: "Ціна за два ока",
      name: "price2",
      type: "number",
    },
    {
      title: "Ціна зі знижкою",
      name: "discountPrice",
      type: "number",
    },
    {
      title: "Опис",
      name: "description",
      type: "string",
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
      price: "price",
      price2: "price2",
      description: "description",
      discountPrice: "discountPrice",
    },
    prepare(selection) {
      const { name, price, description, discountPrice, price2 } = selection;
      return {
        title: name,
        subtitle: `${
          discountPrice
            ? discountPrice
            : price2
            ? `${price} / ${price2}`
            : price
        } ₴${description ? ` • ${description}` : ""}`,
      };
    },
  },
};
