export default {
  name: "phone",
  title: "phone",
  type: "object",
  fields: [
    {
      name: "number",
      title: "Номер",
      type: "string",
    },
    {
      name: "icon",
      title: "Іконка",
      type: "image",
      fields: [
        {
          title: "Альтернативний текст",
          name: "alt",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
};
