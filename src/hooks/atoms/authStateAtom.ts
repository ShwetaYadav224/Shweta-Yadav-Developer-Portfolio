import { atom } from "recoil";

interface AuthStateType {
  isAuthenticated: boolean;
  userEmail: string | null;
  uid: string | null;
  isLoading: boolean;
}

export const authStateAtom = atom<AuthStateType>({
  key: "authState",
  default: {
    isAuthenticated: false,
    userEmail: null,
    uid: null,
    isLoading: true,
  },
});

export const saveAuthState = (_state: Omit<AuthStateType, "isLoading">) => {
  // Persistence is now handled by Firebase Auth listener in App.tsx
  // This function is kept for backward compatibility but does nothing insecure.
};

export const clearAuthState = () => {
  // Handled by Firebase Auth signOut
};
