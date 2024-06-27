import { RiPercentLine as icon } from "react-icons/ri";

export default {
  name: "offer",
  title: "Акції",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Заголовок",
      type: "string",
    },
    {
      title: "Опис",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "active",
      title: "Активна",
      type: "boolean",
    },
  ],
};
