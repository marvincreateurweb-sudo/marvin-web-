from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

# Personal Information Model
class PersonalInfo(BaseModel):
    name: str
    title: str
    location: str
    email: str
    phone: str
    tagline: str
    description: str

# Service Benefit Model
class ServiceBenefit(BaseModel):
    icon: str
    title: str
    description: str

# Services Model
class Services(BaseModel):
    headline: str
    benefits: List[ServiceBenefit]

# Project Model
class Project(BaseModel):
    id: int
    name: str
    type: str
    description: str
    objectives: str
    features: List[str]
    colors: List[str]
    typography: str
    image: str
    results: str

# Pricing Package Model
class PricingPackage(BaseModel):
    name: str
    price: str
    description: str
    features: List[str]
    popular: bool
    color: str

# Pricing Model
class Pricing(BaseModel):
    packages: List[PricingPackage]

# Testimonial Model
class Testimonial(BaseModel):
    name: str
    business: str
    text: str
    rating: int
    image: str

# Contact Form Model (for future use)
class ContactForm(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    message: str
    package: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))