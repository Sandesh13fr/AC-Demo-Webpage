/**
 * Main JavaScript file for car dealership website
 * Handles animations, language switching, search functionality, and UI interactions
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import "swiper/css";
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';


/**
 * Handles the hamburger menu animation using GSAP
 * Creates a sliding animation for the menu and handles open/close events
 */
const hamBargurAnimation = () => {
    var close = document.querySelector("#full i");
    var menu = document.querySelector(".language-opts i");

    var tl = gsap.timeline();
    // Animate menu sliding in from the side
    tl.to("#full", {
        transform: 'translateX(0%)',
        duration: 1,
        opacity: 1
    }, "start");

    // Animate close icon appearing
    tl.from("#full i", {
        scale: 0,
        opacity: 0,
        duration: 0.3
    }, "start");

    tl.pause();

    // Toggle menu open
    menu.addEventListener('click', function () {
        tl.play();
    });

    // Toggle menu close
    close.addEventListener("click", function () {
        tl.reverse();
    });
};

hamBargurAnimation();

/**
 * Initializes language switching functionality
 * Contains translations for English and French
 * Updates UI text based on selected language
 */
document.addEventListener("DOMContentLoaded", () => {
    const engBtn = document.getElementById("eng");
    const freBtn = document.getElementById("fre");

    // Translation objects for English and French
    const translations = {
        en: {
            // English translations
            aboutUs: "My Company",
            acquisitionOptions: "Acquisition Options",
            space360: "360 space",
            homeTitle: `Your Dream Car Awaits You`,
            homeSubtitle: "Acting with integrity, a driver of trust",
            homeText: "At Int'l Motor, we offer top-quality vehicles with precision and care. Whether you're buying or selling, our expert team ensures every car meets the highest standards for performance and appearance.",
            buttonText: "Discover our brokerage solutions",
            buttonText2: "Find vehical of your dreams",
            testimonialsTitle: "What our customers are saying about us",
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
            readMore: "Read More",
            title: "Services We Offer",
            description: "Offering top-quality products, expert guidance, and reliable after-sales support, we ensure a seamless and satisfying dealership experience.",
            card_1_title: "Car Dealership",
            card_1_description: "Find the perfect vehicle for your needs with our wide selection of new and used cars.",
            card_2_title: "Legal",
            card_2_description: "Protect your organization, devices, and stay compliant with our structured workflows and custom permissions.",
            card_3_title: "Business Automation",
            card_3_description: "Auto-assign tasks, send Slack messages, and much more with hundreds of new templates to help you get started.",
            card_4_title: "Car Maintenance",
            card_4_description: "Keep your car in perfect condition with our comprehensive maintenance services.",
            card_5_title: "Special Offers",
            card_5_description: "Avail exciting discounts and exclusive deals on our car services.",
            card_6_title: "Customer Support",
            card_6_description: "Experience top-notch support for all your dealership and service-related queries.",
            find_what_drives_you: "Find what drives you..?",
            testimonials_heading: " What People Are Saying About Us",
            get_in_touch: "Get in touch",
            fill_form: "Fill in the form to start a conversation",
            your_address: "your Address",
            phone_number: "123456789",
            email: "intlmotor.dircom@outlook.com",
            full_name: "Full name",
            email_address: "Email address",
            message: "Message",
            submit: "Submit",
            footerDescription1: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
            footerDescription2: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            footerContactPhone: "Phone:",
            footerContactEmail: "Email:",
            footerContactAddress: "Address:",
            footerSocialTitle: "Social",
            footerSocialDescription: "Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken spare ribs salami.",
            footerCopyright: "© 2020 Lorem Inc. All rights reserved.",
            footerEmail: "email@mail.com",
        },
        fr: {
            // French translations
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
            readMore: "En savoir plus",
            title: "Servicios que ofrecemos",
            description: "Ofrecemos productos de alta calidad, asesoramiento experto y soporte postventa confiable para garantizar una experiencia satisfactoria.",
            card_1_title: "Concesionario de Autos",
            card_1_description: "Encuentra el vehículo perfecto para tus necesidades con nuestra amplia selección de autos nuevos y usados.",
            card_2_title: "Legal",
            card_2_description: "Protege tu organización, dispositivos y mantente conforme con nuestros flujos de trabajo estructurados y permisos personalizados.",
            card_3_title: "Automatización Empresarial",
            card_3_description: "Asigna tareas automáticamente, envía mensajes de Slack y mucho más con cientos de nuevas plantillas para comenzar.",
            card_4_title: "Mantenimiento de Autos",
            card_4_description: "Mantén tu automóvil en perfecto estado con nuestros servicios de mantenimiento integrales.",
            card_5_title: "Ofertas Especiales",
            card_5_description: "Aprovecha descuentos emocionantes y ofertas exclusivas en nuestros servicios de autos.",
            card_6_title: "Atención al Cliente",
            card_6_description: "Disfruta de soporte de primer nivel para todas tus consultas relacionadas con concesionarios y servicios.",
            find_what_drives_you: "Trouvez ce qui vous motive..?",
            testimonials_heading: "Ce Que Les Gens Disent De Nous",
            get_in_touch: "Prenez contact",
            fill_form: "Remplissez le formulaire pour commencer une conversation",
            your_address: "votre adresse",
            phone_number: "123456789",
            email: "intlmotor.dircom@outlook.com",
            full_name: "Nom complet",
            email_address: "Adresse e-mail",
            message: "Message",
            submit: "Soumettre",
            footerDescription1: "Sed ut perspiciatis unde omnis iste natus error accusantium doloremque laudantium, totam rem aperiam.",
            footerDescription2: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            footerContactPhone: "Téléphone :",
            footerContactEmail: "Courriel :",
            footerContactAddress: "Adresse :",
            footerSocialTitle: "Social",
            footerSocialDescription: "Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken spare ribs salami.",
            footerCopyright: "© 2020 Lorem Inc. Tous droits réservés.",
            footerEmail: "email@mail.com",
        }
    };

    // Function to update text based on selected language
    const updateLanguage = (lang) => {
        document.querySelectorAll("[data-translate]").forEach((el) => {
            const key = el.getAttribute("data-translate");
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    };

    // Attach language switch event listeners
    engBtn.addEventListener("click", () => updateLanguage("en"));
    freBtn.addEventListener("click", () => updateLanguage("fr"));
});

/**
 * Initializes Swiper carousel with autoplay functionality
 */
const swiperContainer = () => {
    const swiper = new Swiper('.swiper', {
        modules: [Autoplay],
        loop: true,
        autoplay: {
            delay: 3100,
            disableOnInteraction: false,
        },
    });
};

swiperContainer();

/**
 * Handles the initial page loader animation and scroll animations
 * Uses GSAP for smooth transitions and scroll-triggered animations
 */
const loaderAnimation = () => {
    window.addEventListener("load", () => {
        // Initial loader animation sequence
        let tl = gsap.timeline();
        tl.to("#loader img", {
            opacity: 1,
            duration: 1,
            ease: "power4.in"
        }, "start");
        tl.to("#loader img", {
            opacity: 0,
            duration: 1,
            ease: "power4.in"
        }, "start+=1");
        tl.to(".counter span", {
            color: "white",
            opacity: 0,
            duration: 1,
            ease: "power4.in"
        }, "start+=2")
            .to("#loader", {
                opacity: 0,
                duration: 1,
                ease: "power4.in"
            }, "start+=2")
            .to("#loader", {
                display: "none",
                duration: 1,
                ease: "power4.in"
            }, "start+=2");
        tl.from("header", {
            y: -100,
            opacity: 0,
            duration: 0.5,
            ease: "power4.out"
        })
            .from(".page1", {
                y: 100,
                duration: 0.5,
                ease: "power4.out",
                opacity: 0,
            })
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".page2",
                scroller: "body",
                markers: false,
                start: "top 70%",
                end: "top 40%",
                scrub: 2,
            }
        })
        tl2.from(".page2", {
            opacity: 0,
            y: 50,
            duration: 0.5,
            ease: "power4.out"
        })
        tl2.from(".para", {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power4.out",
            stagger: 0.2
        })
        tl2.from(".imgContainer div", {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power4.out",
            stagger: 0.4
        })
        var tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".page3",
                scroller: "body",
                markers: false,
                start: "top 60%",
                end: "top 40%",
                scrub: 2,
            }
        })
        tl3.from(".page3 div", {
            opacity: 0,
            y: 50,
            duration: 0.5,
            ease: "power4.out",
            stagger: 0.4
        })
        var tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".page4",
                scroller: "body",
                markers: false,
                start: "top 60%",
                end: "top 30%",
                scrub: 2,
            }
        })
        tl4.from(".page4,#user-cards,#show-more-btn", {
            opacity: 0,
            y: 50,
            duration: 0.5,
            ease: "power4.out",
            stagger: 0.4
        })
        var tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: ".page5",
                scroller: "body",
                markers: false,
                start: "top 60%",
                end: "top 40%",
                scrub: 2,
            }
        })
        tl5.from(".h1,.testimoinal-card>div", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power4.out",
            stagger: 0.4
        })
    })
    const numberElement = document.querySelector('.counter .number');
    const targetCount = 100;
    function updateCounter() {
        let currentCount = 0;
        const interval = setInterval(() => {
            if (currentCount <= targetCount) {
                numberElement.textContent = currentCount;
                currentCount = currentCount + 7;
            } else {
                clearInterval(interval);
            }
        }, 200);
    }
    updateCounter();
};

