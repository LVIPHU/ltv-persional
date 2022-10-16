/*!
 * Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Send email by email js
  const contactForm = document.getElementById("contact_form"),
    contactName = document.getElementById("name"),
    contactEmail = document.getElementById("email"),
    contactPhone = document.getElementById("phone"),
    contactMessage = document.getElementById("message"),
    submitButton = document.getElementById("submitButton"),
    submitSuccess = document.getElementById("submitSuccess"),
    submitError = document.getElementById("submitError");
  const sendEmail = (e) => {
    e.preventDefault();

    // Check if the field has a value
    if (
      contactName.value !== "" &&
      contactEmail.value !== "" &&
      contactPhone.value !== "" &&
      contactMessage.value !== ""
    ) {
      // serviceID - templateID - #form - publicKey
      emailjs
        .sendForm(
          "service_fh3c5vd",
          "template_r9mrbc1",
          "#contact_form",
          "T-R1SPG6CreYR0GkF"
        )
        .then(
          () => {
            submitButton.classList.add("d-none");
            submitSuccess.classList.remove("d-none");
            setTimeout(() => {
              submitButton.classList.remove("d-none");
              submitSuccess.classList.add("d-none");
            }, 5000);
          },
          (error) => {
            submitButton.classList.add("d-none");
            submitError.classList.remove("d-none");
            alert("OOPS! CÓ GÌ ĐÓ SAI SAI...", error);
            setTimeout(() => {
              submitButton.classList.add("d-none");
              submitError.classList.add("d-none");
            }, 5000);
          }
        );
      // To clear the input field
      contactName.value = "";
      contactEmail.value = "";
      contactPhone.value = "";
      contactMessage.value = "";
    }
  };
  contactForm.addEventListener("submit", sendEmail);
});
