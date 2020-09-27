//Work experience script start//
function addExperience()
{
    console.log("Add was clicked")
    let divItem=document.createElement('div')
    divItem.innerHTML=  
    '<div class="form-row"></div><span class="form-group text-primary col-md-3">Work Experience</span><button class="form group col-md-1 offset-9 btn btn-link" id="Remove" onclick="remFunc(event);">Remove</button></div><div class="form-row"><div class="form-group col-md-4 input"><input type="text" class="form-control inputText" required><span class="floating-label">Company Name*</span></div><div class="form-group col-md-4 input"><input type="text" class="form-control inputText" required><span class="floating-label">Designation*</span></div><div class="form-group col-md-4"><select class="form-control" required><option selected>Full time</option><option>Intern</option></select></div></div><div class="form-row"><div class="form-group col-md-12 input"><input type="text" class="form-control inputText" id="Flat" required><span class="floating-label">Job Description*</span></div></div><div class="form-row"><div class="form-group col-md-4 input"><input type="text" class="form-control inputText" onfocus="(this.type=\'date\')" required><span class="floating-label">Started From*</span></div><div class="form-group col-md-4 input"><input type="text" class="form-control inputText" onfocus="(this.type=\'date\')" id="comp" required><span class="floating-label">Completed On*</span></div><div class="form-group col-md-4"><input type="checkbox" id="agree" onclick="disable(event);">I currently work there</div></div><div class="form-row"><div class="form-group col-md-8 input"><input type="text" class="form-control inputText" required><span class="floating-label">Achievements/Projects*</span></div></div><hr width="50%">'
    $('#list').append(
    $('<li>').append(divItem)
    )    
}
function remFunc(event)
{
    $(event.target).parent().parent().remove();
}
function disable(event)
{
    if($("#agree").prop("checked")==true){
        $("#comp").prop("disabled",true)
    }
}

//Work-Experience script End//
    
$('#one').show();
$('h5').css({"color": "grey"});
$('#ONE').css({"color": "rgb(74, 74, 216)"});
$('#two').hide();
$('#three').hide();
$('#four').hide();

let btn1 = $(".Next");
let btn2 = $(".Back");

btn1.on('click',function(){
    let x = $(this).parent().parent();
    x.hide();
    x.nextAll('span:first').show();
    $('h5').css({"color": "grey"});
    x.nextAll('a:first').children().css({"color": "blue"})
});

btn2.on('click',function(){
    let y = $(this).parent().parent();
    y.hide();
    y.prevAll('span:first').show();
    $('h5').css({"color": "grey"});
    y.prevAll('span:first').prevAll('a:first').children().css({"color": "blue"})
});

let add_count = 1;
// document.getElementById("hideifOne").style.visibility = "hidden";
console.log(document.getElementById("hideifOne"));

function add_education()
{
    console.log("Add was clicked")
    let divItem=document.createElement('div')
    divItem.innerHTML= '<h6 class="text-center text-primary ml-5">Education <button class="btn btn-link col-md-1 offset-10" id="hideifOne" onclick="remEdu(event);">Remove</button> </h6> <div class="form-row ml-5 "> <div class="form-group col-md-4"><select id="Institute" class="form-control" required><option selected>Institute Name</option><option>AAA College of Engineering & Technology, Tamil Nadu</option><option>Aadishwar College of Technology, Gandhinagar</option><option>Aakar Academy of Architecture, Bangalore</option><option>Aalim Muhammed Salegh Academy of Architecture, Chennai</option <option>Aalim Muhammed Salegh College of Engineering, Chennai</option><option>Aalim Muhammed Salegh Polytechnic College, Chennai</option><option>Aamdar Kashinathji Mengal Polytechnic, Nashik</option><option>Aarav Polytechnic College, Jaipur</option> <option>Aarooran Polytechnic College, Tiruvarur</option> <option>Other</option></select></div> <div class="form-group col-md-4 input"><input type="number" class="form-control inputText" id="StartYear" required><span class="floating-label">Start Year*</span></div><div class="form-group col-md-4 input"><input type="number" class="form-control inputText" id="GraduationYear" required><span class="floating-label">Graduation Year*</span></div></div><div class="form-row ml-5 "><div class="form-group col-md-4 input"><input type="text" class="form-control inputText" id="Qualification" required><span class="floating-label">Degree/Diploma*</span></div><div class="form-group col-md-4 input"><input type="text" class="form-control inputText" id="Subject" required><span class="floating-label">Subject*</span>  </div><div class="form-group col-md-4 input">  <input type="text" class="form-control inputText" id="CGPA" required><span class="floating-label">Percentage or CGPA*</span></div>  <div class="form-group col-md-4"> <textarea cols="33%" rows="2" placeholder="Achievements/Projects"></textarea><hr width="50%"></div></div>' 
        $('#append_here1').append(
            $('<li>').append(divItem)
        )
        add_count++
        if(add_count>1)
        document.getElementById("hideifOne").style.visibility = "visible";
}
function remEdu(event)    
{
    $(event.target).parent().parent().remove();
    add_count--

    if(add_count == 1)
       document.getElementById("hideifOne").style.visibility = "hidden";
}


$('.move').on('click',function(){
    $('.spann').hide();
    $(this).nextAll('span:first').show();
    $('h5').css({"color": "grey"});
    $(this).children().css({"color": "rgb(74, 74, 216)"});
    console.log('Success!!');
});