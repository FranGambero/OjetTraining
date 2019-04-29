$(document).ready(function(){
    console.log("Pagina cargada!");

    var $li = $('li'),
    $imagenes = $li.find('img'),
    activo = 0,
    cantidad = $imagenes.length;

    //Ocultamos imagenes
    $li.hide();

    $imagenes.each(function(index,imagen){
        $li.eq(index).css({
                'background-image':'url(' + $(imagen).attr('src') + ')',
                'background-size':'cover',
                'background-position':'center center',
                'position':'absolute'
        });

        $(imagen).remove();
    });

    $li.eq(activo).fadeIn();

    //Event listeners
    $('#derecha').click(function(event){
        event.preventDefault();
        activo += 1;
        if(activo >= cantidad){
            activo = 0;
        }
        //Primero oculta todas y luego la activa la cargas con fadeIn
        $li.hide().eq(activo).fadeIn();
    });

    $('#izquierda').click(function(event){
        event.preventDefault();
        activo -= 1;
        if(activo < 0){
            activo = cantidad-1;
        }
        $li.hide().eq(activo).fadeIn();
    });

    function mostrarImagen(){
        $li.hide().eq(activo).fadeIn();
    }
});