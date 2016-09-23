(function($) {
	"use strict";
	$(document).ready(function(){
		$('.dropdowncontent-dropdown').on('change', function() {
			var blockName = $(this).attr('name');
			$('[data-dropdowncontent-name="' + blockName + '"]').removeClass('dropdowncontent-content-visible');
			$('[data-dropdowncontent-name="' + blockName + '"][data-dropdowncontent-value="' + $(this).val() + '"]').addClass('dropdowncontent-content-visible');
		});
	});
})(jQuery);
