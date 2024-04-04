// Navbar pop up
const toggleBtn = document.querySelector('#icon');
const dropDownMenu = document.querySelector('.pop-up');
toggleBtn.addEventListener('click' , function (e) {
    dropDownMenu.classList.toggle('open');
});

// Select flight
const selectButtons = document.querySelectorAll('.selectBtn');
selectButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const submissionSection = document.querySelector('.hidden');
        submissionSection.classList.remove('hidden');
    });
});

const bookedBtn = document.getElementById('booked');
bookedBtn.addEventListener('click', function() {
    const submissionSection = document.querySelector('.hidden');
    submissionSection.classList.add('hidden');
});


