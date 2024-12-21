
const hamBurgerAnimation=()=>{
var close = document.querySelector("#full i")

var close = document.querySelector("#hamburger i")
    var menu = document.querySelector(".language-opts i")

    var tl = gsap.timeline()
    tl.to("#hamburger", {
        transform: 'translateX(0%)',
        duration: 1,
        opacity: 1
    })
    tl.from("#hamburger h1", {
        x: 30,
        duration: 0.3,
        opacity: 0,
        stagger: 0.2
    })

    tl.from("#hamburger i", {
        scale: 0,
        opacity: 0,
        duration: 0.3
    })

    tl.pause()

    menu.addEventListener('click', function () {
        tl.play()
    })
    close.addEventListener("click", function () {
        tl.reverse()
    })
}

hamBurgerAnimation()

const languageChangeOnCLick = () => {
    const translations = {
        en: {
            heading2: "Drive Your Dreams, Powered by Trust.",
            heading1: "Your Dream Car <br>Awaits You",
            paragraph:
                "At Int'l Motor, we offer top-quality vehicles with precision and care. Whether you're buying or selling, our expert team ensures every car meets the highest standards for performance and appearance.",
            button: "Browse",
        },
        fr: {
            heading2: "Conduisez Vos Rêves, Propulsés par la Confiance.",
            heading1: "Votre Voiture de Rêve <br>Vous Attend",
            paragraph:
                "Chez Int'l Motor, nous offrons des véhicules de haute qualité avec précision et soin. Que vous achetiez ou vendiez, notre équipe d'experts s'assure que chaque voiture respecte les normes les plus élevées en matière de performance et d'apparence.",
            button: "Explorer",
        },
    };

    // Function to update content based on selected language
    function setLanguage(lang) {
        const content = translations[lang];

        document.querySelector(".center-header1 h2").textContent = content.heading2;
        document.querySelector(".center-header1 h1").innerHTML = content.heading1; // Use innerHTML for line break
        document.querySelector(".center-header1 p").textContent = content.paragraph;
        document.querySelector(".btnContainer button").textContent = content.button;
    }

    // Add event listeners for language switch buttons
    document.getElementById("eng").addEventListener("click", () => setLanguage("en"));
    document.getElementById("fre").addEventListener("click", () => setLanguage("fr"));

    // Set default language to English on page load
    setLanguage("en");
    const storeUserPerference = () =>{
        function setLanguage(lang) {
            localStorage.setItem("language", lang); // Save user preference
            const content = translations[lang];
        
            document.querySelector(".center-header1 h2").textContent = content.heading2;
            document.querySelector(".center-header1 h1").innerHTML = content.heading1;
            document.querySelector(".center-header1 p").textContent = content.paragraph;
            document.querySelector(".btnContainer button").textContent = content.button;
        }
        
        // Load saved language on page load or default to English
        const savedLanguage = localStorage.getItem("language") || "en";
        setLanguage(savedLanguage);
        
    }
    storeUserPerference()
    function updateSelectedStyle(selectedElement) {
        // Reset styles for all buttons
        document.querySelectorAll(".language-btn").forEach((btn) => {
            btn.style.backgroundColor = "";
            btn.style.color = "";
        });

        // Apply style to the clicked element
        selectedElement.style.backgroundColor = "green";
        selectedElement.style.color = "red";
    }
}

languageChangeOnCLick()