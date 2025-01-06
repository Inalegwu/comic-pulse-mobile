import { supabase } from "@/lib/supabase";
import { router } from "react-query-kit";

export const issues = router("movies", {
    getIssues: router.query({
        fetcher: async () => {
            const { data, error } = await supabase.from("issues").select();

            if (error) throw new Error(String(error.message));

            return {
                data,
            };
        },
    }),
    getIssueById: router.query({
        fetcher: async ({ id }: { id: string }) => {
            const { error, data } = await supabase.from("issues").select("id ");

            if (error) throw new Error(String(error.message));

            return {
                data,
            };
        },
    }),
});
