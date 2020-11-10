$(window).on("load", function () {


    // ouverture part1
    $("#btn1").on("click", function () {

        $("#part1").css({ display: "block", visibility: "visible" });
        $("#part2").css("display", "none");
        $("#part3").css("display", "none");

        setTimeout(function () {
            // appel ajax sur le fichier pays.json
            $.ajax({
                url: "pays.json",
                type: "GET",
                dataType: "",

                success: function (data) {
                    // création du déroulant avec le nom des pays
                    for (let i = 0; i < data.length; i++) {
                        let choixValue = data[i].alpha2;
                        let choixText = data[i].nom_fr_fr;
                        let deroulant = "<option value=\"" + choixValue + "\">" + choixText + "</option>"
                        $(deroulant).appendTo($("#pays"));
                    }
                    // affichage des infos pays après clik sur menu déroulant
                    $("#btnAfficher").on("click", function () {
                        let choixPays = $("#pays option:selected").text();
                        let choixValue = $("#pays option:selected").val();

                        let champ = "";
                        champ += "<img src=\"./flags/" + choixValue + ".png\" style='height:200px'>"
                        champ += "<p>Code Pays : " + choixValue + " </p>"
                        champ += "<p>Nom du Pays : " + choixPays + " </p>"

                        $("#champ1").html(champ);

                    });
                },
                error: function () {
                    console.log("error 66");
                }
            })
            // timer de l'appel ajax par setInterval
        }, 1000);
    })

    // ouverture part2 
    $("#btn2").on("click", function () {
        $("#part2").css("display", "block");
        $("#part1").css("display", "none");
        $("#part3").css("display", "none");

        $("#chercher2").keyup(function () {
            ajaxPays($(this).val());
        });

        function ajaxPays(mot) {
            $.ajax({
                url: "pays.json",
                type: "GET",
                dataType: "json",

                success: function (data) {
                    var fluxHTML = "";

                    data.forEach(element => {
                        var position = element.nom_fr_fr.substring(0, mot.length).toUpperCase().search(mot.toUpperCase());

                        if (position != -1) {
                            fluxHTML += "<li id='" + element.alpha2 + "'>" + element.nom_fr_fr + "</li>";
                        }
                    });
                    $("#sousMenu").css("display", "block");
                    $("#sousMenu").empty();
                    $("#sousMenu").append(fluxHTML);
                    // implant au clik : écriture dans l'input + infos dans #champ
                    $("li").on("click", function () {
                        $("#chercher2").val($(this).html());
                        $("#sousMenu").css("display", "none");
                        let var1 = $(this).attr("id");
                        let var2 = $(this).html();
                        let champ = "";
                        champ += "<img src=\"./flags/" + var1 + ".png\" style='height:200px'>"
                        champ += "<p>Code Pays : " + var1 + " </p>"
                        champ += "<p>Nom du Pays : " + var2 + " </p>"

                        $("#champ2").html(champ);
                    })
                },

                error: function (resultat, status, erreur) {
                    console.log(resultat.statusText);
                }
            })
        }
    });

    // ouverture part3
    $("#btn3").on("click", function () {
        $("#part3").css("display", "block");
        $("#part1").css("display", "none");
        $("#part2").css("display", "none");

        // autocomplete via l'API
        var options = {
            url: "https://restcountries.eu/rest/v2/all",
            getValue: "name",
            dataType: "json",
            list: {
                match: {
                    enabled: true
                }
            },
            theme: "square"
        };
        $("#chercher3").easyAutocomplete(options);
        $("#btnRechercher").on("click", function () {
            console.log("bonjour");

            $.ajax({
                url: "https://restcountries.eu/rest/v2/all",
                type: "GET",
                dataType: "json",

                succes: function (data) {
                    console.log(data);
                    console.log("ok");
                },

                error: function (resultat, status, erreur) {
                    console.log(resultat.statusText);
                }
            })

        });

    });
});