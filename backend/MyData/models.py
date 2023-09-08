from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class Figure(models.Model):
    Firstname = models.CharField(max_length=50)
    Lastname = models.CharField(max_length=50)
    ImageURL = models.ImageField(upload_to='images/')

    def __str__(self):
        return f"{self.Firstname} {self.Lastname}"
    
    
class Projects(models.Model):
    name = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    Image = models.ImageField(upload_to='images/')
    owner = models.ForeignKey(Figure, on_delete=models.CASCADE, null=False, blank=False)
    Github_URL = models.URLField(max_length=200, blank=True, null=True)
    Live_URL = models.URLField(max_length=200, blank=True, null=True)
    
    def __str__(self):
        return f"{self.name}"
    
    
class SocialLink(models.Model):
    Page = models.CharField(max_length=50)
    Page_URL = models.URLField(max_length=200)
    owner = models.ForeignKey(Figure, on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.Page}"
    
    
class Testimonial(models.Model):
    ClientName = models.CharField(max_length=50)
    Comment = models.TextField(max_length=120)
    Position = models.CharField(max_length=50, blank=True, null=True)
    ImageURL = models.ImageField(upload_to='images/', default='images/placeholder.jpeg')
    owner = models.ForeignKey(Figure, on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.ClientName}"


class Skillset(models.Model):
    Skill = models.CharField(max_length=50)
    owner = models.ForeignKey(Figure, on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.Skill}"
    
    
class Contact(models.Model):
    Phone = PhoneNumberField()
    Email = models.EmailField(max_length=254)
    Address = models.TextField()
    owner = models.ForeignKey(Figure, on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.owner.Firstname}"
    
    
class Message(models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    message = models.TextField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.firstname} {lastname}"
    