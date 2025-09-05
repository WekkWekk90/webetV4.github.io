// Translations
    const translations = {
      en: {
        signin: "Sign In",
        marquee: "🔊 We wish you good luck and have a beautiful day... Welcome To WEBET9151 🔊",
        nav: ["HOME","CASINO","SPORTSBOOK","LOTTO","COCKFIGHT","GAMES","FISHING"],
        cat: ["Casino","Sports","Lotto","Cockfight","Games","Fishing"],
        footer: {
          text: "We provide our members with <b>LIVE CASINO, LIVE SPORTS, COCKFIGHT, LOTTO</b> and <b>SLOT GAMES</b>. We are committed to providing you the best value in whatever your game may be. <br>With a combination of technology expertise and market experience, we are the licensed name that you can trust for long term entertainment service.",
          responsible: "RESPONSIBLE GAMBLING",
          terms: "TERMS AND CONDITIONS",
          contact: "CONTACT US",
          copy: "@WEBET9151"
        }
      },
      km: {
        signin: "ចូល",
        marquee: "🔊 សូមជូនពរឱ្យអ្នកសំណាងល្អ និងមានថ្ងៃល្អសប្បាយ... សូមស្វាគមន៍មកកាន់ WEBET9151 🔊",
        nav: ["ទំព័រដើម","កាស៊ីណូ","កីឡា","ឡូតូ","បក្សិកីឡា","ស្លុតហ្គេម","បាញ់ត្រី"],
        cat: ["កាស៊ីណូ","កីឡា","ឡូតូ","បក្សីកីឡា","ស្លុតហ្គេម","បាញ់ត្រី"],
        footer: {
          text: "យើងផ្តល់ជូនសមាជិកនូវ <b>កាស៊ីណូផ្សាយផ្ទាល់ កីឡាផ្សាយផ្ទាល់ បក្សីកីឡា ឡូតូ</b> និង <b>ស្លុតហ្គេម</b>។ យើងស្មោះត្រង់ក្នុងការផ្តល់តម្លៃល្អបំផុតសម្រាប់ការលេងរបស់អ្នក។ <br>ជាមួយបទពិសោធន៍និងបច្ចេកវិទ្យា យើងជាក្រុមហ៊ុនដែលមានអាជ្ញាប័ណ្ណ អ្នកអាចទុកចិត្តបានសម្រាប់ការកម្សាន្តរយៈពេលវែង។",
          responsible: "ការលេងកីឡាទទួលខុសត្រូវ",
          terms: "លក្ខខណ្ឌនិងកិច្ចព្រមព្រៀង",
          contact: "ទំនាក់ទំនង",
          copy: "@WEBET9151"
        }
      }
    };

    function setLanguage(lang) {
       localStorage.setItem("lang", lang); // Save selected language
  // Login + marquee
  document.getElementById("signin-btn").innerText = translations[lang].signin;
  document.getElementById("marquee-text").innerText = translations[lang].marquee;

  // Navbar
  document.getElementById("nav-home").innerText = translations[lang].nav[0];
  document.getElementById("nav-casino").innerText = translations[lang].nav[1];
  document.getElementById("nav-sports").innerText = translations[lang].nav[2];
  document.getElementById("nav-lotto").innerText = translations[lang].nav[3];
  document.getElementById("nav-cockfight").innerText = translations[lang].nav[4];
  document.getElementById("nav-games").innerText = translations[lang].nav[5];
  document.getElementById("nav-fishing").innerText = translations[lang].nav[6];

  // Categories
  document.getElementById("cat-casino").innerText = translations[lang].cat[0];
  document.getElementById("cat-sports").innerText = translations[lang].cat[1];
  document.getElementById("cat-lotto").innerText = translations[lang].cat[2];
  document.getElementById("cat-cockfight").innerText = translations[lang].cat[3];
  document.getElementById("cat-games").innerText = translations[lang].cat[4];
  document.getElementById("cat-fishing").innerText = translations[lang].cat[5];

  // Footer
  document.getElementById("footer-text").innerHTML = translations[lang].footer.text;
  document.getElementById("footer-responsible").innerText = translations[lang].footer.responsible;
  document.getElementById("footer-terms").innerText = translations[lang].footer.terms;
  document.getElementById("footer-contact").innerText = translations[lang].footer.contact;
  document.getElementById("footer-copy").innerText = translations[lang].footer.copy;
}
  window.onload = function() {
  const savedLang = localStorage.getItem("lang");
  
  if (savedLang) {
    setLanguage(savedLang);
    document.querySelector('.lang-select').value = savedLang;
  } else {
    setLanguage("en"); // Default English
    document.querySelector('.lang-select').value = "en";
  }
};