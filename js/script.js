// transition Language
let transition = {
  ar: {
    site: "الموقع الإلكتروني",
    algeria: "للفريق الوطني الجزائري",
    nextmatch: "المباراة القادمة",
    date: "الثلاثاء 20 جوان 2023 - 20:00",
    stade: "ملعب 19 ماي 1956 عنابة",
    english: "الإنجليزية",
    arabic: "العربية",
    home: "الرئيسية",
    news: "أخبار الفريق",
    nicknames: "الألقاب",
    center: "مركز التكوين",
    shope: "المتجر",
    contact: "تواصل معنا",
    about: "نبذة عن الفريق",
    image: "صور المنتخب الوطني",
    more: "عرض المزيد",
    title: "العنوان : الجزائر ولاية الشلف",
    phone: "الهاتف : +213551478297",
    email: "البريد الإلكتروني : talhaoui.sabir@gmail.com",
    work: "أوقات العمل : كل يوم / 24 ساعة",
    titlesite: "الموقع الرسمي للمنتخب الوطني الجزائري",
    day: "يوم",
    hour: "ساعة",
    minute: "دقيقة",
    seconde: "ثانية",
    made: "تم تصميم و تطوير هذا الموقع بكل 💚 من طرف طلحاوي صابر",
    links: "روابط مختصرة",
  },
  eng: {
    site: "The website",
    algeria: "for the Algerian national team",
    nextmatch: "The next match",
    date: "Tuesday 20 June 2023 - 20:00",
    stade: "Stadium May 19, 1956, Annaba",
    english: "English",
    arabic: "Arabic",
    home: "Home",
    news: "Team news",
    nicknames: "Nicknames",
    center: "Composition Center",
    shope: "The shop",
    contact: "Contact",
    about: "About the team",
    image: "National team photos",
    more: "Show more",
    title: "Address: Algeria, Chlef wilaya",
    phone: "Phone : +213551478297",
    email: "ُEmail:talhaoui.sabir@gmail.com",
    work: "Working hours: every day / 24 hours",
    titlesite: "The official website of the Algerian national team",
    day: "Day",
    hour: "Hour",
    minute: "Minute",
    seconde: "Seconde",
    made: "This website is designed and developed with 💚 by Talhaoui Saber",
    links: "Short links",
  },
};
// Change The Language
let languageButton = document.querySelectorAll(".language");
let dataLang = document.querySelectorAll("[data-lang]");
languageButton.forEach((e) => {
  e.onclick = function () {
    let langChange = e.dataset.language;
    dataLang.forEach((item) => {
      item.innerHTML = transition[langChange][item.dataset.lang];
    });
    if (langChange === "eng") {
      document.body.classList.add("eng");
    } else {
      document.body.classList.remove("eng");
    }
    localStorage.setItem("lang", langChange);
  };
});
// Change The Language With LocalStorage
let langlocalstorag = localStorage.getItem("lang");
console.log(langlocalstorag);
if (langlocalstorag !== null) {
  dataLang.forEach((item) => {
    item.innerHTML = transition[langlocalstorag][item.dataset.lang];
  });
  if (langlocalstorag === "eng") {
    document.body.classList.add("eng");
  } else {
    document.body.classList.remove("eng");
  }
}
// counter Time Of Match
let countDownDate = new Date("Jun 20,2023 20:00:00").getTime();
console.log(countDownDate);
let counter = setInterval(() => {
  // Date Now
  let dateNow = new Date().getTime();
  let dateDeff = countDownDate - dateNow;
  let days = Math.floor(dateDeff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDeff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDeff % (1000 * 60 * 60)) / (1000 * 60));
  let secondes = Math.floor((dateDeff % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".secondes").innerHTML = secondes;
  if (dateDeff < 0) {
    clearInterval(counter);
  }
}, 1000);
// background Image Slider
let landing = document.querySelector(".landing");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let images = [
  "alg1.jpg",
  "alg2.webp",
  "alg3.jpg",
  "alg4.webp",
  "alg5.jpg",
  "alg6.webp",
];
let id = 0;
function slider(id) {
  landing.style.backgroundImage = `url(../img/${images[id]})`;
  landing.classList.add(".landingFade");
  setTimeout(() => {
    landing.classList.remove(".landingFade");
  }, 500);
}
next.addEventListener("click", () => {
  id++;
  if (id > images.length - 1) {
    id = 0;
  }
  slider(id);
});
prev.addEventListener("click", () => {
  id--;
  if (id < 0) {
    id = images.length - 1;
  }
  slider(id);
});
// Icon Scrool Top
let iconScroolTop = document.querySelector(".iconsrccoltop");
let sectionLanding = document.querySelector(".landing");
window.onscroll = function () {
  if (scrollY >= 300) {
    iconScroolTop.style.opacity = "1";
  } else {
    iconScroolTop.style.opacity = "0";
  }
};
// Image Slide
let simagesBox = document.querySelectorAll(".imagesBox img");
simagesBox.forEach((item) => {
  item.onclick = function enlargeImage(img) {
    let modal = document.createElement("img");
    modal.id = "enlargedImage";
    modal.src = img.srcElement.src;
    modal.onclick = function () {
      document.body.removeChild(modal);
    };
    document.body.appendChild(modal);
  };
});
