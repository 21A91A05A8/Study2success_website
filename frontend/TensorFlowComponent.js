import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';

const TensorFlowComponent = () => {
  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadModel = async () => {
      try {
        // Load the pre-trained model
        const model = await tf.loadLayersModel('https://tfhub.dev/tensorflow/tfjs-model/imagenet/mobilenet_v2_050_224/classification/3/default/1');
        setModel(model);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading the model:', error);
        setIsLoading(false);
      }
    };

    loadModel();
  }, []);

  // Function to classify an image
  const classifyImage = async () => {
    try {
      const image = document.getElementById('input-image');

      // Preprocess the image
      const tensor = tf.browser.fromPixels(image).resizeNearestNeighbor([224, 224]).toFloat().expandDims();

      // Perform inference
      const predictions = await model.predict(tensor).data();

      // Display predictions (example: show the top 5 predictions)
      console.log('Predictions:', predictions);
    } catch (error) {
      console.error('Error classifying image:', error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading TensorFlow model...</div>
      ) : (
        <div>
          <h1>TensorFlow Model Loaded Successfully!</h1>
          <img id="input-image" src="https://via.placeholder.com/224" alt="Input" width="224" height="224" />
          <button onClick={classifyImage}>Classify Image</button>
        </div>
      )}
    </div>
  );
};

export default TensorFlowComponent;
