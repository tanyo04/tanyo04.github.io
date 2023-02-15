$(function () {


	$("#btn-verify").click(function () {
		validate_code($(".txtVerification").val());
		
	});

});

function validate_code(code) {
	var info = {
		code: code
	}

	$.ajax({
		type: "GET",
		url: "/Home/ValidateCode",
		data: info,
		success: function (d) {
			
			if (d.length > 0) {
				if (d[0].fullname == undefined || d[0].fullname == null) {					
					location.href = goto_profile_page + '?code=' + code;
				} else {
					location.href = goto_event_page + '?code=' + code;
				}
				localStorage.setItem("x", d[0].id);
				localStorage.setItem("y", d[0].code);
			
				/*console.log(d[0]);*/
			} else {
				$(".txtVerification").val('');
				$(".txtVerification").focus();

			}

		},
		error: function (xhr, status, error) {
			console.log("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
		}
	});

}