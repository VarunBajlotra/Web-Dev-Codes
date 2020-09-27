// window.onload = function(){
//     console.log(jQuery);
// }

// $(document).ready(function(){
//     console.log(jQuery);
// })

$(document).ready(()=>{
    $('#div').css('background-color','orange').attr('class','div3');
    console.log($('#div').attr('class'));
    $('#inp1').attr('checked',true);

    console.log($('#inp').val('hello'));

    $('.myDiv').html('dunno <b>Hello</b>');
    // $('div~div').html('djhvdsjbjch');
    $('div~div').attr('class','otherdiv');
    $('.myDiv').text('Div1');
})