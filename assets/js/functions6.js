$(function(){

	// Lista de docente
	$.post( '../view/select/profesionales.php' ).done( function(respuesta)
	{
		$( '#doctor' ).html( respuesta );
	});
	
	
	// Lista de Ciudades
	$( '#doctor' ).change( function()
	{
		var el_continente = $(this).val();

	});


	
	
	

})
