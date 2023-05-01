document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    loop: true,
    centeredSlides: true,
    slideActiveClass: "current",
    loopedSlides: 100,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  swiper.el.addEventListener("mouseenter", function () {
    swiper.autoplay.stop();
  });

  swiper.el.addEventListener("mouseleave", function () {
    swiper.autoplay.start();
  });

  const popup = document.querySelector(".popup");
  const popupClsBtn = document.querySelector(".popup__close-btn");
  const contentWr = document.querySelector(".content-wr");
  const headerBtn = document.querySelector(".header__btn");
  const popupBtn = document.querySelector(".popup__btn");
  const overlay = document.querySelector(".overlay-block");
  const h1Btn = document.querySelector(".h1-block__btn");
  const cardBtn = document.querySelector(".card__btn");

  headerBtn.addEventListener("click", () => {
    popup.classList.remove("display-none");
    contentWr.classList.add("blur");
    document.body.classList.add("overflow-hidden");
    overlay.classList.remove("display-none");
  });

  h1Btn.addEventListener("click", () => {
    popup.classList.remove("display-none");
    contentWr.classList.add("blur");
    document.body.classList.add("overflow-hidden");
    overlay.classList.remove("display-none");
  });

  cardBtn.addEventListener("click", () => {
    popup.classList.remove("display-none");
    contentWr.classList.add("blur");
    document.body.classList.add("overflow-hidden");
    overlay.classList.remove("display-none");
  });

  popupBtn.addEventListener("click", () => {
    popupBtn.classList.add("success-btn");
    popupBtn.textContent = "Success";
    popupBtn.style.transition = "all 0.3s ease";
    setTimeout(() => {
      popupBtn.classList.remove("success");
      popupBtn.textContent = "Send";
      popup.classList.add("display-none");
      contentWr.classList.remove("blur");
      document.body.classList.remove("overflow-hidden");
      overlay.classList.add("display-none");
    }, 3000);
  });

  popupClsBtn.addEventListener("click", () => {
    popup.classList.add("display-none");
    contentWr.classList.remove("blur");
    document.body.classList.remove("overflow-hidden");
    overlay.classList.add("display-none");
  });

  const burgerBtn = document.querySelector(".burger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const setupMobileMenu = () => {
    const mobileMenuLinks = document.querySelectorAll(".mobile-menu__nav li a");
    const overlay = document.querySelector(".overlay-block");

    function toggleMobileMenu() {
      burgerBtn.classList.toggle("active");
      mobileMenu.classList.toggle("display-none");
      document.body.classList.toggle("overflow-hidden");
      overlay.classList.toggle("display-none");
    }

    burgerBtn.addEventListener("click", toggleMobileMenu);

    for (const link of mobileMenuLinks) {
      link.addEventListener("click", () => {
        burgerBtn.classList.remove("active");
        mobileMenu.classList.add("display-none");
        document.body.classList.remove("overflow-hidden");
        overlay.classList.add("display-none");
      });
    }
  };
  setupMobileMenu();
  const mobBtn = document.querySelector(".mobile-menu__btn");
  mobBtn.addEventListener("click", () => {
    popup.classList.remove("display-none");
    contentWr.classList.add("blur");
    document.body.classList.add("overflow-hidden");
    overlay.classList.remove("display-none");
    burgerBtn.classList.remove("active");
    mobileMenu.classList.add("display-none");
  });
  const checkbox = document.querySelector(".popup__checkbox");
  const input1 = document.querySelector(".popup__input:first-of-type");
  const input2 = document.querySelector(".popup__input:last-of-type");
  const validateInputs = () => {
    const input1IsValid = input1.value.trim() !== "";
    const input2IsValid = input2.value.trim() !== "";
    const checkboxIsChecked = checkbox.checked;

    if (input1IsValid && input2IsValid && checkboxIsChecked) {
      popupBtn.classList.remove("disabled");
      input1.classList.remove("input-err");
      input2.classList.remove("input-err");
    } else {
      popupBtn.classList.add("disabled");
      if (!input1IsValid) {
        input1.classList.add("input-err");
      } else {
        input1.classList.remove("input-err");
      }
      if (!input2IsValid) {
        input2.classList.add("input-err");
      } else {
        input2.classList.remove("input-err");
      }
    }
  };

  input1.addEventListener("input", validateInputs);
  input2.addEventListener("input", validateInputs);
  checkbox.addEventListener("click", validateInputs);
});

const form = document.querySelector("#myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const url =
    "https://script.google.com/macros/s/AKfycbwecGSd0Q2s-XPUVgMIth_bAfHYvWqj3NLhq_SWJiyS1amP9I5s7qQzlqAaS6jF1aHi/exec";
  const formData = new FormData(form);

  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      console.log("Успех:", response);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
});
