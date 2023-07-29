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
    //Data storage object

    let datals = {
      name_ls: form.elements["user-name"].value,
      email_ls: form.elements["user-email"].value,
      message_ls: form.elements["user-message"].value,
    };

    //form.submit();
  }
});

let datals = {
  name_ls: "",
  email_ls: "",
  message_ls: "",
};

//get data from form and set locale storage
function storeLD() {
  datals.name_ls = form.elements["user-name"].value;
  datals.email_ls = form.elements["user-email"].value;
  datals.message_ls = form.elements["user-message"].value;
  window.localStorage.setItem("userDataForm", JSON.stringify(datals));
}
