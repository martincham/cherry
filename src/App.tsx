import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "@/sections/Header";
import Home from "@/sections/Home";
import Dreams from "@/sections/Dreams";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dreams" element={<Dreams />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
