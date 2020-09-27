$(()=>{

   $('#submit')
      .click(()=>{
         
          let New_obj = {};
          New_obj.Name = $('#Name').val();
          New_obj.phoneNumber = $('#PhNum').val();
          New_obj.carNumber = $('#CarNum').val().toUpperCase();
           console.log(New_obj);
          //check carNumber in police database
          $.post(
             '/theft_check/',
             {carNumber: New_obj.carNumber},
             function(data){
                if(data == "found"){
                    $('#car_theft').show()
                }
             }
          )

                  let currentTime = new Date();
                  let currentOffset = currentTime.getTimezoneOffset();
                  let ISTOffset = 330;   // IST offset UTC +5:30 
                  let ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
                  let hoursIST = ISTTime.getHours()
                  let minutesIST = ISTTime.getMinutes()
                  let timeIST = hoursIST + ":" + minutesIST;
                  let dateIST = ISTTime.getDate() + '-' + Number(ISTTime.getMonth()+1) + "-" + ISTTime.getFullYear()
      
                New_obj.date = dateIST;
                New_obj.time = timeIST; 
      
                $('#output').html('Slot Number Alloted:  S1  <br><img src="parking_slot.jpg" alt="">  <br> Directions:<br> Seedha jaana hai!!!!  <br> Ghusse me idhar udhar mat nikal jaiyega <br><br>  <button class="btn btn--radius btn--green" id="Add">Add Entry</button> <button class="btn btn--radius btn--green" id="Go_back">Delete Entry</button> ');
                $('#output').show();
                $('input').prop("disabled",true);
                $('#submit').prop('disabled',true);

                
      
                $('#Go_back')
                  .click(()=>{
      
                   $('#output').hide();
                   $('input').prop("disabled",false);
                   $('#submit').prop('disabled',false);
                   $('#Name').val("");
                   $('#CarNum').val("");
                   $('#PhNum').val("");
                 })
      
                 $('#Add')
                   .click(()=>{
                     function makeid(length) {
                         var result           = '';
                         var characters       = 'ABCHIJFGOPQRSTUVWXYZabcdKLMNDEefghijklmnopqrst12345uvwxyz06789';
                         var charactersLength = characters.length;
                         for ( var i = 0; i < length; i++ ) {
                            result += characters.charAt(Math.floor(Math.random() * charactersLength));
                         }
                         return result;
                      }
                      
                      let key = makeid(7);
                       New_obj.key = key;
      
                       $.post(
                          '/store_data/',
                          New_obj,
                          function(data){}
                       )
                       
                        let auth_key = "xczHw6MdR4gAFjVGfei3lbpahOTvuQyCUDsZK7SWBo2q9E58nLfYjiktsDxLeXRNHMpIuGq34ACOKdWw"

                        

                        var settings = {
                           "async": true,
                           "crossDomain": true,
                           "url": "https://www.fast2sms.com/dev/bulk?authorization=" + auth_key + "&sender_id=FSTSMS&message= Welcome to the Parking Portal Mr. "+New_obj.Name+"!! Your vehicle (Vehicle No. : "+New_obj.carNumber+") entered the parking. The key generated for your vehicle is "+New_obj.key+". The parking slot alloted to you is S1. Download our app for live video monitoring of your vehicle. Download the app : ... . Use your key as the username and phone number as the password.&language=english&route=p&numbers=" + New_obj.phoneNumber,
                           "method": "GET"
                         }
                         
                         $.ajax(settings).done(function (response) {
                           console.log(response);
                         });

                       $('#output').hide();
                       $('input').prop("disabled",false);
                       $('#submit').prop('disabled',false);
                       $('#Name').val("");
                       $('#CarNum').val("");
                       $('#PhNum').val("");
      
                   })
      })
      $('#Done')
        .click(()=>{
           $('#output').hide();
           $('input').prop("disabled",false);
           $('#submit').prop('disabled',false);
           $('#car_theft').hide()
           $('#Name').val("");
           $('#CarNum').val("");
           $('#PhNum').val("");
        }) 
})