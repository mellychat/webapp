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
    // PROBLEM: CURRENTLY WHEN THE FORM IS SUBMITTED, USER IS REDIRECTED TO HOME PAGE RATHER THAN PATIENT WAITING ROOM
}
