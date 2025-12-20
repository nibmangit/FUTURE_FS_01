import resend
from decouple import config
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import ContactMessageSerializer

@api_view(["POST"])
def submit_message(request):
    serializer = ContactMessageSerializer(data=request.data)
    if serializer.is_valid():
        name = serializer.validated_data['name']
        email = serializer.validated_data['email']
        message = serializer.validated_data['message']

        serializer.save()

        # Corrected way to get the API key
        resend.api_key = config('RESEND_API_KEY')

        try:
            params = {
                "from": "onboarding@resend.dev",
                "to": "nibretumengaw@gmail.com",
                "subject": f"New Contact Message from {name}",
                "html": f"""
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Message:</strong></p>
                    <p>{message}</p>
                """
            }
            resend.Emails.send(params)
            return Response({"message": "Message sent successfully."}, status=status.HTTP_201_CREATED)
            
        except Exception:
            return Response({"message": "Saved to database, but email notification failed."}, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)