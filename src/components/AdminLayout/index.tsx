import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../../hooks/auth/AuthContext';
function AdminLayout() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}

export default AdminLayout;
