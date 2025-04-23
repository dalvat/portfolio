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

// modals open consts
const openModalOne = document.querySelector('#openModalOne');
const openModalTwo = document.querySelector('#openModalTwo');
const openModalThree = document.querySelector('#openModalThree');
const openModalFour = document.querySelector('#openModalFour');
const openModalFive = document.querySelector('#openModalFive');
const openModalSix = document.querySelector('#openModalSix');
const openModalSeven = document.querySelector('#openModalSeven');
const openModalEight = document.querySelector('#openModalEight');
const openModalNine = document.querySelector('#openModalNine');
// modal containers consts
const modalContainers = document.querySelectorAll('.modalContainer');
const containerOne = document.querySelector('#modalContainerOne');
const containerTwo = document.querySelector('#modalContainerTwo');
const containerThree = document.querySelector('#modalContainerThree');
const containerFour = document.querySelector('#modalContainerFour');
const containerFive = document.querySelector('#modalContainerFive');
const containerSix = document.querySelector('#modalContainerSix');
const containerSeven = document.querySelector('#modalContainerSeven');
const containerEight = document.querySelector('#modalContainerEight');
const containerNine = document.querySelector('#modalContainerNine');
// modal close consts
const closeModalOne = document.querySelector('#closeModalOne');
const closeModalTwo = document.querySelector('#closeModalTwo');
const closeModalThree = document.querySelector('#closeModalThree');
const closeModalFour = document.querySelector('#closeModalFour');
const closeModalFive = document.querySelector('#closeModalFive');
const closeModalSix = document.querySelector('#closeModalSix');
const closeModalSeven = document.querySelector('#closeModalSeven');
const closeModalEight = document.querySelector('#closeModalEight');
const closeModalNine = document.querySelector('#closeModalNine');
// modal consts
const modalOne = document.querySelector('.modal.one');
const modalTwo = document.querySelector('.modal.two');
const modalThree = document.querySelector('.modal.three');
const modalFour = document.querySelector('.modal.four');
const modalFive = document.querySelector('.modal.five');
const modalSix = document.querySelector('.modal.six');
const modalSeven = document.querySelector('.modal.seven');
const modalEight = document.querySelector('.modal.eight');
const modalNine = document.querySelector('.modal.nine');

// image gallery consts
const imgGal = document.querySelectorAll('#imgGallery');
const prevBtns = document.querySelectorAll('#previousButton');
const nextBtns = document.querySelectorAll('#nextButton');
// image arrays
const modalFourImgs = ['./assets/images/project1.jpeg', './assets/images/project2.jpeg', './assets/images/project3.jpeg'];
const modalFiveImgs = ['./assets/images/project1.jpeg', './assets/images/project2.jpeg', './assets/images/project3.jpeg'];
const modalSixImgs = ['./assets/images/project1.jpeg', './assets/images/project2.jpeg', './assets/images/project3.jpeg'];
const modalSevenImgs = ['./assets/images/project1.jpeg', './assets/images/project2.jpeg', './assets/images/project3.jpeg'];
const modalEightImgs = ['./assets/images/Stokes Bay Memorial - Design Concept Plan.jpg', './assets/images/Stokes Bay Memorial - Schedule.jpg', './assets/images/Stokes Bay Memorial CAD.png'];
const modalNineImgs = ['./assets/images/project1.jpeg', './assets/images/project2.jpeg', './assets/images/project3.jpeg'];
// image gallery variables
let images = [];
let currentIndex = 0;
let currentImg = document.querySelectorAll('#currentImg');

