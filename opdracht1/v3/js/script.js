// De parameter geeft de btn door aan de functie
function changeText(btn) {
    // Als de waarde gelijk is aan "Add to list",
    if (btn.value === 'Add to list') {
        // veranderd de tekst naar "Added to list!"
        btn.value = 'Added to list!';
        // Het icoon en de tekst wordt geselecteerd met innerHTML, het hartje is hier ingevuld
        btn.innerHTML = '<i class="fas fa-heart"></i>Added to list!';
    } else {
        // Anders wordt de waarde vervangen door 'Add to list' en het hartje is niet ingevuld
        btn.value = 'Add to list';
        btn.innerHTML = '<i class="far fa-heart"></i>Add to list';
    }
}

// Door de querySelectorAll wordt de button geselecteerd
// forEach zorgt ervoor dat elke button één keer de functie uitvoerd
document.querySelectorAll('button').forEach((btn) => btn.addEventListener('click', function () {
    changeText(btn);
}));
