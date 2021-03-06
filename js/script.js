/******************************
SCROLL TO TOP
******************************/

var timeOut;
function scrollToTop() {
	if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
		window.scrollBy(0,-50);
		timeOut=setTimeout('scrollToTop()',10);
	}
	else clearTimeout(timeOut);
}

/******************************
VENOBOX
******************************/

$(document).ready(function(){

    /* default settings */
    $('.venobox').venobox();


    /* custom settings */
    $('.venobox_custom').venobox({
        framewidth: '400px',        // default: ''
        frameheight: '300px',       // default: ''
        border: '10px',             // default: '0'
        bgcolor: '#5dff5e',         // default: '#fff'
        titleattr: 'data-title',    // default: 'title'
        numeratio: true,            // default: false
        infinigall: true            // default: false
    });

    /* auto-open #firstlink on page load */
    $("#firstlink").venobox().trigger('click');
});

/******************************
ISOTOPE
******************************/

var $gallery = $('.gallery').isotope({
	itemSelector: '.image-container',
	layoutMode: 'fitRows'
});

$('.filter-category-group').on('click', '.category', function() {
	$(this).toggleClass('selected').siblings().removeClass('selected');
	var filterValue = $(this).attr('data-filter');
	$gallery.isotope({ filter: filterValue });
});
