// Script pour charger les galeries dynamiquement depuis GitHub Releases

document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('galleryContainer');

    if (!galleryContainer) {
        console.error('Gallery container not found');
        return;
    }

    // Détecte quelle galerie afficher via data-gallery ou le nom de la page
    let galleryType = galleryContainer.dataset.gallery;

    if (!galleryType) {
        const path = window.location.pathname.toLowerCase();
        if (path.includes('portrait')) galleryType = 'portrait';
        else if (path.includes('concert')) galleryType = 'concert';
        else if (path.includes('potpourri')) galleryType = 'potpourri';
        else galleryType = 'amsterdam';
    }

    console.log('Galerie chargée:', galleryType);

    const images = getGalleryPhotos(galleryType);

    if (images.length === 0) {
        galleryContainer.innerHTML = '<p class="gallery-message">Aucune photo trouvée.</p>';
        return;
    }

    galleryContainer.innerHTML = '';

    images.forEach(filename => {
        const wrapper = document.createElement('div');
        wrapper.className = 'photo-item';

        const img = document.createElement('img');
        img.src = getPhotoUrl(filename);
        img.alt = filename.replace(/[_-]/g, ' ').replace('.jpg', '');
        img.loading = 'lazy';
        img.onerror = () => { wrapper.style.display = 'none'; };

        wrapper.appendChild(img);
        galleryContainer.appendChild(wrapper);
    });
});
