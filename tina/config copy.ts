// .tina/config.ts
import { defineConfig } from "tinacms";
import { figureTemplate } from "./templates/figure";
import { figureMarkdownTemplate } from "./templates/figure-md";


const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

const bodyField = {
  type: "rich-text",
  name: "body",
  label: "Body",
  isBody: true,
  templates: [figureTemplate, figureMarkdownTemplate],
};

const commonFields = [
  { type: "string", name: "title", label: "Title", required: true },
  { type: "datetime", name: "date", label: "Publish Date", required: false },
  { type: "boolean", name: "draft", label: "Draft", required: false },
  {
    type: "string",
    name: "description",
    label: "Description",
    required: false,
    ui: { component: "textarea" },
  },
  {
    type: "string",
    name: "tags",
    label: "Tags",
    list: true,
    required: false,
  },
  {
    type: "string",
    name: "categories",
    label: "Categories",
    list: true,
    required: false,
  },
  {
    type: "object",
    name: "cover",
    label: "Cover",
    fields: [
      {
        type: "image",
        name: "image",
        label: "Image",
        ui: {
          uploadDir: ({ document }) => {
            const dir = document?._relativePath?.split("/").slice(0, -1).join("/");
            return dir || "content/posts";
          },
          parse: (filename) => {
            return filename?.split("/").pop() || filename;
          },
           previewSrc: (src, _field, context) => src,
        },
      },
      { type: "string", name: "alt", label: "Alt", required: false },
      { type: "string", name: "caption", label: "Caption", required: false },
      { type: "boolean", name: "relative", label: "Relative", required: false },
    ],
  },
  { type: "rich-text", name: "body", label: "Body", isBody: true },
  ,
  {
    type: "string",
    name: "translationKey",
    label: "Translation Key",
    required: false,
  },
  { type: "boolean", name: "toc", label: "TOC", required: false },
  {
    type: "boolean",
    name: "ShowBreadCrumbs",
    label: "Show Bread Crumbs",
    required: false,
  },
  {
    type: "boolean",
    name: "ShowReadingTime",
    label: "Show Reading Time",
    required: false,
  },
  {
    type: "boolean",
    name: "hideSummary",
    label: "Hide Summary",
    required: false,
  },
  {
    type: "string",
    name: "author",
    label: "Author",
    required: false,
  },
  bodyField,
];

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    publicFolder: "static",
    outputFolder: "tina",
  },

  media: {
    tina: {
      publicFolder: "static",
      mediaRoot: "", 
    },
  },

  schema: {
    collections: [
      {
        name: "pages",
        label: "Pages",
        path: "content/pages",
        format: "md",
        fields: commonFields,
      },
      {
        name: "posts_it",
        label: "Posts (IT)",
        path: "content/posts",
        format: "md",
        match: {
          include: "**/*",
        },
        fields: commonFields,
        ui: {
          filename: {
            readonly: true,
          },
        },
      },

    ],
  },

  ui: {
    previewUrl: () => ({ url: "http://localhost:1313" }),
  },
});
