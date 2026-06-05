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

darkButton.innerHTML = "🌙";

darkButton.classList.add("back-to-top");

darkButton.style.bottom = "95px";

document.body.appendChild(
darkButton
);

/* cek mode sebelumnya */

if(
localStorage.getItem("darkmode")
=== "on"
){

document.body.classList.add(
"dark-mode"
);

darkButton.innerHTML = "☀️";

}

darkButton.addEventListener(
"click",
() => {

document.body.classList.toggle(
"dark-mode"
);

if(
document.body.classList.contains(
"dark-mode"
)
){

localStorage.setItem(
"darkmode",
"on"
);

darkButton.innerHTML = "☀️";

}else{

localStorage.removeItem(
"darkmode"
);

darkButton.innerHTML = "🌙";

}

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
