import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authStateAtom } from "../../hooks/atoms/authStateAtom";

/**
 * PublicRoute - For pages that should only be accessible when NOT logged in.
 * Example: Login page - if already logged in, redirect to dashboard.
 */
export default function PublicRoute() {
  const auth = useRecoilValue(authStateAtom);
  
  // If user is authenticated, redirect to dashboard
  if (auth.isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }
  
  // If not authenticated, render the child routes via Outlet
  return <Outlet />;
}
