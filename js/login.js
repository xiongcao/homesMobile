$('.phone-number').on("blur",function(){
	var $phone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
	var telVal=$(this).val();
	if(!telVal){
		$(this).next('.tip').text('电话不能为空')
	}else{
		if(!$phone.test(telVal)){
			$(this).next('.tip').text('电话号码不正确')
		}else{
			$(this).next('.tip').text('')
		}						
	}
})
$('.phone-check').on("blur",function(){
	var checkVal=$(this).val();
	if(!checkVal){
		$(this).next('.tip').text('验证码不能为空')
	}
	else{
		$(this).next('.tip').text('')
	}
})
$('.btn-get').on('click',function(){
	var $phone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
	var telVal=$('.phone-number').val();
	var checkPhone = false;
	var _this = $(this);
	if(!telVal){
		$('.phone-number').next('.tip').text('电话不能为空')
	}else{
		if(!$phone.test(telVal)){
			$('.phone-number').next('.tip').text('电话号码不正确')
		}else{
			$('.phone-number').next('.tip').text('');
			checkPhone = true
		}						
	}
	if(checkPhone){
		$.ajax({
			type: 'post',
			url: pubUrl + '/login/send',
			data:{
				phone: telVal,
			},
			dataType: 'json',
			async: false,
			success: function(data){
				console.log(data);
				settime(_this);
				if(data.status == 0){
					$('.check-tips').fadeIn();
				}
				setTimeout(function(){
					$('.check-tips').fadeOut();
				},3000)
			},
		    error: function(err){
		     	console.log(err)
		    }
		})					
	}
});
var countdown=60; 
function settime(obj) { //发送验证码倒计时
    if(countdown == 0) { 
        obj.attr('disabled',false); 
        obj.text("获取验证码");
        countdown = 60; 
        return;
    }else{ 
        obj.attr('disabled',true);
        obj.text("重新发送(" + countdown + ")");
        countdown--; 
    } 
	setTimeout(function(){ 
	    settime(obj) 
	},1000) 
}

$('#logins').on('click',function(){
	var $phone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
	var phone = $('.phone-number').val();
	var checkPhone = $('.phone-check').val();
	var uid = (GetQueryString('token') == '') ? '' : GetQueryString('token');
	if(!phone){
		$('.phone-number').next('.tip').text('电话号码不正确')
	}else{
		$('.phone-number').next('.tip').text('')
	}
	if(!checkPhone){
		$('.phone-check').next('.tip').text('验证码不能为空')
	}else{
		$('.phone-check').next('.tip').text('')
	}
	if(phone && checkPhone){
		$.ajax({
			type: 'post',
			url: pubUrl + '/login',
			data:{
				uid: uid,
				phone: phone,
				code: checkPhone
			},
			dataType: 'json',
			async: false,
			success: function(data){
				console.log(data);
              	if(data.uid==0){
                   	$('.phone-check').next('.tip').text('验证码错误！')
                }else{
					var Data = JSON.stringify(data);
					localStorage.setItem("userInfor",Data);	
					location.href = 'personLoginOut.html'
                }
			},
		    error: function(err){
		     	console.log(err)
		    }
		})					
	}
});

var userInfor = JSON.parse(localStorage.getItem('userInfor'));
console.log(userInfor);

(userInfor == undefined) ? ($('#login').fadeIn(),$('.login-success').fadeOut()) : ($('#login').fadeOut(),$('.login-success').fadeIn());
$('#loginOut').on('click',function(){
	localStorage.clear();
	location.reload()
});


/*快速报价*/