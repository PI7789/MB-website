from django.shortcuts import render, redirect

from django.contrib.auth.decorators import login_required

from django.http import HttpResponseForbidden

from . models import Stock

from django.db.models import Case, When, IntegerField

# Create your views here.
@login_required
def index(request):
    if not request.user.is_staff:
        return HttpResponseForbidden("You are not allowed to access this page.")
    tablestuff = Stock.objects.all().annotate(
        custom_order=Case(
            When(ProductSize__contains='9ft', then=1),   
            When(ProductSize__contains='8ft', then=2),  
            When(ProductSize__contains='7ft', then=3),  
            When(ProductSize__contains='6ft', then=4),  
            When(ProductSize__contains='5ft', then=5),
            When(ProductSize__contains='4ft', then=6), 
            When(ProductSize__contains='3ft', then=7),     
            When(ProductSize__contains='1ft', then=8),   
            When(ProductSize__contains='inch', then=9),   
            When(ProductSize__contains='ton', then=10),  
            When(ProductSize__contains='kg', then=11), 
            default=12,                                  
            output_field=IntegerField()
        )).order_by('custom_order')

    if request.method == "POST":
        print(request.POST)
        selected_products = []
        amounts = []

        # Loop through the POST data to dynamically access Products_1, Products_2, etc.
        for key, value in request.POST.items():
            # Check if the key matches the pattern Products_*
            if key.startswith('Products_'):
                # Only append the selected value to the list
                selected_products.append(value)

            if key.startswith('input_'):
                amounts.append(value)

        # Get the list of ProductID values from the form (this will be a list of strings)
        
        # Convert the product_ids to integers

        amounts = list(map(int, amounts))
        selected_products = list(map(int, selected_products))

        # Query the Stock model to get all products with matching ProductID
        for x in range(0, len(amounts)):
            product_id = selected_products[x]
            amount = amounts[x]
            product_stock = Stock.objects.get(ProductID=product_id)

                # Decrement the stock_quantity by the specified amount
            product_stock.ProductStock += amount

            product_stock.save()
            
            
        print(selected_products)
        return redirect("")
    context = {'records': tablestuff}

    return render(request, 'pages/index.html', context=context)
