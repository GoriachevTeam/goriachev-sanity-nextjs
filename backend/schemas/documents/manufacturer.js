import { RiBuildingLine as icon } from "react-icons/ri";

export default {
  title: "Виробники",
  name: "manufacturer",
  type: "document",
  icon,
  fields: [
    {
      title: "Назва",
      name: "name",
      type: "string",
    },
    {
      title: "Країна",
      name: "country",
      type: "string",
      options: {
        list: [
          { title: "США", value: "США" },
          { title: "Німеччина", value: "Німеччина" },
          { title: "Франиція", value: "Франиція" },
          { title: "Італія", value: "Італія" },
          { title: "Польща", value: "Польща" },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "country",
    },
  },
};
