/**
 * Main JavaScript file for car dealership website
 * Handles animations, language switching, search functionality, and UI interactions
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import "swiper/css";
import Swiper from 'swiper';

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
            // ... other translations
        },
        fr: {
            // French translations
            aboutUs: "mon entreprise",
            // ... other translations
        }
    };

    /**
     * Updates all translatable elements on the page to the selected language
     * @param {string} lang - Language code ('en' or 'fr')
     */
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
        loop: true,
        autoplay: {
            delay: 6100,
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
        // ... animation sequences

        // Scroll-triggered animations for different page sections
        let tl2 = gsap.timeline({
            scrollTrigger:{
                trigger:".page2",
                scroller:"body",
                markers:false,
                start:"top 70%",
                end:"top 40%",
                scrub:2,
            }
        });
        // ... more scroll animations
    });

    /**
     * Animates the counter in the loader from 0 to 100
     */
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