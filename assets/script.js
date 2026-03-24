document.addEventListener("DOMContentLoaded", () => {
    // mobile menu toggle
    const toggleMenu = document.querySelector("#toggleMenu");
    const navbar = document.querySelector(".navbar");

    if (toggleMenu && navbar) {
        toggleMenu.onclick = () => {
            toggleMenu.classList.toggle("bx-x");
            navbar.classList.toggle("active");
        };
    }

    // navbar text highlighting when clicking or scrolling
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");
    const header = document.querySelector("header");

    window.onscroll = () => {
        sections.forEach((sec) => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navLinks.forEach((links) => {
                    links.classList.remove("active");
                });

                const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (activeLink) activeLink.classList.add("active");
            }
        });

        if (header) {
            header.classList.toggle("sticky", window.scrollY > 200);
        }

        if (toggleMenu && navbar) {
            toggleMenu.classList.remove("bx-x");
            navbar.classList.remove("active");
        }
    };

    // typed text in home section
    if (window.Typed && document.querySelector(".typedRoles")) {
        new Typed(".typedRoles", {
            strings: ["3D Modeler", "3D Visualiser", "CAD Specialist"],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1000,
            loop: true,
        });
    }
    // service lightbox data
    const serviceModal = document.querySelector("#serviceModal");
    const serviceModalIcon = document.querySelector("#serviceModalIcon");
    const serviceModalTitle = document.querySelector("#serviceModalTitle");
    const serviceModalText = document.querySelector("#serviceModalText");
    const serviceModalClose = document.querySelector("#serviceModalClose");

    const openModalOne = document.querySelector("#openModalOne");
    const openModalTwo = document.querySelector("#openModalTwo");
    const openModalThree = document.querySelector("#openModalThree");

    const serviceContent = {
        one: {
            icon: "bx bx-cube-alt",
            title: "3D Modeling",
            text: "My background in CAD provided a natural pathway into 3D modeling, as it led me to explore BIM and 3D modeling through applications like Revit, Navisworks, and 3DS Max.<br><br>As a 3D Modeler, I specialize in creating, modifying, and refining detailed models and assets for large-scale, high-profile projects, including Olympic Games venues. I work with industry-standard tools such as Blender and Unreal Engine to develop accurate and highly detailed 3D environments that support event planning, visualisation, and real-time simulation.<br><br>My strong background in CAD allows me to interpret complex technical drawings and accurately extract key details and dimensions to ensure all modeled elements are modeled and placed with precision. This includes creating internal architectural elements such as walls, doors, floor slabs, ramps, and stairs within existing models to match real-world conditions and design intent.<br><br>I'm proficient at accurately overlaying 2D details within 3D geometry to identify and correct inconsistencies, ensuring models are not only visually realistic but also technically sound. Whether modeling from scratch or refining existing assets, I focus on delivering clean, optimized models that are ready for integration into larger workflows and platforms."
        },
        two: {
            icon: "bx bx-landscape",
            title: "3D Visualisation",
            text: "As a 3D Visualiser, I create high-quality visuals and immersive walkthroughs that bring architectural and design concepts to life. Drawing on my expertise in 3D modeling, CAD and rendering tools, I transform technical drawings and models into compelling visual content that communicates ideas clearly and powerfully.<br><br>I produce still renders and animated walkthrough videos tailored for presentations, planning submissions, client pitches, or marketing materials. My visualisations are designed to reflect real-world materials, lighting, and spatial context - helping clients, stakeholders, and teams better understand and engage with a project long before construction begins.<br><br>Using tools such as Blender, Photoshop and Twinmotion I focus on clarity, realism and atmosphere to ensure each scene accurately represents the intent and quality of the design. Whether for architecture, interiors, or external environments, I deliver visuals that inform, impress, and inspire."
        },
        three: {
            icon: "bx bx-cross",
            title: "CAD Expertise",
            text: "With over 12 years experience working with various CAD applications, my expertise include:<br><br><b>Technical Drawing & Drafting:</b><br>Creation of accurate CAD drawings, including floorplans, lease and ownership plans, M&E layouts, and UK Land Registry-compliant plans to support planning applications.<br><br><b>Surveying & Data Capture:</b><br>Conducting measured building surveys to accurately capture all architectural details and building services, ensuring the production of precise plans that reflect all captured elements.<br><br><b>CAD File Optimisation:</b><br>Streamlining CAD files for improved performance, reviewing and correcting inconstencies.<br><br><b>Technical Support:</b><br>Providing technical support for CAD applications, with hands-on experience in AutoCAD, AutoCAD Map3D and Autodesk Fusion for both drafting and CAD/CAM workflows."
        }
    };

    function openServiceModal(key) {
        if (!serviceModal || !serviceModalIcon || !serviceModalTitle || !serviceModalText) return;

        const data = serviceContent[key];
        if (!data) return;

        serviceModalIcon.className = data.icon;
        serviceModalTitle.textContent = data.title;
        serviceModalText.innerHTML = data.text;

        serviceModal.setAttribute("aria-hidden", "false");
        serviceModal.classList.add("show");
    }

    function closeServiceModal() {
        if (!serviceModal) return;

        serviceModal.setAttribute("aria-hidden", "true");
        serviceModal.classList.remove("show");
    }

    if (openModalOne) {
        openModalOne.onclick = () => openServiceModal("one");
    }

    if (openModalTwo) {
        openModalTwo.onclick = () => openServiceModal("two");
    }

    if (openModalThree) {
        openModalThree.onclick = () => openServiceModal("three");
    }

    if (serviceModalClose) {
        serviceModalClose.onclick = closeServiceModal;
    }

    if (serviceModal) {
        serviceModal.onclick = (event) => {
            if (event.target === serviceModal) {
                closeServiceModal();
            }
        };
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && serviceModal && serviceModal.classList.contains("show")) {
            closeServiceModal();
        }
    });
    // testimonials section
    const testimonials = [
        {
            quote:
                "David produced high-fidelity CAD models and photorealistic renders of our Direct Air Capture system in two contrasting environments. From the first scoping call to final delivery, his work was outstanding. The visuals have given us a much clearer understanding of how the units will integrate into real-world infrastructure, and the roundabout render is now our go-to asset for presentation. He delivered ahead of schedule, responded quickly to feedback, and provided excellent value. We would happily work with him again and recommend him without hesitation.",
            name: "Simon Oliver MEng",
            company: "Air View Engineering Ltd.",
            image: "./assets/images/simon_oliver.jpg",
        },
    ];

    const testimonialsGrid = document.getElementById("testimonialsGrid");

    if (testimonialsGrid) {
        testimonialsGrid.innerHTML = testimonials
            .map(
                (testimonial) => `
                <article class="testimonial-card">
                    <div class="testimonial__avatar">
                        <img src="${testimonial.image}" alt="${testimonial.name}" />
                    </div>

                    <div class="testimonial__content">
                        <p class="testimonial__quote">${testimonial.quote}</p>
                        <div class="testimonial__meta">
                            <h3 class="testimonial__name">${testimonial.name}</h3>
                            <p class="testimonial__company">${testimonial.company}</p>
                        </div>
                    </div>
                </article>
            `
            )
            .join("");
    }

    // portfolio lightbox data
    const portfolioItems = [
        {
            category: "3D Visualisation",
            title: "Roundabout Scene",
            text: "3D visualization of a Direct Air Capture system shown in location next to a typical UK style roundabout.",
            image: "./assets/images/roundabout-scene-1.png",
            chips: ["Visualisation", "Twinmotion", "Debranded"],
            gallery: [
                "./assets/images/roundabout-scene-1.png",
                "./assets/images/roundabout-scene-2.png",
                "./assets/images/roundabout-scene-3.png",
                "./assets/images/roundabout-scene-4.png",
                "./assets/images/roundabout-scene-blender-1.png",
                "./assets/images/roundabout-scene-blender-2.png",
            ],
        },
        {
            category: "3D Modeling",
            title: "Glazed Façade",
            text: "Complete façade of a temporary sports facility accurately modeled using technical drawings as reference.",
            image: "./assets/images/facade-ext-1.png",
            chips: ["Blender", "Façade", "Architectural"],
            gallery: [
                "./assets/images/facade-ext-1.png",
                "./assets/images/facade-ext-2.png",
                "./assets/images/facade-int-1.png",
                "./assets/images/facade-int-2.png",
                "./assets/images/facade-blender.png",
                "./assets/images/facade-blender-2.png",
            ],
        },
        {
            category: "3D Modeling",
            title: "Internal Layout",
            text: "Internal elements added to an existing façade only model using floorplans and cross-sections as reference.",
            image: "./assets/images/internal-layout-2.png",
            chips: ["Blender", "Internal Elements", "3D CAD"],
            gallery: [
                "./assets/images/internal-layout-2.png",
                "./assets/images/internal-layout-1.png",
                "./assets/images/internal-layout-3.png",
                "./assets/images/internal-layout-4.png",
                "./assets/images/internal-layout-blender-1.png",
                "./assets/images/internal-layout-blender-2.png",
            ],
        },
        {
            category: "3D Modeling",
            title: "Changing Room",
            text: "Existing changing room in a stadium modeled in detail using reference images acquired through research.",
            image: "./assets/images/changing-room-1.png",
            chips: ["Blender", "Furniture", "Sports Venue"],
            gallery: [
                "./assets/images/changing-room-1.png",
                "./assets/images/changing-room-2.png",
                "./assets/images/changing-room-blender-1.png",
                "./assets/images/changing-room-blender-2.png",
            ],
        },
        {
            category: "3D Modeling",
            title: "Golf Course",
            text: "Existing topographical landscape model modified to incorporate sand bunkers using a site plan as reference.",
            image: "./assets/images/golf-bunkers-2.png",
            chips: ["Blender", "3D Topography", "Landscape"],
            gallery: [
                "./assets/images/golf-bunkers-2.png",
                "./assets/images/golf-bunkers-1.png",
                "./assets/images/golf-bunkers-3.png",
                "./assets/images/golf-bunkers-blender-1.png",
                "./assets/images/golf-bunkers-blender-2.png",
            ],
        },
        {
            category: "3D Modeling",
            title: "Scaffolding Bridge",
            text: "Highly detailed scaffolding bridge structure and supports created using design drawings as reference.",
            image: "./assets/images/scaffolding-bridge-1.png",
            chips: ["Blender", "Structure", "Sports Venue"],
            gallery: [
                "./assets/images/scaffolding-bridge-1.png",
                "./assets/images/scaffolding-bridge-2.png",
                "./assets/images/scaffolding-bridge-3.png",
                "./assets/images/scaffolding-bridge-blender-1.png",
                "./assets/images/scaffolding-bridge-blender-2.png",
            ],
        },
        {
            category: "3D Modeling",
            title: "Context Building",
            text: "School buildings added to sports venue model to provide valuable context, created from limited reference images.",
            image: "./assets/images/context-building-1.png",
            chips: ["Blender", "Context", "Sports Venue"],
            gallery: [
                "./assets/images/context-building-1.png",
                "./assets/images/context-building-2.png",
                "./assets/images/context-building-3.png",
                "./assets/images/context-building-blender-1.png",
                "./assets/images/context-building-blender-2.png",
            ],
        },
        {
            category: "2D CAD",
            title: "Building Estate",
            text: "Large-format estate map created from GIS and CAD data for planning and estate management.",
            image: "./assets/images/estate-map-1.png",
            chips: ["2D Drafting", "GIS", "Mapping"],
            gallery: [
                "./assets/images/estate-map-1.png",
                "./assets/images/estate-map-cad-1.png",
            ],
        },
        {
            category: "2D CAD",
            title: "Stokes Bay Memorial",
            text: "Planning application drawings showing memorial placement, orientation, and site relationship.",
            image: "./assets/images/Stokes Bay Memorial - Design Concept Plan.png",
            chips: ["2D Drafting", "Mapping", "Planning"],
            gallery: [
                "./assets/images/Stokes Bay Memorial - Design Concept Plan.png",
                "./assets/images/Stokes Bay Memorial - Schedule.png",
                "./assets/images/Stokes Bay Memorial CAD.png",
            ],
        },
        {
            category: "2D CAD",
            title: "Ownership Breakdown",
            text: "Plan showing details of land sold since acquisition and the land within the organisation's control.",
            image: "./assets/images/ownership-breakdown-1.png",
            chips: ["2D Drafting", "Ownership", "Historical"],
            gallery: [
                "./assets/images/ownership-breakdown-1.png",
                "./assets/images/ownership-breakdown-cad-1.png",
            ],
        },
        {
            category: "2D CAD",
            title: "Acquisition Plan",
            text: "Detailed acquisition plan showing how a site was acquired over more than a 100 year period.",
            image: "./assets/images/acquisition-plan-1.png",
            chips: ["2D Drafting", "Acquisition", "Historical"],
            gallery: [
                "./assets/images/acquisition-plan-1.png",
                "./assets/images/acquisition-plan-2.png",
                "./assets/images/acquisition-plan-3.png",
                "./assets/images/acquisition-plan-cad-1.png",
            ],
        },
        {
            category: "2D CAD",
            title: "Property Comparison",
            text: "Comparison drawing prepared to show similarities between two properties identified for strategic acquisition.",
            image: "./assets/images/property-comparison-1.png",
            chips: ["2D Drafting", "Comparison", "Planning"],
            gallery: [
                "./assets/images/property-comparison-1.png",
                "./assets/images/property-comparison-cad-1.png",
            ],
        },
        {
            category: "2D CAD",
            title: "Constraints Plan",
            text: "Ownership plan produced to detail legal constraints and obligations associated with the land in question.",
            image: "./assets/images/constraints-plan-1.png",
            chips: ["2D Drafting", "Ownership", "Constraints"],
            gallery: [
                "./assets/images/constraints-plan-1.png",
                "./assets/images/constraints-plan-cad-1.png",
            ],
        },
    ];

    const grid = document.getElementById("portfolioGrid");
    const lightbox = document.getElementById("lightbox");
    const lightboxBackdrop = document.getElementById("lightboxBackdrop");
    const lightboxClose = document.getElementById("lightboxClose");
    const lightboxPrev = document.getElementById("lightboxPrev");
    const lightboxNext = document.getElementById("lightboxNext");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxTitle = document.getElementById("lightboxTitle");
    const lightboxText = document.getElementById("lightboxText");

    if (grid && lightbox && lightboxBackdrop && lightboxClose && lightboxPrev && lightboxNext && lightboxImage && lightboxTitle && lightboxText) {
        const state = {
            itemIndex: 0,
            imageIndex: 0,
            focusReturn: null,
        };

        grid.innerHTML = portfolioItems
            .map(
                (item, index) => `
                <button class="portfolio-card" type="button" data-index="${index}" aria-label="Open ${item.title}">
                    <img class="portfolio-card__image" src="${item.image}" alt="${item.title}" loading="lazy" />
                    <div class="portfolio-card__body">
                        <span class="portfolio-card__category">${item.category}</span>
                        <h3 class="portfolio-card__title">${item.title}</h3>
                        <p class="portfolio-card__text">${item.text}</p>
                        <div class="portfolio-card__chips">
                            ${item.chips.map((chip) => `<span class="portfolio-chip">${chip}</span>`).join("")}
                        </div>
                    </div>
                </button>
            `
            )
            .join("");

        const getItem = () => portfolioItems[state.itemIndex];

        const renderLightbox = () => {
            const item = getItem();
            const image = item.gallery[state.imageIndex];

            lightboxImage.src = image;
            lightboxImage.alt = `${item.title} image ${state.imageIndex + 1} of ${item.gallery.length}`;
            lightboxTitle.textContent = item.title;
            lightboxText.textContent = item.text;

            const hasMultiple = item.gallery.length > 1;
            lightboxPrev.style.display = hasMultiple ? "" : "none";
            lightboxNext.style.display = hasMultiple ? "" : "none";
        };

        const openLightbox = (index) => {
            state.itemIndex = index;
            state.imageIndex = 0;
            state.focusReturn = document.activeElement;

            renderLightbox();
            lightbox.classList.add("is-open");
            lightbox.setAttribute("aria-hidden", "false");
            document.body.classList.add("lightbox-open");

            lightboxClose.focus();
        };

        const closeLightbox = () => {
            lightbox.classList.remove("is-open");
            lightbox.setAttribute("aria-hidden", "true");
            document.body.classList.remove("lightbox-open");

            if (state.focusReturn && typeof state.focusReturn.focus === "function") {
                state.focusReturn.focus();
            }
        };

        const nextImage = () => {
            const item = getItem();
            if (item.gallery.length <= 1) return;
            state.imageIndex = (state.imageIndex + 1) % item.gallery.length;
            renderLightbox();
        };

        const prevImage = () => {
            const item = getItem();
            if (item.gallery.length <= 1) return;
            state.imageIndex = (state.imageIndex - 1 + item.gallery.length) % item.gallery.length;
            renderLightbox();
        };

        grid.addEventListener("click", (event) => {
            const card = event.target.closest(".portfolio-card");
            if (!card) return;
            openLightbox(Number(card.dataset.index));
        });

        lightboxBackdrop.addEventListener("click", closeLightbox);
        lightboxClose.addEventListener("click", closeLightbox);
        lightboxNext.addEventListener("click", nextImage);
        lightboxPrev.addEventListener("click", prevImage);

        document.addEventListener("keydown", (event) => {
            if (!lightbox.classList.contains("is-open")) return;

            if (event.key === "Escape") closeLightbox();
            if (event.key === "ArrowRight") nextImage();
            if (event.key === "ArrowLeft") prevImage();
        });

        let touchStartX = 0;

        lightbox.addEventListener(
            "touchstart",
            (e) => {
                touchStartX = e.changedTouches[0].screenX;
            },
            { passive: true }
        );

        lightbox.addEventListener(
            "touchend",
            (e) => {
                const touchEndX = e.changedTouches[0].screenX;
                const delta = touchEndX - touchStartX;

                if (Math.abs(delta) < 50) return;
                if (delta < 0) nextImage();
                else prevImage();
            },
            { passive: true }
        );
    }
});