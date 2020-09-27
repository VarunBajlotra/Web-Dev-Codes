$(()=>{
    $('#btn').click(()=>{
            console.log('Hello')
            console.log($('#inp').val())
            // $('#list').append(`<li>${$('#inp').val()} Other Text</li>`)
            // $('#list').append(`<li><i class="fa fa-apple"></i></li>`)
            $('#list').append(`<li>${$('#inp').val()}</li>`)
    })
})