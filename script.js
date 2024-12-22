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

const loaderAnimation  = ()=>{
    window.addEventListener("load", ()=>{
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
            color:"white",
            opacity:0,
            duration:1,
            ease: "power4.in"
        },"start+=2")
        .to("#loader",{
            opacity:0,
            duration:1,
            ease: "power4.in"
        },"start+=2")
        .to("#loader",{
            display:"none",
            duration:1,
            ease: "power4.in"
        },"start+=2")
    })
}
loaderAnimation()

const numberElement = document.querySelector('.counter .number');
  const targetCount = 100;

  // Function to update the counter
  function updateCounter() {
    let currentCount = 0;
    const interval = setInterval(() => {
      if (currentCount <= targetCount) {
        numberElement.textContent = currentCount;
        currentCount=currentCount+7;
      } else {
        clearInterval(interval); // Stop the interval when the target is reached
      }
    }, 200); // Increment every 50ms
  }

  // Start the counter animation
  updateCounter();