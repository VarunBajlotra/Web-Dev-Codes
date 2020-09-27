$(()=>{
    let newtodo = $('#newtodo')
    let addtodo = $('#addtodo')
    let tasklist = $('#tasklist')

    function refreshTodos(){
        tasklist.empty()
        $.get('/todos',(data)=>{
            for(let todo of data){
                tasklist.append(
                    $('<li>')
                        .text(todo)
                        .append(
                            $('<button>')
                            .text('Update')
                            .click((ev)=>{
                                $.get(`/update`)
                            })
                        )
                        .append(
                            $('<button>')
                            .text('Delete')
                            .click((ev)=>{
                                $.get(`/delete`,()=>{
                                    
                                })
                            })
                        )
                )
            }
        })
    }
    refreshTodos()

    addtodo.click(()=>{
        let val = newtodo.val();
        $.get(`/addtodo?newtodo=${val}`,(data)=>{
            if(data=='success'){
                refreshTodos();
            }
        })
    })
})

