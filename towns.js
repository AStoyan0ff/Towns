$(document).ready(function() {
	$('#btnDelete').click(deleteTown)
	$('#btnShuffle').click(shuffleTowns);
});

function deleteTown() {
	let townName = $('#townName').val();
	$('#townName').val('');
	let removed = false;
	
	for (let option of $('#towns option')) {
		if (option.textContent == townName) {
			removed = true;
			option.remove();
		}
	}
	if (removed)
		$('#result').text(townName + " deleted.");
	else
		$('#result').text(townName + " not found.");
}

function shuffleTowns() {
    const towns = $('#towns option').toArray();

    $('#towns').empty();
    shuffleTownElements(towns);
    $('#towns').append(towns);
    $('#result').text('Towns shuffled.');

    function shuffleTownElements(townElements) {
        for (let currIdx = townElements.length - 1; currIdx > 0; currIdx--) {
            let randomIdx = Math.floor(Math.random() * (currIdx + 1));
            let oldElement = townElements[currIdx];

            townElements[currIdx] = townElements[randomIdx];
            townElements[randomIdx] = oldElement;
        }
    }
}
