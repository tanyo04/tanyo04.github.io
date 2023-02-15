$(function () {

	$("#txt-verification-code").html(localStorage.getItem("y") + "<span class='text-muted'>!</span>");
	getEventList();

});

function getEventList() {
	var htmlEventList="";
	
	$.ajax({
		type: "GET",
		url: "/Event/EventList",		
		success: function (d) {
			
			if (d.length > 0) {
				$.each(d, function (index, value) {
					var params = '?eventid=' + value.id;
					var htmlEvent = '<div class="col-sm-6 col-lg-3">' +
									'	<div class="card" >' +
									'		<div class="card-img-actions m-1">' +
									'			<a href="' + (goto_participants_page + params) + '">' +
									'				<img class="card-img img-fluid" src="/images/events/' + value.id + '.jpg" />	' +
									'				<div class="card-img-actions-overlay card-img">	</div>' +
									'			</a>' +
									'		</div >' +
									'	</div >' +
									'</div > '

					htmlEventList += htmlEvent;
				 });
			
				
			}
			$('#section_events').html(htmlEventList);
		},
		error: function (xhr, status, error) {
			console.log("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
		}
	});
}