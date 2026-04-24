

https://github.com/user-attachments/assets/dc18fc3f-0a8d-4e9e-b4db-81a9a6a2670e

# 📘 TP – Consommation d’API avec React (Fetch & Axios)

## 🎯 Objectif

Ce projet a pour but de comprendre comment interagir avec des APIs dans une application React moderne en utilisant deux approches :

* `fetch()` (API native du navigateur)
* `axios` (librairie externe)

---

## 🚀 Fonctionnalités

* Récupération de données depuis une API publique
* Affichage dynamique des données (articles et utilisateurs)
* Gestion des états :

  * Chargement (`loading`)
  * Erreurs (`error`)
* Bouton pour recharger les données
* Interface moderne avec cartes (cards)

---

## 🛠️ Technologies utilisées

* React (Hooks : `useState`, `useEffect`)
* Fetch API
* Axios
* CSS (style personnalisé)

---

## 📦 Installation

1. Cloner le projet ou créer une app React :

```bash
npx create-react-app tp-api
cd tp-api
```

2. Installer Axios :

```bash
npm install axios
```

3. Lancer l’application :

```bash
npm start
```

---

## 📁 Structure du projet

```
src/
│── App.js
│── App.css
│── PostsFetch.jsx
│── UsersAxios.jsx
```

---

## 🔄 Fonctionnement

### 📌 1. Fetch (Articles)

* Utilise `fetch()` pour récupérer les articles
* Utilise `async/await`
* Affiche une liste d’articles sous forme de cartes
* Limite à 8 articles
* Bouton "Recharger"

---

### 📌 2. Axios (Utilisateurs)

* Utilise `axios.get()`
* Récupère les utilisateurs
* Affiche :

  * Nom
  * Email
  * Ville
  * Entreprise
* Bouton "Actualiser"

---

## ⚖️ Différence entre Fetch et Axios

| Fetch                      | Axios                                    |
| -------------------------- | ---------------------------------------- |
| Natif (pas d’installation) | Nécessite installation                   |
| Syntaxe plus longue        | Plus simple                              |
| Nécessite `.json()`        | Données directement dans `response.data` |
| Gestion d’erreurs manuelle | Gestion simplifiée                       |

---

## 🎨 Interface

* Design moderne avec cartes
* Couleurs dynamiques (dégradé + ombres)
* Responsive (grille adaptable)

---

## 🧠 Ce que j’ai appris

* Consommer une API REST avec React
* Gérer les états (`loading`, `error`, `data`)
* Utiliser `useEffect` pour les requêtes
* Différencier Fetch et Axios
* Structurer un projet React proprement

---

## 🔗 API utilisée

* https://jsonplaceholder.typicode.com/

---

## ✨ Améliorations possibles

* Ajouter un champ de recherche 🔍
* Pagination des articles
* Ajout d’un mode sombre 🌙
* Utiliser `useContext` ou Redux pour la gestion globale

---

## 👨‍💻 Auteur

Projet réalisé dans le cadre du TP React – Développement Front-End moderne.

---
