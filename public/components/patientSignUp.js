let submitForm = document.querySelector("#button");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  console.log("helo");
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');  
});

// function formSubmit (){
// $('#form').on('submit',function() {
// jQuery(function ($) {
//       var $inputs = $('input[name=firstName],input[name=lastName]');
//       // $inputs.on('input', function () {
//       var total = $('input[name=firstName]').val().length + $('input[name=lastName]').val().length;
//       $inputs.not(this).prop('required', !total);
//       if( $('input[name=firstName]').val().length > 0 && $('input[name=lastName]').val().length > 0) {
//         return true;
//       }
//       });
//   });
// }
// submitForm.addEventListener("click", formSubmit);

function formSubmit() {
  alert (firstName);
  if (firstName.value == ""){
    return false;
  } else if (lastName.value == ""){
    return false;
  }
  else {
    return true;
  }
}

if(formSubmit()) {
    window.location = "/templates/public/patWaitingRoom.html";      
// function redirect() {
//        // need some work
//       // So far as long as one of the inputs is greater than 0, the form moves along. You get the url if there's valuese in both of th. inputs
//        var $inputs = $('input[name=firstName],input[name=lastName]');
//        // var firstName = $('input[name=firstName]').val().length;
//        // var lastName = $('input[name=lastName]').val().length;
//        var total = $('input[name=firstName]').val().length;
//        var total2 = $('input[name=lastName]').val().length;
//        var total3 = total;
//        if (total3 > 1) {  
//                 alert(total2);
//                 window.location = "/templates/public/patWaitingRoom.html";      
//        }
//        else {
//        }
//     }
}
// submitForm.addEventListener("click", redirect);

// function formSubmission(){
//   $('#form').on('submit',function() {
//     jQuery(function ($) {
//     let i = 0;
//     var total = $('input[name=firstName]').val().length;
//     var total2 = $('input[name=lastName]').val().length;
//     var $inputs = $('input[name=firstName],input[name=lastName]');
//     if (total > 0){
//       i++;
//     }
//     if (total2 > 0){
//       i++;
//     }
//     if (i > 1) {  
//         alert('Is Working');
//         window.location = "https://hackathonv4.glitch.me/FirebaseRTC/public/patWaitingRoom.html";      
//        }
//      });
//   });
// }

// submitForm.addEventListener("click", formSubmission);
