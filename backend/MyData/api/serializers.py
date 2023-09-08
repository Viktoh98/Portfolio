from rest_framework import serializers
from ..models import Figure, Projects, SocialLink, Testimonial, Skillset, Contact, Message


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
        
        
def checkMany(model):
    return model.objects.all().count() > 1



class FigureSerializer(serializers.ModelSerializer):
    contact_set = ContactSerializer(read_only=True, many=True)
    skillset_set = SkillsetSerializer(read_only=True, many=True)
    testimonial_set = TestimonialSerializer(read_only=True, many=True)
    sociallink_set = SocialLinkSerializer(read_only=True, many=True)
    projects_set = ProjectSerializer(read_only=True, many=True)

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
            'projects_set'
        ]
        
        
class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'