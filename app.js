const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const wrap = document.querySelectorAll(".wrap");

// Clicking the hamburger button will open the side navigation
openBtn.addEventListener('click', function() {
    for (let i = 0; i < wrap.length; i++) {
        wrap[i].classList.add('visible');
    }
});

// Clicking the close button will close the side navigation
closeBtn.addEventListener('click', function() {
    for (let i = 0; i < wrap.length; i++) {
        wrap[i].classList.remove('visible');
    }
});