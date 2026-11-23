import { defineType, defineField } from "sanity";

export const car = defineType({
  name: "car",
  title: "Car",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "brand", title: "Brand", type: "reference", to: [{ type: "brand" }] }),
    defineField({ name: "bodyStyle", title: "Body Style", type: "reference", to: [{ type: "bodyStyle" }] }),
    defineField({ name: "price", title: "Price (KES)", type: "number" }),
    defineField({ name: "year", title: "Year", type: "number" }),
    defineField({ name: "mileage", title: "Mileage", type: "number" }),
    defineField({ name: "fuel", title: "Fuel", type: "string" }),
    defineField({ name: "transmission", title: "Transmission", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "images", title: "Images", type: "array", of: [{ type: "image" }] }),
    defineField({ name: "inStock", title: "In Stock", type: "boolean" }),
    defineField({ name: "featured", title: "Featured", type: "boolean" }),
  ],
});