loaderAnimation();

/**
 * Handles the car search functionality
 * Fetches car data from API, renders cards, and handles search filtering
 */
const searchFunctionality = () => {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-bar");
    const userCardsContainer = document.getElementById("user-cards");
    const userCardTemplate = document.getElementById("user-card-template");
    const showMoreBtn = document.getElementById("show-more-btn");

    let cars = [];
    let displayedCarsCount = 6; // Initial number of displayed cars

    /**
     * Fetches car data from the API
     * @returns {Promise<void>}
     */
    async function fetchCars() {
        try {
            const response = await fetch("https://api.jsonbin.io/v3/b/676910e6ad19ca34f8df9271", {
                method: "GET",
                headers: {
                    "X-Access-Key": "YOUR_API_ACCESS_KEY",
                },
            });
            const jsonData = await response.json();
            cars = jsonData.record;
            renderCarCards(cars.slice(0, displayedCarsCount));
        } catch (error) {
            console.error("Error fetching car data:", error);
        }
    }

    /**
     * Renders car cards to the DOM
     * @param {Array} carsToDisplay - Array of car objects to display
     */
    function renderCarCards(carsToDisplay) {
        userCardsContainer.innerHTML = "";
        carsToDisplay.forEach((car) => {
            const card = userCardTemplate.content.cloneNode(true);
            const header = card.querySelector(".header");
            const body = card.querySelector(".body");
            header.textContent = `${car.make} ${car.model} (${car.year})`;
            body.textContent = `Price: $${car.price} | Dealer: ${car.dealer.name}, ${car.dealer.country}`;
            userCardsContainer.appendChild(card);
        });
    }

    // Search form submission handler
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const searchQuery = searchInput.value.toLowerCase();
        const filteredCars = cars.filter(
            (car) =>
                car.make.toLowerCase().includes(searchQuery) ||
                car.model.toLowerCase().includes(searchQuery)
        );
        renderCarCards(filteredCars.slice(0, displayedCarsCount));
    });

    // Show more button handler
    showMoreBtn.addEventListener("click", () => {
        displayedCarsCount += 2;
        renderCarCards(cars.slice(0, displayedCarsCount));
    });

    // Initialize car data
    fetchCars();
};
//call searchFunctionality
searchFunctionality();

const cursor = () =>{
    var cursor = document.querySelector("#cursor")
    var main = document.querySelector("#main");
    main.addEventListener("mousemove",(dets)=>{
        gsap.to(cursor,{
            x:dets.clientX,
            y:dets.clientY,
            ease:"Power4.out"
        })
    })
    main.addEventListener("mouseleave",(dets)=>{
        gsap.to(cursor,{
            scale:0
        })
    })
    main.addEventListener("mouseenter",(dets)=>{
        gsap.to(cursor,{
            scale:1
        })
    })
}

cursor()