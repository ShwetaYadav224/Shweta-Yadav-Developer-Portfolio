import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authStateAtom } from "../../hooks/atoms/authStateAtom";

/**
 * ProtectedRoute - For pages that require authentication.
 * If user is NOT logged in, redirect to login page.
 */
export default function ProtectedRoute() {
  const auth = useRecoilValue(authStateAtom);
  
  // If authentication state is still loading, show nothing or a spinner
  if (auth.isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  // If user is NOT authenticated, redirect to login
  if (!auth.isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }
  
  // If authenticated, render the child routes via Outlet
  return <Outlet />;
}
