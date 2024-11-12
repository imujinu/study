// $(document).ready(function() {
//     $('#alertBtn').click(function() {
//         var inputVal = $('#inputField').val();
//         alert('You typed: ' + inputVal);
//     });
// });


$(document).ready(function(){
    $('#alertBtn').click(
        function(){
            let value = $('#inputField').val()
            alert(`youtyped: ${value}`)
           

            $('#inputField').val('')
        }
    )
})
