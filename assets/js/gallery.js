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
        img.loading = 'lazy';
        
        const wrapper = document.createElement('div');
        wrapper.className = 'photo-item';
        wrapper.appendChild(img);
        
        galleryContainer.appendChild(wrapper);
    });
});
        wrapper.appendChild(img);
        
        galleryContainer.appendChild(wrapper);
    });
});
