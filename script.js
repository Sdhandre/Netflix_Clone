document.querySelectorAll('.faqbox').forEach(function(item) {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
        
        var answer = this.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
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


