import React, { useState } from 'react';
import { Camera, Loader, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ImageUpload = ({ t }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      handleSubmit(file);
    }
  };

  const handleSubmit = async (file) => {
    setIsLoading(true);
    setError(null);
    setPrediction(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:8000/predict_image/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPrediction(data.model_output.prediction);
    } catch (error) {
      setError('Failed to get prediction. Please try again.');
      console.error('Prediction error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const triggerFileInput = () => {
    document.getElementById('imageUploadInput').click();
  };

  return (
    <div className="text-center">
      <input
        type="file"
        id="imageUploadInput"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
      <motion.button
        onClick={triggerFileInput}
        className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-xl text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Camera className="mr-2 h-5 w-5" />
        {t.hero.upload}
      </motion.button>

      {isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 flex items-center justify-center text-emerald-700"
        >
          <Loader className="animate-spin mr-2" />
          <p>Analyzing...</p>
        </motion.div>
      )}

      {error && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-red-500"
        >
          {error}
        </motion.p>
      )}

      {prediction && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 p-6 bg-white rounded-2xl shadow-lg border border-emerald-100"
        >
          <div className="flex items-center justify-center">
            <CheckCircle className="text-green-500 h-8 w-8 mr-3" />
            <h3 className="text-2xl font-bold text-emerald-900">Prediction Result</h3>
          </div>
          <div className="mt-4 text-lg text-emerald-800">
            <p><span className="font-semibold">Disease:</span> {prediction.class}</p>
            <p><span className="font-semibold">Confidence:</span> {(prediction.confidence * 100).toFixed(2)}%</p>
          </div>
        </motion.div>
      )}

      {selectedImage && !isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8"
        >
          <img src={selectedImage} alt="Selected" className="max-w-xs mx-auto rounded-lg shadow-md" />
        </motion.div>
      )}
    </div>
  );
};

export default ImageUpload;