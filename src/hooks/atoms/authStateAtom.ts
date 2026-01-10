import { atom } from "recoil";

interface AuthStateType {
   isAuthenticated: boolean;
  userEmail: string | null;
  uid: string | null;
}

const getInitialAuthState = (): AuthStateType => {
  const savedState = localStorage.getItem("authState");
  return savedState
    ? JSON.parse(savedState)
    : { isAuthenticated: false, userEmail: null, uid: null };
};
export const authStateAtom = atom<AuthStateType>({
  key: "authState",
  default: getInitialAuthState(),
});
export const saveAuthState = (state: AuthStateType) => {
  localStorage.setItem("authState", JSON.stringify(state));
};

export const clearAuthState = () => {
  localStorage.removeItem("authState");
};
