import { z } from "zod";

export const IssueSchema = z.object({
    id: z.string(),
    issueTitle: z.string(),
    isPublished: z.boolean(),
    publishDate: z.date(),
});
