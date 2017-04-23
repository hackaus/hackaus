$(document).ready(function() {
  // // Parallax effect
  // var $body = $('body');
  // var $banner = $('.banner');
  // $(window).on('scroll', function () {
  //   var scrollTop = $(window).scrollTop();
  //   $body.css('background-position-y', -scrollTop / 2); // Entire background
  //   $banner.css('background-position-y', -scrollTop * 0.75);
  // });

  //map
  $('a[href*="#"]:not([href="#"])').click(function() {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top -34
  }, 1000);
});

//////////////////////////////////////
/////   current hackathoons   ///////
////////////////////////////////////
  $("#NSW").addClass('active');
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
    $('.melb').show().siblings().hide('melb');
  });
  $( "#SA" ).on("click", function() {
    $(this).addClass('active').siblings().removeClass('active')
    $('.adel').show().siblings().hide('adel');
  });
  $( "#WA" ).on("click", function() {
    $(this).addClass('active').siblings().removeClass('active')
    $('.perth').show().siblings().hide('perth');
  });
  $( "#NT" ).on("click", function() {
    $(this).addClass('active').siblings().removeClass('active')
    $('.darwin').show().siblings().hide('darwin');
  });
  $( "#TAS" ).on("click", function() {
    $(this).addClass('active').siblings().removeClass('active')
    $('.hobart').show().siblings().hide('hobart');
  });

  //////////////////////////////////////
  /////    past hackathoons     ///////
  ////////////////////////////////////

  $( "#QLD_past" ).on("click", function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('.bris_p').show().siblings().hide('bris_p');
  });
  $( "#NSW_past" ).on("click", function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('.syd_p').show().siblings().hide('syd_p');
  });
  $( "#VIC_past" ).on("click", function() {
    $(this).addClass('active').siblings().removeClass('active')
    $('.melb_p').show().siblings().hide('melb_p');
  });
  // $( "#SA_past" ).on("click", function() {
  //   $(this).addClass('active').siblings().removeClass('active')
  //   $('.adel_p').show().siblings().hide('adel_p');
  // });
  // $( "#WA_past" ).on("click", function() {
  //   $(this).addClass('active').siblings().removeClass('active')
  //   $('.perth_p').show().siblings().hide('perth_p');
  // });
  // $( "#NT_past" ).on("click", function() {
  //   $(this).addClass('active').siblings().removeClass('active')
  //   $('.darwin_p').show().siblings().hide('darwin_p');
  // });
  // $( "#TAS_past" ).on("click", function() {
  //   $(this).addClass('active').siblings().removeClass('active')
  //   $('.hobart_p').show().siblings().hide('hobart_p');
  // });


  $("#chat").on("click", function() {

    $('#chat').fadeOut(500);
    $('#chatBox').fadeIn(1000);
  });

  $("#close").on("click", function() {
    $('#chatBox').fadeOut(500);
    $('#chat').fadeIn(1000);
  });





  // $("#exit").on("click", function() {
  //   $('#chat').hide();
  //   $(this).hide();
  //
  //
  // });


});
