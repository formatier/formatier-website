import * as z from "@zod/mini";

export const PostSchema = z.object({
	content: z.string().check(z.minLength(1)),
	tags: z.optional(z.array(z.string())),
	spacialTag: z.optional(
		z.object({
			title: z.string(),
			color: z.optional(z.string().check(z.hex())),
		}),
	),
});
