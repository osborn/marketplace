jQuery(document).ready(function(){	

	//Back to top slider
    jQuery('a[href=#totop]').click(function(){
        jQuery('html, body').animate({scrollTop:0}, 600);
        return false;
    });
	
	// Sidebar Height
	//jQuery('#col-right').height(jQuery('#col-right').parents('.middle').height());

	// Custom Menu
	jQuery(".category").click(function() {
		//var open = jQuery(".category").attr("lang");
		var open = this.getAttributeNode('lang').value;
		jQuery(".subcategory_" + open).slideToggle('medium');
	});	
	
	// Product Slider
    jQuery('#featured-products').jcarousel();
	jQuery('#featured-products2').jcarousel();

	// FancyBox jQuery
	jQuery("a.group").fancybox({ 'zoomSpeedIn': 300, 'zoomSpeedOut': 300, 'overlayShow': true }); 

	// Cart Popout
	jQuery(".mycart").click(function() {
		jQuery("#mycart-block").slideToggle('medium');
	});
	
	
	
	// Slider Homepage
	jQuery("#slider").easySlider();	
});
