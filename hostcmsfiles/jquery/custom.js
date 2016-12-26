$(document).ready(function() {	
	var seo_content = $('#seo_content').html();
	if(seo_content != undefined && seo_content.length > 0) {
		$('#seo_content').remove();
		$('#seo_content_user').html(seo_content);
	}
});