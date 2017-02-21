(function($){
	$(function(){
		//鼠标进入中等图片区域，遮罩层跟大图出现
		$('.middleImg').hover(function(){
			$('.zhezhao').css({display:'block'});
			$('.bigImg').css({display:'block'});
		},function(){
			$('.zhezhao').css({display:'none'});
			$('.bigImg').css({display:'none'});
		});
		//大小图之间的切换
		var 
			oSmallImg     	 = $('.smallImg'),
			oSmallImgList 	 = oSmallImg.children('li'),
			oSmallImgListImg = oSmallImg.children('img');
			oSmallImgList.each(function(v){
			oSmallImgList.eq(v).bind('mouseenter',function(){
				var iIndex = v+1;
				oSmallImgList.not(v).removeClass('active').eq(v).addClass('active');
				//让中等图片的src更改为所划过小图片的src
				$('.middleImg').children('img').attr('src',('../img-yg_commoditydetails/' + iIndex +'.jpg'));
				//让大图片的src更改为所划过小图片的src
				$('.bigImg').children('img').attr('src',('../img-yg_commoditydetails/' + iIndex +'.jpg'));
			});
		});
		//图片放大镜效果
		$('.middleImg').bind('mousemove',function(e){
			var
				iL = e.pageX - $('.middleImg').offset().left - $('.zhezhao').width()/2,
				iT = e.pageY- $('.middleImg').offset().top - $('.zhezhao').height()/2;
				if (iL < 0) {
					iL = 0;
				}
				if (iT < 0) {
					iT = 0;
				}
				if(iL > ($('.middleImg').width() - $('.zhezhao').width()) ){
					iL = $('.middleImg').width() - $('.zhezhao').width();
				}
				if(iT > ($('.middleImg').height() - $('.zhezhao').height()) ){
					iT = $('.middleImg').height() - $('.zhezhao').height() ;
				}
				$('.zhezhao').css('left',iL);
				$('.zhezhao').css('top',iT);
				$('.bigImg').children('img').css('left',-iL*2);
				$('.bigImg').children('img').css('top',-iT*2);
		});


		/*推荐区域的轮播图*/
		var iIndex = 0,
			iSpeed1 = 486,
			iSpeed2 = 1140;
		// 往下按钮
		$('#grListBtnR').bind('click',function(){
				iIndex++;
			if (iIndex >= 3) {
				iIndex = 0;
			}
			$('.grList').stop(true).animate({top:-iSpeed1*iIndex});
		});
		// 往上按钮
		$('#grListBtnL').bind('click',function(){
				iIndex--;
			if (iIndex < 0) {
				iIndex = 3;
			}
			$('.grList').stop(true).animate({top:-iSpeed1*iIndex});
		});


		/*看过本商品的用户最终购买区域轮播图*/
		//向右按钮
		$('.antherBtnR').bind('click',function(){
				iIndex++;
			if (iIndex >= 4) {
				iIndex = 0;
			}
			$('.goodsList').stop(true).animate({left:-iSpeed2*iIndex});
			//页数跳转
			var oYeshu = $('.yeshu').children('span');
				oYeshu.html('<span>'+ (iIndex+1) +'</span>');
		});
		// 往左按钮
		$('.antherBtnL').bind('click',function(){
				iIndex--;
			if (iIndex < 0) {
				iIndex = 3;
			}
			$('.goodsList').stop(true).animate({left:-iSpeed2*iIndex});
			//页数跳转
			var oYeshu = $('.yeshu').children('span');
				oYeshu.html('<span>'+ (iIndex+1) +'</span>');
		});




		//加入购物车
		$('.joinCar').bind('click',function(){
			console.log(1);
			$.cookie('')
		});
	});	
})(jQuery);