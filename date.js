const numberContainer = document.querySelector('.container-btn');
const rateNumber = document.querySelector('.rate-number');
const btnSubmit = document.querySelector('.button-submit');
const ratenState = document.querySelector('.section-1');
const tankState = document.querySelector('.section-2');

numberContainer.addEventListener('click', event => {
    const numberSelected = event.target.innerText;
    rateNumber.innerText = numberSelected
    if(numberSelected > 0 || numberSelected <= 5) {
        btnSubmit.addEventListener('click', () => {
            ratenState.style.display = 'none';
            tankState.style.display = 'flex';
        })
    }
})

