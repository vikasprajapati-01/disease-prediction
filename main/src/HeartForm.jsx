import React, { useState } from 'react';
import axios from 'axios';
import './HeartForm.css'; 

const HeartForm = () => {
    const [inputData, setInputData] = useState({
        age: '',
        sex: '',
        chestPain: '',
        restingBloodPressure: '',
        serumCholestoral: '',
        fastingBloodSugar: '',
        restingECG: '',
        maxHeartRate: '',
        exerciseAngina: '',
        stDepression: '',
        slope: '',
        majorVessels: '',
        thal: ''
    });
    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); 

        // Validate input data before sending
        for (const [key, value] of Object.entries(inputData)) {
            if (value === '' || value === null) {
                setError(`Please fill in the ${key} field.`);
                return;
            }
        }

        try {
            const response = await axios.post('http://localhost:8000/app/predict/heart/', inputData);
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error('Error making prediction:', error);
            setError('An error occurred while making the prediction. Please try again.');
        }
    };

    return (
        <div className="heart-container">
            <h2>Heart Disease Prediction</h2>
            <h3>Visit a doctor for accurate results</h3>
            <form onSubmit={handleSubmit}>
                <input type="number" name="age" onChange={handleChange} placeholder="Age" required className="input-field" />
                <input type="number" name="sex" onChange={handleChange} placeholder="Sex (1 = Male, 0 = Female)" required className="input-field" />
                <input type="number" name="chestPain" onChange={handleChange} placeholder="Chest Pain Type (0-3)" required className="input-field" />
                <input type="number" name="restingBloodPressure" onChange={handleChange} placeholder="Resting Blood Pressure" required className="input-field" />
                <input type="number" name="serumCholestoral" onChange={handleChange} placeholder="Serum Cholesterol" required className="input-field" />
                <input type="number" name="fastingBloodSugar" onChange={handleChange} placeholder="Fasting Blood Sugar (1 = True, 0 = False)" required className="input-field" />
                <input type="number" name="restingECG" onChange={handleChange} placeholder="Resting ECG Results (0-2)" required className="input-field" />
                <input type="number" name="maxHeartRate" onChange={handleChange} placeholder="Max Heart Rate Achieved" required className="input-field" />
                <input type="number" name="exerciseAngina" onChange={handleChange} placeholder="Exercise Induced Angina (1 = Yes, 0 = No)" required className="input-field" />
                <input type="number" step="0.1" name="stDepression" onChange={handleChange} placeholder="ST Depression Induced by Exercise" required className="input-field" />
                <input type="number" name="slope" onChange={handleChange} placeholder="Slope of Peak Exercise ST Segment (0-2)" required className="input-field" />
                <input type="number" name="majorVessels" onChange={handleChange} placeholder="Major Vessels Colored by Fluoroscopy (0-3)" required className="input-field" />
                <input type="number" name="thal" onChange={handleChange} placeholder="Thal (0 = Normal, 1 = Fixed Defect, 2 = Reversible Defect)" required className="input-field" />
                <button type="submit" className="button">Predict</button>
            </form>
            {error && <h3 className="error-message">{error}</h3>}
            {prediction && <h3 className="prediction">
                {prediction == 1 ? (
                    <>
                        <h3>The person is having Heart disease</h3><br />
                        <br />
                        <strong className="measure">MEASURES TO BE TAKEN:</strong>
                        <ol>
                            <li>1.Healthy Diet: Focus on fruits, vegetables, whole grains, and lean proteins; limit salt and processed foods.</li><br />
                            <li>2.Regular Exercise: Aim for 30 minutes of moderate activity most days.</li> <br />
                            <li>3.Medication Adherence: Follow your doctor's instructions for prescribed medications.</li><br />
                            <li>4.Stress Management: Use techniques like meditation or deep breathing.</li><br />
                            <li>5.Regular Checkups: Monitor blood pressure and cholesterol, and report any concerning symptoms</li>
                        </ol>
                    </>
                ) : (
                    'The person is not having Heart disease'
                )}
            </h3>}
        </div>
    );
};

export default HeartForm;
