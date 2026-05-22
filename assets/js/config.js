// Configuration des galeries
const GITHUB_RELEASE_URL = 'https://cdn.jsdelivr.net/gh/NicolasMendelBoucharin/LapinPhoto-photos@main';

const GALLERIES = {
    amsterdam: [
        'Amsterdam_-_Hotel_1.jpg',
        'Amsterdam_-_Hotel_2.jpg',
        'Amsterdam_-_Hotel_3.jpg',
        'Amsterdam_-_NDSM_1.jpg',
        'Amsterdam_-_NDSM_2.jpg',
        'Amsterdam_-_Batiment.jpg',
        'Amsterdam_-_Neiges_et_loups.jpg',
        'Amsterdam_-_Musee_neige_velo.jpg',
    ],
    portrait: [
        'Portrait_-_Lolita_Lyssia_balcon.jpg',
        'Portrait_-_Julie_Cevennes.jpg',
        'Portrait_-_Marc_cevnnes.jpg',
        'Portrait_-_Lolita_Bokeh_Amsterdam.jpg',
        'Portrait_-_Lyssia_sur_le_cote.jpg',
        'Portrait_-_Lolita_canape.jpg',
        'Portrait_-_Lolita.jpg',
        'Portrait_-_Lolita_et_Patrick.jpg',
        'Portrait_-_Nicolas_sur_le_pont.jpg',
        'Portrait_-_Marc.jpg',
        'Portrait_-_Julie.jpg',
    ],
    concert: [
        'BOPS_-_Guitare_et_chapeau.jpg',
        'BOPS_-_Guitare_chapeau_2.jpg',
        'BOPS_-_Clavier.jpg',
        'BOPS_-_Gratte.jpg',
        'Grandmas_Ashes_-_Trop_de_flow.jpg',
        'Grandmas_Ashes_-_Chanteuse.jpg',
        'Grandmas_Ashes_-_Batteuse.jpg',
    ],
    potpourri: [
        'chevres_pont.jpg',
        'chevres_route.jpg',
        'abre_orange.jpg',
        'ruches.jpg',
        'chevres_pont_30.jpg',
        'chevres_route_31.jpg',
        'croix_sur_neige.jpg',
        'marche.jpg',f
        'Saint-Malo_-_Porte.jpg',
        'Saint-Malo_-_Fort.jpg',
        'Saint-Malo_-_Rocher.jpg',
        'Saint-Malo_-_Fenetre.jpg',
        'Vieilles_velos.jpg',
        'Fete_foraine.jpg',
        'Eau_Courrouze.jpg',
        'William_Courrouze.jpg',
    ]
};

// Fonction pour générer l'URL complète d'une photo
function getPhotoUrl(filename) {
    return `${GITHUB_RELEASE_URL}/${filename}`;
}

// Fonction pour obtenir les photos d'une galerie
function getGalleryPhotos(galleryName) {
    return GALLERIES[galleryName] || [];
}
