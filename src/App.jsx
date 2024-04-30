import { Routes, Route } from "react-router-dom";
import { PostsPage } from "./pages/posts";
import { LoginPage, RegisterPage } from "./pages/auth";
import { Layout } from "./pages";
import "./App.css";

const App = () => {
  return (
    /* absolute routes / */
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default App;
