import { Route, Routes } from "react-router-dom";
import { MockAuthProvider as AuthProvider } from "../lib/main";
import { ColorMode, useColorMode } from "./components/chakra/color-mode";
import {
  HomePage,
  LoginPage,
  NotFoundPage,
  PrivatePage,
  SignupPage,
} from "./pages";
import { Layout, RouteGuard } from "./components";

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
            path="/signup"
            element={
              <RouteGuard redirectTo="/" reversed>
                <SignupPage />
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
