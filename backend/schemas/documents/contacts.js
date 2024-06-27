import { RiContactsBookLine as icon } from "react-icons/ri";

export default {
  name: "contacts",
  title: "Контакти",
  type: "document",
  icon,
  fields: [
    {
      title: "Населений пункт",
      name: "city",
      type: "string",
    },
    {
      title: "Адреса 1",
      name: "address1",
      type: "string",
    },
    {
      title: "Адреса 2",
      name: "address2",
      type: "string",
    },
    {
      title: "Посилання на мапу",
      name: "mapLink",
      type: "string",
    },
    {
      name: "phones",
      title: "Телефони",
      type: "array",
      of: [{ type: "phone" }],
    },
  ],
};
