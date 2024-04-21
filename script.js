document.querySelectorAll('.faqbox').forEach(function (item) {
    item.addEventListener('click', function () {
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

dropdownButton.addEventListener('click', function (event) {
    event.stopPropagation();
    dropdownContent.classList.toggle('show');
});

window.addEventListener('click', function (event) {
    if (!event.target.matches('.btn')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
});

dropdownContent.addEventListener('click', function (event) {
    event.stopPropagation();
});

document.addEventListener('DOMContentLoaded', function () {
    
  var egetStartedButton = document.getElementById("egetStartedButton");
  if (egetStartedButton) {
      egetStartedButton.addEventListener("click", function () {
          window.location.href = "https://www.netflix.com/in";
      });
  }


  var hindigetStartedButton = document.getElementById("hindigetStartedButton");
  if (hindigetStartedButton) {
      hindigetStartedButton.addEventListener("click", function () {
          window.location.href = "https://www.netflix.com/in-hi/";
      });
  }

  
  var esignInButton = document.getElementById("esignInButton");
  if (esignInButton) {
      esignInButton.addEventListener("click", function () {
          window.location.href = "https://www.netflix.com/login";
      });
  }

 
  var hindisignInButton = document.getElementById("hindisignInButton");
  if (hindisignInButton) {
      hindisignInButton.addEventListener("click", function () {
          window.location.href = "https://www.netflix.com/login";
      });
  }
});

var scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.documentElement.scrollTop > 695
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", function() {
  topFunction();
});

function topFunction() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    
    var scrollStep = Math.round(-currentPosition / 30);
    
    function smoothScroll() {
      if (document.documentElement.scrollTop !== 0 || document.body.scrollTop !== 0) {
        window.scrollBy(0, scrollStep);
        
        requestAnimationFrame(smoothScroll);
      }
    }
    
    smoothScroll();
  }
  
