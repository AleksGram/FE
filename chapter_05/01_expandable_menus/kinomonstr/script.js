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

$('#info p:not(:first)').hide();

$('#info-nav li').click(function(event){
event.preventDefault();
$('#info p').hide();
$('#info-nav .current').removeClass("current");
$(this).addClass('current');

var clicked = $(this).find('a:first').attr('href');
$('#info '+ clicked).fadeIn('fast');

}).eq(0).addClass('current');







});






