import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './routes/index'
import RootLayout from './components/Layout'
import useTheme from './hooks/theme/useTheme'
import PublicRoute from './components/PublicRoute'
import ProtectedRoute from './components/ProtectedRoute'
import AdminLayout from './components/AdminLayout'
import './index.css'
import Login from './Pages/Admin/Login'
const NotFound = lazy(() => import('./Pages/NotFound'))
const Dashboard = lazy(() => import('./Pages/Admin/Dashboard'))

function App() {
  useTheme()

  return (
    <BrowserRouter>
      <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
        <Routes>     
          <Route element={<RootLayout />}>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
          <Route element={<AdminLayout />}>
            <Route element={<PublicRoute />}>
              <Route path="/admin/login" element={<Login />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
            </Route>
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
