jQuery(document).ready(function () {
  var width = jQuery(window).width();
  jQuery(".search-header .fa-search").click(function () {
    jQuery(".search-header").stop(false, false).toggleClass("search_opened");
  });
  jQuery(".search-header .fa-times").click(function () {
    jQuery(".search-header").stop(false, false).removeClass("search_opened");
  });
});
