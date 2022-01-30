import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/home/Home";
import Event from "./pages/event/Event";
import Navbar from "./components/navbar/Navbar";
function App() {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:4000/",
  });
  return (
    <Router>
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Home axiosInstance={axiosInstance} />} />
        <Route path="/event" element={<Event axiosInstance={axiosInstance} />} />
        <Route path="/team" element={<Home axiosInstance={axiosInstance} />} />
        <Route path="/about" element={<Home axiosInstance={axiosInstance} />} />
        <Route
          path="/calendar"
          element={<Home axiosInstance={axiosInstance} />}
        />
        <Route path="/blog" element={<Home axiosInstance={axiosInstance} />} />
        <Route
          path="/contact"
          element={<Home axiosInstance={axiosInstance} />}
        />
       
      </Routes>
      </main>
    </Router>
  );
}

export default App;
