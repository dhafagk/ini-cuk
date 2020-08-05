/*=== SEARCH FILTER ====*/
/*    https://codepen.io/alexerlandsson/pen/ZbyRoO */
$('[data-search]').on('keyup', function() {
	var searchVal = $(this).val();
	var filterItems = $('[data-filter-item]');

	if ( searchVal != '' ) {
		filterItems.addClass('collapse');
		$('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('collapse');
	} else {
		filterItems.removeClass('collapse');
	}
});
/*=== SCROLL SMUT ====*/
$(document).ready(function(){
    if(location.hash != null && location.hash != ""){
        $(location.hash + '.collapse').collapse('show');
    }
    
    if(window.location.hash) {
      var hash = window.location.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500)
    };
    
    $('.mirror').click(function(){
                $('.mirror').removeClass("active");
                $(this).addClass("active");
            });
});

/*=== Logika Iframe ====*/
$(document).ready(function(){
    /*=======
    DataBase
    ========*/
    var database = [
        "https://www.youtube.com/embed/joV58f4IIV0", 
        "https://www.youtube.com/embed/9XOY8bHkcYM", 
        "https://www.youtube.com/embed/vbdTNtoMpn0"];
    /*Mari Buat Wadah Default*/
    var iframeID = '';
    
    /*=======
    FungsiLoad
    ========*/
    window.onload = function () {
        var hash = window.location.hash;
        var numb = hash.match(/\d/g);
        numb = numb.join("");
        iframeID = numb;
        $("iframe.target[data-id=" + iframeID + "]").prop("src", database[iframeID] + "?autoplay=0");
    };
    /*=======
    KONDISI SAAT DI CLICK
    ========*/
    $('a.targetClick').click(function() {
        /*Mengambil attribute dari A*/
        iframeID = $(this).attr('data-id');
        /*Change Attribute Iframe*/
        $('iframe.target').hide();
        $('iframe.target[data-id='+iframeID+']').show();
        
        $('iframe.target').prop('src', "Null");
        $('iframe.target[data-id='+iframeID+']').prop('src', database[iframeID]+'?autoplay=0');
    });
    
});



















