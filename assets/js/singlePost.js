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
    
});

/*=== Logika Iframe ====*/
$(document).ready(function(){
    /*=======
    DataBase
    ========*/
    var episode1 = [
        "https://www.youtube.com/embed/joV58f4IIV0", 
        "https://www.youtube.com/embed/9XOY8bHkcYM", 
        "https://www.youtube.com/embed/vbdTNtoMpn0"
    ];
    var episode2 = [
        "https://www.youtube.com/embed/CEPWx5b5Wq4", 
        "https://www.youtube.com/embed/RS8oVHAU25E", 
        "https://www.youtube.com/embed/L1bxm5fJMww"
    ];
    var episode3 = [
        "https://www.youtube.com/embed/n4HwGfKf6qU", 
        "https://www.youtube.com/embed/evd0sqnvnWQ", 
        "https://www.youtube.com/embed/Wz6XCLQXh_Y"
    ];
    /*Mari Buat Wadah Default*/
    var iframeID,epsID;
    var kunciIng = 'open';
    /*=======
    FungsiLoad
    ========*/
    window.onload = function () {
        /*=== Ambil HastagLink ===*/
        var hash = window.location.hash;
        var numb = hash.match(/\d/g);
        numb = numb.join("");
        /*=== Rubah Variabel saat pertama kali load berdasarkan hastag link === */
        iframeID = numb;
        epsID = iframeID - iframeID;
        /*=== Check Aja === */
        $('.CheckEpsID').html(epsID);
        $('.CheckIframeIDD').html(iframeID);
        /*=== First Chip add Active ===*/
        if(kunciIng == "open"){
            $("div[data-mirror] span:first-child").addClass("active");
            kunciIng = 'locked';
        };
        /*=== Rubah src saat pertama kali load berdasarkan hastag link ===*/
        $('iframe.target[data-id='+iframeID+']').prop('src', eval("episode"+iframeID)[epsID]+'?autoplay=0');
        /*==== Mirror Tabs ====*/
        $("[data-mirror="+iframeID+"] .mirror").click(function(){
            $("[data-mirror="+iframeID+"] .mirror").removeClass("active");
            $(this).addClass("active");
            epsID = $(this).attr('mirror-id');;
            let xrayHasil = epsID - 1;
            $('.CheckEpsID').html(epsID);
            $('.CheckIframeIDD').html(iframeID);
            /*=== Change Attribute Iframe ===*/
            $('iframe.target[data-id='+iframeID+']').prop('src', eval("episode"+iframeID)[xrayHasil]+'?autoplay=0');
        });
        
    };
    /*=======
    KONDISI SAAT DI CLICK
    ========*/
    $('a.targetClick').click(function() {
        /*=== Mengambil attribute dari A ===*/
        iframeID = $(this).attr('data-id');
        /*=== First Chip add Active ===*/
        if(kunciIng == "open"){
            $("div[data-mirror] span:first-child").addClass("active");
            kunciIng = 'locked';
        };
        /*=== Mengambil attribute dari Tab yang punya Class Active ===*/
        $("[data-mirror="+iframeID+"] .mirror.active").addClass("active");
        epsID = $("[data-mirror="+iframeID+"] .mirror.active").attr('mirror-id');
        let xrayLoad = epsID - 1;
        /*=== Check Aja === */
        $('.CheckEpsID').html(epsID);
        $('.CheckIframeIDD').html(iframeID);
        /*=== Rubah src menggunakan iframeID terbaru dan epsID lama dari mirror yang punya class Active ===*/
        $('iframe.target').hide();
        $('iframe.target[data-id='+iframeID+']').show();

        $('iframe.target').prop('src', "Null");
        $('iframe.target[data-id='+iframeID+']').prop('src', eval("episode"+iframeID)[xrayLoad]+'?autoplay=0');
        /*==== Mirror Tabs ====*/
        $("[data-mirror="+iframeID+"] .mirror").click(function(){
            $("[data-mirror="+iframeID+"] .mirror").removeClass("active");
            $(this).addClass("active");
            epsID = $(this).attr('mirror-id');
            let xrayHasil = epsID - 1;
            $('.CheckEpsID').html(epsID);
            /*=== Change Attribute Iframe ===*/
            $('iframe.target[data-id='+iframeID+']').prop('src', eval("episode"+iframeID)[xrayHasil]+'?autoplay=0');
        });
    });
    
});

/*=== MARI KITA BUAT DARK MODE ====*/
$(document).ready(function(){
    /*Matikan auto close dropdown*/
    $('.dropdown-menu.dua').click(function(e) {
        e.stopPropagation();
    });
    $(".theme-switch").click(function(){
        $(".theme-switch").toggleClass("active");
        $("body").toggleClass("dark-mode");
        if($(this).attr('class') == "theme-switch active"){
            var keadaan = "on";
            localStorage.setItem("darkMode", keadaan);
        }else{
            var keadaan = "off";
            localStorage.setItem("darkMode", keadaan);
        };
    });
    var keadaanHasil = localStorage.getItem("darkMode");
    if(keadaanHasil == "on"){
        $(".theme-switch").addClass("active");
        $("body").addClass("dark-mode");
    };
});