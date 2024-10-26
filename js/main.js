$( function() {
  $("body").on("click",".anchor", function (event) {
  		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
  $('.modal__phone').click(function(){
  	$('#exampleModal').arcticmodal()
  })
});
(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu')
        .toggleClass('menu_state_open');
    });
    
    $('.menu__links-item').on('click', function() {
      // do something

      $(this).closest('.menu')
        .removeClass('menu_state_open');
    });
    $(document).mouseup(function (e) {
    var container = $(".menu");
    if (container.has(e.target).length === 0){
        container.removeClass('menu_state_open');
    }
    });
  });
})(jQuery);

$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      loop: true,
      navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
    })
  }

);