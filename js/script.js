$(document).ready(function(e) {
			
			$(window).load(function(){
				setTimeout(function(){ $('#loading').fadeOut(300); }, 500);
			});

			var data = { loop: true, in: {effect: 'flipInX', sync: true, shuffle: false}, out: {effect: 'flipOutX', sync: true, shuffle: false} };
			$('.shifter').textillate(data);
			
			function open_panel() {
				$('nav').removeClass('close');
				setTimeout(function(){ $('#container, .extra-bg-1').removeClass('close');}, 200);
				$('#toc-close').removeClass('close');
			}
			
			function close_panel() {
				setTimeout(function() {
					$('nav').addClass('close');
					$('#toc-close').addClass('close');	
				}, 200);
				$('#container, .extra-bg-1').addClass('close');
			}
			
			$('#toc-close').click(function(e){
				e.preventDefault();
				close_panel();
				userDefined = !userDefined;
			});
			
			$('#toc-open').click(function(e){
				e.preventDefault();
				open_panel();
				userDefined = !userDefined;
			});
			
			$('nav .acc-title a').click(function(e){
				e.preventDefault();
				$(this).toggleClass('white');
				$(this).children([0]).toggleClass('rotate');
				$(this).parent().next('.disc-list').slideToggle('fast');
			});
			
			var userDefined = false;
						
			function doResize() {				
				if ( !userDefined ) {
					if ( $(window).width() < 1220 && ( !$('#container').hasClass('close')) ) {
						close_panel();
					}
					else if ( $(window).width() >= 1220 && ( $('nav').hasClass('close')) ) {
						open_panel();
					}
				}			
			}
			
			$(window).resize(function() { doResize(); });
			
			doResize(); //init
			
			$('#introduction-jump, #introduction-nav, #top-jump').click(function(e) {
				e.preventDefault();
				$('#container').scrollTo('#introduction', 1000, {axis: 'y', easing:'easeOutQuart' });
			});
			
			$('#portfolio-jump, #portfolio-nav').click(function(e) {
				e.preventDefault();
				$('#container').scrollTo('#portfolio', 1000, {axis: 'y', easing:'easeOutQuart' });
			});
			
			$('#services-jump, #services-nav').click(function(e) {
				e.preventDefault();
				$('#container').scrollTo('#services', 1000, {axis: 'y', easing:'easeOutQuart' });
			});
			
			$('#about-jump, #about-nav').click(function(e) {
				e.preventDefault();
				$('#container').scrollTo('#about', 1000, {axis: 'y', easing:'easeOutQuart' });
			});
			
			$('#contact-jump, #contact-nav').click(function(e) {
				e.preventDefault();
				$('#container').scrollTo('#contact', 1000, {axis: 'y', easing:'easeOutQuart' });
			});
			
			function activateMenu(target) {
				$('nav ul.menu li a.on').removeClass('on');
				$(target).addClass('on');
			}
			
			$('#introduction').waypoint(function(direction) { 
				if (direction === 'up') { activateMenu('#introduction-nav'); } 
				}, { offset: -100, context: '#container' });
			$('#portfolio').waypoint(function(direction) { 
				if (direction === 'down') { activateMenu('#portfolio-nav'); }
				else { activateMenu('#introduction-nav'); }
				}, { offset: 100, context: '#container' });
			$('#services').waypoint(function(direction) { 
				if (direction === 'down') { activateMenu('#services-nav'); }
				else { activateMenu('#portfolio-nav'); }
				}, { offset: 100, context: '#container' });
			$('#about').waypoint(function(direction) { 
				if (direction === 'down') { activateMenu('#about-nav'); }
				else { activateMenu('#services-nav'); }
				}, { offset: 100, context: '#container' });
			$('#contact').waypoint(function(direction) { 
				if (direction === 'down') { activateMenu('#contact-nav'); }
				else { activateMenu('#about-nav'); }
				}, { offset: function() {
			return $.waypoints('viewportHeight') - $(this).height() + 100;
			}, context: '#container' });
			
			$(function() {  //Input placeholder fix for IE
			var input = document.createElement('input');
			if(('placeholder' in input)==false) { 
				$('[placeholder]').focus(function() {
					var i = $(this);
					if(i.val() == i.prop('placeholder')) {
						i.val('').removeClass('placeholder');
						if(i.hasClass('password')) {
							i.removeClass('password');
							this.type='password';
						}			
					}
				}).blur(function() {
					var i = $(this);	
					if(i.val() == '' || i.val() == i.prop('placeholder')) {
						if(this.type=='password') {
							i.addClass('password');
							this.type='text';
						}
						i.addClass('placeholder').val(i.prop('placeholder'));
					}
				}).blur().parents('form').submit(function() {
					$(this).find('[placeholder]').each(function() {
						var i = $(this);
						if(i.val() == i.prop('placeholder'))
							i.val('');
					})
				});
			}
		});
		
		function isValidEmailAddress(emailAddress) {
			var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
			return pattern.test(emailAddress);
		};
		
		function validate() {
			var error = false;
			 if ( $('#name').val().length == 0 || $('#name').val().length <= 3 ) {
				$('#name-error').fadeIn(300);
				$('#name').addClass('error-border');
				error = true;
			 }
			 if ( isValidEmailAddress( $('#email').val() ) == false ) {
				$('#email-error').fadeIn(300);
				$('#email').addClass('error-border');
				error = true;
			 }
			 if ( $('#subject').val().length == 0 || $('#subject').val().length <= 3 ) {
				$('#subject-error').fadeIn(300);
				$('#subject').addClass('error-border');
				error = true;
			 }
			 if ( $('#message').val().length == 0 || $('#message').val().length <= 3 ) {
				$('#message-error').fadeIn(300);
				$('#message').addClass('error-border');
				error = true;
			 }
			 return error
		}
		
		$('.field').focus(function(e){
			if ( !$(this).hasClass('error-border') ) return;
			else {
				$(this).removeClass('error-border');
				var id = '#' + $(this).prop('id') + '-error';
				$(id).fadeOut(300);
			}
		});
		
		function messageSent() {
			$('#submit').removeClass('gray');
			$('#submit').addClass('green');
			$('#submit').prop('value', 'Message Sent!');
			$('#name').val('');
			$('#email').val('');
			$('#subject').val('');
			$('#message').val('');
			setTimeout(function(){
				$('#submit').removeClass('green');
				$('#submit').addClass('gray');
				$('#submit').prop('value', 'Submit');
				}, 5000);
		}
		
		$('#submit').click(function(e){
			e.preventDefault();
			if ($(this).prop('value') == 'Message Sent!') return;
			if (validate() || $(this).text() == 'Message Sent!') return;
			
			$.ajax({
			  type: 'POST',
			  url: $('form').prop('action'),
			  data: $('form').serialize(),
			   success: function(){ messageSent(); }
			});
		})
		
		$('.vert-center').flexVerticalCenter();
		
		$('#gallery-close').click(function(e){
			e.preventDefault();
			$('#gallery').fadeOut(500, function(e){
				$('#gallery #loader').empty();
			});
		});
				
		$('#portfolio li a').click(function(e){
			e.preventDefault();
			var address = $(this).prop('href');
			var type = $(this).attr('data-type');
			$('#loading').fadeIn(300, function(){
				$('#gallery').fadeIn(300);
				$( '#gallery #loader' ).load( address, function(){  
				  if (Retina.isRetina()){
						Retina.afterLoad( $('#gallery #loader img') );
				  }
				  if (type == 'gallery'){
					   $('.flexslider').flexslider({
						animation: 'slide',
						easing: 'easeOutQuad',
						touch: true,
						start: function(slider){ setTimeout(function(){ $('#loading').fadeOut(300); }, 500); } 
						});
				  }
				  else {
					  console.log('Test');
					  setTimeout(function(){ $('#loading').fadeOut(300); }, 500);  
				  }
				});
			});
	
		});
			
		}); //Ready