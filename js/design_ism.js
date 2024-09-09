$(function () {

  //GNB PC
  $("#gnb > li a").on("mouseenter focus", function () {
    $("#gnb > li").not($(this).parents("#gnb > li")).removeClass("active");
    $(this).parents("#gnb > li").addClass("active");
  });
  $("#gnb > li").on("mouseleave", function () {
    $(this).removeClass("active");
  });
  $(".logo a, .head_search *").on("focus", function () {
    $("#gnb > li").removeClass("active");
  });

  $(".head_con").on("mouseleave", function () {});

  //GNB 모바일
  $(".m_gnb .depth > li > a").each(function () {
    if ($(this).next(".depth02").find("li").length > 0) {
      $(this).addClass("in_ul");
    }
  });
  $(".m_gnb > li > a").on("click", function () {
    $(".m_gnb > li > a").not(this).removeClass("active");
    $(this).addClass("active");
  });

  $(".m_gnb a.in_ul").on("click", function () {
    $(".m_gnb a.in_ul").not(this).removeClass("active");
    $(this).toggleClass("active");

    $(".m_gnb .depth > li > .depth02").not($(this).next(".depth02")).slideUp(250);
    $(this).next(".depth02").stop(true, false).slideToggle(250);

    return false;
  });

  var footBnSwiper = new Swiper(".foot_banners .swiper-container", {
    autoplay: {
      delay: 4000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    slidesPerView: "auto",
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
    },
    observer: true,
    observeParents: true,
    pagination: {
      el: ".foot_banners .swiper-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        return '<span class="current">' + current + "</span>" + '<span class="slash">/</span>' + '<span class="total">' + total + "</span>";
      },
    },
    navigation: {
      nextEl: ".foot_banners .swiper-button-next",
      prevEl: ".foot_banners .swiper-button-prev",
    },
    on: {
      init: function (swiper) {
        //자동play 켜고닫기
        $(".foot_banners .swiper_ctrl .btn_stop_play").click(function () {
          if ($(this).hasClass("stop")) {
            footBnSwiper.autoplay.start();
          } else {
            footBnSwiper.autoplay.stop();
          }
        });
      },
      autoplayStart: function () {
        $(".foot_banners .swiper_ctrl .btn_stop_play").removeClass("stop");
      },
      autoplayStop: function () {
        $(".foot_banners .swiper_ctrl .btn_stop_play").addClass("stop");
      },
    },
  });
  $(".foot_banners .swiper-slide a").each(function (index) {
    $(this).on("focus", function (e) {
      e.preventDefault();
      footBnSwiper.slideTo(index);
    });
  });
});

//모바일 전체메뉴
function toggleAllMenu() {
  $("body").removeClass("openSearch").toggleClass("openAllMenu");
}

//go top 위치
$(function () {
  chkGoTop();
  $(window).scroll(function () {
    chkGoTop();
  });
});
function chkGoTop() {
  if ($(window).scrollTop() > 200) {
    $(".go_top").show();
  } else {
    $(".go_top").hide();
  }

  if ($(window).scrollTop() > $(document).outerHeight() - $(window).outerHeight() - $("#footer").outerHeight()) {
    $(".go_top").addClass("end_top");
  } else {
    $(".go_top").removeClass("end_top");
  }
}

//popup
// 접근성 관련 포커스 강제 이동
function accessibilityFocus() {
  $(document).on("keydown", "[data-focus-prev], [data-focus-next]", function (e) {
    var next = $(e.target).attr("data-focus-next"),
      prev = $(e.target).attr("data-focus-prev"),
      target = next || prev || false;

    if (!target || e.keyCode != 9) {
      return;
    }

    if ((!e.shiftKey && !!next) || (e.shiftKey && !!prev)) {
      setTimeout(function () {
        $('[data-focus="' + target + '"]').focus();
      }, 1);
    }
  });
}

function tooltip() {
  var openBtn = "[data-tooltip]",
    closeBtn = ".tooltip-close";

  function getTarget(t) {
    return $(t).attr("data-tooltip");
  }

  function open(t) {
    var showTarget = $('[data-tooltip-con="' + t + '"]');
    showTarget.show().focus();
    showTarget.find(".tooltip-close").data("activeTarget", t);
  }

  function close(t) {
    var activeTarget = $('[data-tooltip-con="' + t + '"]');
    activeTarget.hide();
    $('[data-tooltip="' + t + '"]').focus();
  }

  $(document)
    .on("click", openBtn, function (e) {
      e.preventDefault();
      open($(this).attr("data-tooltip"));
    })
    .on("click", closeBtn, function (e) {
      e.preventDefault();
      close($(this).data("activeTarget"));
    });
}

$(document).ready(function () {
  tooltip();
  accessibilityFocus();
});
