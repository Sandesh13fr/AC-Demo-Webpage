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
            aboutUs: "My Company",
            acquisitionOptions: "Acquisition Options",
            space360: "360 space",
            homeTitle: `Your Dream Car Awaits You`,
            homeSubtitle: "Acting with integrity, a driver of trust",
            homeText: "At Int'l Motor, we offer top-quality vehicles with precision and care. Whether you're buying or selling, our expert team ensures every car meets the highest standards for performance and appearance.",
            buttonText: "Discover our brokerage solutions",
            buttonText2: "Find vehical of your dreams",
            testimonialsTitle: "What our customers are saying about us",
            // aboutHeading: "Integrity and Excellence in all our work.",
            // aboutHeadingText: "Every endeavor at Int'l Motor has been a team-driven journey, where each individual has contributed to our success. Together, we've not only facilitated vehicle acquisitions but also built lasting relationships that define the essence of our business. ",
            whatWeEngaged: "What We Engaged",
            innovativeSolution: "Innovative solution designed to revolutionize the way of acquiring a vehicle",
            dealWithClients: "Deal with Clients",
            happyCustomers: "Happy Customers",
            dealsLocked: "Deals Locked",
            ecoResponsibility: "ECO-RESPONSIBILITY",
            ecoResponsibilityText: "Int'l Motor is an international brokerage company that provides unique vehicle acquisition solutions for personal or professional use.",
            customerRequirements: "CUSTOMER REQUIREMENTS",
            customerRequirementsText: "Our company firmly establishes its narrative through unparalleled brokerage solutions and exclusive client projects, driven by a commitment to Integrity and Excellence.",
            socialJustice: "SOCIAL JUSTICE",
            socialJusticeText: "With its extensive resources, the company is committed to delivering the best acquisition services in the market. Whether you need new or used vehicles, construction or agricultural machinery, utility vehicles, motorcycles, special vehicles, or services for private individuals, Int'l Motor is dedicated to meeting your specific needs.",
            readMore: "Read More"
        },
        fr: {
            aboutUs: "mon entreprise",
            acquisitionOptions: "Options d'Acquisition",
            space360: "Espace 360",
            homeTitle: "Votre voiture de rêve vous attend",
            homeSubtitle: "Agir avec intégrité, moteur de confiance",
            homeText: "Chez Int'l Motor, nous proposons des véhicules de qualité supérieure avec précision et soin. Que vous achetiez ou vendiez, notre équipe d'experts veille à ce que chaque voiture respecte les normes les plus élevées en matière de performances et d'apparence.",
            buttonText: "Découvrez notre courtage solutions",
            buttonText2: "Trouvez le véhicule de vos rêves",
            testimonialsTitle: "Ce que nos clients disent de nous",
            whatWeEngaged: "Ce que nous faisons",
            innovativeSolution: "Solution innovante conçue pour révolutionner la façon d'acquérir un véhicule",
            dealWithClients: "Traiter avec des clients",
            happyCustomers: "Clients Satisfaits",
            dealsLocked: "Accords Conclus",
            ecoResponsibility: "ÉCO-RESPONSABILITÉ",
            ecoResponsibilityText: "Int'l Motor est une société de courtage internationale qui fournit des solutions uniques d'acquisition de véhicules à usage personnel ou professionnel.",
            customerRequirements: "EXIGENCES DES CLIENTS",
            customerRequirementsText: "Notre entreprise établit fermement son récit à travers des solutions de courtage inégalées et des projets exclusifs pour les clients, animée par un engagement envers l'intégrité et l'excellence.",
            socialJustice: "JUSTICE SOCIALE",
            socialJusticeText: "Grâce à ses ressources considérables, l'entreprise s'engage à fournir les meilleurs services d'acquisition sur le marché. Que vous ayez besoin de véhicules neufs ou d'occasion, de machines de construction ou agricoles, de véhicules utilitaires, de motos, de véhicules spéciaux ou de services pour les particuliers, Int'l Motor est dédié à répondre à vos besoins spécifiques.",
            readMore: "En savoir plus"
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