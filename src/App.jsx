import { Routes, Route } from "react-router-dom";
import { PostsPage } from "./pages/posts";
import { LoginPage, RegisterPage } from "./pages/auth";
import { Layout } from "./pages";
import { PrivateRoutes } from "./routes";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<PostsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contact" element={<h2>Contact</h2>} />

        {/* private routes */}

        <Route element={<PrivateRoutes />}>
          <Route path="/profile" element={<h2>Profile</h2>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
