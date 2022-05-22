import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { AllPostsPage } from "./pages/AllPostsPage";
import { PostPage } from "./pages/PostPage";
import { AppContainer } from "./AppStyles";
import { NotFound } from "./components/NotFound";
import { Footer } from "./components/Footer";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { useContext, useEffect } from "react";
import { verifyUser } from "./context/AuthContext/apiCalls";
import { AuthContext } from "./context/AuthContext/AuthContext";

function App() {
  const { user_id, dispatch } = useContext(AuthContext);

  useEffect(() => {
    user_id && verifyUser(dispatch);
  }, []);

  return (
    <AppContainer>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<AllPostsPage />} />
          <Route path="/search*" element={<AllPostsPage />} />
          <Route path="/post/:postId" element={<PostPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<SignupPage />} />
          <Route path="/*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </AppContainer>
  );
}

export default App;
