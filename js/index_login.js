$(function(){
	//reset 输入框padding
	$("input[type='text'],textarea").each(function(){
		var w = $(this).width();
		$(this).css({
			"width":(w-22)+'px',
			"padding-left":"10px",
			"padding-right":"10px"
		})
	})
	
	//单选多选效果
	$("label[for]").on('click',function(){
		var $parent = $(this).parent();
		setTimeout(function(){
			$parent.find("input[type='radio'],input[type='checkbox']").each(function(){
				var id = this.id;
				if($(this).is(':checked')){
					$parent.find("label[for='"+id+"']").addClass("selected")
				}else{
					$parent.find("label[for='"+id+"']").removeClass("selected")
				}
			})
		},1)
	})
	
	//期望广告类型
	var addType={};
	
	$("#multiple .drop li").on("click",function(){
		var i = $(this).index();
		if(addType[i]){
			addType[i]=null
		}else{
			addType[i]=$(this).text()
		}
		$(this).toggleClass("selected")
		setSeletedHtml();
	})
	//将addType结果渲染至页面	
	function setSeletedHtml(){
		var htm = "",v=[];
		for(var i in addType){
			if(addType[i]){
				htm+='<li data-id="'+i+'">'+addType[i]+'<i class="close"></i></li>';
				v.push(addType[i])
			}
		}
		$("#multiple ul.selected").html(htm);
		$("#ad")[0].value = v.join(",");
		fixSeletedHtml();
	}
	//对addType渲染出来的结果进行二次渲染，超出项以。。。表示
	function fixSeletedHtml(){
		var $ul = $("#multiple ul.selected"),
			W = $ul.width() - 80,
			x = 0,max=0,
			$li = $ul.find("li"),
			status=1;
		for(var i=0,len=$li.length;i<len;i++){
			var w = $li.eq(i).outerWidth(true);
			max+=w;
			if(status&&x+w<W){
				x+=w;
				continue;
			}
			status=0;
			$li.eq(i).remove()
		}
		if(max>W){
			$('<li>···</li>').css({
				'width':W-x+'px',
				'max-width':'80px'
			}).appendTo($("#multiple ul.selected"))
		}
	}
	//删除已选项
	
	$("#multiple ul.selected").on("click",".close",function(){
		var i = $(this).parent().data("id");
		$("#multiple .drop li").eq(i).trigger("click")
	})
	
	$("#scrollTest").scrollbars();
	$("#multiple").hover(function(){
		$(this).find(".drop").show();
		$("#scrollTest").mousewheel()
	},function(){
		$(this).find(".drop").hide();
	})
})
//页面正则匹配
function $sel(id,tabname){
      if(id!="" && tabname!=""){
        var tem_obj=document.getElementById(id);
        return tem_obj.getElementsByTagName(tabname);
      }else if(id!=""){
        return document.getElementById(id);
      }else{
        return document.getElementsByTagName(tabname);
      }
    }
       
    //电话号码验证
    function isnum(obj){
      var reg=/^1[345678]\d{9}$/; 
      if(!reg.test(obj.value)){
        $('.tipps5').css('display','block');
      }else{
        $('.tipps5').css('display','none');
      }
    }
       
    //验证邮件格式
    function ismail(obj){
      var reg=/^[1-9a-zA-Z_]+@[0-9a-zA-Z]+(\.[a-zA-Z]+){1,3}$/; 
      if(!reg.test(obj.value)){
         $('.tipps4').css('display','block');
      }else{
        $('.tipps4').css('display','none');
      }
    }
       
    //验证用户名格式
    function isname(obj){
      var reg=/^[a-zA-Z_][0-9a-zA-Z_]{5,17}$/g;
      if(!reg.test(obj.value)){
         $('.tip1').css('display','block');
      }else{
        $('.tip1').css('display','none');
      }
    }
 	//验证密码号格式
 	 function ispassword(obj){
      var reg=/^[a-zA-Z0-9_]{6,18}$/;
      if(!reg.test(obj.value)){
      }else{
        $('.tip2').css('display','none');
      }
    }
    //初始化验证
    window.onload=function(){
        //注册一个失去焦点的事件
        $sel("checkphone","").onblur=function(){
          isnum(this);
        }          
        $sel("user","").onkeyup=function(){
          isname(this);
        }
        $sel("password","").onkeyup=function(){
          ispassword(this);
        }
        $sel("checkmail","").onblur=function(){
          ismail(this);
        }
     }
     $(".contip").click(function(){
    	$(".contip").parent().css("display","none");
    })
 function validpwd(){
      if( $('#password').val() != $('#repassword').val()) {
			$('.tip3').css('display','block');
      }else{
		  $('.tip3').css('display','none');
		  };         
    } 
 	
     	
       