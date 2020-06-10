from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('projects.api.urls')),
    re_path('.*', never_cache(TemplateView.as_view(template_name='index.html')))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
