// 1.テキストエリアに入力があった場合
// 2.テキストエリアの入力文字数を取得
// 3.文字数をカウンターに表示させる



window.addEventListener('DOMContentLoaded',
function () {

    // テキストエリアのDOMを取得
    var node = document.querySelector('#count-text');

    node.addEventListener('keyup', function () {

        // テキストの中身を取得し、その文字数(length)を数える
        var count = this.value.length;

        // HTML5から使えるquerySelectorをつかったDOMの取得パターン
        //　カウンターを表示する箇所のDOMの（HTML）を取得する
        var counterNode = document.querySelector('.show-count-text');

        //innerTextを使うと取得したDOMの中身のテキストを書き換えられる
        counterNode.innerText = count;

    }, false);
}, false
);