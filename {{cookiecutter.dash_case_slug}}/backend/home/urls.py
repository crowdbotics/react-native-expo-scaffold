
from django.conf.urls import url, include
from .views import home

urlpatterns = [
    url(r'^$', home, name="home"),
]
