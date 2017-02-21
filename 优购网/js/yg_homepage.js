(function($){
	$(function(){
		/*左侧导航*/
		var
			oImgBoxNav = $('.imgBoxNav'),
			aLi        = oImgBoxNav.children('li'),
			oChildNav  = aLi.children('.childNav');
		aLi.hover(function(){
			var iIndex = $(this).index();
			oChildNav.eq(iIndex).css('display','block');
		},function(){
			var iIndex = $(this).index();
			oChildNav.eq(iIndex).css('display','none');
		});


		/*主轮播图*/
		oBanner    = $('#banner'),
		oImgList   = $('.imgList'),
		aBannerLi  = oImgList.children('li'),
		oPoinBtn   = $('#poinBtn'),
		aPoinBtn   = oPoinBtn.children('a'),
		iIndex     = 0,
		iTimer     = null;
		//自动播放
		play();
		//鼠标进入运动停止
		oBanner.hover(function(){
			clearInterval(iTimer);
		} , function(){
			play();
		});
		aPoinBtn.bind('mouseenter' , function(){
			var iIndex = $(this).index();
			aPoinBtn.removeClass('poinBtnActive').eq(iIndex).addClass('poinBtnActive');
			aBannerLi.not($(this)).stop(true).animate({opacity:0,zIndex:'0'})
			aBannerLi.eq(iIndex).stop(true).animate({opacity:1,zIndex:'1'});
		});
		//自动播放
		function play(){
			iTimer = setInterval(function(){
				iIndex++;
				if (iIndex >= aPoinBtn.length) {
					iIndex = 0;
				}
				aPoinBtn.removeClass('poinBtnActive').eq(iIndex).addClass('poinBtnActive');
				aBannerLi.not($(this)).stop(true).animate({opacity:0,zIndex:'0'})
				aBannerLi.eq(iIndex).stop(true).animate({opacity:1,zIndex:'1'});
			},2000);
		}


		/*热门品牌区域轮播图*/
		var 
			oHotBrandListBody = $('.hotBrandListBody'),
			oLength           = oHotBrandListBody.children('ul').length,
			iSpeed = 1100,
			iNum   = 0;
		//右侧按钮
		$('.hotBrandListRBtn').bind('click',function(){
			iNum++;
			if (iNum >  oLength-1) {
				iNum = 0;
				oHotBrandListBody.stop(true).animate({left:0},0);
			}
			oHotBrandListBody.stop(true).animate({left:-(iSpeed*iNum)});
		});
		//左侧按钮
		$('.hotBrandListLBtn').bind('click',function(){
			iNum--;
			if (iNum < 0) {
				iNum = oLength-1;
				oHotBrandListBody.stop(true).animate({left:-(iNum*iSpeed)},0);
			}
			oHotBrandListBody.stop(true).animate({left:-(iSpeed*iNum)});
		});


		/*回到顶部*/
		var oBackTop = $('#backTop');
		oBackTop.bind('click',function(){
			$('html,body').stop(true).animate({scrollTop:0});
		});


		/*楼梯跑到*/
		$(window).scroll(function(){
			//跑道滚动到不同的地方，floorBtn的top值不一样
			var iScroll = $(window).scrollTop();
			if (iScroll>300) {
				$('#floorBtn').stop(true).animate({top:10},200);
			}else{
				$('#floorBtn').stop(true).animate({top:230},200);
			}
		});
		$('#sport').bind('click',function(){
				$('html,body').stop(true).animate({scrollTop:1445});
			});
		$('#girl').bind('click',function(){
				$('html,body').stop(true).animate({scrollTop:1995});
			});
		$('#outside').bind('click',function(){
				$('html,body').stop(true).animate({scrollTop:2540});
			});
		$('#boy').bind('click',function(){
				$('html,body').stop(true).animate({scrollTop:3635});
			});
		$('#clothing').bind('click',function(){
				$('html,body').stop(true).animate({scrollTop:4180});
			});
		$('#child').bind('click',function(){
				$('html,body').stop(true).animate({scrollTop:4730});
			});


		//特卖专区选项卡
		var 
			aSaleBtnLi = $('#saleBtn li');
			aSaleBtnLi.bind('click',function(){
				iIndex = $(this).index();
				aSaleBtnLi.removeClass('active').eq(iIndex).addClass('active');
				$('.salePanel').removeClass('salePanelActive').eq(iIndex).addClass('salePanelActive');
			});
	});
})(jQuery);