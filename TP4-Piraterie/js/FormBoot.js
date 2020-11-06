$(window).ready(function () {

    var pirate = [
        { "id": 1, "nom": "Luffy", "image": "img/Wanted Luffy.jpg", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque tortor ipsum, et pellentesque ipsum tempor ac. In vel massa feugiat, egestas tortor ut, laoreet nisl. " },
        { "id": 2, "nom": "Ace", "image": "img/WantedAce.jpg", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque tortor ipsum, et pellentesque ipsum tempor ac. In vel massa feugiat, egestas tortor ut, laoreet nisl. " },
        { "id": 3, "nom": "Shanks", "image": "img/WantedShanks.jpg", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque tortor ipsum, et pellentesque ipsum tempor ac. In vel massa feugiat, egestas tortor ut, laoreet nisl. " },
        { "id": 4, "nom": "Hancock", "image": "img/WantedHancock.jpg", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque tortor ipsum, et pellentesque ipsum tempor ac. In vel massa feugiat, egestas tortor ut, laoreet nisl. " },
        { "id": 5, "nom": "Robin", "image": "img/WantedRobin.jpg", "text": "Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque tortor ipsum, et pellentesque ipsum tempor ac. In vel massa feugiat, egestas tortor ut, laoreet nisl. " },
        { "id": 6, "nom": "Law", "image": "img/WantedLaw.jpg", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque tortor ipsum, et pellentesque ipsum tempor ac. In vel massa feugiat, egestas tortor ut, laoreet nisl. " },
        { "id": 7, "nom": "Zorro", "image": "img/WantedZorro.jpg", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque tortor ipsum, et pellentesque ipsum tempor ac. In vel massa feugiat, egestas tortor ut, laoreet nisl. e ipsum tempor ac. In vel massa feugiat, egestas tortor ut, laoreet nisl.e ipsum tempor ac. In vel massa feugiat, egestas tortoe ipsum tempor ac. In vel massa feugiat, egestas tortor ut, laoreet nisl.e ipsum tempor ac. In vel massa feugiat, egestas tortor ut, laoreet nisl.e ipsum tempor ac. In vel massa feugiat, egestas tortor ut, laoreet nisl.r ut, laoreet nisl." },
        { "id": 8, "nom": "El Formator", "image": "img/Wanted1.jpg", "text": "Recherché mort ou à peine vif pour faire subir un ensemble de TP a des stagiaires innocents. Cet élément est très dangereux ! " },
    ]


    //  Création des cartes 
    //  Méthode clone avec appelle de l'objet pirate
    $(".card-img-top").attr("src", pirate[0].image);
    $(".card-title").text(pirate[0].nom);
    $(".card-text").text(pirate[0].text);

    for (let i = 1; i < pirate.length; i++) {
        var copie = $("#cartePirate").clone();
        copie.find(".card-img-top").attr("src", pirate[i].image);
        copie.find(".card-title").text(pirate[i].nom);
        copie.find(".card-text").text(pirate[i].text);
        copie.find("#btn0").attr("id", "btn" + i)
        copie.appendTo($("#slide"));
    }

    // cache du formulaire
    $("#corpus").hide();

    // ouverture du formulaire et récupération du nom du report
    $(".report").click(function () {
        $("#corpus").show();
        let hauteur = $("#corpus").offset().top;
        $("html, body").animate({ scrollTop: hauteur }, 1500);

        let nom = $(this).siblings(".card-title").text();
        $("#p1").text("Vous dénoncez : " + nom);
        $("#p1").slideDown();
    });

    // Validation du formulaireuh !!!
    //-------------------------------

    // validation sur champ interne
    // modif des couleurs des inputs et vérif RegExp
    $(".formValid ").on({
        keyup: function () {
            let inputId = $(this).attr("id");
            let inputPattern = $(this).attr("pattern");
            if ($("#" + inputId + "").val().match(inputPattern)) {
                $("#" + inputId + "").css("border", "2px solid green");
            } else { $("#" + inputId + "").css("border", "2px solid red"); };
        },
    });

    $("#inputNom3").keyup(function () {
        this.value = this.value.toUpperCase();
    });
    $("#inputPrenom3").keyup(function () {
        this.value = this.value.charAt(0).toUpperCase() + this.value.substr(1);
    });


    $(".form-control ").on({
        focus: function () {
            $(this).css("backgroundColor", "#888074");
            $(this).css("border", "#6D5B46")
            $(this).parent().parent().css("backgroundColor", "black");
        },
        blur: function () {
            $(this).css("backgroundColor", "");
            $(this).css("border", "")
            $(this).parent().parent().css("backgroundColor", "");
        },
    });
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // Match regex sur blur pour l'ensemble.
    // création d'une boucle générale pour déterminer la validation.

    $(".formValid ").on("blur", function (e) {
        e.preventDefault();
        $("#corpus").show();

        let inputId = $(this).attr("id");
        let inputPattern = $(this).attr("pattern");
        let inputSpan = $(this).parent().next();
        try {
            if ($("#" + inputId + "").val().match(inputPattern)) {
                inputSpan.text("gg").css("color", "#CFC0AE");
            } else {
                throw "Erreur 66 !";
            }
        } catch (error) {
            inputSpan.text(error);
            inputSpan.css("color", "red");
        }
    });
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // Bouton validation pour envoi des infos en resume
    $("#valider").on("click", function (e) {
        e.preventDefault();
        let resumeIdentite = "";
        resumeIdentite += "<h2> Votre identité </h2> \n";
        resumeIdentite += "<p> Votre Nom : " + $("#inputNom3").val() + "</p>";
        resumeIdentite += "<p> Votre Prénom : " + $("#inputPrenom3").val() + "</p>";
        resumeIdentite += "<p> Votre Adresse mail : " + $("#inputEmail3").val() + "</p>";
        resumeIdentite += "<p> Votre Date de naissance : " + $("#inputDate3").val() + "</p>";
        $("#p2").html(resumeIdentite);


        let valeurRadio = $("input[type=radio][name=gridRadios]:checked").val();
        $("#p3").text("Vous souhaitez être réglé : \n" + valeurRadio);
        console.log(valeurRadio);

        let valeurTextarea = $("#inputTextarea6").val();
        $("#p4").text("Votre témoignage : \n" + valeurTextarea);
        console.log(valeurTextarea);
    });

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // spécification checkbox/radio

    $("input[type=radio][name=gridRadios]").on("click", function () {
        var alertBox = "";
        alertBox += "Vous avez sélectionner comme moyen de paiement : \n"
        alertBox += "[" + $(this).val() + "] \n";
        alertBox += "Vous pourrez changer avant de valider !"
        alert(alertBox);
    })

    //-------------------------------
    // ajout spécification sur les boutons valid/reset

    $("#valider").on("click", function () {
        alert("Vous allez envoyer vos informations. \n Merci de vous relire dans (resume)");
    });

    $("#reset").click(function () {
        let inputId = $(".formValid").attr("id");
        let inputSpan = $(".formValid ").parent().next();
        inputSpan.hide();
        $("#" + inputId + "").css("border", "none");
    });



    //-------------------------------
    // Bouton signature, mise à zéro formulaire
    $("#signer").on("click", function () {
        $("#corpus").hide();
        $("#pan2").html("");
    })

})