let myDate = new Date();
myDate.getFullYear;
let dt = document.querySelector("#date");
dt.innerText = myDate.getFullYear();

let hamIcon = document.querySelector(".hmb-icon");
let mobileNav = document.querySelector(".mobile-nav");
hamIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

//card data goes here
let myCardData = [
  {
    imageSrc: "./assets/bluethesaurus.jpeg",
    alt: "site preview",
    title: "Blue Thesaurus",
    description:
      " A Dictionary project making use of RESTful API to display search words, meanings and synonyms.",
    gitIconSrc: "./assets/GitHub_logo-700x700.png",
    gitIconAlt: "github",
    gitIconTitle: "github repo",
    siteLinkIcon: "./assets/open.svg",
    siteLinkAlt: "open",
    siteLinkTitle: "open site",
    siteLink: "",
  },
  {
    imageSrc: "./assets/weathersite.jpeg",
    alt: "site preview",
    title: "Blue Weather",
    description:
      "A weather site that returns up-to-date weather conditions of various locations in the world.",
    gitIconSrc: "./assets/GitHub_logo-700x700.png",
    gitIconAlt: "github",
    gitIconTitle: "github repo",
    siteLinkIcon: "./assets/open.svg",
    siteLinkAlt: "open",
    siteLinkTitle: "open site",
    siteLink: "",
  },
];

//get the project div
let myProjectContainer = document.querySelector(".projects");
//card input logic
for (i = 0; i < myCardData.length; i++) {
  let myCard = document.createElement("div");
  myCard.className = "project-card";
  myCard.innerHTML = `
    <div class = "site-image">
      <img src = ${myCardData[i].imageSrc} alt = ${myCardData[i].alt}>
    </div>
    <div class="site-descr">
            <h3>${myCardData[i].title}</h3>
            <p>${myCardData[i].description}</p>
            <div>
              <span>#html</span>
              <span>#css</span>
              <span>#javaScript</span>
            </div>
            <div class="card-links">
              <img src=${myCardData[i].gitIconSrc} alt=${myCardData[i].gitIconAlt} title=${myCardData[i].gitIconTitle} />
              <img
                src=${myCardData[i].siteLinkIcon}
                alt=${myCardData[i].siteLinkAlt}
                title=${myCardData[i].siteLinkTitle}
              />
            </div>
          </div>
  `;
  myProjectContainer.append(myCard);
}
