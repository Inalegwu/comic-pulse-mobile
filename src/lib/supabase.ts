import { Env } from "@env";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "src/database.types";

export const supabase = createClient<Database>(
    Env.SUPABASE_URL,
    Env.SUPABASE_KEY,
);
