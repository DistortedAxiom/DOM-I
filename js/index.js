const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// NAVBAR

let navBar = document.querySelectorAll('header nav a');
for (let i = 0; i < navBar.length; i++) {
  navBar[i].innerHTML = siteContent.nav[`nav-item-${i+1}`];
}


// HEADER

/* Header Img */

let ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

/* Header Title */

let ctaTitle = document.querySelector('.cta-text h1');
ctaTitle.textContent = siteContent.cta.h1;

/* Header Button */

let ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = siteContent.cta.button;


// MAIN CONTENT

/* H4 */

const h4 = document.querySelectorAll(".main-content h4");
h4[0].textContent = siteContent[`main-content`]["features-h4"];
h4[1].textContent = siteContent[`main-content`]["about-h4"];
h4[2].textContent = siteContent[`main-content`]["services-h4"];
h4[3].textContent = siteContent[`main-content`]["product-h4"];
h4[4].textContent = siteContent[`main-content`]["vision-h4"];

/* P */
const p = document.querySelectorAll(".main-content p");
p[0].textContent = siteContent['main-content']['features-content'];
p[1].textContent = siteContent['main-content']['about-content'];
p[2].textContent = siteContent['main-content']['services-content'];
p[3].textContent = siteContent['main-content']['product-content'];
p[4].textContent = siteContent['main-content']['vision-content'];

/* MIDDLE IMAGE */

let midImg = document.querySelector('.middle-img');
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// CONTACT

const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent[`contact`][`contact-h4`];

const contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent[`contact`]["address"];
contactP[1].textContent = siteContent[`contact`]["phone"];
contactP[2].textContent = siteContent[`contact`]["email"];

// FOOTER

const footer = document.querySelector("footer p");
footer.textContent = siteContent[`footer`][`copyright`];

// Adding new nav items

const nav = document.querySelector('nav');

const Home = document.createElement('a');
Home.href = "index.html";
Home.textContent = "Home";

const News = document.createElement('a');
News.href = "https://news.google.com/"
News.textContent = "News";

nav.prepend(Home);
nav.append(News);

// Change nav color to green

const newNav = document.querySelectorAll("header nav a");
newNav.forEach((value) => {
  value.style.color = 'green';
})


//Stretch

ctaBtn.addEventListener("click", changeBG);

function changeBG() {
  document.querySelector('body').style.background = '#BEEEFC';
}
