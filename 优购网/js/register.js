(function($){
	$(function(){
		$('form').submit(function(){
			location.href = 'yg_homePage.html';
		});
		// 清空错误提示
		var oError = $('form p');
			oError.html('');
		var oOption = $('.select').children('option');
		if (oOption[0]) {
			// 手机号验证
			$('.user').bind('blur',function(){
				var telephone = /^1[34578]\d{9}$/;
				var oUser      = $('.user').val();
				if (oUser === '') {
					$('.usernameError').html('<i class="iconfont icon-cuowu"></i><b>请输入手机号</b>');
					return false;
				}else if(!telephone.test(oUser)){
					$('.usernameError').html('<i class="iconfont icon-cuowu"></i><b>请输入正确格式的手机号</b>');
					return false;
				}else{
					$('.usernameError').html('<b style="color:blue">正确</b>');
					return true;
				}
			});
		}

		//验证码
		$('.code1').bind('blur',function(){
			if ($('.code1').val() === '') {
				$('.code1Error').html('<i class="iconfont icon-cuowu"></i><b>请输入验证码</b>');
				return false;
			}else if($('.code1').val() !== 'bafk'){
				$('.code1Error').html('<i class="iconfont icon-cuowu"></i><b>请输入正确的验证码</b>');
				return false;
			}else{
				$('.code1Error').html('<b style="color:blue">正确</b>');
				return true;
			}
		});

		//短信验证码
		$('.code').bind('blur',function(){
			if ($('.code').val() === '') {
				$('.codeError').html('<i class="iconfont icon-cuowu"></i><b>请输入短信验证码</b>');
				return false;
			}else if($('.code').val() !== '111111'){
				$('.codeError').html('<i class="iconfont icon-cuowu"></i><b>请输入正确短信验证码</b>');
				return false;
			}else{
				$('.codeError').html('<b style="color:blue">正确</b>');
				return true;
			}
		});

		// 验证密码
		$('.password').bind('blur',function(){
			var password1=/^[\x21-\x7E]{6,24}$/;
			var oPassword = $('.password').val();
			if (oPassword === '') {
				$('.passwordError').html('<i class="iconfont icon-cuowu"></i><b>请输入密码</b>');
				return false;
			}else if(!password1.test(oPassword)){
				$('.passwordError').html('<i class="iconfont icon-cuowu"></i><b>请输入字母、数字、符号均可,6-25个字符以内</b>');
				return false;
			}else{
				$('.passwordError').html('<b style="color:blue">正确</b>');
				return true;
			}
		});
		//确认密码
		$('.confirmpassword').bind('blur',function(){
			var oPassword = $('.password').val();
			if ($('.confirmpassword').val() !== oPassword) {
				$('.confirmError').html('<i class="iconfont icon-cuowu"></i><b>密码不一致，请重新输入</b>');
				return false;
			}else if($('.confirmpassword').val() === ''){
				$('.confirmError').html('<i class="iconfont icon-cuowu"></i><b>请输入密码</b>');
				return false;
			}
			else{
				$('.confirmError').html('<b style="color:blue">正确</b>');
				return true;
			}
		});
	});
})(jQuery);