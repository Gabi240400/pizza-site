jQuery(document).ready(function($){

$('.live-search-list li').each(function(){
	$(this).attr('data-search-term', $(this).text().toLowerCase());
});

$('.live-search-box').on('keyup', function(){

var searchTerm = $(this).val().toLowerCase();
if(!searchTerm) {
	    $('.live-search-list li').each(function(){
	    	$(this).show();
	    });
}
else {
    $('.live-search-list li').each(function(){

        if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0) {
            $(this).show();
        } else {
            $(this).hide();
        }

    });
}

});



});