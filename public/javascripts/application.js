// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
// Set the Countdown

  			jQuery(document).ready(function() {
					$('#pause').hide();
					$('#replay').hide();
					$('#countdown_dashboard').countDown({
						targetOffset: {
							'day': 		0,
							'month': 	0,
							'year': 	0,
							'hour': 	0,
							'min': 		20,
							'sec': 		0
						}
						
					});
					$('#countdown_dashboard').stopCountDown();
					
				});


				// Stop countdown
				function stop() {
					$('#pause').hide();
					$('#play').show();
					$('#replay').show();
					$('#countdown_dashboard').stopCountDown();
				}

				// Start countdown
				function start() {
					$('#play').hide();
					$('#replay').hide();
					$('#pause').show();
					$('#countdown_dashboard').startCountDown();
				}

				// reset and start
				function reset() {
					$('#play').show();
					$('#pause').hide();
					$('#replay').hide();
					$('#countdown_dashboard').stopCountDown();
					$('#countdown_dashboard').setCountDown({
						targetOffset: {
							'day': 		0,
							'month': 	0,
							'year': 	0,
							'hour': 	0,
							'min': 		20,
							'sec': 		.5
						}
					});				
					$('#countdown_dashboard').startCountDown();
					$('#countdown_dashboard').stopCountDown();
				}
