document.addEventListener('DOMContentLoaded', function () {
    const faqBoxes = document.querySelectorAll('.faqbox');

    faqBoxes.forEach(function (faqBox) {
        faqBox.addEventListener('click', function () {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            answer.classList.toggle('show');
            // Calculate the height of the answer element
            const maxHeight = answer.scrollHeight + 'px';
            // Toggle the max-height to reveal or hide the answer
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = maxHeight;
            }
        });
    });
});


const dropdownButton = document.querySelector('.btn');
const dropdownContent = document.querySelector('.dropdown-content');
console.log(dropdownButton, dropdownContent);

dropdownButton.addEventListener('click', function(event) {
    event.stopPropagation();
    dropdownContent.classList.toggle('show');
});

window.addEventListener('click', function(event) {
    if (!event.target.matches('.btn')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
});

dropdownContent.addEventListener('click', function(event) {
    event.stopPropagation();
});


