// Show/hide elements
$( "#showr" ).click(function() {
    $( "div" ).first().show( "fast", function showNext() {
        $( this ).next( "div" ).show( "fast", showNext );
    });
});

$( "#hidr" ).click(function() {
    $( "div" ).hide( 1000 );
});

/// Adds id's to each element
var $inputs = $('input');
var j = 0;

for(var input of $inputs) {
    input.id = 'input - ' + j++;
}