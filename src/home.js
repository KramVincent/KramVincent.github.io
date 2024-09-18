// // Wait for DOM content to load
// document.addEventListener("DOMContentLoaded", function() {
//     // Select all skill bars
//     const skillBars = document.querySelectorAll('.skill-bar');

//     // Loop through each skill bar and apply the width animation
//     skillBars.forEach(bar => {
//         const skillPercentage = bar.getAttribute('data-skill');
//         bar.style.setProperty('--skill-width', skillPercentage);
//     });
// });


// const loader = document.querySelector('.loader');
// const textArray = ["F", "Fr", "fro", "fron", "front", "fronte", "fronten", "frontend", "frontend d", "frontend developer"];
// let index = 0;

// function animateText() {
//   loader.textContent = textArray[index];
//   index = (index + 1) % textArray.length;
//   setTimeout(animateText, 120);
// }

// animateText();