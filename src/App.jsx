import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import UploadDocument from "../src/components/UploadDocument";
import AccessDocuments from "../src/components/AccessDocument";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        {/* <LandingPage /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/upload" element={<UploadDocument />} />
          <Route path="/access" element={<AccessDocuments />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
