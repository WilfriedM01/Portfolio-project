const CloseButton = document.getElementById("icone_container");
const HumbergerButton = document.getElementById("mob_menu");
const MobileMenu = document.getElementById("mobile_menu");
const PortfolioButton = document.getElementById("portfolio_button");
const AboutButton = document.getElementById("about_button");
const ContactButton = document.getElementById("contact_buttton");

const form = document.getElementById("contact-form");
const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";
const MESSAGE_REQUIRED = "Please enter your message";

function close() {
  MobileMenu.style.display = "none";
  document.body.style.overflow = "auto";
}

function open() {
  MobileMenu.style.display = "block";
  document.body.style.overflow = "hidden";
}

CloseButton.addEventListener("click", close);
HumbergerButton.addEventListener("click", open);
PortfolioButton.addEventListener("click", close);
AboutButton.addEventListener("click", close);
ContactButton.addEventListener("click", close);
