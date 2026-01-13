import { useMemo } from "react";
import app from "./config";

export const useFirebaseApp = () => {
  return useMemo(() => app, []);
};
    