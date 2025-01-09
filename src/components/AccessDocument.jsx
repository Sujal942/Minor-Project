import React, { useState } from "react";
import axios from "axios";

const AccessDocuments = () => {
  const [uniqueId, setUniqueId] = useState("");
  const [password, setPassword] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");

  const handleAccess = async () => {
    try {
      const API_BASE_URL =
        "https://vidhi-shiksha-ai-backend.onrender.com";

      const { data } = await axios.post(
        `${API_BASE_URL}/api/pdf/access`,
        { uniqueId, password },
        { responseType: "blob" }
      );

      const pdfBlob = new Blob([data], { type: "application/pdf" });
      // const pdfBlob = new Blob([data], { type: "*/*" });
      const pdfUrl = URL.createObjectURL(pdfBlob);
      setPdfUrl(pdfUrl);
    } catch (error) {
      console.error("Access failed:", error.response?.data || error.message);
      alert("Failed to access document. Please check your credentials.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
      <h2 className="text-xl font-semibold mb-5 text-blue-700">
        Access Document
      </h2>
      <input
        className="mb-3 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Unique ID"
        value={uniqueId}
        onChange={(e) => setUniqueId(e.target.value)}
      />
      <input
        type="password"
        className="mb-3 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-full py-2 px-4 bg-blue-700 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleAccess}
      >
        Access Document
      </button>
      {pdfUrl && (
        <iframe
          src={pdfUrl}
          className="mt-5 w-full h-[500px] border border-gray-300 rounded-md"
          title="PDF Viewer"
        />
      )}
    </div>
  );
};

export default AccessDocuments;
