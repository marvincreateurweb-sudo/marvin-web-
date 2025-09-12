# 🚀 Guide de déploiement complet - Portfolio Marvin Lacroix

## 📋 **Ce que vous allez déployer :**
- Frontend React moderne et responsive  
- Backend FastAPI avec 6 endpoints API
- Base de données MongoDB avec vos données
- 4 projets portfolio professionnels
- Coordonnées : marvin.createurweb@gmail.com / 07 70 06 10 75

---

## **ÉTAPE 1 : Créer un compte MongoDB Atlas (Base de données cloud)**

### 1.1 Inscription MongoDB Atlas
1. Allez sur [https://www.mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Cliquez "Try Free" et créez un compte
3. Choisissez le plan **FREE** (M0 Sandbox)
4. Sélectionnez une région proche (ex: Frankfurt ou Paris)

### 1.2 Configuration de la base de données
1. Créez un cluster (gardez les paramètres par défaut)
2. **Database Access** → Add New Database User :
   - Username : `portfolio_user`
   - Password : Générez un mot de passe fort (NOTEZ-LE !)
3. **Network Access** → Add IP Address → "Allow Access from Anywhere" (0.0.0.0/0)
4. **Connect** → "Connect your application" → Copiez l'URL de connexion

**Format URL :** `mongodb+srv://portfolio_user:VOTRE_PASSWORD@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`

---

## **ÉTAPE 2 : Préparer le code pour Render**

### 2.1 Créer un repository GitHub
1. Allez sur [GitHub.com](https://github.com) et connectez-vous
2. Créez un nouveau repository : `marvin-portfolio`  
3. **Important** : Rendez-le **PUBLIC** (pour le plan gratuit Render)

### 2.2 Uploader votre code
**Option A - Interface GitHub :**
1. Cliquez "uploading an existing file"
2. Uploadez TOUS les fichiers du projet :
   ```
   📁 frontend/          (tout le dossier React)
   📁 backend/           (tout le dossier FastAPI)  
   📄 package.json
   📄 render.yaml
   📄 README.md
   📄 contracts.md
   ```

**Option B - Git (si vous maîtrisez) :**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/VOTRE_USERNAME/marvin-portfolio.git
git push -u origin main
```

---

## **ÉTAPE 3 : Déployer sur Render**

### 3.1 Inscription Render
1. Allez sur [https://render.com](https://render.com)
2. Créez un compte et connectez votre GitHub

### 3.2 Déployer le Backend
1. **New** → **Web Service**
2. Connectez votre repo `marvin-portfolio`
3. **Configuration :**
   - **Name :** `marvin-portfolio-backend`
   - **Environment :** `Python 3`
   - **Build Command :** `pip install -r backend/requirements.txt`
   - **Start Command :** `cd backend && python render_start.py && uvicorn server:app --host 0.0.0.0 --port $PORT`
   - **Plan :** Free (suffisant pour commencer)

4. **Variables d'environnement :**
   - `MONGO_URL` = Votre URL MongoDB Atlas (étape 1.2)
   - `DB_NAME` = `portfolio_db`

5. Cliquez **Create Web Service**

### 3.3 Déployer le Frontend  
1. **New** → **Static Site**
2. Connectez le même repo `marvin-portfolio`
3. **Configuration :**
   - **Name :** `marvin-portfolio-frontend`
   - **Build Command :** `cd frontend && yarn install && yarn build`
   - **Public Directory :** `frontend/build`

4. **Variables d'environnement :**
   - `REACT_APP_BACKEND_URL` = URL de votre backend (ex: `https://marvin-portfolio-backend.onrender.com`)

5. Cliquez **Create Static Site**

---

## **ÉTAPE 4 : Configuration finale**

### 4.1 Récupérer l'URL du backend
1. Dans Render, allez dans votre service backend
2. Copiez l'URL (ex: `https://marvin-portfolio-backend.onrender.com`)

### 4.2 Mettre à jour le frontend
1. Retournez dans le service frontend
2. **Environment** → Modifiez `REACT_APP_BACKEND_URL` avec l'URL du backend
3. **Manual Deploy** → Deploy Latest Commit

### 4.3 Tests finaux
1. Visitez l'URL de votre frontend
2. Vérifiez que toutes les sections s'affichent
3. Testez les coordonnées de contact

---

## **ÉTAPE 5 : Nom de domaine personnalisé (Optionnel)**

### 5.1 Acheter un domaine
- **Namecheap**, **OVHcloud**, **Gandi** (environ 10-15€/an)
- Exemple : `marvinlacroix.fr` ou `createurweb-embrun.fr`

### 5.2 Configuration DNS
1. Dans Render : **Settings** → **Custom Domains**
2. Ajoutez votre domaine
3. Configurez les DNS chez votre registrar selon les instructions Render

---

## 🎯 **URLs finales attendues :**

**Frontend (votre portfolio) :**  
`https://marvin-portfolio-frontend.onrender.com`

**Backend (API) :**  
`https://marvin-portfolio-backend.onrender.com/api/`

**Avec domaine personnalisé :**  
`https://votre-domaine.fr`

---

## 🚨 **Points importants :**

### Limitations plan gratuit Render :
- Services s'endorment après 15min d'inactivité
- Premier chargement peut être lent (30-60s)
- 750h/mois de temps d'activité

### Pour un usage professionnel :
- Passez au plan payant (7$/mois par service)
- Considérez un domaine personnalisé
- Activez le SSL automatique

---

## 📞 **Support :**

Si vous rencontrez des problèmes :
1. Vérifiez les logs dans Render
2. Assurez-vous que MongoDB Atlas est bien configuré
3. Vérifiez que les variables d'environnement sont correctes

**Votre portfolio sera alors accessible 24h/24 sur internet !** 🌐

---

*Une fois déployé, vous pourrez partager le lien sur vos réseaux sociaux, CV, et plateformes de freelance comme ComeUp ou Fiverr.*