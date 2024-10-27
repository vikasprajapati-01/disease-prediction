from django.conf import settings
import joblib
import os

# Load models
heart_model = joblib.load(os.path.join(settings.MODELS_PATH, 'heart_disease_model.sav'))
diabetes_model = joblib.load(os.path.join(settings.MODELS_PATH, 'diabetes_model.sav'))


def predict_heart(data):
    return heart_model.predict(data)

def predict_diabetes(data):
    return diabetes_model.predict(data)
