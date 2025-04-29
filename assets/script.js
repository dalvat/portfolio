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
const openModalTen = document.querySelector('#openModalTen');
const openModalEleven = document.querySelector('#openModalEleven');
const openModalTwelve = document.querySelector('#openModalTwelve');
const openModalThirteen = document.querySelector('#openModalThirteen');
const openModalFourteen = document.querySelector('#openModalFourteen');
const openModalFifteen = document.querySelector('#openModalFifteen');
const openModalSixteen = document.querySelector('#openModalSixteen');
// modal containers consts
const modalContainers = document.querySelectorAll('.modalContainer:not(.preview)');
const containerOne = document.querySelector('#modalContainerOne');
const containerTwo = document.querySelector('#modalContainerTwo');
const containerThree = document.querySelector('#modalContainerThree');
const containerFour = document.querySelector('#modalContainerFour');
const containerFive = document.querySelector('#modalContainerFive');
const containerSix = document.querySelector('#modalContainerSix');
const containerSeven = document.querySelector('#modalContainerSeven');
const containerEight = document.querySelector('#modalContainerEight');
const containerNine = document.querySelector('#modalContainerNine');
const containerTen = document.querySelector('#modalContainerTen');
const containerEleven = document.querySelector('#modalContainerEleven');
const containerTwelve = document.querySelector('#modalContainerTwelve');
const containerThirteen = document.querySelector('#modalContainerThirteen');
const containerFourteen = document.querySelector('#modalContainerFourteen');
const containerFifteen = document.querySelector('#modalContainerFifteen');
const containerSixteen = document.querySelector('#modalContainerSixteen');
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
const closeModalTen = document.querySelector('#closeModalTen');
const closeModalEleven = document.querySelector('#closeModalEleven');
const closeModalTwelve = document.querySelector('#closeModalTwelve');
const closeModalThirteen = document.querySelector('#closeModalThirteen');
const closeModalFourteen = document.querySelector('#closeModalFourteen');
const closeModalFifteen = document.querySelector('#closeModalFifteen');
const closeModalSixteen = document.querySelector('#closeModalSixteen');
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
const modalTen = document.querySelector('.modal.ten');
const modalEleven = document.querySelector('.modal.eleven');
const modalTwelve = document.querySelector('.modal.twelve');
const modalThirteen = document.querySelector('.modal.thirteen');
const modalFourteen = document.querySelector('.modal.fourteen');
const modalFifteen = document.querySelector('.modal.fifteen');
const modalSixteen = document.querySelector('.modal.sixteen');

