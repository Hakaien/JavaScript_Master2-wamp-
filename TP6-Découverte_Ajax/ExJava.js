// Au chargement de la page …
window.addEventListener("load", function () {
    // Déclaration d'un tableau vide qui contiendra les noms des pays en retour de la réponse Ajax
    var pays = [];
    var chercher = document.getElementById("chercher");

    chercher.addEventListener("keyup", function () {
        ajaxPays(this.value);
    });
});

function ajaxPays(mot) {
    console.clear();
    console.log("Mot saisi : " + mot);

    /* Création de l'objet ajax */
    var ajax = new XMLHttpRequest();
    
    /* Création du traitement lors de la fin de l'appel */
    ajax.addEventListener("load", function () {
        console.log("HTTP status = " + this.status);
        console.log("Etat traitement requête = " + this.readyState);
        console.log("**********************************************");

        if (this.status == 200 && this.readyState == 4) {
            /* Retour HTTP réussi et état du traitement de la requête */
            var html = "";
            pays = JSON.parse(this.response);

            pays.forEach(element => {
                var position = element.nom_fr_fr.toUpperCase().search(mot.toUpperCase());
                if (position !== -1) {
                    console.log(element.nom_fr_fr);
                    html += "<option value='" + element.id + "'>" + element.nom_fr_fr + "<br></option>";
                }
            });
            document.getElementById("pays").innerHTML = html;
        }
    });
    /* Définition du type d'appel et de l'url à charger */
    ajax.open("POST", "pays.json", true);
    /* Définition de l'appel en mode POST (obligatoirement après le open) */
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    /* Lancement de l'appel */
    ajax.send();
}
    /* Définition du type d'appel et de l'url à charger */