

	$('.resumeSliderNavBtutton1').click(function(){

		$('.resumeSliderNavBtutton').removeClass('resumeSliderActive');
		$(this).addClass('resumeSliderActive');
		$('.testimonialsSliderContainer').animate({'margin-left': '0%'}, 500);

	});

	$('.resumeSliderNavBtutton2').click(function(){

		$('.resumeSliderNavBtutton').removeClass('resumeSliderActive');
		$(this).addClass('resumeSliderActive');
		$('.testimonialsSliderContainer').animate({'margin-left': '-100%'}, 500);

	});

	$('.resumeSliderNavBtutton3').click(function(){

		$('.resumeSliderNavBtutton').removeClass('resumeSliderActive');
		$(this).addClass('resumeSliderActive');
		$('.testimonialsSliderContainer').animate({'margin-left': '-200%'}, 500);

	});


	$('.portfolioProject').click(function(){

	
		var src = $(this).find('img').attr('src');

		$('.projectImgFullscreen').fadeIn();
		$('.projectImgFullscreen img').attr('src', src);	

	});

	$('.projectFullscreenOut').click(function(){

		$('.projectImgFullscreen').fadeOut();

	});


	$('.blogButtonNumber').click(function(){

		$('.blogButtonNumber').removeClass('blogButtonNumberActive');
		$(this).addClass('blogButtonNumberActive');

	});


	$('.navigation').click(function(){

		$('#home').css({'transform' : 'translateX(-51%)'});

	});
	

	$('.navigationHome').click(function(){

		$('#home').css({'transform' : 'translateX(0)'});		

	});


