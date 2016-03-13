$(document).ready(function(){
	
		//tool tips show
		function showToolTip()
		{
			var showMsg= $(this).data("msg");
			$(".tooltip-holder").fadeIn(1000);
			$(".tooltip-holder").append("<span class='tooltip'>"+ showMsg +"</span>");
		}

		//tool tips hide
		function hideToolTip()
		{
			$(".tooltip-holder").hide(1000);
			$(".tooltip").remove();
		}


		//utility function created
		$.notifyError= function(msg){
			$(".submit-button").attr('disabled', 'disabled');
			return $(".error-msg-holder").fadeIn(1000).append("<span class='tooltip-error'>"+ msg +"</span>").delay(4000).fadeOut('fast', function() {
				 $(".error-msg-holder").fadeOut();
				 $(".submit-button").removeAttr('disabled');
				$(".tooltip-error").remove();
			});
		}


		//Plugin Form Nofify Hover Effect
		$.fn.notify= function(msg){
			return this.bind({
				mouseenter: function(e){
					// $(".tooltip-holder").fadeIn(1000);
					$(".tooltip-holder").fadeIn(1000).append("<span class='tooltip'>"+ msg +"</span>");
					
				},
				mouseleave: function(e){
					$(".tooltip-holder").stop().fadeOut('1000', function() {
						$(".tooltip").remove();
					});
				}
			});
		}


		//hide all the sections except the first form
		$("#arrival-date-row").hide();
		$("#ticketing-table").hide();
		$("#ticketing-person-details").hide();
		$("#print-ticket").hide();
		$(".tooltip-holder").hide();
		$(".error-msg-holder").hide();


		//add css using jquery 
		$("#system-title").css({
			'font-size': '30px',
			'padding' : '40px',
			'color' : '#8D0204'
		});


		$("#logo-img").notify("Himalaya Airlines");
		// $("#search-flight").bind({
		// 	mouseenter: showToolTip,
		// 	mouseleave: hideToolTip
		// });



		//one way two way flight determination
		$('input[type="radio"]').click(function(){
		if($(this).attr("value")=="TWO"){
			$("#ticket-class-row").hide('fast', function() {
				$("#arrival-date-row").show('slow', function() {
					$("#ticket-class-row").show('fast');
				});
			});
		}
		else
		{
			$("#ticket-class-row").hide('fast');
				$("#arrival-date-row").hide('slow', function() {
					$("#ticket-class-row").show('fast');
				});
		}
		});



		// Go Back To The Home
		$("#click-home").click(function() {
			$("#print-ticket").fadeOut('4000');
			$("#ticket-form")[0].reset();
			$("#ticketing-form").fadeIn('4000');
		});



		// transition from one section to another
		$("#search-flight").click(function() {
			var fromPlace=$("#from").val();
			var toPlace=$("#to").val();
			var departureDate=$("#departure-date").val();
			var flightClass=$("#class").val();
			var adult=$("#adult").val();
			var child=$("#child").val();
			var infant=$("#infant").val();
			var fieldValues=[fromPlace,toPlace,departureDate,flightClass,adult,child,infant];

			for(i=0;i< fieldValues.length; i++)
			{
				if(fieldValues[i]=="")
				{
					$.notifyError("Please fill all the fields.");
				return;
				}
			}

			$("#ticketing-form").hide('4000', function() {
				$("#ticketing-table").show('4000');
			});
		});

		$("#back-ticketing-form").click(function(event) {
			$("#ticketing-table").fadeOut('4000', function() {
				$("#ticketing-form").fadeIn('fast');
			});
		});

		$(".book-now").click(function() {
			$("#ticketing-table").hide('4000', function() {
				$("#ticketing-person-details").show('4000');
			});
		});

		$("#ticket-book").click(function() {

			var ticketBookFields=[$("#full-name").val(),$("#address").val(),$("#contact-no").val(),$("#passport-no").val()];

			for(i=0;i< ticketBookFields.length; i++)
			{
				if(ticketBookFields[i]=="")
				{
					$.notifyError("Please fill all the fields.");
					return;
				}
			}
			$("#ticketing-person-details").fadeOut('4000', function() {
				$("#print-ticket").fadeIn('4000');
			});
		});


	});