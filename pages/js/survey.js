﻿$(function () {
	
	$("#txt-verification-code").html(localStorage.getItem("y"));

	$("#btn-submit").click(function () {

		var info = {
			q1: $('input[name="q1"]:checked').val(),
			q2: $('input[name="q2"]:checked').val(),
			q3: $('input[name="q3"]:checked').val(),
			q4: $('#txt-q4').val()
		};
		console.log(info);
		
	});
	return true;
});