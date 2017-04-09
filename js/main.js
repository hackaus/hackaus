$(document).ready(function() {
  // Parallax effect
  var $body = $('body');
  var $banner = $('.banner');
  $(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    $body.css('background-position-y', -scrollTop / 2); // Entire background
    $banner.css('background-position-y', -scrollTop * 0.75); 
  });

  //map
  $( "#QLD" ).on("click", function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('.bris').show().siblings().hide('bris');
  });
  $( "#NSW" ).on("click", function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('.syd').show().siblings().hide('syd');
  });
  $( "#VIC" ).on("click", function() {
    $(this).addClass('active').siblings().removeClass('active')
    $('.melb').show().siblings().hide('melb');;
  });
  $( "#SA" ).on("click", function() {
    $(this).addClass('active').siblings().removeClass('active')
    $('.adel').show().siblings().hide('adel');;
  });
  $( "#WA" ).on("click", function() {
    $(this).addClass('active').siblings().removeClass('active')
    $('.perth').show().siblings().hide('perth');;
  });
});