// image gallery consts
const imgGal = document.querySelectorAll('#imgGallery');
const prevBtns = document.querySelectorAll('#previousButton');
const nextBtns = document.querySelectorAll('#nextButton');
// image arrays
const modalFourImgs = ['./assets/images/estate-map-cad-1.png', './assets/images/estate-map-1.png'];
const modalFiveImgs = ['./assets/images/Stokes Bay Memorial CAD.png', './assets/images/Stokes Bay Memorial - Design Concept Plan.png', './assets/images/Stokes Bay Memorial - Schedule.png'];
const modalSixImgs = ['./assets/images/ownership-breakdown-cad-1.png', './assets/images/ownership-breakdown-1.png'];
const modalSevenImgs = ['./assets/images/acquisition-plan-cad-1.png', './assets/images/acquisition-plan-1.png', './assets/images/acquisition-plan-2.png', './assets/images/acquisition-plan-3.png'];
const modalEightImgs = ['./assets/images/property-comparison-cad-1.png', './assets/images/property-comparison-1.png'];
const modalNineImgs = ['./assets/images/constraints-plan-cad-1.png', './assets/images/constraints-plan-1.png'];
const modalTenImgs = ['./assets/images/facade-blender.png', './assets/images/facade-blender-2.png', './assets/images/facade-ext-1.png', './assets/images/facade-ext-2.png', './assets/images/facade-int-1.png', './assets/images/facade-int-2.png'];
const modalElevenImgs = ['./assets/images/internal-layout-blender-1.png', './assets/images/internal-layout-blender-2.png', './assets/images/internal-layout-1.png', './assets/images/internal-layout-2.png', './assets/images/internal-layout-3.png', './assets/images/internal-layout-4.png'];
const modalTwelveImgs = ['./assets/images/changing-room-blender-1.png', './assets/images/changing-room-blender-2.png', './assets/images/changing-room-1.png', './assets/images/changing-room-2.png'];
const modalThirteenImgs = ['./assets/images/golf-bunkers-blender-1.png', './assets/images/golf-bunkers-blender-2.png', './assets/images/golf-bunkers-1.png', './assets/images/golf-bunkers-2.png', './assets/images/golf-bunkers-3.png'];
const modalFourteenImgs = ['./assets/images/scaffolding-bridge-blender-1.png', './assets/images/scaffolding-bridge-blender-2.png', './assets/images/scaffolding-bridge-1.png', './assets/images/scaffolding-bridge-2.png', './assets/images/scaffolding-bridge-3.png'];
const modalFifteenImgs = ['./assets/images/context-building-blender-1.png', './assets/images/context-building-blender-2.png', './assets/images/context-building-1.png', './assets/images/context-building-2.png', './assets/images/context-building-3.png'];
const modalSixteenImgs = ['./assets/images/roundabout-scene-blender-1.png', './assets/images/roundabout-scene-blender-2.png', './assets/images/roundabout-scene-1.png', './assets/images/roundabout-scene-2.png', './assets/images/roundabout-scene-3.png', './assets/images/roundabout-scene-4.png'];

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
openModalTen.onclick = () => {
    modalTen.classList.remove('slideout');
    containerTen.classList.add('show');
    modalTen.classList.add('slidein');
    images = modalTenImgs;
    currentImg.forEach(element => {
        element.src = images[0];
    })
}
openModalEleven.onclick = () => {
    modalEleven.classList.remove('slideout');
    containerEleven.classList.add('show');
    modalEleven.classList.add('slidein');
    images = modalElevenImgs;
    currentImg.forEach(element => {
        element.src = images[0];
    })
}
openModalTwelve.onclick = () => {
    modalTwelve.classList.remove('slideout');
    containerTwelve.classList.add('show');
    modalTwelve.classList.add('slidein');
    images = modalTwelveImgs;
    currentImg.forEach(element => {
        element.src = images[0];
    })
}
openModalThirteen.onclick = () => {
    modalThirteen.classList.remove('slideout');
    containerThirteen.classList.add('show');
    modalThirteen.classList.add('slidein');
    images = modalThirteenImgs;
    currentImg.forEach(element => {
        element.src = images[0];
    })
}
openModalFourteen.onclick = () => {
    modalFourteen.classList.remove('slideout');
    containerFourteen.classList.add('show');
    modalFourteen.classList.add('slidein');
    images = modalFourteenImgs;
    currentImg.forEach(element => {
        element.src = images[0];
    })
}
openModalFifteen.onclick = () => {
    modalFifteen.classList.remove('slideout');
    containerFifteen.classList.add('show');
    modalFifteen.classList.add('slidein');
    images = modalFifteenImgs;
    currentImg.forEach(element => {
        element.src = images[0];
    })
}
openModalSixteen.onclick = () => {
    modalSixteen.classList.remove('slideout');
    containerSixteen.classList.add('show');
    modalSixteen.classList.add('slidein');
    images = modalSixteenImgs;
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
closeModalTen.onclick = () => {
    modalTen.classList.remove('slidein');
    modalTen.classList.add('slideout');
    setTimeout(() => {
        containerTen.classList.remove('show');
        images = [];
    }, 650);
    currentIndex = 0
}
closeModalEleven.onclick = () => {
    modalEleven.classList.remove('slidein');
    modalEleven.classList.add('slideout');
    setTimeout(() => {
        containerEleven.classList.remove('show');
        images = [];
    }, 650);
    currentIndex = 0
}
closeModalTwelve.onclick = () => {
    modalTwelve.classList.remove('slidein');
    modalTwelve.classList.add('slideout');
    setTimeout(() => {
        containerTwelve.classList.remove('show');
        images = [];
    }, 650);
    currentIndex = 0
}
closeModalThirteen.onclick = () => {
    modalThirteen.classList.remove('slidein');
    modalThirteen.classList.add('slideout');
    setTimeout(() => {
        containerThirteen.classList.remove('show');
        images = [];
    }, 650);
    currentIndex = 0
}
closeModalFourteen.onclick = () => {
    modalFourteen.classList.remove('slidein');
    modalFourteen.classList.add('slideout');
    setTimeout(() => {
        containerFourteen.classList.remove('show');
        images = [];
    }, 650);
    currentIndex = 0
}
closeModalFifteen.onclick = () => {
    modalFifteen.classList.remove('slidein');
    modalFifteen.classList.add('slideout');
    setTimeout(() => {
        containerFifteen.classList.remove('show');
        images = [];
    }, 650);
    currentIndex = 0
}
closeModalSixteen.onclick = () => {
    modalSixteen.classList.remove('slidein');
    modalSixteen.classList.add('slideout');
    setTimeout(() => {
        containerSixteen.classList.remove('show');
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
        if (currentIndex > 0) {
            currentIndex--;
            updateImage();
        };
    }
})
nextBtns.forEach(nextBtn => {
    nextBtn.onclick = () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateImage();
        };
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

//large image preview
const containerLrgImg = document.querySelector('#modalContainerLargeImg');
const modalImg = document.querySelector('.largeImg');
const largeImg = document.querySelector('#largePreview');
const closeModalImg = document.querySelector('#closeLargeImgModal')

currentImg.forEach(img => {
    img.onclick = () => {
        containerLrgImg.classList.add('show');
        modalImg.classList.add('slidein');
        largeImg.src = images[currentIndex];
    }
})

closeModalImg.onclick = () => {
    modalImg.classList.remove('slidein');
    modalImg.classList.add('slideout');
    setTimeout(() => {
        containerLrgImg.classList.remove('show');
    }, 650);
}

containerLrgImg.onclick= () => {
    modalImg.classList.remove('slidein');
    modalImg.classList.add('slideout');
    setTimeout(() => {
        containerLrgImg.classList.remove('show');
    }, 650);
}