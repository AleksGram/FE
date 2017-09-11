$(document).ready(function(){
  $('textarea').resizable({
    grid : [5, 20],
    minWidth : 153,
    minHeight : 30,
    maxHeight : 220,
    containment: 'parent'
  });
});
