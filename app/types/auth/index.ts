import * as z from "@zod/mini";

export const Account = z.object({
	email: z.string().check(z.email()),
	email_verified: z.boolean(),
	user_name: z.optional(z.string()),
});

export const ProviderIdent = z.enum(["google", "github"]);

export const Provider = z.object({
	email_verified: z.boolean(),
	email: z.string().check(z.email()),
});

export const User = z.object({
	display_name: z.string(),
	name: z.optional(z.string()),
	middle_name: z.optional(z.string()),
	family_name: z.optional(z.string()),
	description: z.optional(z.string()),
	profile_bucket_id: z.optional(z.string()),
	formatier_verified: z.boolean(),
});

export const Session = z.object({
	os: z.string(),
	os_version: z.string(),
	browser: z.string(),
	browser_version: z.string(),
	vendor: z.string(),
});
