// Script alternatif pour charger le header via fetch (optionnel)
// À utiliser si vous préférez un header centralisé

document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header-container');
    if (!headerContainer) return; // Le header est inline sur la page
    
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            headerContainer.innerHTML = html;
            
            // Marquer le lien actif
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const links = document.querySelectorAll('nav a');
            links.forEach(link => {
                const href = link.getAttribute('href');
                if (href === currentPage) {
                    link.classList.add('active');
                }
            });
        })
        .catch(error => console.error('Erreur lors du chargement du header:', error));
});

