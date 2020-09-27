



// $(()=>{
//     $('#btn').click(function(){
//         console.log('Button is clicked.');
//     })
//     $('#btn').unbind();
//     $('#btn').click(function(){
//         console.log('Button Click');
//     })

//     $('#list').append(
//         $('<li>').text('This is li.')
//     );
// })

$(document.body)
    .append(
        $('<input>').attr('id','newtask')
    )
    .append(
        $('<button>')
            .attr('id','addtask')
            .text('ADD')
            .click(()=>{
                $('#tasklist').append(
                        $('<li>')
                            .text($('#newtask').val())
                            .append(
                                $('<button>')
                                    .text('X')
                                    .click((ev)=>{
                                        $(ev.target).parent().remove();
                                    })
                            )
                            .append(
                                $('<button>')
                                    .text('U')
                                    .attr('class','btn-up')
                                    .click((ev)=>{
                                        $(ev.target).parent().insertBefore(
                                            $(ev.target).parent().prev()
                                        )
                                    })
                            )
                            .append(
                                $('<button>')
                                .text('D')
                                .attr('class','btn-down')
                                .click((ev)=>{
                                    $(ev.target).parent().insertAfter(
                                        $(ev.target).parent().next()
                                    )
                                })
                            )
                    )
                    
            })
    )
    .append(
        $('<ul>').attr('id','tasklist')
    )