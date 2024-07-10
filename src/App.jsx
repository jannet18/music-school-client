import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        {/* <Route path="/footer" element={<Footer />} /> */}
      </Routes>
    </>
  );
}

export default App;
