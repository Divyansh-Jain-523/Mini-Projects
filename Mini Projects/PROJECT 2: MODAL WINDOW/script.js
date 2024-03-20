'use strict'

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');


const showModalFunction = function () {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
}

const closeModalFunction = function () {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
}
for(let i = 0 ; i < showModal.length ; i++)
    showModal[i].addEventListener('click',showModalFunction);

closeModal.addEventListener('click',closeModalFunction);
overlay.addEventListener('click',closeModalFunction);
document.addEventListener('keydown',(e) => {//document is used here so that eventlistner will added to each and every element in document;
    if(e.key === 'Escape' && !(modal.classList.contains('hidden'))) closeModalFunction();
    console.log(e.key);
});
// key up triggers function after release of key and makes sure that function execute only once
// keydown triggers function whenever any key is pressed a nd in some keyboard keydown and keypress works as same
// key press triggers function until key any key is pressed, it triggers until keys are pressed


// do
console.log(closeModal);