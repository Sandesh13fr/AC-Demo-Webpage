const smoothScrolling = () => {
    const lenis = new Lenis();

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    let searchIcon = document.querySelector("#searchButton")
    let target = document.querySelector(".searchbar-functionality")
    searchIcon.addEventListener("click", () => {
        lenis.scrollTo(target)
    })
}

smoothScrolling()

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

const swiperContainer = () => {
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 6100,
            disableOnInteraction: false,
        },
    });
}
swiperContainer()

const loaderAnimation = () => {
    window.addEventListener("load", () => {
        let tl = gsap.timeline()
        tl.to("#loader img", {
            opacity: 1,
            duration: 1,
            ease: "power4.in"
        }, "start")
        tl.to("#loader img", {
            opacity: 0,
            duration: 1,
            ease: "power4.in"
        }, "start+=1")
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
            }, "start+=2")
    })
}

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
const searchForm = document.getElementById("search-form");
      const searchInput = document.getElementById("search-bar");
      const userCardsContainer = document.getElementById("user-cards");
      const userCardTemplate = document.getElementById("user-card-template");
      const showMoreBtn = document.getElementById("show-more-btn");

      let users = [];
      let displayedUsersCount = 6; // Number of users to display initially

      // Fetch users from the API
      async function fetchUsers() {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
          );
          const usersData = await response.json();
          users = usersData;
          renderUserCards(users.slice(0, displayedUsersCount)); // Display initial set of users
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      }

      // Render the user cards
      function renderUserCards(usersToDisplay) {
        userCardsContainer.innerHTML = ""; // Clear previous results
        usersToDisplay.forEach((user) => {
          const card = userCardTemplate.content.cloneNode(true);
          const header = card.querySelector(".header");
          const body = card.querySelector(".body");
          header.textContent = user.name;
          body.textContent = user.email;
          userCardsContainer.appendChild(card);
        });
      }

      // Handle search functionality
      searchForm.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent form submission

        const searchQuery = searchInput.value.toLowerCase();
        const filteredUsers = users.filter(
          (user) =>
            user.name.toLowerCase().includes(searchQuery) ||
            user.email.toLowerCase().includes(searchQuery)
        );
        renderUserCards(filteredUsers.slice(0, displayedUsersCount)); // Display filtered users
      });

      // Handle "Show More" button click
      showMoreBtn.addEventListener("click", () => {
        displayedUsersCount += 2; // Increase the number of displayed users by 6
        renderUserCards(users.slice(0, displayedUsersCount)); // Render updated list
      });

      // Initial fetch and display of all users
      fetchUsers();
updateCounter();
loaderAnimation()