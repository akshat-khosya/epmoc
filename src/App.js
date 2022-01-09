import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/home/Home";
function App() {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:4000/",
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home axiosInstance={axiosInstance} />} />
        <Route path="/event" element={<Home axiosInstance={axiosInstance} />} />
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
        <Route path="/theme" element={<Home axiosInstance={axiosInstance} />} />
      </Routes>
    </Router>
  );
}

export default App;
