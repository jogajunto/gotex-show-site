import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { buildConfig, TextFieldSingleValidation } from "payload";
import { BlockquoteFeature, BlocksFeature, BoldFeature, FixedToolbarFeature, HeadingFeature, ItalicFeature, lexicalEditor, LinkFeature, LinkFields, OrderedListFeature, ParagraphFeature, UnderlineFeature, UnorderedListFeature } from "@payloadcms/richtext-lexical";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { seoPlugin } from "@payloadcms/plugin-seo";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Press } from "./collections/Press";
import { Posts } from "./collections/Posts";

import { YouTubeEmbedBlock } from "./blocks/YouTubeEmbedBlock";
import { MediaBlock } from "./blocks/MediaBlock";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Press, Posts],
  editor: lexicalEditor({
    features: () => [
      FixedToolbarFeature(),
      ParagraphFeature(),
      UnderlineFeature(),
      BoldFeature(),
      ItalicFeature(),
      OrderedListFeature(),
      UnorderedListFeature(),
      BlockquoteFeature(),
      HeadingFeature({ enabledHeadingSizes: ["h2", "h3", "h4", "h5", "h6"] }),
      LinkFeature({
        enabledCollections: ["posts"],
        fields: ({ defaultFields }) => {
          const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
            if ("name" in field && field.name === "url") return false;
            return true;
          });

          return [
            ...defaultFieldsWithoutUrl,
            {
              name: "url",
              type: "text",
              admin: {
                condition: (_data, siblingData) => siblingData?.linkType !== "internal",
              },
              label: ({ t }) => t("fields:enterURL"),
              required: true,
              validate: ((value, options) => {
                if ((options?.siblingData as LinkFields)?.linkType === "internal") {
                  return true; // no validation needed, as no url should exist for internal links
                }
                return value ? true : "URL is required";
              }) as TextFieldSingleValidation,
            },
          ];
        },
      }),
      BlocksFeature({
        blocks: [YouTubeEmbedBlock, MediaBlock],
      }),
    ],
  }),
  localization: {
    locales: [
      {
        label: "English",
        code: "en",
      },
      {
        label: "Português",
        code: "pt-br",
      },
    ],
    defaultLocale: "pt-br",
    fallback: true,
  },
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    seoPlugin({
      collections: ["posts"],
      generateTitle: ({ doc }) => `${doc.title} | Gotex Show`,
      generateDescription: ({ doc }) => `${doc.content.root.children[0].children[0].text.split(/\s+/).slice(0, 20).join(" ")}... Leia mais!`,
      generateURL: ({ doc }) => `${process.env.SITE_URL}/noticias/${doc?.slug}`,
    }),
  ],
});
