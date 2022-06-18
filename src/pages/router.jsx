import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import AuthPage from "./AuthPage";
import MapPage from "./MapPage";
import NotFoundPage from "./NotFoundPage";

export default function AppRouter() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MapPage />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<AuthPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
