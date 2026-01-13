import { useFirebaseAuth } from "../Firebase/useFirebaseAuth";
import { useCallback } from "react";
import { signInWithEmailAndPassword, updatePassword, useDeviceLanguage } from "firebase/auth"

const useLogIn = () => {
  const auth = useFirebaseAuth()

  useDeviceLanguage(auth)

  const signInWithEmail = useCallback(
    ({ email, password }: { email: string; password: string }) => {
      return signInWithEmailAndPassword(auth, email, password)
    },
    [auth]
  )

  const resetPassword = useCallback(
    ({ password }: { password: string }) => {
      if (auth.currentUser) {
        return updatePassword(auth.currentUser, password)
      }
      return null;
    },
    [auth]
  );

  return {
    signInWithEmail,
    resetPassword,
  };
};

export default useLogIn;
