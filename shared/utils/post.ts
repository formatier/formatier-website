import * as z from "@zod/mini";

const postSchema = z.object({
  content: z.string().check(z.minLength(1)),
}) 