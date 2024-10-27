from django.urls import path
from .views import heart_prediction, diabetes_prediction

urlpatterns = [
    path('predict/heart/', heart_prediction, name='heart_prediction'),
    path('predict/diabetes/', diabetes_prediction, name='diabetes_prediction'),
]
