import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../hooks/auth/useAuth"

export default function PublicRoute() {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return null
  }

  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />
  }
  return <Outlet />
}