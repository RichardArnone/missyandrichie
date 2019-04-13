$(document).ready(function(){

    $('#errors').hide();
    $('#yesMessage').hide();
	$('#noMessage').hide();
    
	$('#submit-form').click(function(){
		
		var radioValue = $("input[name='attending']:checked").val();
        
        if($("#firstguest").val().length == 0 || (! $("input").is(':checked'))){
            $('#errors').show();
            return false;
        }
        else{
            $('#rsvpForm').hide();
            
            if(radioValue == 'Yes'){
                $('#yesMessage').show();
            }
			else{
				$('#noMessage').show();
			}
        }
        
    });
	
});