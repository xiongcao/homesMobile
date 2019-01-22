/**
 * 心愿单
 */

 //没有登录的弹窗
 var dialogs =  `
            <div id="dialogs">
                <div class="js_dialog" id="iosDialog2" style="display: none;">
                    <div class="weui-mask"></div>
                    <div class="weui-dialog">
                        <div class="weui-dialog__bd">您还未登录！</div>
                        <div class="weui-dialog__ft">
                            <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">确定</a>
                        </div>
                    </div>
                </div>
            </div>`;

//没有登录的弹窗
 var toast =  `
    <div id="toast" style="display: none;">
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
            <p class="weui-toast__content">已加入心愿单</p>
        </div>
    </div>`;

$('body').append(dialogs).append(toast);

$('body').on('click', '.weui-dialog__btn', function(){
    $(this).parents('.js_dialog').fadeOut(200);
});
