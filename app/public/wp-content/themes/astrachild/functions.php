<?php
/**
 * Activation du thème avec functions.php simplifié
 */
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');

function theme_enqueue_styles() {
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style'), wp_get_theme()->get('Version'));
} // Ajout de cette accolade fermante pour clore la fonction theme_enqueue_styles

// Fonction pour afficher le lien admin si l'utilisateur est connecté
function afficher_lien_admin($items, $args) {
    // Vérifier si l'utilisateur est connecté en tant qu'administrateur
    if (is_user_logged_in()) {
        // Afficher le lien vers le panneau d'administration
        $items .= '<li class="menu-item menu-item-type-post_type menu-item-object-page"><a class="menu-link" href="' . admin_url() . '">Admin</a></li>';
    }
    return $items;
    }


// Ajouter le hook pour afficher le lien dans le header
add_filter ('wp_nav_menu_items', 'afficher_lien_admin',10, 2);




    