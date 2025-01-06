import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const appState = create<GlobalState>()(persist((set) => ({
    theme: "dark",
    deviceId: null,
    setDeviceId: (deviceId) => set((state) => ({ ...state, deviceId })),
    toggleColorMode: () =>
        set((state) => ({
            theme: state.theme === "dark" ? "light" : "dark",
        })),
}), {
    name: "app-state",
    storage: createJSONStorage(() => AsyncStorage),
}));
