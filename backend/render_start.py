#!/usr/bin/env python3
"""
Script de démarrage pour Render - Portfolio Marvin Lacroix
"""
import os
import asyncio
from pathlib import Path
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient

# Charger les variables d'environnement
load_dotenv()

async def init_database_if_needed():
    """Initialise la base de données si elle est vide"""
    try:
        mongo_url = os.environ.get('MONGO_URL')
        if not mongo_url:
            print("❌ MONGO_URL non définie")
            return
            
        db_name = os.environ.get('DB_NAME', 'portfolio_db')
        client = AsyncIOMotorClient(mongo_url)
        db = client[db_name]
        
        # Vérifier si les données existent déjà
        personal_count = await db.personal_info.count_documents({})
        
        if personal_count == 0:
            print("🔄 Base de données vide, initialisation...")
            # Import et exécution de init_db
            from init_db import PORTFOLIO_DATA
            
            await db.personal_info.insert_one(PORTFOLIO_DATA["personal"])
            await db.services.insert_one(PORTFOLIO_DATA["services"])
            await db.projects.insert_many(PORTFOLIO_DATA["projects"])
            await db.pricing.insert_one(PORTFOLIO_DATA["pricing"])
            await db.testimonials.insert_many(PORTFOLIO_DATA["testimonials"])
            
            print("✅ Base de données initialisée avec succès!")
        else:
            print("ℹ️ Base de données déjà initialisée")
            
        client.close()
        
    except Exception as e:
        print(f"⚠️ Erreur lors de l'initialisation: {e}")

if __name__ == "__main__":
    asyncio.run(init_database_if_needed())