(function() {



// Menu

$('.header__services-menu-btn').click(function() {
	$('.header__services-menu-wrap').addClass("header__services-menu-wrap_open");
	$('html, body').css('overflowY', 'hidden'); 
});

$('.header__services-menu-close').click(function() {
	$('.header__services-menu-wrap').removeClass("header__services-menu-wrap_open");
	$('html, body').css('overflowY', 'auto'); 
});


// Page nav

$('.header__page-nav-btn').click(function() {
	$('.header__page-nav-wrap').addClass("header__page-nav-wrap_open");
	$('html, body').css('overflowY', 'hidden'); 
});

$('.header__page-nav-close').click(function() {
	$('.header__page-nav-wrap').removeClass("header__page-nav-wrap_open");
	$('html, body').css('overflowY', 'auto'); 
});


// Fixed header

$(window).scroll(function() {
	if ($(this).scrollTop() > 1){
		$('.header__top').addClass("header__top_fixed");
	}
	else{
		$('.header__top').removeClass("header__top_fixed");
	}
});



// Modal


	// Modal - Open

	$( ".open-big-modal" ).click(function(e) {
		e.preventDefault();
		$('.big-modal').addClass("modal_open");
		$('html, body').css('overflowY', 'hidden'); 
	});

	$( ".open-small-modal" ).click(function(e) {
		e.preventDefault();
		$('.small-modal').addClass("modal_open");
		$('html, body').css('overflowY', 'hidden'); 
	});

	$( ".open-city-modal" ).click(function(e) {
		e.preventDefault();
		$('.city-modal').addClass("modal_open");
		$('html, body').css('overflowY', 'hidden'); 
	});

	// Modal - Close btn

	$( ".modal .close-btn" ).click(function() {
		$('.modal').removeClass("modal_open");
		$('html, body').css('overflowY', 'auto'); 
	});

	// Modal - Close screen

	$( ".modal .modal__screen" ).click(function() {
		$('.modal').removeClass("modal_open");
		$('html, body').css('overflowY', 'auto'); 
	});




// City search

$('.city-modal__search').on('input', function(){

	let str = $(this).val().toLowerCase();

	if (str.length <= 2){
		$('ul.city-modal__list li').show();
	}
	else {
	$('ul.city-modal__list li').each(function(){
		if ($(this).text().toLowerCase().indexOf(str) < 0){
			$(this).hide();
		}
	});

	}

	if (str.length <= 0){
		$('ul.city-modal__list li.city-modal__list-item_hidden').hide();
	}

});



// Slider

$('.shift-slider').each(function() {
	$(this).slick({
		infinite: false,
		variableWidth: true,
		cssEase: 'ease-out',
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		// waitForAnimate: false,
		appendArrows: $(this).parent().find('.shift-slider__nav'),
		arrows: true,
	});
});

$('.gallery__slider').each(function() {
	$(this).slick({
		infinite: false,
		variableWidth: true,
		cssEase: 'ease-out',
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendArrows: $(this).parent().find('.shift-slider__nav'),
		arrows: true,
		rows: 2
	});
});




// Phone mask

[].forEach.call( document.querySelectorAll('input[type="tel"]'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

});




// Tabs

$('.faq__question').on('click', function() {

		$(this).next(".faq__answer").slideToggle();
		$('.faq__question').not(this).next(".faq__answer").slideUp();

		$(this).parent().toggleClass('faq__tabs-item_active');
		$('.faq__question').not(this).parent().removeClass('faq__tabs-item_active');

});



// Article btn

$(".article__btn").click(function() {

	$('.article__content').toggleClass('article__content_folded');
	if ($('.article__content').hasClass('article__content_folded')) {
		$(".article__btn").text('Читать дальше');
	}
	else{
		$(".article__btn").text('Скрыть');
	}

});


}());