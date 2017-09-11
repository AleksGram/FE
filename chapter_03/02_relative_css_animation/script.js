$(document).ready(function(){
  $('#navigation li').hover(function(){
    $(this).animate({
      paddingLeft: '+=15px'
    }, 80,'linear');
  }, function(){
    $(this).animate({
      paddingLeft: '-=15px'
    }, 80,'swing');
  });
});
