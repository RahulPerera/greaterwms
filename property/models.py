from django.db import models

class ListModel(models.Model):
    appid = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    property_code = models.IntegerField(default=1)
    create_name = models.CharField(max_length=50)
    t_code = models.CharField(max_length=50)
    is_delete = models.IntegerField(default=0)
    create_time = models.DateTimeField(auto_now_add=True)
    last_update_time = models.DateTimeField(auto_now=True)
