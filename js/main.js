$(function () {
  //visual
  var maVisual = new Swiper(".ma_visual .swiper-container", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
    pagination: {
      el: ".ma_visual .swiper-paging",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        $(".ma_visual .swiper-paging .current").html("0" + current);
        $(".ma_visual .swiper-paging .total").html("0" + total);
        $(".ma_visual .swiper-paging .val").removeClass("load").width(0);
        $(".ma_visual .swiper-paging .val").addClass("load");
        $(".ma_visual .swiper_ctrl .bar").removeClass("load");
        setTimeout(function () {
          $(".ma_visual .swiper_ctrl .bar").addClass("load");
        }, 50);
      },
    },
    navigation: {
      nextEl: ".ma_visual .swiper-button-next",
      prevEl: ".ma_visual .swiper-button-prev",
    },
    on: {
      init: function (swiper) {
        $(".ma_visual .swiper-slide").attr("aria-hidden", true);
        $(".ma_visual .swiper-slide-active").removeAttr("aria-hidden");
        $(".ma_visual .swiper-slide a, .ma_visual .swiper-slide .btn").attr("tabindex", "-1");
        $(".ma_visual .swiper-slide-active a, .ma_visual .swiper-slide-active .btn").attr("tabindex", "0");

        //자동play 켜고닫기
        $(".ma_visual .swiper_ctrl .btn_stop_play").click(function () {
          if ($(this).hasClass("stop")) {
            maVisual.autoplay.start();
          } else {
            maVisual.autoplay.stop();
          }
        });
      },
      slideChangeTransitionStart: function () {
        $(".ma_visual .swiper-slide").attr("aria-hidden", true);
        $(".ma_visual .swiper-slide-active").removeAttr("aria-hidden");
        $(".ma_visual .swiper-slide a, .ma_visual .swiper-slide .btn").attr("tabindex", "-1");
        $(".ma_visual .swiper-slide-active a, .ma_visual .swiper-slide-active .btn").attr("tabindex", "0");
      },
      autoplayStart: function () {
        $(".ma_visual .swiper_ctrl .btn_stop_play").removeClass("stop");
      },
      autoplayStop: function () {
        $(".ma_visual .swiper_ctrl .btn_stop_play").addClass("stop");
      },
    },
  });
  setTimeout(function () {
    $(".ma_visual").addClass("start");
  }, 200);

  //main news tab
  var $newsTabLink = $(".ma_news_tab a");
  $newsTabLink.on("click focus", function (e) {
    e.preventDefault();
    $(this).parents(".ma_news_tab").find("> li").removeClass("active");
    $(this).parents(".ma_news_tab > li").addClass("active");
  });

  //main alarm
  var maAlarm = new Swiper(".ma_alarm .swiper-container", {
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
    pagination: {
      el: ".ma_alarm .swiper-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        return '<span class="current">' + current + "</span>" + '<span class="slash">/</span>' + '<span class="total">' + total + "</span>";
      },
    },
    navigation: {
      nextEl: ".ma_alarm .swiper-button-next",
      prevEl: ".ma_alarm .swiper-button-prev",
    },
    on: {
      init: function (swiper) {
        $(".ma_alarm .swiper-slide").attr("aria-hidden", true);
        $(".ma_alarm .swiper-slide-active").removeAttr("aria-hidden");
        $(".ma_alarm .swiper-slide a, .ma_alarm .swiper-slide .btn").attr("tabindex", "-1");
        $(".ma_alarm .swiper-slide-active a, .ma_alarm .swiper-slide-active .btn").attr("tabindex", "0");

        //자동play 켜고닫기
        $(".ma_alarm .swiper_ctrl .btn_stop_play").click(function () {
          if ($(this).hasClass("stop")) {
            maAlarm.autoplay.start();
          } else {
            maAlarm.autoplay.stop();
          }
        });
      },
      slideChangeTransitionStart: function () {
        $(".ma_alarm .swiper-slide").attr("aria-hidden", true);
        $(".ma_alarm .swiper-slide-active").removeAttr("aria-hidden");
        $(".ma_alarm .swiper-slide a, .ma_alarm .swiper-slide .btn").attr("tabindex", "-1");
        $(".ma_alarm .swiper-slide-active a, .ma_alarm .swiper-slide-active .btn").attr("tabindex", "0");
      },
      autoplayStart: function () {
        $(".ma_alarm .swiper_ctrl .btn_stop_play").removeClass("stop");
      },
      autoplayStop: function () {
        $(".ma_alarm .swiper_ctrl .btn_stop_play").addClass("stop");
      },
    },
  });

  //main EduEvt
  var maEduEvt = new Swiper(".eduevt_swiper", {
    slidesPerView: 2,
    spaceBetween: 24,
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
    },
    observer: true,
    observeParents: true,
  });

  //간행물
  $('.ma_publications .intab a').on('click', function(){
    $('.ma_publications .intab a').removeAttr('aria-selected');
    $(this).attr('aria-selected','true');

    $('.ma_publications .intabcon').hide().eq($('.ma_publications .intab a').index(this)).show();
    
    return false;
  })
  var maPublications1 = new Swiper(".pc_swp01 .swiper-container", {
    slidesPerView: 'auto',
    spaceBetween: 24,
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
    },
    observer: true,
    observeParents: true,
    pagination: {
      el: ".pc_swp01 .swiper-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        return '<span class="current">' + current + "</span>" + '<span class="slash">/</span>' + '<span class="total">' + total + "</span>";
      },
    },
    navigation: {
      nextEl: ".pc_swp01 .swiper-button-next",
      prevEl: ".pc_swp01 .swiper-button-prev",
    },
  });

  var maPublications2 = new Swiper(".pc_swp02 .swiper-container", {
    slidesPerView: 'auto',
    spaceBetween: 24,
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
    },
    observer: true,
    observeParents: true,
    pagination: {
      el: ".pc_swp02 .swiper-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        return '<span class="current">' + current + "</span>" + '<span class="slash">/</span>' + '<span class="total">' + total + "</span>";
      },
    },
    navigation: {
      nextEl: ".pc_swp02 .swiper-button-next",
      prevEl: ".pc_swp02 .swiper-button-prev",
    },
  });
});
