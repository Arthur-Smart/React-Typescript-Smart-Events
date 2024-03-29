import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/signin/SignIn";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import EventPage from "./pages/eventpage/EventPage";
import ProtectedRoute from "./ProtectedRoute";
import SignUp from "./pages/signup/SignUp";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

function App() {
  // const user: string = JSON.parse(localStorage.getItem("@auth") || "{}").token;

  const { state } = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <main className={state?.isDarkMode == true ? "dark" : ""}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/signin"
            element={<SignIn />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
          <Route
            path="/event/:id"
            element={
              <ProtectedRoute>
                <EventPage />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
