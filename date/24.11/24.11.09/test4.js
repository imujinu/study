$(document).ready(function(){
    $('#addBtn').click(function(){
        
            let value =$('#inputField').val();
            let li = $('<li></li>').text(value);
            $('#list').append(li)
            $('#inputField').val('')
        })
        }
    )

    // $('<p></p>') 이렇게 p요소가 생성
