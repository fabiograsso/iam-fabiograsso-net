import type { Template } from "tinacms";

export const figureTemplate: Template = {
  name: "figure",
  label: "Hugo figure",
  match: { start: "{{<", end: ">}}", name: "figure" },
  fields: [
    {
      type: "image",
      name: "src",
      label: "Image",
      ui: {
        uploadDir: ({ document }) => {
          const rel = document?._relativePath || "";
          return rel.split("/").slice(0, -1).join("/") || "content/posts";
        },
        parse: (filename) => filename?.split("/").pop() || filename,
      },
    },
    { type: "string", name: "alt", label: "Alt", required: false },
    { type: "string", name: "class", label: "CSS class", required: false },
    { type: "string", name: "title", label: "Title", required: false },
    { type: "string", name: "caption", label: "Caption", required: false },
    { type: "string", name: "link", label: "Link", required: false },
    { type: "string", name: "width", label: "Width", required: false },
    { type: "string", name: "height", label: "Height", required: false },
  ],
};
