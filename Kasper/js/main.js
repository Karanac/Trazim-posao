var imgArray = new Array("img/kasper_bg_1.jpg" , "img/kasper_bg_2.jpg" , "img/kasper_bg_3.jpg", "img/kasper_bg_4.jpg");

var imgIndex = 0;
var imgLength = imgArray.length - 1;

var img = document.getElementById("img");
var imgSrc = img.src.value;

var ImgButton1 = document.getElementById("imgButton1");
var ImgButton2 = document.getElementById("imgButton2");
var ImgButton3 = document.getElementById("imgButton3");
var ImgButton4 = document.getElementById("imgButton4");

imgButton1.addEventListener("click", sliding1);
imgButton2.addEventListener("click", sliding2);
imgButton3.addEventListener("click", sliding3);
imgButton4.addEventListener("click", sliding4);


function sliding1() {
	imgSrc = imgArray[0];
}
function sliding2() {
	imgSrc = imgArray[1];
}
function sliding3() {
	imgSrc = imgArray[2];
}
function sliding4() {
	imgSrc = imgArray[3];
}


function slide(num) {
	imgIndex += num;

	if ( imgIndex > imgLength ) {
		imgIndex = 0;
	}

	if ( imgIndex < 0 ) {
		imgIndex = imgLength;
	}

	img.src = imgArray[imgIndex];

}

function auto() {
	setInterval("slide(1)", 2000);
}


	// $('#r_arrow').click(function(){
	// 	$('#slider').animate({'margin-left': '-=100%'}, 500);
	// });

	// $('#l_arrow').click(function(){
	// 	$('#slider').animate({'margin-left': '+=100%'}, 500);
	// });


	$('#button1').click(function(){
		$('.button').removeClass('active');
		$(this).addClass('active');
		$('#slider_profile').animate({'margin-left': '0%'}, 500);
	});


	$('#button2').click(function(){
		$('.button').removeClass('active');
		$(this).addClass('active');
		$('#slider_profile').animate({'margin-left': '-100%'}, 500);
	});

	$('#button3').click(function(){
		$('.button').removeClass('active');
		$(this).addClass('active');
		$('#slider_profile').animate({'margin-left': '-200%'}, 500);
	});



	$('.gallery_img img').click(function(){
		var src = $(this).attr('src');
		$('.gallery_full_screen').css({'display': 'flex'});
		$('.gallery_full_screen img').attr('src', src);	
	});


	$('.gallery_full_screen').click(function(){
		$(this).css({'display': 'none'});
	});



	$('#r_arrow').click(function(){
		$('.banner--2').css({
			'animation' : 'bounceInUp 2s cubic-bezier(0.215, 0.610, 0.355, 1.000)'});
	});


	$('.quotes').hover(function(){
		$('.animate_container').css({
			'animation' : 'zoomIn 1.5s ease',
			'display'   : 'flex'
		});
	});

	

	$('.toggle_menu').click(function() {
		$('.toggle_nav_menu').slideToggle();
	});




	$('.design').hover(function(){

		$('.design_banner').css({
			'animation' : 'fadeInRight 1.5s ease',
			'display'	: 'block'
		});

		$('.design_mobile1').css({
			'animation' : 'fadeInLeftBig 1.5s ease',
			'display'	: 'block'
		});

		$('.design_mobile2').css({
			'animation' : 'fadeInLeftBig 1.5s cubic-bezier(.11,-0.28,.11,-0.27)',
			'display'	: 'block'
		});
	});




//		ovo je ne moguce da ne radi :))

		$('.subscribe').hover(function(){

		$('.subscribe_form').css({
			'animation' : 'fadeInRight 1.5s ease',
			'display'	: 'block'
		});

		$('.subscribe_text').css({
			'animation' : 'fadeInLeft 1.5s ease',
			'display'	: 'block'
		});
	});

