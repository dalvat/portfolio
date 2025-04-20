// mobile menu toggle
let toggleMenu = document.querySelector('#toggleMenu');
let navbar = document.querySelector('.navbar');

toggleMenu.onclick = () => {
    toggleMenu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// navbar text highlighting when clicking or scrolling
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 200);

    toggleMenu.classList.remove('bx-x');
    navbar.classList.remove('active'); 
};

// typed text in home section
const typed = new Typed('.typedRoles', {
    strings: ['CAD Specialist', '3D Modeler', '3D Visualiser'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// modals
const openModalOne = document.querySelector('#openModalOne');
const openModalTwo = document.querySelector('#openModalTwo');
const openModalThree = document.querySelector('#openModalThree');
const openModalFour = document.querySelector('#openModalFour');
const openModalFive = document.querySelector('#openModalFive');
const openModalSix = document.querySelector('#openModalSix');
const openModalSeven = document.querySelector('#openModalSeven');
const openModalEight = document.querySelector('#openModalEight');
const openModalNine = document.querySelector('#openModalNine');

const containerOne = document.querySelector('#modalContainerOne');
const containerTwo = document.querySelector('#modalContainerTwo');
const containerThree = document.querySelector('#modalContainerThree');
const containerFour = document.querySelector('#modalContainerFour');
const containerFive = document.querySelector('#modalContainerFive');
const containerSix = document.querySelector('#modalContainerSix');
const containerSeven = document.querySelector('#modalContainerSeven');
const containerEight = document.querySelector('#modalContainerEight');
const containerNine = document.querySelector('#modalContainerNine');

const closeModalOne = document.querySelector('#closeModalOne');
const closeModalTwo = document.querySelector('#closeModalTwo');
const closeModalThree = document.querySelector('#closeModalThree');
const closeModalFour = document.querySelector('#closeModalFour');
const closeModalFive = document.querySelector('#closeModalFive');
const closeModalSix = document.querySelector('#closeModalSix');
const closeModalSeven = document.querySelector('#closeModalSeven');
const closeModalEight = document.querySelector('#closeModalEight');
const closeModalNine = document.querySelector('#closeModalNine');

openModalOne.onclick = () => {
    containerOne.classList.add('show');
}
openModalTwo.onclick = () => {
    containerTwo.classList.add('show');
}
openModalThree.onclick = () => {
    containerThree.classList.add('show');
}
openModalFour.onclick = () => {
    containerFour.classList.add('show');
}
openModalFive.onclick = () => {
    containerFive.classList.add('show');
}
openModalSix.onclick = () => {
    containerSix.classList.add('show');
}
openModalSeven.onclick = () => {
    containerSeven.classList.add('show');
}
openModalEight.onclick = () => {
    containerEight.classList.add('show');
}
openModalNine.onclick = () => {
    containerNine.classList.add('show');
}

closeModalOne.onclick = () => {
    containerOne.classList.remove('show');
}
closeModalTwo.onclick = () => {
    containerTwo.classList.remove('show');
}
closeModalThree.onclick = () => {
    containerThree.classList.remove('show');
}
closeModalFour.onclick = () => {
    containerFour.classList.remove('show');
}
closeModalFive.onclick = () => {
    containerFive.classList.remove('show');
}
closeModalSix.onclick = () => {
    containerSix.classList.remove('show');
}
closeModalSeven.onclick = () => {
    containerSeven.classList.remove('show');
}
closeModalEight.onclick = () => {
    containerEight.classList.remove('show');
}
closeModalNine.onclick = () => {
    containerNine.classList.remove('show');
}
