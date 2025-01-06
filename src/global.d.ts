import type { Database } from "./database.types";

declare global {
  export type GlobalState = {
    theme: "dark" | "light";
    deviceId: string | null;
    toggleColorMode: () => void;
    setDeviceId: (id: string) => void;
  };

  export type Issue = Database["public"]["Tables"]["issues"]["Row"];
}