//		ovo je ne moguce da ne radi :))




	$('.about_us').hover(function(){

		$('.about_us_left').css({
			'animation' : 'fadeInLeft 1.5s ease',
			'display'	: 'block'
		});

		$('.about_us_right').css({
			'animation' : 'fadeInRight 1.5s ease',
			'display'	: 'block'
		});

		$('.values_item_value1 span').css({
			'animation' : 'fadeInLeftHuge 5s cubic-bezier(.17,.01,.24,.01)',
			'display'	: 'block'
		});

		$('.values_item_value2 span').css({
			'animation' : 'fadeInLeftHuge 5s cubic-bezier(.27,.1,.35,.05)',
			'display'	: 'block'
		});

		$('.values_item_value3 span').css({
			'animation' : 'fadeInLeftHuge 5s cubic-bezier(.27,.1,.11,.21)',
			'display'	: 'block'
		});

		$('.values_item_value4 span').css({
			'animation' : 'fadeInLeftHuge 5s cubic-bezier(.09,.22,.11,.21)',
			'display'	: 'block'
		});

	});


		//  isto


	$('.footer').hover(function(){

		$('.logo--footer').css({
			'animation' : 'fadeInDown 1.5s ease',
			'display'	: 'flex'
		});

		$('.footer_socialTitle').css({
			'animation' : 'fadeInUp 1.5s ease',
			'display'	: 'flex'
		});

		$('.footer_socialIcons').css({
			'animation' : 'fadeInUp 1.5s ease',
			'display'	: 'flex'
		});

	});

		// isto








	// $('.targetA[href^="#"]').click(function(e){

	// 	var traget = $(this).attr('href');
	// 	var strip = target.slice(1);
	// 	var anchor = $(".smoothScroll[id='" + strip + "']");

	// 	e.preventDefault();

	// 	$('html, body').animate({
	// 		scrollTop: anchor.offset().top
	// 	}, 'slow');

	// });

	// ne radi


	// $('.smoothScroll').click(function(){
	// 	$(this).addClass('nav_menu_active');
	// });

	// moraju var da se naprave 




// var Slider = {
// 	init: function () {
// 		this.cache();
// 		this.configuration();
// 		this.CurrentSlide();
// 		this.autoChange();
// 		this.changeSlide();
// 		this.bindEvents();
// 	},

// 	cache: function () {
// 		this.$Slide = $('.slide');
// 		this.active = $('.slide.active');
// 		this.Ul = this.$slide.find('.ul');
// 		this.Lis = this.Ul.find('.li');
// 	},

// 	configuration: function () {
// 		this.SlidesCount = Lis.lentgh;
// 		this.AutoChangeTimer = 4000;
// 	},

// 	CurrentSlide: function ()  {
// 		this.active = this.active.index();
// 	},

// 	changeSlide: function (index) {
// 		this.Lis.removeClass('active');
// 		this.Lis.eq(index).addClass('active');
// 	},

// 	bindEvents: function () {
// 		$('.next').on('click' , this.next.bind(this)),
// 		$('.prev').on('click' , this.prev.bind(this)),
// 	},

// 	next: function () {
// 		if ( this.active === this.SlidesCount - 1 ) {
// 			this.active = 0;
// 		} else { this.active += 1;
// 		}

// 		this.changeSlide(this.active);
// 	},

// 	prev: function () {
// 		if ( this.active === 0 ) {
// 			this.active = this.SlidesCount - 1;
// 		} else { this.active -= 1;
// 		}

// 		this.changeSlide(this.active);
// 	},

// 	autoChange: function () {
// 		setTimeout( this.next.bind(this) , this.AutoChangeTimer);
// 	},

// 	progressBar: function () {
// 		$('.progressBar').css{(
// 			'width' : '0%';
// 		)};
// 		$('.progressBar').animate{(
// 			'width' : '100%'
// 		), this.AutoChangeTimer};
// 	}

// };

// Slider.init();