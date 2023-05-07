
// !---------------------------- Greetings on Home -s -----------------------*/


var myDate = new Date(); 
var hrs = myDate.getHours();

var greet;

if (hrs < 12) greet = "Good Morning,";
else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon,";
else if (hrs >= 17 && hrs <= 24) greet = "Good Evening,";

document.querySelector(".greetings").innerHTML = greet;

// !---------------------------- Greetings on Home -e -----------------------*/



// let text = document.getElementById("text2");
// // let m1 = document.getElementById("m1");
// // let m2 = document.getElementById("m2");
// // let m3 = document.getElementById("m3");
// // let m4 = document.getElementById("m4");
// // let m5 = document.getElementById("m5");

// window.addEventListener("scroll", () => {

//     let value = window.scrollY;

//     text.style.marginTop = value * 1.5 + 'px';
//     // m1.style.top = value * 1.5 + 'px';
//     // m4.style.top = value * 1.5 + 'px';
//     // m5.style.right = value * -1.5 + 'px';
//     // m3.style.right = value * -1.5 + 'px';
//     // m2.style.left = value * 1.5 + 'px';

// });






//  Current Navbar Menu-------------

const navLink = document.querySelectorAll('.nav_link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    navLink.forEach(li => {
        li.classList.remove('nav_active');
        document.querySelector('.nav  a[href*= ' + current + ']').classList.add('nav_active');
    });
});









//! --------------preloader---------------

var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    loader.style.display = "none";
});

//! --------------preloader---------------


//! ------------------------------
var typeEffect = new Typed(".moving_txt", {
    strings: ["Binge Watchers !!", "Digital Voyagers !!"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 60,
    backDelay: 100,
});

//! ---------------------------------------