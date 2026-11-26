import { defineType, defineField } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service Center",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "about", title: "About", type: "text" }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image" }),
    defineField({
      name: "whyChooseUs",
      title: "Why Choose Us",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text" }),
            defineField({ name: "icon", title: "Icon", type: "image" }),
          ],
        },
      ],
    }),
    defineField({ name: "footer", title: "Footer", type: "text" }),
  ],
});
