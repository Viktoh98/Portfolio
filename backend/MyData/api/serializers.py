from rest_framework import serializers
from ..models import Figure, Projects, SocialLink, Testimonial, Skillset, Contact, Message
from django.urls import reverse


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        exclude = ['owner']
        
        
class SocialLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLink
        exclude = ['owner']
        
        
class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        exclude = ['owner']
        
        
class SkillsetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skillset
        exclude = ['owner']
        
        
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        exclude = ['owner']
        

# class ResumeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Figure
#         fields = ['Resume']


class FigureSerializer(serializers.ModelSerializer):
    contact_set = ContactSerializer(read_only=True, many=True)
    skillset_set = SkillsetSerializer(read_only=True, many=True)
    testimonial_set = TestimonialSerializer(read_only=True, many=True)
    sociallink_set = SocialLinkSerializer(read_only=True, many=True)
    projects_set = ProjectSerializer(read_only=True, many=True)
    resume_url = serializers.SerializerMethodField()

    class Meta:
        model = Figure
        fields = [
            'Firstname',
            'Lastname',
            'ImageURL',
            'contact_set',
            'skillset_set',
            'testimonial_set',
            'sociallink_set',
            'projects_set',
            'resume_url'
        ]
        
    def get_resume_url(self, obj):
        if obj.resume:
            return reverse('download_resume', args=[obj.id])
        
        
class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'