import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import BlogListPage from "./pages/blogListPage";
import BlogDetailPage from "./pages/blogDetailPage";
import NewBlogPage from "./pages/newBlogPage";
import EditBlogPage from "./pages/editBlogPage";
import ProfilePage from "./pages/profilePage";
import ChangePasswordPage from "./pages/changePasswordPage";
import ProfileInfoFormPage from "./pages/updateInfoPage";

import PrivateRoute from "./components/privateRoute";
import LandingPage from "./pages/landingPage";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/blogs" element={<BlogListPage />} />
        <Route path="/blogs/:id" element={<BlogDetailPage />} />

        <Route
          path="/new-blog"
          element={
            <PrivateRoute>
              <NewBlogPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <PrivateRoute>
              <EditBlogPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile-info"
          element={
            <PrivateRoute>
              <ProfileInfoFormPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <PrivateRoute>
              <ChangePasswordPage />
            </PrivateRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}
