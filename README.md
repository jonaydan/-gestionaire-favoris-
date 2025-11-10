# 🔖 Gestionnaire de Favoris

Une application web simple et responsive pour gérer vos favoris (bookmarks) avec sauvegarde locale via localStorage.

![Version](https://img.shields.io/badge/version-1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Fonctionnalités

- ✅ **Ajouter des favoris** - Titre, URL et catégorie
- 🔍 **Filtrer par catégorie** - Général, Travail, Loisirs, Apprentissage
- 🗑️ **Supprimer des favoris** - En un clic
- 💾 **Sauvegarde automatique** - Via localStorage (persistance des données)
- 📱 **Design responsive** - Fonctionne sur mobile, tablette et desktop
- 🌓 **Mode clair/sombre** - Automatique selon les préférences système
- ✅ **Validation des URLs** - Vérification et détection des doublons

## 🚀 Démo

Ouvrez simplement le fichier `index.html` dans votre navigateur !

## 📁 Structure du Projet

```
gestionnaire-favoris/
│
├── index.html              # Page principale
├── CAHIER_DES_CHARGES.md   # Documentation complète du projet
├── README.md               # Ce fichier
│
├── css/
│   ├── pico.min.css       # Framework CSS (mode clair/sombre)
│   └── style.css          # Styles personnalisés
│
└── js/
    └── app.js             # Logique JavaScript complète
```

## 🛠️ Technologies Utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Grid, Flexbox, Media Queries
- **JavaScript (Vanilla)** - Pas de framework, JS pur
- **Pico.css** - Framework CSS minimaliste
- **localStorage** - Stockage local des données

## 📦 Installation

Aucune installation nécessaire ! Il suffit de :

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/jonaydan/gestionnaire-favoris.git
   ```

2. **Ouvrir le fichier :**
   - Double-cliquez sur `index.html`
   - Ou faites un clic droit → "Ouvrir avec" → Votre navigateur

## 💡 Utilisation

### Ajouter un favori
1. Remplissez le champ "Titre" (ex: "Mistral AI")
2. Remplissez le champ "URL" (ex: "https://mistral.ai")
3. Sélectionnez une catégorie
4. Cliquez sur "Ajouter"

### Filtrer les favoris
- Utilisez le menu déroulant "Filtrer par catégorie"
- Sélectionnez une catégorie ou "Toutes"

### Supprimer un favori
- Cliquez sur le bouton "Supprimer" de la carte du favori

## 🎯 Concepts Appris

Ce projet permet de pratiquer :

- ✅ Manipulation du DOM
- ✅ Gestion du localStorage
- ✅ JSON (stringify/parse)
- ✅ Événements JavaScript
- ✅ Validation de formulaires
- ✅ Responsive design
- ✅ CSS Grid et Flexbox
- ✅ Tableaux JavaScript (filter, find, forEach)

## 📚 Ressources

- [Documentation complète](./CAHIER_DES_CHARGES.md) - Cahier des charges détaillé
- [MDN Web Docs](https://developer.mozilla.org/) - Documentation JavaScript
- [Pico.css](https://picocss.com/) - Framework CSS utilisé

## 🔧 Améliorations Futures

- [ ] Fonction de recherche
- [ ] Modification de favoris
- [ ] Export/Import en JSON
- [ ] Tri des favoris
- [ ] Tags personnalisés
- [ ] Statistiques
- [ ] Captures d'écran des sites

## 🧪 Tests

L'application a été testée sur :
- ✅ Google Chrome
- ✅ Mozilla Firefox
- ✅ Microsoft Edge
- ✅ Safari

## 📝 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, le modifier et le distribuer.

## 👨‍💻 Auteur

**Flow** - Développeur  
Projet créé le 11 novembre 2025

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Commit vos changements (`git commit -m 'Ajout d'une fonctionnalité'`)
4. Push vers la branche (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

## 🙏 Remerciements

- [Pico.css](https://picocss.com/) pour le framework CSS
- La communauté MDN pour la documentation

---

⭐ Si ce projet vous a aidé, n'hésitez pas à lui donner une étoile !
