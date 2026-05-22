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
        galleryContainer.innerHTML = '<p class="gallery-message">Aucune photo trouvée.</p>';
        return;
    }

    // Message de chargement
    galleryContainer.innerHTML = '<p class="gallery-message">⏳ Chargement des photos...</p>';
    let loaded = 0;

    // Affiche chaque image
    images.forEach((filename) => {
        const img = document.createElement('img');
        img.alt = filename.replace(/[_-]/g, ' ').replace('.jpg', '');
        img.loading = 'lazy';

        const wrapper = document.createElement('div');
        wrapper.className = 'photo-item';
        wrapper.appendChild(img);

        img.onload = () => {
            loaded++;
            if (loaded === 1) {
                // Retire le message dès la 1ère photo chargée
                galleryContainer.innerHTML = '';
                images.forEach((f, i) => galleryContainer.appendChild(wrappers[i]));
            }
        };

        img.onerror = () => {
            wrapper.style.display = 'none'; // Cache les photos manquantes
        };

        img.src = getPhotoUrl(filename);
        wrapper._filename = filename;
    });

    // Stocker les wrappers pour les insérer après le 1er chargement
    const wrappers = Array.from({ length: images.length }, (_, i) => {
        const w = document.createElement('div');
        w.className = 'photo-item';
        const img = document.createElement('img');
        img.src = getPhotoUrl(images[i]);
        img.alt = images[i].replace(/[_-]/g, ' ').replace('.jpg', '');
        img.loading = 'lazy';
        img.onerror = () => { w.style.display = 'none'; };
        w.appendChild(img);
        return w;
    });

    // Attendre un tick puis afficher
    setTimeout(() => {
        galleryContainer.innerHTML = '';
        wrappers.forEach(w => galleryContainer.appendChild(w));
    }, 100);
});
        wrapper.appendChild(img);
        
        galleryContainer.appendChild(wrapper);
    });
});
