!function(){
	var $mainLi = $('.nav .nav-items .nav-item');
	var $tabLi= $('.nav-drop li');
	var $border = $('.nav .border');
	$mainLi.hover(function(){
		var left = $(this).position().left;
		var width = $(this).width();
		$(this).children().css('color' , '#fff');
		$border.css('display','block');
		$border.stop().animate({
			left : left+'px',
			width : width +'px'
		});
	},function(){	
		$border.css('display','none');
		$(this).children().css( 'color' , '#454545' );
	});	
}()