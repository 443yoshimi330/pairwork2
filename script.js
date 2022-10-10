// 明美エリア
$('.slick-track').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    arrows:false,
    pauseOnHover:false,
  });

  $('.header-inner').hide().fadeIn(2000);

  // $(window).on('scroll', function () {
  //   if ($('.').height() < $(this).scrollTop()) {
  //     $('.').addClass('');
  // } else {
  //     $('.').removeClass('');
  // }
  // }










































// 知花さんエリア
// 映像フェードイン
$(function () {
  var $setElm = $('.item'),
      fadeSpeed = 1500,
      switchDelay = 5000;

  $setElm.each(function () {
      var targetObj = $(this);
      var findUl = targetObj.find('ul');
      var findLi = targetObj.find('li');
      var findLiFirst = targetObj.find('li:first');

      findLi.css({ display: 'block', opacity: '0', zIndex: '99' });
      findLiFirst.css({ zIndex: '100' }).stop().animate({ opacity: '1' }, fadeSpeed);

      setInterval(function () {
          findUl.find('li:first-child').animate({ opacity: '0' }, fadeSpeed).next('li').css({ zIndex: '100' }).animate({ opacity: '1' }, fadeSpeed).end().appendTo(findUl).css({ zIndex: '99' });
      }, switchDelay);
  });
});

//タルト以外の商品紹介　
// <h10 id="">まで画面がスクロールされたら画像をフェードインする
// サブレ
$(window).on("scroll",function(){
  let sable = $("#sable").offset().top;
  let wh = $(window).height();
  if (sable <= $(window).scrollTop() + wh){
      $(".cake1").removeClass("photo1")
  } else {
      $(".cake1").addClass("photo1");
  }
});
// サンド
$(window).on("scroll",function(){
  let sand = $("#sand").offset().top;
  let whsand = $(window).height();
  if (sand <= $(window).scrollTop() + whsand){
      $(".cake2").removeClass("photo2")
  } else {
      $(".cake2").addClass("photo2");
  }
});
// レモンケーキ
$(window).on("scroll",function(){
  let lemon = $("#lemon").offset().top;
  let whlemon = $(window).height();
  if (lemon <= $(window).scrollTop() + whlemon){
      $(".cake3").removeClass("photo3")
  } else {
      $(".cake3").addClass("photo3");
  }
});
