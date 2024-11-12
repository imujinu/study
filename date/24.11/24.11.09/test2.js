$(document).ready(function() {
    $('#hoverBox').hover(
        function() {
            $(this).css('background-color', 'blue');
        },
        function() {
            $(this).css('background-color', 'lightgray');
        }
    );
});
