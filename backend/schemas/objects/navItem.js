import cyrillicToTranslit from "cyrillic-to-translit-js";

export default {
  name: "navItem",
  title: "Елементи навігації",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Заголовок",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    // {
    //   name: "href",
    //   title: "Сторінка NextJs",
    //   type: "string",
    //   options: {
    //     list: [
    //       { title: "home", value: "" },
    //       { title: "about", value: "about" },
    //       { title: "doctors", value: "doctors" },
    //       { title: "equipment", value: "equipment" },
    //       { title: "services", value: "services" },
    //       { title: "prices", value: "prices" },
    //       { title: "offers", value: "offers" },
    //       { title: "news", value: "news" },
    //       { title: "contacts", value: "contacts" },
    //     ],
    //   },
    // },
    {
      name: "slug",
      title: "Посилання",
      type: "slug",
      // readOnly: true,
      options: {
        source: "title",
        slugify: (input) =>
          cyrillicToTranslit({ preset: "uk" })
            .transform(input, "-")
            .toLowerCase()
            .slice(0, 200),
      },
    },
  ],
};
