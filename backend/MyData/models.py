from django.db import models
from django.contrib import admin
from django.utils.html import format_html
from phonenumber_field.modelfields import PhoneNumberField


class Figure(models.Model):
    Firstname = models.CharField(max_length=50)
    Lastname = models.CharField(max_length=50)
    ImageURL = models.ImageField(upload_to='images/')
    resume = models.FileField(upload_to='uploads/',
                              max_length=100, null=True, blank=True)

    def __str__(self):
        return f"{self.Firstname} {self.Lastname}"


class Projects(models.Model):
    name = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    Image = models.ImageField(upload_to='images/')
    owner = models.ForeignKey(
        Figure, on_delete=models.CASCADE, null=False, blank=False)
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


class Education(models.Model):
    Institution = models.CharField(max_length=50)
    Certification = models.CharField(max_length=50)
    Country = models.CharField(max_length=50, null=True)
    Entry_year = models.IntegerField()
    Final_year = models.IntegerField()
    owner = models.ForeignKey(Figure, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.Certification}"


class Testimonial(models.Model):
    ClientName = models.CharField(max_length=50)
    Comment = models.TextField(max_length=120)
    Position = models.CharField(max_length=50, blank=True, null=True)
    ImageURL = models.ImageField(
        upload_to='images/', default='images/placeholder.jpeg')
    owner = models.ForeignKey(Figure, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.ClientName}"


class Skillset(models.Model):
    Skill = models.CharField(max_length=50)
    progress = models.PositiveIntegerField(default=75)
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
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    subject = models.CharField(max_length=50)
    message = models.TextField(max_length=500)
    read = models.BooleanField(default=False, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def title(self):
        if not self.read:
            return format_html(
                '<div style="background-color: #417690; padding: 2rem 2rem;"> <span style="color: white; font-weight: 900; display: block">{}</span> <span style="color: white; font-weight: 900;">{}</span> </div>',
                self.name, self.subject
            )
        return format_html(
            '<div style="background-color: #417690; padding: 2rem 0 2rem 2rem;"> <span style="color: white; opacity: 0.8; font-weight: 400; display: block">{}</span><span style="color: white; opacity: 0.8; font-weight: 400;">{}</span> </div>',
            self.name, self.subject
        )
