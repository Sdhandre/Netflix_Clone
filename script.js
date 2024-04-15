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


