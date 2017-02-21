(function($){
	$(function(){
		var
			oGoodsInfo    = $('.goodsInfo'),
			oCheck        = $('.check'),
			oAllchecked   = $('.allchecked'),
			oAllchecked2  = $('.allchecked2'),
   			oCheckSelf    = $('.checkSelf'),
   			oRemove       = $('.remove'),
   			oRemoveAll    = $('.removeAll'),
   			oRemovecart   = $('.removecart'),

   			//计算价格的参数
   			oGoodsnum     = $('.goodsnum'),
   			oGoodsprice   = $('.goodsprice'),
			oPricesum     = $('.pricesum'),
			oReduce       = $('.reduce'),
			oSum          = $('.sum');
		var
			iGoodsprice   = Number(oGoodsprice.text()),
			iGoodsNum     = Number(oGoodsnum.val()),
			iPricesum     = iGoodsprice*iGoodsNum;
		//全选checkbox的效果
		oCheck.bind('change',function(){
			if ($(this).is(':checked')) {
				oCheck.each(function(){
					$(this).removeProp('checked',true);
					oCheckSelf.prop('checked',true);
					oPricesum.text(iPricesum);
					sumAndReduce();
				});	
			}else{
				oCheck.each(function(){
					$(this).removeProp('checked',false);
					oCheckSelf.prop('checked',false);
					oPricesum.text(0);
					$('.pricesum1').text(iGoodsprice);
				});
			}
		});
		//单选按钮的效果
		oCheckSelf.bind('change',function(){
			if ($(this).is(':checked')) {
				sumAndReduce();
				oPricesum.text(iGoodsNum*iGoodsprice);
			}else{
				oPricesum.text(iGoodsprice);
				oGoodsnum.val(1);
			}
		});
		function sumAndReduce(){
			//给增加数量的按钮绑定click事件
			oSum.click(function(){
				iGoodsNum++;
				oGoodsnum.val(iGoodsNum);
				oPricesum.text(iGoodsNum*iGoodsprice);
			});
			//给减少的按钮添加click事件
			oReduce.click(function(){
				iGoodsNum--;
				if (iGoodsNum < 1) {
					iGoodsNum = 1;
				}
				oGoodsnum.val(iGoodsNum);
				oPricesum.text(iGoodsNum*iGoodsprice);
			});
		}

		//给删除按钮添加click事件
		oRemove.click(function(){
			oGoodsInfo.remove();
			oPricesum.text(0);

		});

		//给全删按钮添加click事件
		oRemoveAll.click(function(){
			oGoodsInfo.remove();
			oPricesum.text(0);
		});

		//清空购物车
		oRemovecart.click(function(){
			$('.cartBody').css('display','block');
			$('.yourGoods').css('display','none');
		});
	});
})(jQuery);