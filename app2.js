// cssを変更する(赤いboxを青で低いboに変える)
$(function(){
  $('.box1').css({
    'background-color': '#0000FF',
    'height': '100px'
  });
});

// 要素を表示・非表示する(非表示の要素をjQueryで表示)
$(function(){
  $('.box2').show();
  $('.box2').css({'background-color': '#0000FF'});
});

// アニメーションを追加(上から下へスライド)
$(function(){
  $('.box3').slideDown();
});

// // アニメーションを追加(下から上へスライド)
$(function(){
  $('.box4').slideUp();
});
