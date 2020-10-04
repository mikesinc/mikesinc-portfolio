from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    detailed_description = models.TextField()
    techstack = models.CharField(max_length=50)
    # image = models.ImageField(blank=True, null=True)
    website_link = models.CharField(max_length=50)

    def __str__(self):
        return self.title
