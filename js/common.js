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
    $androidActionSheet.find('.login-window').css('display','block').next().css('display','none');
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

//获取url参数
function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = decodeURI(window.location.search).substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

