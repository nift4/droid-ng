const featuresHead = document.querySelector(".features-head");
const featuresPara = document.querySelector(".features-para");
const featuresImage = document.querySelector(".features-image");

const hamburger = document.querySelector(".hamburger");
const list = document.querySelectorAll(".overlay-nav li");
const navLinks = document.querySelector(".nav-overlay");

hamburger.addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-overlay");
  navLinks.classList.toggle("nav-active");
  hamburger.classList.toggle("hamburger-active");
});

list.forEach((li) => {
  li.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    hamburger.classList.toggle("hamburger-active");
  });
});

function tab1() {
  featuresHead.innerText = "Enjoy stability";
  featuresPara.innerText =
    "We release stable updates every month keeping your device up to date with latest security patches.";
  featuresImage.src = "./images/img4 1.png";
}

function tab2() {
  featuresHead.innerText = "Make it yours";
  featuresPara.innerText =
    "Customizations for your creativity.Make your device more yours by customizing and tweaking certain settings for your perfection.";
  featuresImage.src = "./images/img4 1.png";
}

function tab3() {
  featuresHead.innerText = "Stock UI";
  featuresPara.innerText =
    "Love pixel stock like UI and feel. Then you're in the right place. Feel smoothness and beauty of pixel stock material you UI.";
  featuresImage.src = "./images/img4 1.png";
}

function tab4() {
  featuresHead.innerText = "More battery";
  featuresPara.innerText =
    "As all of us want, Droid-ng aim to provide as much battery backup as possible for your device, while at the same time keeping all the necessary features for you.";
  featuresImage.src = "./images/img4 1.png";
}

function tab5() {
  featuresHead.innerText = "Get support";
  featuresPara.innerText =
    "We are active on various social media platforms including twitter, telegram. So feel free to connect with us for any query or support and we'll be glad to help.";
  featuresImage.src = "./images/img4 1.png";
}

gsap.to(".droid", { y: 0, duration: 1 });
gsap.to(".ng", { y: 0, duration: 1, delay: 0.2 });
gsap.to(".loader", { opacity: 0, duration: 1, delay: 1.5 });
