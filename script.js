/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});


/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const count =
        +counter.innerText;

        const speed = 100;

        const increment =
        target / speed;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(
                updateCounter,
                20
            );

        }else{

            counter.innerText =
            target;

        }

    };

    updateCounter();

});


/* =========================
   LIGHTBOX GALLERY
========================= */

const galleryImages =
document.querySelectorAll(".gallery img");

const lightbox =
document.querySelector(".lightbox");

const lightboxImg =
document.querySelector(".lightbox-img");

const closeLightbox =
document.querySelector(".close-lightbox");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImg.src =
        img.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", e => {

    if(e.target === lightbox){

        lightbox.classList.remove("active");

    }

});


/* =========================
   SCROLL ANIMATION
========================= */

const hiddenElements =
document.querySelectorAll(
"section, .stat-box"
);

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add(
                "show"
            );

        }

    });

});

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


/* =========================
   BACK TO TOP BUTTON
========================= */

const backToTop =
document.createElement("button");

backToTop.innerHTML =
"↑";

backToTop.classList.add(
"back-to-top"
);

document.body.appendChild(
backToTop
);

window.addEventListener(
"scroll",
() => {

    if(window.scrollY > 400){

        backToTop.classList.add(
            "show-btn"
        );

    }else{

        backToTop.classList.remove(
            "show-btn"
        );

    }

});

backToTop.addEventListener(
"click",
() => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* =========================
   DARK MODE
========================= */

const darkButton =
document.createElement("button");

darkButton.innerHTML =
"🌙";

darkButton.style.position =
"fixed";

darkButton.style.bottom =
"95px";

darkButton.style.right =
"25px";

darkButton.style.width =
"55px";

darkButton.style.height =
"55px";

darkButton.style.border =
"none";

darkButton.style.borderRadius =
"50%";

darkButton.style.cursor =
"pointer";

darkButton.style.zIndex =
"999";

darkButton.style.fontSize =
"20px";

darkButton.style.background =
"#001f54";

darkButton.style.color =
"white";

document.body.appendChild(
darkButton
);

darkButton.addEventListener(
"click",
() => {

    document.body.classList.toggle(
        "dark-mode"
    );

});


/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll(
'nav a'
).forEach(anchor => {

    anchor.addEventListener(
        'click',
        function(e){

            e.preventDefault();

            const target =
            document.querySelector(
                this.getAttribute(
                    'href'
                )
            );

            target.scrollIntoView({

                behavior:'smooth'

            });

        }
    );

});


/* =========================
   FILTER BUTTON EFFECT
========================= */

const filterButtons =
document.querySelectorAll(
".filter-btn"
);

filterButtons.forEach(btn => {

    btn.addEventListener(
        "click",
        () => {

            filterButtons.forEach(
                b => b.classList.remove(
                    "active"
                )
            );

            btn.classList.add(
                "active"
            );

        }
    );

});


/* =========================
   LOADING EFFECT
========================= */

window.addEventListener(
"load",
() => {

    document.body.style.opacity =
    "1";

});
