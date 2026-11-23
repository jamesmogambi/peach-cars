import { defineType, defineField } from "sanity";

export const brand = defineType({
  name: "brand",
  title: "Brand",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "logo", title: "Logo", type: "image" }),
    defineField({ name: "models", title: "Models", type: "array", of: [{ type: "string" }] }),
  ],
});
