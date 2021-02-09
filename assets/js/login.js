/* eslint-disable */
// ==============================================================================
//
// ==============================================================================
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  navigator.serviceWorker.register('sw.js');
}

jQuery(function($){




// ==============================================================================
// global 
// ==============================================================================    
// const XM_URL = 'xm.iptp.net';    
const XM_URL = process.env.NODE_ENV === 'production' ? 'xm.iptp.net' : 'xm.iptp.dev';


var baseUrl = 'https://' + XM_URL + '/xm';
var API_URL =  baseUrl + '/api';

var sessionId = localStorage.getItem("sessionId");
var token = localStorage.getItem("token");


// ==============================================================================
// ==============================================================================
// check refirect
// ==============================================================================
// ==============================================================================
function check_redirect_to_main(){

      // redirect
    if ( token && sessionId ){

        window.location = "./";

    }


}
check_redirect_to_main();

// ==============================================================================
// Show and hide form 
// ==============================================================================        
let global = $('.js-global');
let login = $('.js-login');
let signup = $('.js-signup');
let forget = $('.js-forget');
let requestcode = $('.js-requestcode');

let loginbtn = $('.js-btn-login');
let signupbtn = $('.js-btn-signup');
let forgetbtn = $('.js-btn-forget');
let requestcodebtn = $('.js-btn-requestcode');
let cancelbtn = $('.js-btn-cancel');

setTimeout(function(){
    login.find('[name="email"]').val('').focus();  

},200);

// register new account
signupbtn.on('click',function(){  
  global.removeClass('active');
  signup.addClass('active');

  $('.js_register__form')[0].reset();

  $('.js_register__form').find('[name="name"]').focus();


  $('.js_register__form').find('.form__line_code').hide();
  $('.js_register__form').find('[name="code"]').val('');

  $('.mess').html('');


});

// forget password
forgetbtn.on('click',function(){  
  global.removeClass('active');
  requestcode.addClass('active');


  $('.js_forgot__form')[0].reset();
  $('.js_forgot__form_code')[0].reset();

  $('.js_forgot__form').find('[name="email"]').focus();

});

// cancel button all for form
cancelbtn.on('click',function(){  
  global.removeClass('active');
  login.addClass('active');

    $('.js_login__form')[0].reset();
  login.find('[name="email"]').val('').focus();  

});

// ==============================================================================
// ==============================================================================
// login
// ==============================================================================
// ==============================================================================

console.log('token:' + token);

$(document).on('submit', '.js_login__form', function(e){
     e.preventDefault();

    var $this = $(this);

    var email = $this.find('[name="email"]').val();
    var password = $this.find('[name="password"]').val();


   $.ajax({
          url:  API_URL + '/login', 
          data: { 

             email: email,
             password: password,
             // sessionId: 

          },    
          type: "post",
      
          dataType: "json",

          headers: {
             'Content-Type': 'application/x-www-form-urlencoded',
          }, 

          beforeSend: function() {

            $this.find('.js-btn-spin').find('.--spin').show();
            $this.find('.js-btn-spin').attr('disabled', true );


            $this.find('.mess').html( '' );

          },

      
          statusCode: {


           200: function(  response ) {
              console.log( response );


                 localStorage.setItem("sessionId", response.data.sessionId);
                 localStorage.setItem("token", response.data.token);

                 token =  response.data.sessionId;
                 sessionId = response.data.token;


                  $this.find('.mess').html( response.message );

                  check_redirect_to_main();


                  $this.find('.js-btn-spin').find('.--spin').hide();
                  $this.find('.js-btn-spin').attr('disabled', false );


         
              },

              401: function(  response ) {

                  // console.log( response.responseJSON );

                  if ( response.responseJSON ){

                    response = response.responseJSON;

                  }

                  

                  $this.find('.mess').html( response.details );

                  $this.find('[name="password"]').val('').focus();


                  $this.find('.js-btn-spin').find('.--spin').hide();
                  $this.find('.js-btn-spin').attr('disabled', false );

         
              },

           },

          success: function(response) {

                if (response.status == 0) {

                   localStorage.setItem("sessionId", response.data.sessionId);
                   localStorage.setItem("token", response.data.token);

                   token =  response.data.sessionId;
                   sessionId = response.data.token;


                  $this.find('.mess').html( response.message );

                     check_redirect_to_main();


                     //
                      

                } else {

                    $this.find('.mess').html( response.message );

                    $this.find('[name="password"]').val('').focus();
                }


                $this.find('.js-btn-spin').find('.--spin').hide();
                $this.find('.js-btn-spin').attr('disabled', false );


          },

          error: function(response) {

              // alert('df');

          }


    });


});


// ==============================================================================
// ==============================================================================
// register
// ==============================================================================
// ==============================================================================

$(document).on('submit', '.js_register__form', function(e){
     e.preventDefault();

    var $this = $(this);

    var email = $this.find('[name="email"]').val();
    var name = $this.find('[name="name"]').val();
    var password = $this.find('[name="password"]').val();
    var password2 = $this.find('[name="password2"]').val();
    
     $this.find('.mess').html( '' );
     
     // console.log( password );
     // console.log( password2 );


    if ( password != password2 ){

       $this.find('.mess').html( 'Confirm Password was wrong' );

       return;
    }  


   var data = { 
          email: email,
          name: name,
          password: password,
          password2: password2

    };




    var check_reg = false;

    if (  $this.find('[name="code"]').is(":visible")  ){

        var code = $this.find('[name="code"]').val();

        check_reg = true;

        data.code = code;


        data = JSON.stringify( data );
    }


   $.ajax({
          url:  !check_reg ?  API_URL + '/validateemail' :  API_URL + '/register', 
          data: data,    
          type: "post",
      
          dataType: "json",
          headers: {
              'Content-Type': !check_reg ?  'application/x-www-form-urlencoded' : 'application/json',
          }, 

          beforeSend: function() {


              $this.find('.js-btn-spin').find('.--spin').show();
              $this.find('.js-btn-spin').attr('disabled', true );

              $this.find('.mess').html( '' );

          },

        statusCode: {


           200: function(  response ) {
              // console.log( response );


                  if ( !check_reg ) {

                      $this.find('.mess').html( 'Please enter code we sent to email ' + email );

                      $this.find('.form__line_code').show();
                      $this.find('[name="code"]').val('').focus();

                  } else {

                      // localStorage.setItem("sessionId", response.data.sessionId);
                      // localStorage.setItem("token", response.data.token);
                      $this.find('.mess').text( response.message );

                      setTimeout(function(){

                         window.location = "./";

                      },500);
                     
              
                  }

                  $this.find('.js-btn-spin').find('.--spin').hide();
                  $this.find('.js-btn-spin').attr('disabled', false );


                
         
              },

              400: function(  response ) {


                 if ( response.responseJSON ){

                    response = response.responseJSON;

                  }



                  $this.find('.mess').text( response.details );


                $this.find('.js-btn-spin').find('.--spin').hide();
                $this.find('.js-btn-spin').attr('disabled', false );

               
              },



              500: function(  response ) {


                 if ( response.responseJSON ){

                    response = response.responseJSON;

                  }

                  if ( check_reg ) {

                  $this.find('.mess').text( response.message );


                  $this.find('.js-btn-spin').find('.--spin').hide();
                  $this.find('.js-btn-spin').attr('disabled', false );
                  
                  }

                 
              },






           },



          success: function(response) {

                if (response.status == 0) {

                    if ( !check_reg ) {

                        $this.find('.mess').html( 'Please enter code we sent to email ' + email );

                        $this.find('.form__line_code').show();
                        $this.find('[name="code"]').val('').focus();

                    } else {

                        // localStorage.setItem("sessionId", response.data.sessionId);
                        // localStorage.setItem("token", response.data.token);


                        // sessionId = response.data.sessionId;
                        //  token = response.data.token;

                         $this.find('.mess').text( response.message );

                          setTimeout(function(){

                             window.location = "./";

                          },500);
                    
                    }


                } else {

                     $this.find('.mess').html( response.message );

                }


                $this.find('.js-btn-spin').find('.--spin').hide();
                $this.find('.js-btn-spin').attr('disabled', false );


            

          },

          error: function(response) {

          }


    });


});




// ==============================================================================
// ==============================================================================
// forgot
// ==============================================================================
// ==============================================================================

$(document).on('submit', '.js_forgot__form', function(e){
     e.preventDefault();


    var $this = $(this);

    var email = $this.find('[name="email"]').val();


   $.ajax({
          url: API_URL + '/requestcode', 
          data: { 

                email: email,

          },    
          type: "post",
      
          dataType: "json",
          headers: {
             'Content-Type': 'application/x-www-form-urlencoded',
          }, 

          beforeSend: function() {

              $this.find('.js-btn-spin').find('.--spin').show();
              $this.find('.js-btn-spin').attr('disabled', true );

              $this.find('.mess').html( '' );


          },


          statusCode: {


           200: function(  response ) {
              console.log( response );


                $('.reset-password1').removeClass('active');
                $('.reset-password2').addClass('active');


                $('.reset-password2').find('[name="email"]').val( email );
                $('.reset-password2').find('[name="code"]').val('').focus();
                $('.reset-password2').find('[name="password"]').val('');
                $('.reset-password2').find('[name="confirmpassword"]').val('');
                $('.reset-password2').find('.mess').html('');



               $this.find('.js-btn-spin').find('.--spin').hide();
                $this.find('.js-btn-spin').attr('disabled', false );
                
         
              },

              404: function(  response ) {


                  $this.find('.mess').html( 'Please again !' );

                  $this.find('.js-btn-spin').find('.--spin').hide();
                  $this.find('.js-btn-spin').attr('disabled', false );
               
              },

           },



          success: function(response) {


            if (response.status == 0) {
       

                $('.reset-password1').removeClass('active');
                $('.reset-password2').addClass('active');


                $('.reset-password2').find('[name="email"]').val( email );
                $('.reset-password2').find('[name="code"]').val('').focus();
                $('.reset-password2').find('[name="password"]').val('');
                $('.reset-password2').find('[name="confirmpassword"]').val('');
                $('.reset-password2').find('.mess').html('');
                

            } else {

                $this.find('.mess').html( response.message );

            }



            $this.find('.js-btn-spin').find('.--spin').hide();
            $this.find('.js-btn-spin').attr('disabled', false );

            

            

          },

          error: function(response) {

          }


    });


});




$(document).on('submit', '.js_forgot__form_code', function(e){
     e.preventDefault();

    


    var $this = $(this);


    $this.find('.mess').html( '' );


    var email = $this.find('[name="email"]').val();

    var code = $this.find('[name="code"]').val().trim();
    var password = $this.find('[name="password"]').val();
    var password2 = $this.find('[name="confirmpassword"]').val();

    if ( password != password2 ){

       $this.find('.mess').html( 'Confirm Password was wrong' );

       return;
    }  


   $.ajax({
          url: API_URL + '/reset', 
          data: { 

              email: email,
              code: code,
              password: password,
              // password2: password2,

          },    
          type: "post",
      
          dataType: "json",
          headers: {
             'Content-Type': 'application/x-www-form-urlencoded',
          }, 

          beforeSend: function() {

              $this.find('.js-btn-spin').find('.--spin').show();
              $this.find('.js-btn-spin').attr('disabled', true );

              $this.find('.mess').html( '' );


          },


          statusCode: {


             200: function(  response ) {
                
                $this.find('.mess').html( response.message );
              
                setTimeout(function(){

                  window.location = location.href;

                },1000);

                $this.find('.js-btn-spin').find('.--spin').hide();
                $this.find('.js-btn-spin').attr('disabled', false );

                   
           
              },



             404: function(  response ) {

                 if ( response.responseJSON ){

                    response = response.responseJSON;

                  }

                
                 $this.find('.mess').html( response.details );

                 $this.find('.js-btn-spin').find('.--spin').hide();
                $this.find('.js-btn-spin').attr('disabled', false );
                  
           
              },





          },



          success: function(response) {


            if (response.status == 0) {


                $this.find('.mess').html( response.message );
              
                setTimeout(function(){

                  window.location = location.href;

                },1000);
                

            } else {

                $this.find('.mess').html( response.details );

            }

            $this.find('.js-btn-spin').find('.--spin').hide();
            $this.find('.js-btn-spin').attr('disabled', false );

                  

          },

          error: function(response) {

          }


    });


});


$(document).on('click', '.js-btn-send-code', function(e){
    e.preventDefault();

  
    var $where = $('.js_forgot__form_code');

    var email = $where.find('[name="email"]').val();



    $.ajax({
          url: API_URL + '/requestcode', 
          data: { 

                email: email,

          },    
          type: "post",
      
          dataType: "json",
          headers: {
             'Content-Type': 'application/x-www-form-urlencoded',
          }, 

          beforeSend: function() {

                $where.find('.mess').html( '' );

          },


          statusCode: {


             200: function(  response ) {
                
                $where.find('.mess').html( 'Send Code success' );

                  
           
              },


          },




          // success: function(response) {
            

          //    if (response.status == 0) {

          //       $where.find('.mess').html( 'Send Code success' );

          //     }
          //       $where.find('.mess').html( response.message );

          // },

          error: function(response) {

          }


    });



});







})