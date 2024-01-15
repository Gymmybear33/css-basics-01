var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var selectModalButtons = document.querySelector('.modal__actions .modal__action--negative')

// console.dir(backdrop);

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    })
};

for (var i = 0; i < selectModalButtons.length; i++) {
    selectModalButtons[i].addEventListener('click', function() {
        modal.style.display = 'none';
        backdrop.style.display = 'none';
    })
}