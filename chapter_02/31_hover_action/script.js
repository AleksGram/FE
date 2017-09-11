$(document).ready(function(){
$('.spoiler').hide();
$('<span class="revealer">Tell me!</span>').insertBefore('.spoiler');
$('.revealer').html('<strong>TELL ME</strong>');
$('.revealer').click(function(){
$(this).hide();
$(this).next().fadeIn();
$(this).prev().show();
});
});