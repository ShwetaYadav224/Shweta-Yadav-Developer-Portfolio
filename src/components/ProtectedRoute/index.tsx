import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authStateAtom } from "../../hooks/atoms/authStateAtom";

/**
 * ProtectedRoute - For pages that require authentication.
 * If user is NOT logged in, redirect to login page.
 */
export default function ProtectedRoute() {
  const auth = useRecoilValue(authStateAtom);
  
  // If user is NOT authenticated, redirect to login
  if (!auth.isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }
  
  // If authenticated, render the child routes via Outlet
  return <Outlet />;
}
