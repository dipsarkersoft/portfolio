
// Testimonials

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");
let index = 0;
console.log(slides);

function display(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "flex";
}

function nextSlide() {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  display(index);
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  display(index);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
display(index);

const galleryFilter = document.querySelector(".gallery-filter");
const galleryImages = document.querySelectorAll(".image2");

galleryFilter.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter-gallery")) {
    galleryFilter.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    const filter = e.target.dataset.filter;
    galleryImages.forEach((image2) => {
      if (filter === "all" || image2.classList.contains(filter)) {
        image2.style.display = "block";
      } else {
        image2.style.display = "none";
      }
    });
  }
});


//from section.....

const form = document.getElementById("form"),
  name = document.getElementById("name"),
   email = document.getElementById("email"),
   Subject = document.getElementById("Subject")
   
  

//   Form Event Listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([name, email,Subject ]);
  checkLength(name, 4, 16);
  checkLength(Subject, 4, 16);
  
  checkEmail(email);

});

//   Check Required Fields
function checkRequired(inputAll) {
  inputAll.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check Input Length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters.`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters.`
    );
  } else {
    showSuccess(input);
  }
}

// Validate Email
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Show Error Message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "formValid error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show Success Message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "formValid success";
}

// Get Field Name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}



// SCROLL TO TOP
const scrollBtn = document.querySelector(".top");
const rootEl = document.documentElement;

document.addEventListener("scroll", showBtn);
scrollBtn.addEventListener("click", scrollToTop);

function showBtn() {
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
  if (rootEl.scrollTop / scrollTotal > 0.3) {
    scrollBtn.classList.add("show-btn");
  } else {
    scrollBtn.classList.remove("show-btn");
  }
}

function scrollToTop() {
  rootEl.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}




