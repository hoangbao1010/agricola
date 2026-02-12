jQuery(document).ready(function () {
  var width = jQuery(window).width();
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
