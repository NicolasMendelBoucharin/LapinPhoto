// Script pour charger les galeries dynamiquement depuis GitHub Releases

document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('galleryContainer');
    
    if (!galleryContainer) {
        console.error('Gallery container not found');
        return;
    }
    
    // Détecte quelle galerie afficher selon la page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    let galleryType = 'amsterdam'; // défaut
    
    if (currentPage.includes('portrait')) galleryType = 'portrait';
    if (currentPage.includes('concert')) galleryType = 'concert';
    if (currentPage.includes('potpourri')) galleryType = 'potpourri';
    
    // Récupère les images de la galerie
    const images = getGalleryPhotos(galleryType);
    
    if (images.length === 0) {
        galleryContainer.innerHTML = '<p>Aucune photo trouvée pour cette galerie.</p>';
        return;
    }
    
    // Affiche chaque image
    images.forEach((filename) => {
        const img = document.createElement('img');
        img.src = getPhotoUrl(filename);
        img.alt = filename.replace(/[_-]/g, ' ').replace('.jpg', '');
        img.loading = 'lazy'; // Chargement efficace
        
        const wrapper = document.createElement('div');
        wrapper.className = 'photo-item';
        wrapper.appendChild(img);
        
        galleryContainer.appendChild(wrapper);
    });
});
