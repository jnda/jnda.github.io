/* JavaScript for the dropdown menu */
var dropdowns = document.querySelectorAll(".dropdown");
for (var i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener("click", function() {
    this.querySelector(".dropdown-content").classList.toggle("show");
  });
}
window.onclick = function(event) {
  if (!event.target.matches(".dropdown")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

var slides = document.querySelectorAll(".slide");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

// accordion
// Get all the accordion items
const accordionItems = document.querySelectorAll('.accordion-item');

// Add event listeners to each accordion item
accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    // Toggle the active class on the accordion item
    item.classList.toggle('active');

    // Toggle the accordion icon
    const icon = header.querySelector('.accordion-icon');
    icon.classList.toggle('active');
  });
});

