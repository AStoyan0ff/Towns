$(document).ready(function() {
    $('#btnDelete').click(deleteTown);
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

    if (removed) {
        showMessage(townName + ' deleted.');

    } else {
        showMessage(townName + ' not found.');
    }
}

function showMessage(message) {
    $('#result').text(message).css('display', 'block');

    setTimeout(function() {
        $('#result').hide('blind', {}, 500);

    }, 3000);
}