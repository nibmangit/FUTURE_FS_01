from rest_framework.decorators import api_view
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from .serializers import ContactMessageSerializer
from django.conf import settings

@api_view(["POST"])
def submit_message(request):
    serializer = ContactMessageSerializer(data = request.data)
    if serializer.is_valid():
        name = serializer.validated_data['name']
        email = serializer.validated_data['email']
        message = serializer.validated_data['message']

        subject = f"New Contact Message from {name}"
        body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
        recipient_list = ['nibretumengaw@gmail.com'] 

        send_mail(
                subject,
                body,
                settings.EMAIL_HOST_USER,
                recipient_list,
                fail_silently=False,
            )

        serializer.save()
        return Response({"message": "Message sent successfully."}, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)