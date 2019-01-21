/* 顶部菜单*/
$('.icons').on('click',function(){
	if($('.slide-navlist').prop('id') == '1'){
		$(this).children('.icon-daohangpinlei').animate({
			opacity:'0'
		},'500','ease-in-out').siblings().animate({
			opacity:'1'
		},'500');
		$('.slide-navlist').prop('id','2').animate({
			marginTop:'-1px'
		},'500','ease-in-out')
	}else{
		$(this).children('.icon-guanbi').animate({
			opacity:'0'
		},'500','ease-in-out').siblings().animate({
			opacity:'1'
		},'500');
		$('.slide-navlist').prop('id','1').animate({
			marginTop:'-40rem'
		},'500','ease-in-out')
	}
});

/*二级菜单效果*/
$(document).on('click','.slidenav-most',function(){
	console.log(1);
	$(this).next().animate({
		left: 0
	});
	$('.nav-login').animate({
		opacity: 0
	});
});
$(document).on('click','.slidenav-cell-index-second',function(){
	$('.slidenav-cells-second').animate({
		left: '100%'
	});
	$('.nav-login').animate({
		opacity: 1
	})				
});
$('.slidenav-cells-second').children('.slidenav-cell').not('.slidenav-cell-index-second').on('click',function(){
	$(this).addClass('slidenav-active').siblings().removeClass('slidenav-active')
});
/*回退*/
$('.app-header-back').on('click',function(){
	history.go(-1)
})

/*搜索*/
$(function(){
    var $androidActionSheet = $('#androidActionsheet');
    var $androidMask = $androidActionSheet.children('.weui-close');

    $(".app-pull-right").on('click', function(){
        $androidActionSheet.fadeIn(200);
        $androidMask.on('click',function () {
            $androidActionSheet.fadeOut(200);
        });
    });
});

$('.slidenav-cell').on('click',function(){
	$(this).addClass('slidenav-active').siblings().removeClass('slidenav-active');	
});
var $androidActionSheet = $('#androidActionsheet');
var $androidMask = $androidActionSheet.find('.weui-mask');
var $showcode = $('.showcode');

$("#qr").on('click', function(){
	$androidActionSheet.fadeIn(200);
	$androidActionSheet.find('.qr-window').css('display','block').next().css('display','none');
	$androidMask.on('click',function () {
		$androidActionSheet.fadeOut(200);
	});
	$('.shutdown').on('click',function () {
		$androidActionSheet.fadeOut(200);
	});
});

$("#login").on('click', function(){
    $androidActionSheet.fadeIn(200);
    $('.icon-guanbi').animate({
			opacity:'0'
		},'500','ease-in-out').siblings().animate({
			opacity:'1'
		},'500');
		$('.slide-navlist').prop('id','1').animate({
			marginTop:'-40rem'
		},'500','ease-in-out');
    $androidActionSheet.find('.login-window').css('display','block').prev().css('display','none');
    $androidMask.on('click',function () {
        $androidActionSheet.fadeOut(200);
    });
    $('.shutdown').on('click',function () {
        $androidActionSheet.fadeOut(200);
    });
});
$("#price").on('click', function(){
    $androidActionSheet.fadeIn(200);
    $('.icon-guanbi').animate({
			opacity:'0'
		},'500','ease-in-out').siblings().animate({
			opacity:'1'
		},'500');
		$('.slide-navlist').prop('id','1').animate({
			marginTop:'-40rem'
		},'500','ease-in-out');            
    $androidActionSheet.find('.price-window').css('display','block').prev().css('display','none');
    $androidMask.on('click',function () {
        $androidActionSheet.fadeOut(200);
    });
    $('.shutdown').on('click',function () {
        $androidActionSheet.fadeOut(200);
    });
});


var pubUrl = 'http://redefining.gr-studio.cn';
// var pubUrl = 'http://demo6002.wanyucheng.cn';

//获取url参数
function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = decodeURI(window.location.search).substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

var getBottomMenu = function(){
	var list = null;
	$.ajax({
		type: 'post',
		url: pubUrl + '/index/linklist',
		dataType: 'json',
		async: false,
		success: function(data){
			list = data.data
		},
	    error: function(err){
	     	console.log(err)
	    }
	});		
	return list	
}

$.ajax({
	type: 'post',
	url: pubUrl + '/index/bottomlist',
	dataType: 'json',
	async: false,
	success: function(data){
		var html1="";
		var html='<span>关注 Redefining</span><div class="bottom-logo">';
		console.log(data);
		$.each(data.data,function(i,v){
		v.icon_url = pubUrl + v.icon_url;
		v.qrcode_url = pubUrl + v.qrcode_url;
		html+='<img id="'+v.id+'" src="'+v.icon_url+'" />'
		html1+='<div data-id="'+v.id+'" class="showcode">'
		+'<img src="'+v.qrcode_url+'" /></div>'
	});
		var bottom=html+'</div>'+html1
	$('.bottom-down').html(bottom);	
		$('.bottom-logo img').on('mouseenter',function(){
		var left = parseInt($(this).position().left);
		console.log(left);
		$('.showcode').css('left',left+36+'px').css('top','0px');
		$('.showcode[data-id="'+$(this).attr('id')+'"]').fadeIn(200);
	});
	},
	error: function(err){
		 console.log(err)
	}
})

$(document).on('mouseleave','.bottom-logo img',function(){
	var id=$(this).attr('id');
	$('.showcode').fadeOut(200);
});

var buttomMenuHmtl = "";
$.each(getBottomMenu(),function(e,v){
	buttomMenuHmtl += "<a href='"+v.url+"'>"+v.name+"</a>";
})
$(".bottom-nav").html(buttomMenuHmtl);


var _53code = document.createElement("script");
_53code.src = "https://tb.53kf.com/code/code/10177157/1";
var s = document.getElementsByTagName("script")[0]; 
s.parentNode.insertBefore(_53code, s);
$('.container').on('click',".cover",function(){
    window.location.href="https://tb.53kf.com/code/client/10177157/1";
});