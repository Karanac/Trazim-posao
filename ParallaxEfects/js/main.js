	
	var btn = $('.btn');

	btn.on('click', function(e) {
		$('html, body').animate({
			'scrollTop': '0'
		}, 700);

		e.preventDefault();
	});



$(window).scroll(function() {

	var wScroll = $(this).scrollTop(),
		headerHeight = $('header').height(),
		wHeight = $(window).height(),
		dollar = ( wScroll / wScroll ) / wScroll * 200,
		h1 = $('.h1');

	console.log(dollar);

		if ( wScroll > wHeight ) {
				btn.show();
			} else {
				btn.hide();
			}
	

		h1.css('transform', 'rotateY('+ wScroll +'deg) translate( '+ wScroll * 2 +'px,'+ wScroll +'px )');

	// if ( wScroll <= headerHeight) {
		$('.img1').css(
			'transform', 'scale(.7) rotateY(20deg) translate(0px, '+ wScroll / 2 +'%)'
		);
		$('.img2').css(
			'transform', 'scale(1.3) rotateY() translate(0px, '+ wScroll / 5.5 +'%)'
			
		);
		$('.img3').css(
			'transform', 'scale(.8) rotateY(-30deg) translate(0px, '+ wScroll / 5.6 +'%)'
		);
		$('.img4').css(
			'transform', 'scale(.5) rotateY(10deg) translate(0px, '+ wScroll +'%)'
		);
		$('.img2').css(
			'opacity', dollar
		);
	// }

	var articleOffset = $('article').offset().top,
		articleImgs = $('article figure');

		
	if ( wScroll >= articleOffset - wHeight / 2 ) {

		// for ( var i = 0; i < articleImgs.length; i++ ) {
		// 	setTimeout(function() {
		// 		articleImgs[i].addClass('is-showing');
		// 	}, ( 700 * ( Math.exp( i * 0.14 ))) - 700);
		// }

		articleImgs.each(function(i) {
			setTimeout(function() {
				articleImgs.eq(i).addClass('is-showing');
			}, (700 * ( Math.exp( i * 0.14 ))) - 700 );
		});	
	}

	var section = $('section').offset().top,
		modelText = $('.modelText'),
		opacity = ( wScroll - section + wHeight ) / wHeight / 2 ;

	if ( wScroll > section - wHeight ) {
		modelText.css(
			'opacity', opacity
			);
	}

	var panels = $('.panels').offset().top,
		panel1 = $('.panel1'),
		panel3 = $('.panel3'),
		translateX = Math.min(( wScroll - panels + wHeight ) / wHeight * 100 - 100 , 0);
		translateY = Math.min(( wScroll - panels + wHeight ) / wHeight * 20 - 20 , 0);

	if ( wScroll > panels - wHeight ) {
		console.log(translateY);
		console.log(translateX);
		panel1.css('transform', 'translate('+ translateX +'%, '+ -translateY +'%)');
		panel3.css('transform', 'translate('+ -translateX +'%, '+ -translateY +'%)');
	} 


});

// $('article figure').on('click', function() {
// 	$('.caption').css('left', '0');

// });
