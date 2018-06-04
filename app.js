function addAccusation() {
    var accusation;
    var i = 1
    while (i<=100) {
        accusation += `<h3>Accusation ${i}</h3>`;
        i++;
    }
    $('body').append(accusation);
}

addAccusation()