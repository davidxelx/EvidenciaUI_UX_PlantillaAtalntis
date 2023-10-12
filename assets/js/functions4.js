$(function(){

	// Lista de docente
	$.post( '../view/select/Beneficiario.php' ).done( function(respuesta)
	{
		$( '#Beneficiario' ).html( respuesta );
	});
	
	
	// Lista de Ciudades
	$( '#Beneficiario' ).change( function()
	{
		var el_continente = $(this).val();

	});


	
	
	

})
