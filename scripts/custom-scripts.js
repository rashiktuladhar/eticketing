$(document).ready(function(){
		
		function showToolTip()
		{
			var showMsg= $(this).data("msg");
			$(".tooltip-holder").fadeIn(1000);
			$(".tooltip-holder").append("<span class='tooltip'>"+ showMsg +"</span>")
		}

		function hideToolTip()
		{
			$(".tooltip-holder").hide(1000);
			$(".tooltip").remove();
		}

		//hide all the sections except the first form
		$("#arrival-date-row").hide();
		$("#ticketing-table").hide();
		$("#ticketing-person-details").hide();
		$("#print-ticket").hide();
		$(".tooltip-holder").hide();


		//add css using jquery 
		$("#system-title").css({
			'font-size': '30px',
			'padding' : '40px',
			'color' : '#8D0204'
		});

		$("#search-flight").bind({
			mouseenter: showToolTip,
			mouseleave: hideToolTip
		});

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
			$("#ticketing-form").fadeIn('4000');
		});



		// transition from one section to another
		$("#search-flight").click(function() {
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
			$("#ticketing-person-details").fadeOut('4000', function() {
				$("#print-ticket").fadeIn('4000');
			});
		});


	});