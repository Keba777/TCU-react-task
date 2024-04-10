import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "./pages/auth/Signup";
import HomePage from "./pages/Home";
import LoginPage from "./pages/auth/Login";
import Cookies from "js-cookie";
import NewPostPage from "./pages/posts/NewPost";
import Feed from "./pages/posts/Feed";
import Profile from "./pages/profile/Profile";
import EditPost from "./pages/posts/EditPost";

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
          path="/posts/edit/:id"
          element={isAuthenticated ? <EditPost /> : <Navigate to="/login" />}
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
