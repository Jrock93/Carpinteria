$(document).ready(Slider);



function Slider() {
	// body...
	
	$("#btAnt").click(function(){



	});
	$("#btSig").click(function()
	{
		var cont = $('.imagenes').find('.i_elemento').size();
		$('.imagenes').find('.i_elemento').each(
			
			function(index, value){
				if($(value).hasClass('i_visible')){
					$(value).slideUp();
					$(value).removeClass('i_visible');
					
					
					if(index+1<cont){
						$($('.imagenes').find('.i_elemento').get(index+1)).slideDown(3000);
						$($('.imagenes').find('.i_elemento').get(index+1)).addClass('i_visible');	
						return false;
					}	
				
				else{
					$($('.imagenes').find('.i_elemento').get(0)).slideDown(3000);
					$($('.imagenes').find('.i_elemento').get(0)).addClass('i_visible');
					return false;
				}
				}


		});
		
		
		
	});



}