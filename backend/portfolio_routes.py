from fastapi import APIRouter, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
from models import PersonalInfo, Services, Project, Pricing, Testimonial, ContactForm
from typing import List
import os
from datetime import datetime
from dotenv import load_dotenv
from pathlib import Path

# Load environment variables
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Get database connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

portfolio_router = APIRouter(prefix="/api/portfolio", tags=["portfolio"])
contact_router = APIRouter(prefix="/api", tags=["contact"])

@portfolio_router.get("/personal", response_model=PersonalInfo)
async def get_personal_info():
    """Get personal information"""
    try:
        personal_data = await db.personal_info.find_one({}, {"_id": 0})
        if not personal_data:
            raise HTTPException(status_code=404, detail="Personal information not found")
        return PersonalInfo(**personal_data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving personal info: {str(e)}")

@portfolio_router.get("/services", response_model=Services)
async def get_services():
    """Get services and benefits information"""
    try:
        services_data = await db.services.find_one({}, {"_id": 0})
        if not services_data:
            raise HTTPException(status_code=404, detail="Services information not found")
        return Services(**services_data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving services: {str(e)}")

@portfolio_router.get("/projects", response_model=List[Project])
async def get_projects():
    """Get all portfolio projects"""
    try:
        projects = await db.projects.find({}, {"_id": 0}).to_list(100)
        return [Project(**project) for project in projects]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving projects: {str(e)}")

@portfolio_router.get("/pricing", response_model=Pricing)
async def get_pricing():
    """Get pricing packages"""
    try:
        pricing_data = await db.pricing.find_one({}, {"_id": 0})
        if not pricing_data:
            raise HTTPException(status_code=404, detail="Pricing information not found")
        return Pricing(**pricing_data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving pricing: {str(e)}")

@portfolio_router.get("/testimonials", response_model=List[Testimonial])
async def get_testimonials():
    """Get all testimonials"""
    try:
        testimonials = await db.testimonials.find({}, {"_id": 0}).to_list(100)
        return [Testimonial(**testimonial) for testimonial in testimonials]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving testimonials: {str(e)}")

@contact_router.post("/contact", response_model=ContactForm)
async def submit_contact_form(contact_data: ContactForm):
    """Submit contact form"""
    try:
        contact_dict = contact_data.dict()
        result = await db.contacts.insert_one(contact_dict)
        if result.inserted_id:
            return contact_data
        else:
            raise HTTPException(status_code=500, detail="Failed to save contact form")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error saving contact form: {str(e)}")

@contact_router.get("/contacts", response_model=List[ContactForm])
async def get_contacts():
    """Get all contact form submissions (admin use)"""
    try:
        contacts = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(100)
        return [ContactForm(**contact) for contact in contacts]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving contacts: {str(e)}")