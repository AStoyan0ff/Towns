$(document).ready(function() {
    $('#btnDelete').click(deleteTown);
    $('#btnAdd').click(addTown);
    $('#btnShuffle').click(shuffleTowns);
});

function deleteTown() {
    const townName = $('#townName').val();
    $('#townName').val('');
    let removed = false;

    for (const option of $('#towns option')) {

        if (option.textContent === townName) {
            removed = true;
            option.remove();
        }
    }

    if (removed)
        showMessage(townName + ' deleted.');
    else
        showMessage(townName + ' not found.');
    
}

function addTown() {
    const townName = $('#townNameForAdd').val();

    $('#townNameForAdd').val('');
    $('#towns').append($('<option>').text(townName));
    showMessage(townName + ' added.');
}

function shuffleTowns() {
    const towns = $('#towns option').toArray();

    $('#towns').empty();
    shuffleTownElements(towns);
    $('#towns').append(towns);
    showMessage('Towns shuffled.');

    function shuffleTownElements(townElements) {
		
        for (let currIdx = townElements.length - 1; currIdx > 0; currIdx--) {
            const randomIdx = Math.floor(Math.random() * (currIdx + 1));
            const oldElement = townElements[currIdx];

            townElements[currIdx] = townElements[randomIdx];
            townElements[randomIdx] = oldElement;
        }
    }
}

function showMessage(message) {
    $('#result').text(message).css('display', 'block');

    setTimeout(function() {
        $('#result').hide('blind', {}, 500);
    }, 3000);
}