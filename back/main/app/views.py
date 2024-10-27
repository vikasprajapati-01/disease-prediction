from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import numpy as np
from .model import predict_heart, predict_diabetes

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import numpy as np
from .model import predict_heart  # Ensure you have the correct import for your heart prediction function

@api_view(['POST'])
def heart_prediction(request):
    data = request.data
    # Preprocess data if necessary
    try:
        # Validate required fields
        required_fields = [
            'age',
            'sex',
            'chestPain',
            'restingBloodPressure',
            'serumCholestoral',
            'fastingBloodSugar',
            'restingECG',
            'maxHeartRate',
            'exerciseAngina',
            'stDepression',
            'slope',
            'majorVessels',
            'thal'
        ]
        for field in required_fields:
            if field not in data:
                return Response({'error': f'Missing field: {field}'}, status=status.HTTP_400_BAD_REQUEST)

        # Convert the input data to the format required by the model
        input_features = np.array([[data['age'], 
                                     data['sex'], 
                                     data['chestPain'], 
                                     data['restingBloodPressure'], 
                                     data['serumCholestoral'], 
                                     data['fastingBloodSugar'], 
                                     data['restingECG'], 
                                     data['maxHeartRate'], 
                                     data['exerciseAngina'], 
                                     data['stDepression'], 
                                     data['slope'], 
                                     data['majorVessels'], 
                                     data['thal']]])

        # Call the prediction function
        prediction = predict_heart(input_features)
        return Response({'prediction': prediction.tolist()}, status=status.HTTP_200_OK)

    except Exception as e:
        print(f"Error in heart_prediction: {e}")  # Log the error for debugging
        return Response({'error': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def diabetes_prediction(request):
    data = request.data
    # Preprocess data if necessary
    try:
        # Validate required fields
        required_fields = [
            'pregnancies',
            'glucose',
            'bloodPressure',
            'skinThickness',
            'insulin',
            'bmi',
            'diabetesPedigreeFunction',
            'age'
        ]
        for field in required_fields:
            if field not in data:
                return Response({'error': f'Missing field: {field}'}, status=status.HTTP_400_BAD_REQUEST)

        # Convert the input data to the format required by the model
        input_features = np.array([[data['pregnancies'], data['glucose'], data['bloodPressure'], 
                                     data['skinThickness'], data['insulin'], 
                                     data['bmi'], data['diabetesPedigreeFunction'], 
                                     data['age']]])

        # Call the prediction function
        prediction = predict_diabetes(input_features)
        return Response({'prediction': prediction.tolist()}, status=status.HTTP_200_OK)

    except Exception as e:
        print(f"Error in diabetes_prediction: {e}")  # Log the error for debugging
        return Response({'error': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
