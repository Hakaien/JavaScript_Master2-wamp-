$(window).on("load", function(){

        setTimeout(function(){
        $.ajax({
            url: "pays.json",
            type: "GET",
            dataType: "",

            success: function (data) {
                console.log(data);
            },

            error: function () {
                console.log("error 66");
            } 
        })
    },4000);
    
    var html ="";
    html += 


    $("#btnRechercher").on("click", function(){
        if ($("#chercher").) {

        }else {
            console.log("erreur, mauvais pays !")
        }
    });
});