import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const location = window.location.pathname;
  const token = localStorage.getItem("token");

  return token 
    ? <Outlet />
    : <Navigate to="/login" replace state={{ from: location }} />;
}

export default PrivateRoutes;