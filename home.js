
/*
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click" , ()=>{
    document.body.classList
    .toggle("show-mobile-menu"); });

menuCloseButton.addEventListener("click" , ()=> menuOpenButton.click());

*/

const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

// Mobile menu toggle
menuOpenButton.addEventListener("click", () => {
  document.body.classList.add("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
});

// Close mobile menu and scroll to section on nav click
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // prevent default anchor behavior
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    // Scroll to section
    targetSection.scrollIntoView({ behavior: "smooth" });

    // Close mobile menu
    document.body.classList.remove("show-mobile-menu");

    // Highlight clicked link (optional)
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Scroll-based highlight for active nav item
window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;

  sections.forEach(section => {
    const top = section.offsetTop - 150;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < bottom) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});


$(".readmore-btn").on('click', function() {
  const $box = $(this).closest(".box");

  // Close all other boxes
  $(".box").not($box).removeClass("showContent").find(".readmore-btn").text("Read more");

  // Toggle the current box
  $box.toggleClass("showContent");

  // Update the button text
  const btnText = $box.hasClass("showContent") ? "Read less" : "Read more";
  $(this).text(btnText);
});


       function validateForm() {
    // Get values and trim
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const address = document.getElementById("address").value.trim();

    let isValid = true;

    // Reset all input borders
    ["name", "email", "phone", "subject", "address"].forEach(id => {
        document.getElementById(id).style.border = "";
    });

    if (!name) {
        document.getElementById("name").style.border = "1px solid red";
        isValid = false;
    }

    if (!email || !email.includes("@")) {
        document.getElementById("email").style.border = "1px solid red";
        isValid = false;
    }

    if (!/^\d{10}$/.test(phone)) {
        document.getElementById("phone").style.border = "1px solid red";
        alert("Enter a valid 10-digit phone number.");
        isValid = false;
    }

    if (!subject) {
        document.getElementById("subject").style.border = "1px solid red";
        isValid = false;
    }

    if (!address) {
        document.getElementById("address").style.border = "1px solid red";
        isValid = false;
    }

    if (!isValid) return false;

    // Show success message
    const successMsg = document.getElementById("success-message");
    successMsg.innerText = "✅ Applied Successfully!";
    successMsg.style.color = "green";
    successMsg.style.fontWeight = "bold";

      document.querySelector("form").reset();


    return false;
}
