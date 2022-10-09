const wrapper = document.querySelector(".testimonials__wrapper");
const indicators = document.querySelectorAll(".dot");

let currentTestimonial = 0;

indicators.forEach((item, i) => {
    item.addEventListener("click", () => {
        indicators[currentTestimonial].classList.remove("active");
        var oldVisibleCard = document.querySelector('.visible');
        oldVisibleCard.classList.remove('visible');
        wrapper.children[i].classList.add("visible");
        item.classList.add("active");
        currentTestimonial = i;
    })
})