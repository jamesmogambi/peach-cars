import { defineType, defineField } from "sanity";

export const carousel = defineType({
  name: "carousel",
  title: "Carousel",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "image", title: "Image", type: "image" }),
    defineField({ name: "link", title: "Link", type: "url" }),
  ],
});
