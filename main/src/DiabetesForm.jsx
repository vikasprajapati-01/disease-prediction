import React, { useState } from 'react';
import axios from 'axios';
import './DiabetesForm.css'; // Import the CSS file

import { api } from './api';

const DiabetesForm = () => {
    const [inputData, setInputData] = useState({
        pregnancies: '',
        glucose: '',
        bloodPressure: '',
        skinThickness: '',
        insulin: '',
        bmi: '',
        diabetesPedigreeFunction: '',
        age: ''
    });
    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state before making a new request

        // Validate input data before sending
        for (const [key, value] of Object.entries(inputData)) {
            if (value === '' || value === null) {
                setError(`Please fill in the ${key} field.`);
                return;
            }
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/app/predict/diabetes/`, inputData);
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error('Error making prediction:', error);
            setError('An error occurred while making the prediction. Please try again.');
        }
    };

    return (
        <div className="dia-container">
            <h2>Diabetes Prediction</h2>
            <h3>Visit a doctor for accurate results</h3>
            <form onSubmit={handleSubmit}>
                <input type="number" name="pregnancies" onChange={handleChange} placeholder="Number of Pregnancies" required className="input-field" />
                <input type="number" name="glucose" onChange={handleChange} placeholder="Glucose Level" required className="input-field" />
                <input type="number" name="bloodPressure" onChange={handleChange} placeholder="Blood Pressure" required className="input-field" />
                <input type="number" name="skinThickness" onChange={handleChange} placeholder="Skin Thickness" required className="input-field" />
                <input type="number" name="insulin" onChange={handleChange} placeholder="Insulin Level" required className="input-field" />
                <input type="number" step="0.1" name="bmi" onChange={handleChange} placeholder="BMI" required className="input-field" />
                <input type="number" step="0.1" name="diabetesPedigreeFunction" onChange={handleChange} placeholder="Diabetes Pedigree Function" required className="input-field" />
                <input type="number" name="age" onChange={handleChange} placeholder="Age" required className="input-field" />
                <button type="submit" className="button">Predict</button>
            </form>
            {error && <h3 className="error-message">{error}</h3>}
            {prediction && <h3 className="prediction">
                {prediction == 1 ? (
                    <>
                        <h3>The person might be Diabetic</h3><br />
                        <br />
                        <strong className="measure">MEASURES TO BE TAKEN:</strong>
                        <ol>
                            <li>Healthy Diet: Emphasize whole foods, control carbs, and limit sugar.</li><br />
                            <li>Exercise: Aim for 30 minutes of daily activity and include strength training.</li> <br />
                            <li>Blood Sugar Monitoring: Check levels regularly.</li><br />
                            <li>Medication: Take as prescribed and see your doctor regularly.</li><br />
                            <li>Stress Management: Practice relaxation techniques like deep breathing.</li>
                        </ol>
                    </>
                ) : (
                    'The person is not Diabetic'
                )}
            </h3>}
        </div>
    );
};

export default DiabetesForm;
