import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import Barbershop from './pages/HomePage/Barbershop';

function App() {
  return (
    <Router>
      <div className="flex flex-col bg-gray-200 min-h-screen">
        {" "}
        {/* Applying background color here */}
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book-appointment" element={<Barbershop />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
