(function($){
	$(function(){
		var
			oAccount  = $('.account'),
			oPassWord = $('.password'),
			oAccountErro = $('.accountError'),
			oPassWordErro = $('.passwordError');

		$('.form').submit(function(){
			if (oAccount.val() === '' && oPassWord.val() === '') {
				oAccountErro.html('<p class="accountError center"><i class="iconfont icon-cuowu"></i><b>请输入账号</b></p>');
				oPassWordErro.html('<p class="accountError center"><i class="iconfont icon-cuowu"></i><b>请输入密码</b></p>');
			}else if(oAccount.val() === 'huachen1993' && oPassWord.val() !== 'huachen1993'){
				oAccountErro.html('');
				oPassWordErro.html('<p class="accountError center"><i class="iconfont icon-cuowu"></i><b>请输入密码或密码错误</b></p>');
			}else if(oAccount.val() !== 'huachen1993'){
				oAccountErro.html('<p class="accountError center"><i class="iconfont icon-cuowu"></i><b>账号不存在</b></p>');
			}else if(oAccount.val() === 'huachen1993' && oPassWord.val() === 'huachen1993'){
				location.href = 'yg_homePage.html'; 
			}else{
				alert('账号或密码错误');
			}
		});
		console.log($.cookie);
	});
})(jQuery);