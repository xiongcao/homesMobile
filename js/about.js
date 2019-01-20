$('.btn-submit').on('click',function(){
	var checktel = checkcall = checkname = checkemail = checktext = false;
	var $phone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
	var telVal=$('#phone').val();
	if(!telVal){
		$('#iosDialog2').fadeIn();
		$('.weui-dialog__bd').text('电话不能为空');
	}else{
		if(!$phone.test(telVal)){
			$('#iosDialog2').fadeIn();
			$('.weui-dialog__bd').text('电话号码为空');
		}else{
			checktel=true
		}						
	}
	var callVal=$("#call").val();
	if(!callVal){
		$('#iosDialog2').fadeIn();
		$('.weui-dialog__bd').text('昵称不能为空');		
	}
	else{
		checkcall = true;
	}
	var nameVal=$('#name').val();
	if(!nameVal){
		$('#iosDialog2').fadeIn();
		$('.weui-dialog__bd').text('姓名不能为空');	
	}
	else{
		checkname = true;
	}
	var emailVal=$('#email').val();
	if(!emailVal){
		$('#iosDialog2').fadeIn();
		$('.weui-dialog__bd').text('邮件不能为空');
	}
	else{
		checkemail = true;
	}
	var textVal=$('#text').val();
	if(!textVal){
		$('#iosDialog2').fadeIn();
		$('.weui-dialog__bd').text('留言不能为空');
	}
	else{
		checktext = true;
	}	
	console.log(checkemail);
	if(checktel&&checkname&&checkcall&&checkemail&&checktext){
		$.ajax({
			type: 'post',
			url: pubUrl + '/index/indexadd',
			data: {
				'title': $('#call').val(),
				'name': $('#name').val(),
				'phone': $('#phone').val(),
				'email': $('#email').val(),
				'message': $('#text').val()
			},
			dataType: 'json',
			async: false,
			success: function(data){
				console.log(data);
				$('#iosDialog2').fadeIn();
				if(data.status == 1){
					$('.weui-dialog__bd').text('提交成功');
				}else{
					$('.weui-dialog__bd').text('提交失败');
				}
			},
		    error: function(err){
		     	console.log(err)
		    }
		})					
	}
});
$('#dialogs').on('click', '.weui-dialog__btn', function(){
    $(this).parents('.js_dialog').fadeOut(200);
    location.reload()
})