$(window).on("load", function () {

    setTimeout(function () {
        // appel ajax sur le fichier pays.json
        $.ajax({
            url: "pays.json",
            type: "GET",
            dataType: "",

            success: function (data) {
                console.log(data);
                // création du déroulant avec le nom des pays
                for (let i = 0; i< data.length; i++ ) {
                    let choixValue = data[i].alpha2;
                    let choixText = data[i].nom_fr_fr;
                    let deroulant = "<option value=\""+choixValue+"\">"+choixText+"</option>"
                    $(deroulant).appendTo($("#pays"));
                }

                $("#btnAfficher").on("click", function() {
                    let choixPays = $("#pays option:selected").text();
                    let choixValue = $("#pays option:selected").val();
                    console.log(choixPays);
                    console.log(choixValue);

                    let champ = "";
                    champ+="<img src=\"./flags/"+choixValue+".png\" style='height:200px'>"
                    champ+="<p>Code Pays : "+choixValue+" </p>"
                    champ+="<p>Nom du Pays : "+choixPays+" </p>"

                    $("#champ").html(champ);

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

    
  
});