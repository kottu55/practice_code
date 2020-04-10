$(function(){
    const MSG_TEXT_MAX = '20文字以内で入力してください。';
    const MSG_EMPTY = '入力必須です。';
    const MSG_EMAIL_TYPE = 'emailの形式ではありません。';
    const MSG_TEXTAREA_MAX = '100文字以内で入力してください。';

    $(".valid-text").keyup(function(){

        var form_g = $(this).closest('.form-group');

        if($(this).val().length > 20 ){
            form_g.removeClass('has-success').addClass('has-error');
            form_g.find('.help-block').text(MSG_TEXT_MAX);
        }else{
            form_g.removeClass('has-error').addClass('has-success');
            form_g.find('.help-block').text('');
        }
    });

    $(".valid-email").keyup(function(){

        var form_g = $(this).closest('.form-group');

        if ($(this).val().length === 0 ){
            form_g.removeClass('has-success').addClass('has-error');
            form_g.find('.help-block').text(MSG_EMPTY);
        } else if ($(this).val().length > 50 || !$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9])+([a-zA-Z0-9\._-]+)+$/) ){
            form_g.removeClass('has-success').addClass('has-error');
            form_g.find('.help-block').text(MSG_EMAIL_TYPE);
        } else {
            form_g.removeClass('has-error').addClass('has-success');
            form_g.find('.help-block').text('');
        }
    });

    $(".valid-textarea").keyup(function () {

        var form_g = $(this).closest('.form-group');

        if ($(this).val().length === 0) {
            form_g.removeClass('has-success').addClass('has-error');
            form_g.find('.help-block').text(MSG_EMPTY);
        }else if($(this).val().length > 100 ){
            form_g.removeClass('has-success').addClass('has-error');
            form_g.find('.help-block').text(MSG_TEXTAREA_MAX);
        }else{
            form_g.removeClass('has-error').addClass('has-success');
            form_g.find('.help-block').text('');
        }
    });

    $(".format-number").change(function(){

        //フォームの値を取得
        var format_before = $(this).val();

        //ハイフンが含まれている場合はハイフンを削除
        format_before = format_before.replace('-','');

        //全角英数字を半角英数字に変換
        var format_after = format_before.replace(/[Ａ-Ｚａ-ｚ０-９]/g,function(s){ return String.fromCharCode(s.charCodeAt(0)-0xFEE0) });

        //入力された文字が11文字以上だった場合
        if(format_after.length === 11){
            //ハイフンを挿入して要素を書き換える
            $(this).val(format_after.substr(0,3)+'-'+format_after.substr(3,4)+'-'+format_after.substr(7,4));
        }else{
            //何もせず要素内を書き換える
            　$(this).var(format_after);
        }

    });
});