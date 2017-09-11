$(document).ready(function(){
  $('.spoiler').hide();
  $('<span class="revealer">Tell Me!</>').insertBefore('.spoiler');
  $('.revealer').click(function(){
    $(this).hide();
    $(this).next().fadeIn();
    $('.spoiler').animate({
        padding: '20px',
        fontSize: '30px'
      }, 2000);
  });
});