$(document).ready(function(){
$('#menu li ul').css({
display:"none",
left: "auto"
});
$('#menu li').hover(function(){
$(this)
.find('ul')
.stop(true, true)
.slideDown('fast');
}, function(){
$(this)
.find('ul')
.stop(true, true)
.fadeOut('fast');
});


$('.acord_content')
  .click(function(event){
  event.stopPropagation();
  })
  .filter(':not(:first)')
  .hide();




$('.accord div').click(function(){
var selfClick = $(this).find('.acord_content').is(':visible');
if(!selfClick){
$(this)
  .parent()
  .find('.acord_content:visible')
  .slideToggle();
}
 $(this)
      .find('.acord_content:first')
      .stop(true, true)
      .slideToggle();

});

/*
$('#info p:not(:first)').hide();

$('#info-nav li').click(function(event){
event.preventDefault();
$('#info p').hide();
$('#info-nav .current').removeClass("current");
$(this).addClass('current');

var clicked = $(this).find('a:first').attr('href');
$('#info '+ clicked).fadeIn('fast');

}).eq(0).addClass('current');
*/
$('#info').tabs({
event: 'mouseover',
fx: {
opacity: 'toggle',
duration: 'fast'
},
spinner: 'Loading.....',
cache: true
});

/*$('#info').tabs().tabs('rotate', 3500);*/

/*---------overlay------------------*/
$('<div></div>')
        .attr('id', 'overlay')
        .css('opacity', 0.65)
        .hover(function(){
          $(this).addClass('active');
        }, function() {
          $(this).removeClass('active');
          setTimeout(function(){
            $('#overlay:not(.active)').slideUp(function(){
              $('a.cart-hover').removeClass('cart-hover');
            });
          }, 800);
        }).appendTo('body');




$('.cart a').mouseover(function(){
  $(this).addClass('cart-hover');
  $('#overlay:not(:animated)')
  .addClass('active')
  .html('<h1>You have 5 items in your cart.</h1><a href="#">View Cart</a>&nbsp;<a href="#">Checkout</a>')
  .slideDown();
});

$('.location').hover(function(event){
    // Hover over code
    var titleText = $(this).attr('title');
    $(this)
      .data('tipText', titleText)
      .removeAttr('title');

    $('<p class="tooltip"></p>')
      .text(titleText)
      .appendTo('body')
      .css('top', (event.pageY - 10) + 'px')
      .css('left', (event.pageX + 20) + 'px')
      .fadeIn('slow');
  }, function() {
    // Hover out code
    $(this).attr('title', $(this).data('tipText'));
    $('.tooltip').remove();
  }).mousemove(function(event){
    // Mouse move code
    $('.tooltip')
      .css('top', (event.pageY - 10) + 'px')
      .css('left', (event.pageX + 20) + 'px');
  });
});





