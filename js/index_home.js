!function(){
	var focus = document.getElementById('focus'),
		ul = focus.getElementsByTagName('ul')[0],
		lis = ul.getElementsByTagName('li'),
		len = lis.length;
	var page = document.createElement('div');
	page.className='page';
	var i=len+1;
	while(--i){
		var a = document.createElement('a');a.href='javascript:;';
		if(i==len){
			a.className='cur'
		}
		a.innerText = len-i+1;
		page.appendChild(a)
	}
	focus.appendChild(page)
	
	var w = focus.offsetWidth ;
	ul.style.width=w*len +'px';
	ul.style.position='absolute';
	ul.style.left='0';
	var timeStamp,current=0,
	a = page.getElementsByTagName('a')
	function moveTo(i){
		current = i
		ul.style.left = i*w*-1 +'px';
		classChange(i)
	}
	
	function classChange(n){
		for(var i=0;i<len;i++){
			a[i].className='';
			if(i==n){
				a[i].className='cur';
			}
		}
	}
	for(var i=0;i<len;i++){
		a[i].onclick = (function (i){
			return function(){
				moveTo(i)
			}
		})(i)
	}
	
	function moveNext(){
		var n = current+1>len-1 ? 0 : current+1;
		moveTo(n);
	}
	
	function autoPlay(){
		timeStamp = setInterval(moveNext,5000)
	}
	function stopAutoPlay(){
		clearInterval(timeStamp)
	}
	autoPlay()
	
	focus.onmouseover = function(){
		stopAutoPlay()
	}
	focus.onmouseout = function(){
		autoPlay()
	}
	
}();

!function(){
	$(window).scroll(function() {
		if((($(window).scrollTop())>180)&&(($(window).scrollTop())<380))
		{
			$(".mov_1").addClass('home_mov1');
			$(".mov_2").addClass('home_mov2');
		}
		if((($(window).scrollTop())>2500)&&(($(window).scrollTop())<3000))
		{
			$(".brand_txt").addClass('home_mov3');
		}
		if((($(window).scrollTop())>3000)&&(($(window).scrollTop())<3500))
		{
			$(".qiu_txt").addClass('home_mov3');
		}
	}); 
}();


