jQuery(document).ready(function () {
  var width = jQuery(window).width();
  // 1. Khởi tạo Slick cho ảnh chính
  if (jQuery(".product-gallery__main").length > 0) {
    const $mainSlider = jQuery(".product-gallery__main").slick({
      dots: false,
      infinite: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true, // Thêm hiệu ứng fade cho đẹp nếu muốn
    });

    // 2. Xử lý click vào ảnh thu nhỏ
    jQuery(".product-gallery__thumbs li").on("click", function () {
      // Lấy index của li được click
      const index = jQuery(this).index();

      // Điều hướng Slick đến slide tương ứng
      $mainSlider.slick("slickGoTo", index);

      // (Tùy chọn) Thêm class active để làm nổi bật thumb đang chọn
      jQuery(".product-gallery__thumbs img").addClass("opacity-50").removeClass("opacity-100");
      jQuery(this).find("img").removeClass("opacity-50").addClass("opacity-100");
    });

    // 3. Đồng bộ ngược lại: Khi swipe slider chính thì thumb cũng đổi active
    $mainSlider.on("afterChange", function (event, slick, currentSlide) {
      jQuery(".product-gallery__thumbs img").addClass("opacity-50").removeClass("opacity-100");
      jQuery(".product-gallery__thumbs li").eq(currentSlide).find("img").removeClass("opacity-50").addClass("opacity-100");
    });

    // Set active cho cái đầu tiên khi load trang
    jQuery(".product-gallery__thumbs li").first().trigger("click");
  }

  if (width > 768) {
    if (jQuery(".sticky-section").length > 0) {
      jQuery("html, body").removeClass("overflow-x-hidden");
    }
  }
  // show hide search form
  jQuery(".search-header .fa-search").click(function () {
    jQuery(".search-header").stop(false, false).toggleClass("search_opened");
  });
  jQuery(".search-header .fa-times").click(function () {
    jQuery(".search-header").stop(false, false).removeClass("search_opened");
  });
  // end show hide search form
  // scroll top
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 100) {
      jQuery(".back-to-top").fadeIn();
    } else {
      jQuery(".back-to-top").fadeOut();
    }
  });
  jQuery(".back-to-top").click(function (event) {
    event.preventDefault();
    jQuery("html,body").animate({ scrollTop: 0 }, 800);
  });
  // end scroll top
});
