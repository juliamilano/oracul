$(function(){	
	// $(".toggle-mnu").click(function() {
	// 	$(this).toggleClass("on");
	// 	$(".menu").slideToggle();
	// 	return false;
	// });

    /*open*/
    this.openMenuPopup = function (selector) {
        $('body').addClass('overflow_hidden');
        $(selector).addClass('active');
    };
    /*close*/
    this.closePopup = function (selector) {
        $(selector).removeClass('active');
        $('body').removeClass('overflow_hidden');
    };
    // $('.container-icon').on('click', function(){
    //     var wraperPopup = $(this).parent().parent().parent().parent();
    //     wraperPopup.removeClass('active');
    //     $('body').removeClass('overflow_hidden');
    // });

    this.openService = function(modalWindowClass, numSelecter){
        var numSelecter = numSelecter || 0;
        if(numSelecter == 1){

        }
        $(modalWindowClass).addClass('active');
    };
    this.closeService = function(modalWindowClassClose){
        $(modalWindowClassClose).removeClass('active');
    };
	
///// don't touch it!!! final parenthesis
});

