import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Cookies from "js-cookie";
import NewPostPage from "./pages/NewPostPage";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";

const AppRouter = () => {
  const isAuthenticated = !!Cookies.get("userInfo");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/posts"
          element={isAuthenticated ? <Feed /> : <Navigate to="/login" />}
        />
        <Route
          path="/posts/new"
          element={isAuthenticated ? <NewPostPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
