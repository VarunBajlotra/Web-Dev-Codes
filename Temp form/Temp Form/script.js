//Work experience script start//
// function addExperience()
// {
//     console.log("Add was clicked")
//     let divItem=document.createElement('div')
//     divItem.innerHTML=  
//     '<div class="form-row"></div><span class="form-group text-primary col-md-3">Work Experience</span><button class="form group col-md-1 offset-9 btn btn-link" id="Remove" onclick="remFunc(event);">Remove</button></div><div class="form-row"><div class="form-group col-md-4 input"><input type="text" class="form-control inputText" required><span class="floating-label">Company Name*</span></div><div class="form-group col-md-4 input"><input type="text" class="form-control inputText" required><span class="floating-label">Designation*</span></div><div class="form-group col-md-4"><select class="form-control" required><option selected>Full time</option><option>Intern</option></select></div></div><div class="form-row"><div class="form-group col-md-12 input"><input type="text" class="form-control inputText" id="Flat" required><span class="floating-label">Job Description*</span></div></div><div class="form-row"><div class="form-group col-md-4 input"><input type="text" class="form-control inputText" onfocus="(this.type=\'date\')" required><span class="floating-label">Started From*</span></div><div class="form-group col-md-4 input"><input type="text" class="form-control inputText" onfocus="(this.type=\'date\')" id="comp" required><span class="floating-label">Completed On*</span></div><div class="form-group col-md-4"><input type="checkbox" id="agree" onclick="disable(event);">I currently work there</div></div><div class="form-row"><div class="form-group col-md-8 input"><input type="text" class="form-control inputText" required><span class="floating-label">Achievements/Projects*</span></div></div><hr width="50%">'
//     $('#list').append(
//     $('<li>').append(divItem)
//     )    
// }
// function remFunc(event)
// {
//     $(event.target).parent().parent().remove();
// }
// function disable(event)
// {
//     if($("#agree").prop("checked")==true){
//         $("#comp").prop("disabled",true)
//     }
// }

//Work-Experience script End//
$('#Name').click(()=>{
    console.log('Hello');
    if($('#Name').val()==''){
        $('.error').show();
    }
})
