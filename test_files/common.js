$(document).ready(function() {
	
	window.mySwipe = new Swipe(document.getElementById('slider'), {  
	  startSlide: 0,
	  speed: 1000,
	  auto: 5000,
	  continuous: true,
	  disableScroll: false,
	  stopPropagation: false,
	  callback: function(index, elem) {
		
		var indi = $('.indicator a');
		indi.removeClass('on');
		indi.eq(index).addClass('on');
	  }
	});


	var store = $('.btnStore');
	store.click(function() {
		$(this).find('img').attr('src','/images/btn_download_tab.png');
	});
});