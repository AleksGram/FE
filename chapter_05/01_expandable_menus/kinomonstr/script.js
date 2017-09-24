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
     // .stop(true, true)
      .slideToggle();

});








});






