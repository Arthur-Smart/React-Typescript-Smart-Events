import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/signin/SignIn";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import EventPage from "./pages/eventpage/EventPage";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const user: boolean = false;
  return (
    <>
      <BrowserRouter>
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
            path="/event/:id"
            element={
              <ProtectedRoute user={user}>
                <EventPage />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
