$(document).ready(function () {
	$('.header__burger, .body__header').click(function (event) {
		$('.header__burger, .body__header').toggleClass('active');
		$('body').toggleClass('lock');
	});

	document.querySelector('.tabs-news__link').classList.add('active');
	document.querySelector('.tabs-news').classList.add('active');

	function selectPanel(e) {
		var target = e.target.dataset.target;

		tabNav = document.querySelectorAll('.tabs-news__link, .tabs-news').forEach(el => el.classList.remove('active'))
		e.target.classList.add('active');
		document.querySelector('.' + target).classList.add('active');
	};

	tabNav = document.querySelectorAll('.tabs-news__link').forEach(el => {
		el.addEventListener('click', selectPanel);
	});
});

$(document).ready(function () {
	$('.slider-innovation__name').slick({
		arrows: true,
		slidesToShow:4,
		focusOnSelect: true,
		autoplay:true,
		autoplaySpeed:3000,
		vertical: true,
		verticalSwiping: true,
		asNavFor: ".slider-innovation__img",
		responsive:[
			{
				breakpoint: 1087,
				settings: {
					vertical: false,
					slidesToShow:3
				}
			},
			{
				breakpoint: 648.98,
				settings: {
					vertical: false,
					slidesToShow:2
				}
			},
			{
				breakpoint: 479.98,
				settings: {
					vertical: false,
					slidesToShow:1
				}
			}

		]
		});

	$('.slider-innovation__img').slick({
		arrows: false,
		slidesToShow: 1,
		vertical: true,
		verticalSwiping: true,
		asNavFor: ".slider-innovation__name",
		adaptiveHeight: true,
		responsive:[
			{
				breakpoint: 1087,
				settings: {
					vertical: false
					
				}
			}
		]
	});

	$('.slider__discription').slick({
		arrows: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive:[
			{
				breakpoint: 767.98,
				settings: {
					arrows: false,
					}
			}
		]
		});

});

