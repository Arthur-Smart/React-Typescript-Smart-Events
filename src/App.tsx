import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import EventPage from "./pages/eventpage/EventPage";
// import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Navbar />
      <EventPage />
      <Footer />
    </>
  );
}

export default App;
