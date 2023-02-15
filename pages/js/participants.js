

$(function () {
	validate_voter(localStorage.getItem("x"), getUrlParameter('eventid'));

	$("#btn-back").click(function () {
		location.href = goto_prev_page;
	});

	$("#txt-verification-code").html(localStorage.getItem("y") + "<span class='text-muted'>!</span>");

	getParticipantsList(pariticants_list);

	
});

var getUrlParameter = function getUrlParameter(sParam) {
	var sPageURL = window.location.search.substring(1),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
		}
	}
	return false;
};


function validate_voter(voter_id, event_id) {
	var info = {
		vid: voter_id,
		eid: event_id
	};

	
	
	$.ajax({
		type: "POST",
		url: "/Participants/ValidateVoter",
		data: info,
		success: function (d) {
			console.log(d);
			if (d.length > 0) {				
				$(".btn-vote-me").prop('disabled', true);
			
			} else {
				$(".btn-vote-me").prop('disabled', false);
			}

		},
		error: function (xhr, status, error) {
			console.log("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
		}
	});
	
}



function getParticipantsList(d){
	var htmlEParticipantList = "";
	var i = 1;

	$.each(d, function (index, value) {
		
		var htmlEParticipant = '	<div class="card card-body dv-participant">' +
								'	<div class="media"> ' +
								'			<div class="entry_number">' + i + '</div> ' +
								'			<div class="media-body participant_name"> ' +
								'				<h4 class="media-title font-weight-semibold">' + value.participantName +  '</h4> ' +
								'			</div> ' +
								'			<div class="ml-3 align-self-center"> ' +
								'				<button onclick="voteme(' + value.id + ',' + value.eid +');return false;" type="button"  class="btn btn-success rounded-pill btn-vote-me">Vote Me!</button> ' +
						/*		'				<a href="' + goto_survey_page + '" id="btn-vote-me" class="btn btn-success rounded-pill ">Vote Me!</a> ' +*/
								'			</div> ' +
								'		</div > ' +
								'	</div > ';

		htmlEParticipantList += htmlEParticipant;
		i++;
		
	});
	
	$("#section-participants").html(htmlEParticipantList);
	
}

function voteme(pid,eid) {
	var vid = localStorage.getItem("x");

	$(".btn-vote-me").prop('disabled', true);

	var info = {
		vid:vid,
		pid: pid,
		eid: eid,
		isvoted: 1
	}
	
	$.ajax({
		type: "POST",
		url: "/Participants/SaveRecord",
		data: info,
		success: function (response) {
			console.log("sucess");
			location.href = goto_survey_page;
		},
		error: function (xhr, status, error) {
			console.log("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
		}
	});

}
