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
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  var target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});

$('#signUp').on('submit',function() {
jQuery(function ($) {
    var $inputs = $('input[name=firstName],input[name=lastName], ,input[name=email], ,input[name=password],input[name=address],input[name=phoneNumber]');
    $inputs.on('input', function () {
        // This method only works on text types. You're going to need to look up validation for things that aren't text type.
        var total = $('input[name=firstName]').val().length + $('input[name=lastName]').val().length + $('input[name=email]').val().length + $('input[name=password]').val().length+ $('input[name=address]').val().length + $('input[name=phoneNumber]').val().length;
        $inputs.not(this).prop('required', !total);
    });
  });
});