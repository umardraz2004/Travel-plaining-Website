// Navbar pop up
const toggleBtn = document.querySelector('#icon');
const dropDownMenu = document.querySelector('.pop-up');
toggleBtn.addEventListener('click' , function (e) {
    dropDownMenu.classList.toggle('open');
});

const selectBtn = document.querySelector('.selectBtn');
const hiddenElement = document.querySelector('.hidden');
const bookedBtn = document.getElementById('booked');
selectBtn.addEventListener('click' , function(e) {
    hiddenElement.style.display = 'block';
});
bookedBtn.addEventListener('click', function(e) {
    hiddenElement.style.display = 'none';
});

