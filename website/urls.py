from django.urls import path, include
from django.contrib import admin

from . import views

urlpatterns = [
    path('', views.index, name=""),
    path('admin/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')),
]
