# To-do-list
project todolist
# Structure du projet

Ce projet utilise **Vite** pour un développement rapide en JavaScript vanilla. Voici l'organisation des fichiers et dossiers :

## 📂 src/
Contient l'ensemble du code source de l'application.

### 📂 assets/
Regroupe les ressources statiques comme les images et les icônes.
- 📂 icons/ → Icônes du projet.
- 📂 imgs/ → Images utilisées dans l'application.
- 📂 styles/ → Fichiers CSS globaux.

### 📂 components/
Contient les composants JavaScript réutilisables.
- 📜 cards.js → Gère l'affichage des cartes.

### 📂 lib/
Regroupe les fonctions utilitaires et modules de logique.
- 📜 filter.js → Fonction de filtrage des données.

### 📂 ui/
Contient les fichiers relatifs à l'interface utilisateur.
- 📜 main.js → Script principal pour gérer l'affichage.
- 📜 buttons.css → Styles des boutons.
- 📜 cards.css → Styles des cartes.

## 📜 main.js
Point d’entrée principal du projet.

---

💡 **Comment démarrer ?**
1. Installer les dépendances : npm install
2. Lancer le projet : npm run dev