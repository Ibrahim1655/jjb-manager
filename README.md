# jjb-manager

Application SaaS de gestion de club de Jiu-Jitsu Brésilien (JJB).

## Stack technique

**Backend**

- NestJS
- TypeScript
- TypeORM
- MySQL

**Frontend**

- React _(à venir)_
- TypeScript
- Vite

## Structure du projet

```
jjb-manager/
├── backend/    → API REST NestJS (port 3000)
└── frontend/   → Application React (port 5173)
```

## Fonctionnalités prévues

- Gestion des licenciés
- Gestion des cotisations
- Gestion des compétitions et participations
- Système de rôles : Admin / Coach / Licencié
- Authentification JWT

## État d'avancement

### ✅ Terminé

- Initialisation du projet (backend NestJS + frontend React)
- Configuration CORS
- Validation globale des données (ValidationPipe)
- Module `users` : entité, DTO, service, controller
- Création d'un utilisateur via `POST /users`
- Hashage des mots de passe avec bcrypt
- Connexion à la base de données MySQL via TypeORM

### 🚧 En cours

- Authentification (JWT, login, inscription, protection des routes)

### 📋 À venir

- Autorisation par rôles (Admin / Coach / Licencié)
- API métier (licenciés, cotisations, compétitions)
- Frontend React
- Dockerisation
- Déploiement

## Lancer le projet en local

### Prérequis

- Node.js
- MySQL (XAMPP ou autre)

### Backend

```bash
cd backend
npm install
npm run start:dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Base de données

Créer une base de données MySQL nommée `jjbmanager` avant de lancer le backend.

La synchronisation TypeORM est activée en développement (`synchronize: true`).
