// Sélection des éléments du DOM
const formFavori = document.querySelector('#favoriForm');
const inputTitre = document.querySelector('#titre');
const inputUrl = document.querySelector('#url');
const selectCategorie = document.querySelector('#categorie');
const inputTags = document.querySelector('#tags');
const filtreCategorie = document.querySelector('#filtreCategorie');
const listeFavoris = document.querySelector('#listeFavoris');

// Tableau pour stocker les favoris
let favoris = [];

// Charger les favoris depuis le localStorage
function chargerFavoris() {
  const favorisString = localStorage.getItem('favoris');
  if (favorisString !== null) {
    favoris = JSON.parse(favorisString);
  } else {
    favoris = [];
  }
  afficherFavoris();
}

// Sauvegarder les favoris dans le localStorage
function sauvegarderFavoris() {
  localStorage.setItem('favoris', JSON.stringify(favoris));
}

// Afficher les favoris (filtrés par catégorie si nécessaire)
function afficherFavoris() {
  const categorieSelectionnee = filtreCategorie.value;
  listeFavoris.innerHTML = '';

  favoris
    .filter(favori => categorieSelectionnee === 'toutes' || favori.categorie === categorieSelectionnee)
    .forEach((favori, index) => {
      const favoriElement = document.createElement('div');
      favoriElement.className = 'favori';
      
      // Afficher les tags si présents
      const tagsHtml = favori.tags && favori.tags.length > 0 
        ? `<p><small>Tags: ${favori.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</small></p>`
        : '';
      
      favoriElement.innerHTML = `
        <a href="${favori.url}" target="_blank">${favori.titre}</a>
        <p><small>Catégorie: ${favori.categorie}</small></p>
        ${tagsHtml}
        <div class="actions">
          <button class="supprimer" data-index="${index}">Supprimer</button>
        </div>
      `;
      listeFavoris.appendChild(favoriElement);
    });

  // Écouter les clics sur les boutons "Supprimer"
  document.querySelectorAll('.supprimer').forEach(bouton => {
    bouton.addEventListener('click', (e) => {
      const index = parseInt(e.target.getAttribute('data-index'));
      supprimerFavori(index);
    });
  });
}

// Ajouter un favori
function ajouterFavori(titre, url, categorie, tags) {
  // Vérifier si l'URL est valide
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    alert('Veuillez entrer une URL valide (ex: https://exemple.com)');
    return;
  }

  // Vérifier si le favori existe déjà
  const favoriExistant = favoris.find(favori => favori.url === url);
  if (favoriExistant) {
    alert('Ce favori existe déjà !');
    return;
  }

  // Convertir les tags en tableau (ex: "js,css" → ["js", "css"])
  const tagsTableau = tags ? tags.split(',').map(tag => tag.trim().toLowerCase()).filter(tag => tag !== '') : [];

  // Ajouter le favori
  favoris.push({
    titre: titre,
    url: url,
    categorie: categorie,
    tags: tagsTableau,
    dateAjout: new Date().toISOString()
  });

  sauvegarderFavoris();
  afficherFavoris();
}

// Supprimer un favori
function supprimerFavori(index) {
  favoris.splice(index, 1);
  sauvegarderFavoris();
  afficherFavoris();
}

// Écouter la soumission du formulaire
formFavori.addEventListener('submit', (e) => {
  e.preventDefault();
  const titre = inputTitre.value.trim();
  const url = inputUrl.value.trim();
  const categorie = selectCategorie.value;
  const tags = inputTags.value.trim();

  if (titre !== '' && url !== '') {
    ajouterFavori(titre, url, categorie, tags);
    formFavori.reset(); // Réinitialiser le formulaire
  }
});

// Écouter les changements de filtre
filtreCategorie.addEventListener('change', afficherFavoris);

// Initialiser l'application
window.addEventListener('DOMContentLoaded', chargerFavoris);
