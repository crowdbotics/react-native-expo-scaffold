
from allauth.utils import generate_unique_username
from django.contrib.auth.models import User
from rest_framework import serializers

from home.models import CustomText, HomePage


class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email', 'password')
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {
                    'input_type': 'password'
                }
            },
            'email': {
                'required': True
            }
        }

    def create(self, validated_data):
        user = User(
            email=validated_data.get('email'),
            first_name=validated_data.get('first_name'),
            last_name=validated_data.get('last_name'),
            username=generate_unique_username([
                validated_data.get('first_name'), validated_data.get('last_name'),
                validated_data.get('email'), 'user'
            ])
        )
        user.set_password(validated_data.get('password'))
        user.save()
        return user

    def validate_email(self, value):
        if not value:
            raise serializers.ValidationError('This field is required.')
        return value


class CustomTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomText
        fields = '__all__'


class HomePageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomePage
        fields = '__all__'
