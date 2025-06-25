import { z } from "zod";

export const siteSchema = z.object({
  storeName: z.string().min(1),
  theme: z.string().optional(),
  sections: z.array(
    z.union([
      z.object({
        type: z.literal("hero"),
        heading: z.string(),
        subheading: z.string(),
      }),
      z.object({
        type: z.literal("products"),
        products: z.array(
          z.object({
            name: z.string(),
            price: z.number(),
          })
        ),
      }),
    ])
  ),
});
