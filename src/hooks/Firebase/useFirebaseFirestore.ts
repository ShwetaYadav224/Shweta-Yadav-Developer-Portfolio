import { useFirebaseApp } from "./useFirebaseApp";
import { getFirestore } from "firebase/firestore/lite";
import { useMemo } from "react";

export const useFirebaseFirestore = () => {
  const app = useFirebaseApp();

  return useMemo(() => getFirestore(app), [app]);
};
