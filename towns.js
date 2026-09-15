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
        $('#result').text(townName + ' deleted.');

    else
        $('#result').text(townName + ' not found.');
    
}

function addTown() {
    const townName = $('#townNameForAdd').val();

    $('#townNameForAdd').val('');
    $('#towns').append($('<option>').text(townName));
    $('#result').text(townName + ' added.');
}

function shuffleTowns() {
    const towns = $('#towns option').toArray();

    $('#towns').empty();
    shuffleTownElements(towns);
    $('#towns').append(towns);
    $('#result').text('Towns shuffled.');

    function shuffleTownElements(townElements) {
        for (let currIdx = townElements.length - 1; currIdx > 0; currIdx--) {
            const randomIdx = Math.floor(Math.random() * (currIdx + 1));
            const oldElement = townElements[currIdx];

            townElements[currIdx] = townElements[randomIdx];
            townElements[randomIdx] = oldElement;
        }
    }
}