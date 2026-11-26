import { defineType, defineField } from "sanity";

export const bodyStyle = defineType({
  name: "bodyStyle",
  title: "Body Style",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
  ],
});