// open modals onclick functions
openModalOne.onclick = () => {
    modalOne.classList.remove('slideout');
    containerOne.classList.add('show');
    modalOne.classList.add('slidein');
}
openModalTwo.onclick = () => {
    modalTwo.classList.remove('slideout');
    containerTwo.classList.add('show');
    modalTwo.classList.add('slidein');
}
openModalThree.onclick = () => {
    modalThree.classList.remove('slideout');
    containerThree.classList.add('show');
    modalThree.classList.add('slidein');
}
openModalFour.onclick = () => {
    modalFour.classList.remove('slideout');
    containerFour.classList.add('show');
    modalFour.classList.add('slidein');
    images = modalFourImgs;
    currentImg.forEach(element => {
        element.src = images[0];
    })
}
openModalFive.onclick = () => {
    modalFive.classList.remove('slideout');
    containerFive.classList.add('show');
    modalFive.classList.add('slidein');
    images = modalFiveImgs;
    currentImg.forEach(element => {
        element.src = images[0];
    })
}
openModalSix.onclick = () => {
    modalSix.classList.remove('slideout');
    containerSix.classList.add('show');
    modalSix.classList.add('slidein');
    images = modalSixImgs;
    currentImg.forEach(element => {
        element.src = images[0];
    })
}
openModalSeven.onclick = () => {
    modalSeven.classList.remove('slideout');
    containerSeven.classList.add('show');
    modalSeven.classList.add('slidein');
    images = modalSevenImgs;
    currentImg.forEach(element => {
        element.src = images[0];
    })
}
openModalEight.onclick = () => {
    modalEight.classList.remove('slideout');
    containerEight.classList.add('show');
    modalEight.classList.add('slidein');
    images = modalEightImgs;
    currentImg.forEach(element => {
        element.src = images[0];
    })
}
openModalNine.onclick = () => {
    modalNine.classList.remove('slideout');
    containerNine.classList.add('show');
    modalNine.classList.add('slidein');
    images = modalNineImgs;
    currentImg.forEach(element => {
        element.src = images[0];
    })
}

// close modals onclick functions
closeModalOne.onclick = () => {
    modalOne.classList.remove('slidein');
    modalOne.classList.add('slideout');
    setTimeout(() => {
        containerOne.classList.remove('show');
    }, 650)
}
closeModalTwo.onclick = () => {
    modalTwo.classList.remove('slidein');
    modalTwo.classList.add('slideout');
    setTimeout(() => {
        containerTwo.classList.remove('show');
    }, 650)
}
closeModalThree.onclick = () => {
    modalThree.classList.remove('slidein');
    modalThree.classList.add('slideout');
    setTimeout(() => {
        containerThree.classList.remove('show');
    }, 650)
}
closeModalFour.onclick = () => {
    modalFour.classList.remove('slidein');
    modalFour.classList.add('slideout');
    setTimeout(() => {
        containerFour.classList.remove('show');
        images = [];
    }, 650)
    currentIndex = 0
}
closeModalFive.onclick = () => {
    modalFive.classList.remove('slidein');
    modalFive.classList.add('slideout');
    setTimeout(() => {
        containerFive.classList.remove('show');
        images = [];
    }, 650)
    currentIndex = 0
}
closeModalSix.onclick = () => {
    modalSix.classList.remove('slidein');
    modalSix.classList.add('slideout');
    setTimeout(() => {
        containerSix.classList.remove('show');
        images = [];
    }, 650)
    currentIndex = 0
}
closeModalSeven.onclick = () => {
    modalSeven.classList.remove('slidein');
    modalSeven.classList.add('slideout');
    setTimeout(() => {
        containerSeven.classList.remove('show');
        images = [];
    }, 650);
    currentIndex = 0
}
closeModalEight.onclick = () => {
    modalEight.classList.remove('slidein');
    modalEight.classList.add('slideout');
    setTimeout(() => {
        containerEight.classList.remove('show');
        images = [];
    }, 650);
    currentIndex = 0
}
closeModalNine.onclick = () => {
    modalNine.classList.remove('slidein');
    modalNine.classList.add('slideout');
    setTimeout(() => {
        containerNine.classList.remove('show');
        images = [];
    }, 650);
    currentIndex = 0
}

// close modal by click outside of modal
modalContainers.forEach(element => {
    element.onclick= () => {
        element.firstElementChild.classList.remove('slidein');
        element.firstElementChild.classList.add('slideout');
        setTimeout(() => {
            element.classList.remove('show');
        }, 650);
        images = [];
        currentIndex = 0
    }
})

// image gallery onclick functions
prevBtns.forEach(prevBtn => {
    prevBtn.onclick = () => {
        currentIndex = (currentIndex + 1 + images.length) % images.length;
        updateImage();
    }
})
nextBtns.forEach(nextBtn => {
    nextBtn.onclick = () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }
})

// update image function
function updateImage() {
    currentImg.forEach(element => {
        element.classList.remove('fadeIn');
        element.classList.add('fadeOut');
        setTimeout(() => {
            element.src = images[currentIndex];
            setTimeout(() => {
                element.classList.remove('fadeOut');
            }, 100);
            element.classList.add('fadeIn')
        }, 400); 
    });
}