
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


$(document).ready(function () {

    /*click btn enviar Correo*/
    $("#enviar-datos").click(function () {

        alert("Tus datos se han enviado correctamente...");
    });


     // Alternar expandir y colapsar texto/
    $(".texto-colapsado, .texto-expandido").on("click", function () {
        $(this).toggleClass("texto-colapsado texto-expandido");
    });


    /*ocultar o mostrar contenido de las card al hacer click en el titulo de la receta*/
    $(".card-title").on("click", function () {
        $('.img-top').toggle("slow");
        $('.card-text').toggle("slow");
    });

    /*hacer un smooth control*/
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top - 100
                },
                500);
        }
    });

});