$(function () {
	$("#txt-verification-code").html(localStorage.getItem("y") + "<span class='text-muted'>!</span>");

	$("#btn-proceed").click(function () {
		
		//location.href = goto_event_page;
		//var info = {
		//	name:$('#txt-fullname').val(),
		//	age: $('#txt-age').val(),
		//	gender: $('input[name="gender"]:checked').val(),
		//	address: $('#txt-address').val(),
		//	occupation: $('#txt-occupation').val(),
		//	ethnicity: $('#txt-ethnicity').val(),
		//	education: $('#txt-education').val()
		//};
		console.log($('#txt-address').val());
	});
});