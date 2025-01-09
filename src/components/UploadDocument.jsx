import React, { useState } from "react";
import axios from "axios";

const UploadDocument = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("pdf", file);

      const API_BASE_URL =
        "https://vidhi-shiksha-ai-backend.onrender.com";

      const { data } = await axios.post(
        `${API_BASE_URL}/api/pdf/upload`,
        formData
      );

      setResponse(data);
    } catch (error) {
      console.error("Upload failed:", error.response?.data || error.message);
      alert("Failed to upload. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
      <h2 className="text-xl font-semibold mb-5 text-blue-700">
        Upload Document
      </h2>
      <input
        type="file"
        // accept="application/pdf"
        accept="*/*"
        onChange={handleFileChange}
        className="mb-4 p-2 border border-gray-300 text-gray-600 rounded-md w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleUpload}
        className="w-full py-2 px-4 bg-blue-700 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Upload
      </button>
      {response && (
        <div className="mt-5 p-4 text-gray-800 bg-blue-100 rounded-md">
          <p className="mb-2">
            <strong>Unique ID:</strong> {response.uniqueId}
          </p>
          <p>
            <strong>Password:</strong> {response.password}
          </p>
        </div>
      )}
    </div>
  );
};

export default UploadDocument;
