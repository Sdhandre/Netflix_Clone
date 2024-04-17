document.querySelectorAll('.faqbox').forEach(function(item) {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
        
        var answer = this.nextElementSibling;
        if (answer.classList.contains('active')) {
            answer.style.maxHeight = '0';
            setTimeout(() => {
                answer.classList.remove('active');
            }, 200); // Adjust timing to match transition duration
        } else {
            answer.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
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


