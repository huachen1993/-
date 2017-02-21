(function($){
	$(function(){
		/*页面刷新回到顶部*/
		$(window).on('load',function(){
                $('html,body').stop(true).animate({scrollTop:0},10);
            });

		/*优购导购区域轮播图*/
		//左侧按钮
		$('.brandLeftBtn').bind('click',function(){
			$('.brandListFirst').stop(true).animate({opacity:1,'z-index':1},0);
			$('.brandListSecond').stop(true).animate({opacity:0,'z-index':0},0);
		});
		//右侧按钮
		$('.brandRightBtn').bind('click',function(){
			$('.brandListFirst').stop(true).animate({opacity:0,'z-index':1},0);
			$('.brandListSecond').stop(true).animate({opacity:1,'z-index':1},0);
		});
	});
})(jQuery);


//跨域请求的回调函数
function cb(data){
	var
		oSearchList = $('searchList'),
		aLi         = oSearchList.getElementsByTagName('li'),
		oContent    = $('content');
		oSearchList.innerHTML = '';
	data.result.forEach(function(v){
		var oLi = document.createElement('li');
			oLi.innerHTML = v[0];
			oSearchList.appendChild(oLi);
	});
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].onclick = function(){
			oContent.value = this.innerHTML;
			oContent.style.color = '#000';
			oSearchList.style.display = 'none';
		}
	}
}
function $(id){
	return document.getElementById(id);
}
window.onload = function(){
/*----------------------------------------搜索输入框效果--------------------------------*/
	var
		oSearch  = $('search'),
		oSearchList    = $('searchList'),
		oContent = $('content');
	//异步请求JSONP跨域获取数据
	
	//给输入框添加oninput事件
	oContent.oninput = oContent.onpropetychange = function(){
		if (oContent.value !== '') {
			var oScript = document.createElement('script');
				oScript.src = 'https://suggest.taobao.com/sug?code=utf-8&q='+ this.value +'&_ksTS=1483614919450_1047&callback=cb&k=1&area=c2c&bucketid=5';
				oSearch.appendChild(oScript);
				oSearchList.style.display = 'block';
				oSearch.removeChild(oScript);
		}else{
			oSearchList.innerHTML = '';
			oSearchList.style.display = 'none';

		}
	}
	//底部遮罩栏信息
	var oBottomFix = $('bottomFixClose');
	var oBottomFixClose = $('bottomFix');
	oBottomFix.onclick = function(){
		oBottomFixClose.style.display = 'none';
	}
}

		
