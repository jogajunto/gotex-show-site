import { Block } from "payload";

export const MediaBlock: Block = {
  slug: "mediaBlock",
  fields: [
    {
      name: "media",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};
