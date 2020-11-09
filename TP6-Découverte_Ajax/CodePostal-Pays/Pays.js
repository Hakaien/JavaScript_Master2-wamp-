$(window).on("load", function () {



    $("#btn1").on("click", function () {

        $("#part1").css({display: "block", visibility:"visible"});
        $("#part2").css("display", "none");
        $("#part3").css("display", "none");

        setTimeout(function () {
            // appel ajax sur le fichier pays.json
            $.ajax({
                url: "pays.json",
                type: "GET",
                dataType: "",

                success: function (data) {
                    console.log(data);
                    // création du déroulant avec le nom des pays
                    for (let i = 0; i < data.length; i++) {
                        let choixValue = data[i].alpha2;
                        let choixText = data[i].nom_fr_fr;
                        let deroulant = "<option value=\"" + choixValue + "\">" + choixText + "</option>"
                        $(deroulant).appendTo($("#pays"));
                    }

                    $("#btnAfficher").on("click", function () {
                        let choixPays = $("#pays option:selected").text();
                        let choixValue = $("#pays option:selected").val();
                        console.log(choixPays);
                        console.log(choixValue);

                        let champ = "";
                        champ += "<img src=\"./flags/" + choixValue + ".png\" style='height:200px'>"
                        champ += "<p>Code Pays : " + choixValue + " </p>"
                        champ += "<p>Nom du Pays : " + choixPays + " </p>"

                        $("#champ1").html(champ);

                    });

                    $("#btnRechercher").on("click", function () {
                        let temp = $("#chercher").val();
                        console.log(temp);
                        let pays = data[40].alpha2;
                        console.log(pays);
                        console.log(data.length);
                    });

                },

                error: function () {
                    console.log("error 66");
                }
            })
        }, 1000);
    })

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
                    console.log(fluxHTML);

                    $("li").on("click", function () {
                        $("#chercher2").val($(this).html());
                        $("#sousMenu").css("display", "none");
                        let var1=$(this).attr("id");
                        let var2= $(this).html();
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

    $("#btn3").on("click", function () {
        $("#part3").css("display", "block");
        $("#part1").css("display", "none");
        $("#part2").css("display", "none");

        // var options = {
        //     url:"http://restcountries.eu/",
        //     type:"GET",
        //     getValue: "name",

        //     list: {
        //         match : {
        //             enabled: true
        //         }
        //     },
        //     theme: "square"
        // };

        // $("#chercher3").easyAutocomplete(options);

    });
});