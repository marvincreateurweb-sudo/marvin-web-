# Contrats API - Portfolio Marvin Lacroix

## Vue d'ensemble
Ce document définit les contrats API entre le frontend (React) et le backend (FastAPI + MongoDB) pour remplacer les données mockées par une vraie base de données.

## Données actuellement mockées dans `/frontend/src/data/mock.js`

### 1. Informations personnelles
```javascript
personal: {
  name, title, location, email, phone, tagline, description
}
```

### 2. Services et bénéfices  
```javascript
services: {
  headline, benefits: [{ icon, title, description }]
}
```

### 3. Projets portfolio (4 projets)
```javascript
projects: [{ 
  id, name, type, description, objectives, 
  features[], colors[], typography, image, results 
}]
```

### 4. Packages tarifaires (3 packages)
```javascript
pricing: {
  packages: [{ name, price, description, features[], popular, color }]
}
```

### 5. Témoignages clients (3 témoignages)
```javascript
testimonials: [{ name, business, text, rating, image }]
```

## Endpoints API à implémenter

### Backend Routes (toutes préfixées /api)

#### 1. GET /api/portfolio/personal
**Réponse :** Informations personnelles de Marvin
```json
{
  "name": "Marvin Lacroix",
  "title": "Développeur Web & Expert en Outils Informatiques", 
  "location": "Embrun, France",
  "email": "marvin.ceateurweb@gmail.com",
  "phone": "07 70 06 10 75",
  "tagline": "Créateur de sites web modernes...",
  "description": "Spécialisé dans la création..."
}
```

#### 2. GET /api/portfolio/services
**Réponse :** Services et méthode de travail
```json
{
  "headline": "Ma méthode unique : Outils informatiques + Personnalisation humaine",
  "benefits": [
    {
      "icon": "Zap",
      "title": "Rapidité exceptionnelle", 
      "description": "Développement accéléré..."
    }
  ]
}
```

#### 3. GET /api/portfolio/projects
**Réponse :** Liste des projets réalisés
```json
[
  {
    "id": 1,
    "name": "Le Bistro des Alpes",
    "type": "Restaurant bistronomique",
    "description": "Site vitrine élégant...",
    "objectives": "Augmenter les réservations...",
    "features": ["Galerie photos", "Réservation en ligne", ...],
    "colors": ["#2C3E50", "#E74C3C", "#F39C12"],
    "typography": "Playfair Display + Open Sans",
    "image": "https://images.unsplash.com/...",
    "results": "+45% de réservations..."
  }
]
```

#### 4. GET /api/portfolio/pricing
**Réponse :** Packages et tarifs
```json
{
  "packages": [
    {
      "name": "Starter",
      "price": "890",
      "description": "Parfait pour démarrer...",
      "features": ["Site vitrine 5 pages", ...],
      "popular": false,
      "color": "#3B82F6"
    }
  ]
}
```

#### 5. GET /api/portfolio/testimonials
**Réponse :** Témoignages clients
```json
[
  {
    "name": "Sophie Martin",
    "business": "Restaurant Le Petit Gourmand", 
    "text": "Marvin a transformé notre visibilité...",
    "rating": 5,
    "image": "https://images.unsplash.com/..."
  }
]
```

#### 6. POST /api/contact
**Requête :** Formulaire de contact (optionnel - pour futures améliorations)
```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "phone": "0123456789",
  "message": "Je souhaite un devis...",
  "package": "Business"
}
```

## Modèles MongoDB à créer

### 1. Collection: `personal_info` (document unique)
- Champs : name, title, location, email, phone, tagline, description

### 2. Collection: `services` (document unique)  
- Champs : headline, benefits (array d'objets)

### 3. Collection: `projects`
- Champs : id, name, type, description, objectives, features, colors, typography, image, results

### 4. Collection: `pricing` (document unique)
- Champs : packages (array d'objets)  

### 5. Collection: `testimonials`
- Champs : name, business, text, rating, image

### 6. Collection: `contacts` (optionnel)
- Champs : name, email, phone, message, package, created_at

## Plan d'intégration Frontend

### Étapes de migration du mock vers API :

1. **Créer service API** dans `/frontend/src/services/api.js`
   - Fonctions pour chaque endpoint
   - Gestion d'erreurs
   - Utilisation de REACT_APP_BACKEND_URL

2. **Modifier Portfolio.jsx** 
   - Remplacer `import portfolioData from '../data/mock'`
   - Ajouter hooks useState/useEffect pour les appels API
   - Loading states et error handling

3. **Structure d'état dans Portfolio.jsx :**
```javascript
const [portfolioData, setPortfolioData] = useState({
  personal: null,
  services: null, 
  projects: [],
  pricing: null,
  testimonials: []
});
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
```

## Gestion des erreurs
- **Backend :** Retourner codes HTTP appropriés (200, 404, 500)
- **Frontend :** Afficher messages d'erreur utilisateur-friendly ou fallback vers données mock si API indisponible

## Performances
- **Backend :** Pas de pagination nécessaire (données limitées)
- **Frontend :** Mise en cache optionnelle avec localStorage
- **Images :** Utiliser les URLs Unsplash existantes (pas de stockage local requis)

## Sécurité
- CORS configuré pour frontend
- Validation basique des données
- Rate limiting optionnel pour endpoint contact

---

**Note :** Les données actuelles de mock.js serviront à peupler la base MongoDB lors de l'initialisation du backend.