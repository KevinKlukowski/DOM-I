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

//design nav
let nav1 = document.querySelector('a:nth-of-type(1)');
nav1.textContent = 'Services';
let nav2 = nav1.nextElementSibling;
nav2.textContent = 'Product';
let nav3 = nav2.nextElementSibling;
nav3.textContent = 'Vision';
let nav4 = nav3.nextElementSibling;
nav4.textContent = 'Features';
let nav5 = nav4.nextElementSibling;
nav5.textContent = 'About';
let nav6 = nav5.nextElementSibling;
nav6.textContent = 'Contact';

//create new nav links
const newLink = document.createElement('a');
newLink.textContent = 'Map';
newLink.href = '#';
document.querySelector('nav').appendChild(newLink);

//add logo image
const logoImg = document.getElementById('cta-img');
logoImg.src = 'img/header-img.png';

//logo title and button
let Header = document.querySelector('h1');
Header.textContent = 'DOM IS AWESOME';
let Button = document.querySelector('button');
Button.textContent = 'Get Started';

//Set up info sections
let features = document.querySelector('.text-content h4');
features.textContent = 'Features';
let featuresContent = document.querySelector('.text-content p');
featuresContent.textContent = siteContent['main-content']['features-content'];

let About = document.querySelectorAll('.text-content h4')[1];
About.textContent = 'ABOUT';
let AboutContent = document.querySelectorAll('.text-content p')[1];
AboutContent.textContent = siteContent['main-content']['about-content'];

let Services = document.querySelectorAll('.text-content h4')[2];
Services.textContent = 'SERVICES';
let ServicesContent = document.querySelectorAll('.text-content p')[2];
ServicesContent.textContent = siteContent['main-content']['services-content'];

let Product = document.querySelectorAll('.text-content h4')[3];
Product.textContent = 'PRODUCT';
let ProductContent = document.querySelectorAll('.text-content p')[3];
ProductContent.textContent = siteContent['main-content']['product-content'];

let Vision = document.querySelectorAll('.text-content h4')[4];
Vision.textContent = 'VISION';
let VisionContent = document.querySelectorAll('.text-content p')[4];
VisionContent.textContent = siteContent['main-content']['vision-content'];

//center image
let midPic = document.querySelector('.middle-img');
midPic.src = siteContent['main-content']['middle-img-src'];


//footer
let Contact = document.querySelector('.contact h4');
Contact.textContent = 'CONTACT';

let Address = document.querySelector('.contact p');
Address.textContent = siteContent['contact']['address'];

let Phone = document.querySelectorAll('.contact p')[1];
Phone.textContent = siteContent['contact']['phone'];

let Email = document.querySelectorAll('.contact p')[2];
Email.textContent = siteContent['contact']['email'];

let Copyright = document.querySelector('footer p');
Copyright.textContent = siteContent['footer']['copyright'];