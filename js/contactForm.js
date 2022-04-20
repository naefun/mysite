let email;
let name;
let subject;
let message;

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function handleInputs() {
  let errorMessage = "";

  this.email = emailInput.value;
  this.name = nameInput.value;
  this.subject = subjectInput.value;
  this.message = messageInput.value;

  if (this.email === "") {
    errorMessage += "Email field cannot be empty<br/>";
  } else if (!validateEmail(this.email)) {
    errorMessage += "Email field needs to contain a legitimate email<br/>";
  }
  if (this.name === "") {
    errorMessage += "Name field cannot be empty<br/>";
  }
  if (this.subject === "") {
    errorMessage += "Subject field cannot be empty<br/>";
  }
  if (this.message === "") {
    errorMessage += "Message field cannot be empty<br/>";
  }

  return errorMessage;
}

async function handleSubmit() {
  //console.log("testing email");
  let errorMessage = handleInputs();

  if (errorMessage !== "") {
    let alert = document.getElementById("form-alert");
    alert.style.display = "block";
    alert.innerHTML = errorMessage;
    return;
  }

  let response;

  try {
    let grecaptchaId = grecaptcha.getResponse();
    // let grecaptchaId = "";
    response = await fetch(
      "https://www.nathandev.com/projects/contactFormBackend/index.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: `email=${emailInput.value}&name=${nameInput.value}&subject=${subjectInput.value}&message=${messageInput.value}&grecaptcha=${grecaptchaId}`,
      }
    );

    let alert = document.getElementById("form-alert");
    alert.style.display = "block";

    if (response.status === 200) {
      //console.log("email sent");
      alert.classList.replace("alert-danger", "alert-success");
      alert.innerHTML = "Message sent";
    } else {
      alert.innerHTML = "Error: Message not sent, please try again.";
    }

    //console.log(response.status);
  } catch (exception) {
    console.log(exception);
  }

  grecaptcha.reset();
}

document.getElementById("submit-form").addEventListener("click", function (e) {
  e.preventDefault();
  handleSubmit();
});

// Verification callback function
function captchaVerified() {
  var submitBtn = document.getElementById("submit-form");
  submitBtn.classList.remove("disable-button");
}
// Expiration callback function
function captchaExpired() {
  var submitBtn = document.getElementById("submit-form");
  grecaptcha.reset();
  submitBtn.classList.add("disable-button");
}
