from django.http import HttpResponseRedirect

class AdminRequiredMiddleware:
    """
    Middleware to ensure that only admin users can access any page.
    Exclude the admin login URL from the redirect.
    """
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Exclude the admin login page and other admin-related paths from the redirect
        if request.path.startswith('/admin/login/') or request.path.startswith('/admin/logout/'):
            return self.get_response(request)

        # If the user is not logged in or not an admin, redirect to the login page
        if not request.user.is_authenticated or not request.user.is_staff:
            return HttpResponseRedirect('/admin/login/')

        response = self.get_response(request)
        return response