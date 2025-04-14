from django.db import models

# Create your models here.


class Stock(models.Model):
    ProductID = models.AutoField(primary_key=True, editable=False)
    ProductType = models.CharField(max_length=100)
    ProductSize = models.CharField(max_length=100)
    ProductStock = models.IntegerField()
    ProductPrice = models.CharField(max_length=100)
    

    def __str__(self):
        return f"{self.ProductType} - {self.ProductSize} - {self.ProductPrice}"
