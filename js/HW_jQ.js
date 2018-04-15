$(document).ready(function() {
	// 下拉式選單
	$('.jQ-menu-dropdowns').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$(this).parent().siblings().find('.jQ-menu-dropdowns').removeClass('active');
		$(this).parent().find('.jQ-menu-dropdowns-open').slideToggle();
		$(this).parent().siblings().find('.jQ-menu-dropdowns-open').slideUp();
	});
	$('body:not(.jQ-menu-dropdowns)').mousedown(function(event) {
		$('.jQ-menu-dropdowns').removeClass('active');	
		$('.jQ-menu-dropdowns-open').slideUp();
	});

	// 輪播效果
	$('.jQ-slider').nivoSlider({
		effect: 'random',                 // Specify sets like: 'fold,fade,sliceDown' 
    slices: 15,                       // For slice animations 
    boxCols: 8,                       // For box animations 
    boxRows: 4,                       // For box animations 
    animSpeed: 500,                   // Slide transition speed 
    pauseTime: 3000,                  // How long each slide will show 
    startSlide: 0,                    // Set starting Slide (0 index) 
    directionNav: true,               // Next & Prev navigation 
    controlNav: true,                 // 1,2,3... navigation 
    controlNavThumbs: false,          // Use thumbnails for Control Nav 
    pauseOnHover: true,               // Stop animation while hovering 
    manualAdvance: false,             // Force manual transitions 
    prevText: 'Prev',                 // Prev directionNav text 
    nextText: 'Next',                 // Next directionNav text 
    randomStart: false,               // Start on a random slide 
    beforeChange: function(){},       // Triggers before a slide transition 
    afterChange: function(){},        // Triggers after a slide transition 
    slideshowEnd: function(){},       // Triggers after all slides have been shown 
    lastSlide: function(){},          // Triggers when last slide is shown 
    afterLoad: function(){}           // Triggers when slider has loaded 
	});

	// 燈箱效果
	lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'fadeDuration': 300,
    'imageFadeDuration': 300,
    'resizeDuration': 500,
    'wrapAround': true
  });

	// 頁首滾動效果
	$('.jQ-scroll-top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 700);
	});

	//表單輸入 focus() & blur() 效果
	$('#message').focus(function(event) {
		$(this).css('background-color', '#cccccc');
	});
	$('#message').blur(function(event) {
		$(this).css('background-color', '#ffffff')
	});

	$('#name').focus(function(event) {
		$(this).css('background-color', '#cccccc');
	});
	$('#name').blur(function(event) {
		$(this).css('background-color', '#ffffff')
	});

	$('#tel').focus(function(event) {
		$(this).css('background-color', '#cccccc');
	});
	$('#tel').blur(function(event) {
		$(this).css('background-color', '#ffffff')
	});	

	$('#mail').focus(function(event) {
		$(this).css('background-color', '#cccccc');
	});
	$('#mail').blur(function(event) {
		$(this).css('background-color', '#ffffff')
	});

	//表單文字呈現效果
	$('.form_title_part1').textillate({
	  // enable looping
  	loop: true,

  	// sets the minimum display time for each text before it is replaced
  	minDisplayTime: 3000,

  	// in animation settings
  	in: {
  		// set the effect name
    	effect: 'fadeInLeftBig',
  	},

  	// out animation settings.
  	out: {
    	effect: 'hinge',
    	sync: true,
  	},
	});
	$('.form_title_part2').textillate({
  	loop: true,
  	minDisplayTime: 3000,
  	in: {
    	effect: 'fadeInLeftBig',
  	},
  	out: {
    	effect: 'hinge',
    	delay: 200,
    	sync: true,
  	},
	});
	// $('.tech_item a p').textillate();

	//表單送出鈕 mousedown() 效果
	$('#submit').mousedown(function(event) {
		$(this).css('background', '#017256');
	});

	//QRcode
	$('.qrcode').qrcode({
		text: 'https://tw.yahoo.com/',
		width: 120,
		height: 120,
	});
});