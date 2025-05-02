import { Route, Routes } from "react-router-dom";
import { MockAuthProvider as AuthProvider } from "../lib/main";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PrivatePage from "./pages/PrivatePage";
import { ColorMode, useColorMode } from "./components/ui/color-mode";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import RouteGuard from "./components/RouteGuard";

const App = () => {
  const { setColorMode } = useColorMode();
  const hour = new Date().getHours();
  const theme: ColorMode = hour >= 19 || hour < 6 ? "dark" : "light";
  setColorMode(theme);
  window.document.documentElement.setAttribute("data-theme", theme);

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFoundPage />} />
          <Route index path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <RouteGuard redirectTo="/" reversed>
                <LoginPage />
              </RouteGuard>
            }
          />
          <Route
            path="/private"
            element={
              <RouteGuard redirectTo="/login">
                <PrivatePage />
              </RouteGuard>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
