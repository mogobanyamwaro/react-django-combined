from django.conf.urls import url
from rest_framework import urlpatterns
from . import views
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('', views.LeadListAll.as_view()),
    path('<int:pk>/', views.LeadListOne.as_view())

]


urlpatterns = format_suffix_patterns(urlpatterns)
