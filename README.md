# Plateforme de Gestion d'Événements

Ce projet est une application complète pour la gestion d'événements, comprenant un backend API REST et un frontend React. Il permet de créer, afficher et filtrer des événements.

## Table des matières

1. [Prérequis](#prérequis)
2. [Installation du Backend](#installation-du-backend)
3. [Lancer le Backend](#lancer-le-backend)
4. [Installation du Frontend](#installation-du-frontend)
5. [Lancer le Frontend](#lancer-le-frontend)
6. [Lancer les Tests](#lancer-les-tests)
7. [Fonctionnalités](#fonctionnalités)
8. [Auteur](#auteurs)

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/en/download/) (version recommandée : v14.x ou ultérieure)
- [npm](https://www.npmjs.com/get-npm) (généralement installé avec Node.js)

## Installation du Backend

1. Clonez le dépôt du backend :

   git clone https://github.com/votre-utilisateur/events-api-backend.git
   cd backend
   Installez les dépendances :

npm install
Lancer le Backend
Pour lancer le serveur backend, utilisez la commande suivante :

npx nodemon app.js
Le serveur devrait être accessible à l'adresse http://localhost:7000.

Routes API
Voici les routes disponibles dans l'API :

GET /events : Retourne tous les événements.
POST /events : Crée un nouvel événement.
GET /events/:id : Retourne un événement par son ID.
PUT /events/:id : Modifie un événement existant.
DELETE /events/:id : Supprime un événement.
Les événements sont stockés en mémoire et doivent inclure les champs suivants :

id (auto-généré)
title (string, obligatoire)
description (string)
date (ISO string, obligatoire)
category (string)

Installation du Frontend
Clonez le dépôt du frontend :

git clone https://github.com/Inoubli-Htm/events-api-frontend.git
cd events-api-frontend
Installez les dépendances :

npm install
Lancer le Frontend
Pour lancer l'application frontend, utilisez la commande suivante :

npm start
L'application devrait être accessible à l'adresse http://localhost:3000.

Fonctionnalités du Frontend
Un formulaire pour créer un nouvel événement (champs : title, description, date, category).
Une liste qui affiche tous les événements avec leurs détails.
Un champ de recherche pour filtrer les événements par title ou category en temps réel.
Validation des champs du formulaire (title ne doit pas être vide).

Exécution simultanée du Backend et du Frontend
Pour démarrer le backend et le frontend en parallèle via le module concurrently, suivez les étapes ci-dessous :

Déplacez-vous dans le répertoire du backend :

cd backend
Lancez la commande suivante :

npm run dev
Cela permet d’exécuter les deux environnements simultanément en mode développement.

## Fonctionnalités supplémentaires : Particles.js

Ce projet utilise **[Particles.js](https://vincentgarreau.com/particles.js/)**, une bibliothèque JavaScript légère permettant de créer des animations de particules fluides et attractives en arrière-plan.

Installation
npm install @tsparticles/react @tsparticles/slim

Lancer les Tests
Tests du Backend
Pour exécuter les tests du backend, utilisez la commande suivante depuis le répertoire du backend : npm test

Tests du Frontend
Pour exécuter les tests du frontend, utilisez la commande suivante depuis le répertoire du frontend : npm test

Auteur
Inoubli Haitham
