






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













// ---------------Animate------------------

window.addEventListener('scroll', () => {
    const skillItems = document.querySelectorAll('.rec_card,.ani1,.ani2,.ani3');

    skillItems.forEach(skill => {

        let skillPosition = skill.getBoundingClientRect().top + 10;
        let screenPosition = window.innerHeight;

        if (skillPosition < screenPosition) {
            skill.classList.add('active');


        } else {
            skill.classList.remove('active');
        }
    });
});



