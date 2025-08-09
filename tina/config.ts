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
          // Example: content/posts/my-post/index.it.md -> content/posts/my-post
          const rel = document?._relativePath || "";
          const dir = rel.split("/").slice(0, -1).join("/");
          return dir || "content/posts";
        },
        parse: (filename) => {
          // Store only the file name (relative in the bundle)
          return filename?.split("/").pop() || filename;
        },
        previewSrc: (src, _field, context) => {
          // If src is already absolute, return as-is.
          if (!src || src.startsWith("http") || src.startsWith("/")) return src;
          // Otherwise, compute a preview path relative to the doc directory.
          // This helps Tina preview bundle-local images in dev.
          const rel = context?.document?._relativePath || "";
          const dir = rel.split("/").slice(0, -1).join("/");
          const joined = `${dir}/${src}`.replaceAll("//", "/");
          // For Tina preview, you can return the repo path (joined).
          // If your dev server serves content/ files directly, keep joined;
          // if not, you may need a custom preview handler. Start with joined:
          return joined;
        },
      },
    },
    { type: "string", name: "alt", label: "Alt", required: false },
    { type: "string", name: "caption", label: "Caption", required: false },
    { type: "boolean", name: "relative", label: "Relative", required: false },
    ],
  },
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
  {
            type: "image",
            name: "image",
            label: "Image (same folder as the MD)",
            ui: {
              uploadDir: ({ document }) => {
                // content/posts/my-post/index.it.md -> content/posts/my-post
                const rel = document?._relativePath || "";
                const dir = rel.split("/").slice(0, -1).join("/");
                return dir || "content/posts";
              },
              // Save only the basename so Hugo resolves from the bundle
              parse: (media) => {
                const value = typeof media === "string" ? media : media?.filename || media?.id;
                return value?.split("/").pop() || value;
              },
              // Optional: preview in editor
              previewSrc: (src, _field, context) => {
                if (!src || src.startsWith("http") || src.startsWith("/")) return src;
                const rel = context?.document?._relativePath || "";
                const dir = rel.split("/").slice(0, -1).join("/");
                return `${dir}/${src}`.replaceAll("//", "/");
              },
            },
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
      static: false,
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
        name: "posts",
        label: "Posts",
        path: "content/posts",
        format: "md",
        match: { include: "**/*" },
        fields: commonFields,
        ui: {
          filename: { readonly: true },
        },
      }
    ],
  },

  ui: {
    previewUrl: () => ({ url: "http://localhost:1313" }),
  },
});
