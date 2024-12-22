const hamBargurAnimation = () => {
    var close = document.querySelector("#full i")
    var menu = document.querySelector(".language-opts i")

    var tl = gsap.timeline()
    tl.to("#full", {
        transform: 'translateX(0%)',
        duration: 1,
        opacity: 1
    }, "start")

    tl.from("#full i", {
        scale: 0,
        opacity: 0,
        duration: 0.3
    }, "start")

    tl.pause()

    menu.addEventListener('click', function () {
        tl.play()
    })
    close.addEventListener("click", function () {
        tl.reverse()
    })
}

hamBargurAnimation()

// const languageChangeOnClick = () => {
//     const translations = {
//         en: {
//             heading2: "Drive Your Dreams, Powered by Trust.",
//             heading1: "Your Dream Car <br>Awaits You",
//             paragraph:
//                 "At Int'l Motor, we offer top-quality vehicles with precision and care. Whether you're buying or selling, our expert team ensures every car meets the highest standards for performance and appearance.",
//             button: "Browse",
//         },
//         fr: {
//             heading2: "Conduisez Vos Rêves, Propulsés par la Confiance.",
//             heading1: "Votre Voiture de Rêve <br>Vous Attend",
//             paragraph:
//                 "Chez Int'l Motor, nous offrons des véhicules de haute qualité avec précision et soin. Que vous achetiez ou vendiez, notre équipe d'experts s'assure que chaque voiture respecte les normes les plus élevées en matière de performance et d'apparence.",
//             button: "Explorer",
//         },
//     };

//     function setLanguage(lang) {
//         localStorage.setItem("language", lang); // Save user preference
//         const content = translations[lang];

//         document.querySelector(".center-header1 h2").textContent = content.heading2;
//         document.querySelector(".center-header1 h1").innerHTML = content.heading1;
//         document.querySelector(".center-header1 p").textContent = content.paragraph;
//         document.querySelector(".btnContainer button").textContent = content.button;
//     }

//     const savedLanguage = localStorage.getItem("language") || "en";
//     setLanguage(savedLanguage);

//     // Add click event to change color and set language
//     document.getElementById("eng").addEventListener("click", function () {
//         setLanguage("en");
//         updateSelectedStyle(this); // Highlight selected element
//     });

//     document.getElementById("fre").addEventListener("click", function () {
//         setLanguage("fr");
//         updateSelectedStyle(this); // Highlight selected element
//     });

//     function updateSelectedStyle(selectedElement) {
//         // Reset styles for all language spans
//         document.querySelectorAll(".language-btn").forEach((btn) => {
//             btn.style.color = ""; // Reset text color
//             btn.style.fontWeight = ""; // Reset font weight
//         });

//         // Apply styles to the clicked element
//         selectedElement.style.color = "purple";
//         selectedElement.style.fontWeight = "bold";
//     }
// };

// languageChangeOnClick();

document.addEventListener("DOMContentLoaded", () => {
    const engBtn = document.getElementById("eng");
    const freBtn = document.getElementById("fre");

    // Define translations
    const translations = {
        en: {
            aboutUs: "About Us",
            acquisitionOptions: "Acquisition Options",
            space360: "360 space",
            searchPlaceholder: "Search...",
            homeTitle: `Your Dream Car Awaits You`,
            homeSubtitle: "Acting with integrity, a driver of trust",
            homeText: "At Int'l Motor, we offer top-quality vehicles with precision and care. Whether you're buying or selling, our expert team ensures every car meets the highest standards for performance and appearance.",
            buttonText: "Book Free Consultation",
            testimonialsTitle: "What our customers are saying about us",
            aboutHeading:"Integrity and Excellence in all our work.",
            aboutHeadingText: "Every endeavor at Int'l Motor has been a team-driven journey, where each individual has contributed to our success. Together, we've not only facilitated vehicle acquisitions but also built lasting relationships that define the essence of our business. "
        },
        fr: {
            aboutUs: "À propos de nous",
            acquisitionOptions: "Options d'acquisition",
            space360: "Espace 360",
            searchPlaceholder: "Chercher...",
            homeTitle: "Votre voiture de rêve vous attend",
            homeSubtitle: "Agir avec intégrité, moteur de confiance",
            homeText: "Chez Int'l Motor, nous proposons des véhicules de qualité supérieure avec précision et soin. Que vous achetiez ou vendiez, notre équipe d'experts veille à ce que chaque voiture respecte les normes les plus élevées en matière de performances et d'apparence.",
            buttonText: "Réservez une consultation gratuite",
            testimonialsTitle: "Ce que nos clients disent de nous",
            aboutHeading:"Intégrité et Excellence dans tout notre travail.",
            aboutHeadingText: "Chaque effort chez Int'l Motor a été une aventure collective, où chaque individu a contribué à notre réussite. Ensemble, nous avons non seulement facilité l'acquisition de véhicules, mais également construit des relations durables qui définissent l'essence de notre entreprise."
        }
    };

    // Function to update text
    const updateLanguage = (lang) => {
        document.querySelectorAll("[data-translate]").forEach((el) => {
            const key = el.getAttribute("data-translate");
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        // Update placeholder for search input
        const searchInput = document.getElementById("searchInput");
        if (searchInput) {
            searchInput.placeholder = translations[lang].searchPlaceholder;
        }
    };

    // Event listeners for buttons
    engBtn.addEventListener("click", () => updateLanguage("en"));
    freBtn.addEventListener("click", () => updateLanguage("fr"));
});


const cursorAnimation = () => {
    var cursor = document.querySelector('#cursor');
    var mainBody = document.querySelector("#main");
    mainBody.addEventListener("mousemove", (dets) => {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
            ease: "Power4.out"
        })
    });
    mainBody.addEventListener("mouseenter", (dets) => {
        gsap.to(cursor, {
            scale: 1
        })
    });
    mainBody.addEventListener("mouseleave", (dets) => {
        gsap.to(cursor, {
            scale: 0
        })
    });
}
cursorAnimation();