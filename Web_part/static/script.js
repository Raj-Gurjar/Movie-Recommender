
// !---------------------------- Greetings on Home -s -----------------------*/


var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12) greet = "Good Morning,";
else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon,";
else if (hrs >= 17 && hrs <= 24) greet = "Good Evening,";

document.querySelector(".greetings").innerHTML = greet;

// !---------------------------- Greetings on Home -e -----------------------*/









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


// --------------------------------------------

// Select all card elements
const cards = document.querySelectorAll('.carda');

// Loop through each card and add the "animate__fadeInUp" class to animate them
cards.forEach((card) => {
    card.classList.add('animate__fadeInUp');
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







//! --------------srch bar----------------



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




//! ----------Auto Complete-------

var searchTerms =
    ["Avatar", "Pirates of the Caribbean: At World's End", "Spectre", "The Dark Knight Rises", "John Carter", "Spider-Man 3", "Tangled", "Avengers: Age of Ultron", "Harry Potter and the Half-Blood Prince", "Batman v Superman: Dawn of Justice", "Superman Returns", "Quantum of Solace", "Pirates of the Caribbean: Dead Man's Chest", "The Lone Ranger", "Man of Steel", "The Chronicles of Narnia: Prince Caspian", "The Avengers", "Pirates of the Caribbean: On Stranger Tides", "Men in Black 3", "The Hobbit: The Battle of the Five Armies", "The Amazing Spider-Man", "Robin Hood", "The Hobbit: The Desolation of Smaug", "The Golden Compass", "King Kong", "Titanic", "Captain America: Civil War", "Battleship", "Jurassic World", "Skyfall", "Spider-Man 2", "Iron Man 3", "Alice in Wonderland", "X-Men: The Last Stand", "Monsters University", "Transformers: Revenge of the Fallen", "Transformers: Age of Extinction", "Oz: The Great and Powerful", "The Amazing Spider-Man 2", "TRON: Legacy", "Cars 2", "Green Lantern", "Toy Story 3", "Terminator Salvation", "Furious 7", "World War Z", "X-Men: Days of Future Past", "Star Trek Into Darkness", "Jack the Giant Slayer", "The Great Gatsby", "Prince of Persia: The Sands of Time", "Pacific Rim", "Transformers: Dark of the Moon", "Indiana Jones and the Kingdom of the Crystal Skull", "The Good Dinosaur", "Brave", "Star Trek Beyond", "WALL·E", "Rush Hour 3", "2012", "A Christmas Carol", "Jupiter Ascending", "The Legend of Tarzan", "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", "X-Men: Apocalypse", "The Dark Knight", "Up", "Monsters vs Aliens", "Iron Man", "Hugo", "Wild Wild West", "The Mummy: Tomb of the Dragon Emperor", "Suicide Squad", "Evan Almighty", "Edge of Tomorrow", "Waterworld", "G.I. Joe: The Rise of Cobra", "Inside Out", "The Jungle Book", "Iron Man 2", "Snow White and the Huntsman", "Maleficent", "Dawn of the Planet of the Apes", "The Lovers", "47 Ronin", "Captain America: The Winter Soldier", "Shrek Forever After", "Tomorrowland", "Big Hero 6", "Wreck-It Ralph", "The Polar Express", "Independence Day: Resurgence", "How to Train Your Dragon", "Terminator 3: Rise of the Machines", "Guardians of the Galaxy", "Interstellar", "Inception", "Shin Godzilla", "The Hobbit: An Unexpected Journey", "The Fast and the Furious", "The Curious Case of Benjamin Button", "X-Men: First Class", "The Hunger Games: Mockingjay - Part 2", "The Sorcerer's Apprentice", "Poseidon", "Alice Through the Looking Glass", "Shrek the Third", "Warcraft", "Terminator Genisys", "The Chronicles of Narnia: The Voyage of the Dawn Treader", "Pearl Harbor", "Transformers", "Alexander", "Harry Potter and the Order of the Phoenix", "Harry Potter and the Goblet of Fire", "Hancock", "I Am Legend", "Charlie and the Chocolate Factory", "Ratatouille", "Batman Begins", "Madagascar: Escape 2 Africa", "Night at the Museum: Battle of the Smithsonian", "X-Men Origins: Wolverine", "The Matrix Revolutions", "Frozen", "The Matrix Reloaded"]

$(function () {
    $("#search-input").autocomplete({
        source: searchTerms
    });
});

//! ----------------------------


