<?php
// <Internal Doc Start>
/*
*
* @description: hidden separator
* @tags: 
* @group: 
* @name: hidden separator
* @type: js
* @status: published
* @created_by: 
* @created_at: 
* @updated_at: 2024-02-15 22:27:46
* @is_valid: 
* @updated_by: 
* @priority: 10
* @run_at: wp_footer
* @condition: {"status":"no","run_if":"assertive","items":[[{"source":["page","url"],"operator":"contains","value":"http:\/\/localhost:10029\/commander\/"}]]}
*/
?>
<?php if (!defined("ABSPATH")) { return;} // <Internal Doc End> ?>

document.addEventListener('DOMContentLoaded', function() {
    var separateur = document.getElementById('separateur'); // Sélecteur corrigé
    var successMessage = document.getElementById('fluentform_6_success');
    var errorMessage = document.getElementById('fluentform_6_errors'); // ID corrigé

    // Fonction pour masquer le séparateur
    function hideSeparator() {
        separateur.style.display = 'none';
    }

    // Vérifie si le message de succès ou d'erreur est présent et masque le séparateur si c'est le cas
    function checkAndHideSeparator() {
        if (successMessage || errorMessage) {
            hideSeparator();
        }
    }

    // Attacher un gestionnaire d'événement sur le formulaire pour vérifier et masquer le séparateur après la soumission
    var form = document.getElementById('fluentform_6');
    if (form) {
        form.addEventListener('submit', checkAndHideSeparator);
    }
});




