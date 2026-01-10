import { useFirebaseApp } from "./useFirebaseApp";
import { getAuth } from "firebase/auth";
import { useMemo } from "react";

export const useFirebaseAuth = () => {
  const app = useFirebaseApp();

  return useMemo(() => getAuth(app), [app]);
};
