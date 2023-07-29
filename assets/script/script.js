const CloseButton = document.getElementById("icone_container");
const HumbergerButton = document.getElementById("mob_menu");
const MobileMenu = document.getElementById("mobile_menu");
const PortfolioButton = document.getElementById("portfolio_button");
const AboutButton = document.getElementById("about_button");
const ContactButton = document.getElementById("contact_buttton");

const form = document.getElementById("contact-form");
const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please use lowcases only for correct mail";
const MESSAGE_REQUIRED = "Please enter your message";

const userName = document.getElementById("user-name");
const userEmail = document.getElementsByClassName("user-email");
const userMessage = document.getElementsByClassName("user-message");

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

//Form validation
function Message(input, message, type) {
  let msg = input.parentNode.querySelector("span");
  msg.innerHTML = message;
  if (type) {
    input.className = "success";
  } else {
    input.className = "error";
  }
  return type;
}

function hasValue(input, message) {
  if (input.value.trim() === "") {
    return Message(input, message, false);
  } else {
    return Message(input, "", true);
  }
}

function validateEmail(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  // validate email format
  const emailRegex = /[A-Z]/;
  const email = input.value.trim();
  if (emailRegex.test(email)) {
    return Message(input, invalidMsg, false);
  }
  return true;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let nameValid = hasValue(form.elements["user-name"], NAME_REQUIRED);
  let emailValid = validateEmail(
    form.elements["user-email"],
    EMAIL_REQUIRED,
    EMAIL_INVALID
  );
  let messageValid = hasValue(form.elements["user-message"], MESSAGE_REQUIRED);

  if (nameValid && emailValid && messageValid) {
    form.submit();
  }
});

let datals = {
  name_ls: "",
  email_ls: "",
  message_ls: "",
};

//get data from form and set locale storage
function storeLD() {
  datals.name_ls = userName.value;
  datals.email_ls = userEmail.value;
  datals.message_ls = userMessage.value;
  window.localStorage.setItem("userDataForm", JSON.stringify(datals));
}

userEmail.addEventListener("input", storeLD);
userName.addEventListener("input", storeLD);
userMessage.addEventListener("input", storeLD);

document.addEventListener("DOMContentLoaded", () => {
  const storedData = JSON.parse(localStorage.getItem("userDataForm"));
  if (storedData) {
    userEmail.value = storedData.email_ls ? storedData.email_ls : "";
    userName.value = storedData.name_ls ? storedData.name_ls : "";
    userMessage.value = storedData.message_ls ? storedData.message_ls : "";
  }
});
