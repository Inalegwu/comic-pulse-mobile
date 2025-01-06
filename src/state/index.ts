import { appState } from "./app";
import { createSelectors } from "./factory";

export const app = createSelectors(appState);
