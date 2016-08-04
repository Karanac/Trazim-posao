
	$('.toggleButton').click(function(){

		$('.toggleMenu').toggle();
		$('.line2').css({'opacity' : '0'});
		$('.line1').css({'transform' : 'translateY(10px) rotateZ(45deg)'});
		$('.line3').css({'transform' : 'translateY(-10px) rotateZ(-45deg)'});
		
	});