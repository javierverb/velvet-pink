const scrollTop = document.querySelector("#return-to-top");
window.onscroll = () => {
  if (window.scrollY > 300) {
    scrollTop.style.visibility = "visible";
  } else {
    scrollTop.style.visibility = "hidden";
  }
};

const hydrateURL = (text) => {
  const phone = "5493512497230";
  /* checks  first if the browser is mobile */
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return isMobile
    ? `https://wa.me/${phone}/?text=${text}`
    : `https://web.whatsapp.com/send?phone=${phone}&text=${text}`;
};

function sendMessage(kindOfService) {
  const products = ["uñas", "depilación"];
  const baseMessage = products.includes(kindOfService)
    ? `Hola! me gustaría agendar un turno para ${kindOfService}! :) cuál es el precio y las fechas disponibles?`
    : kindOfService;
  const url = hydrateURL(baseMessage);
  window.open(url, "_blank");
}

function configureAccordion() {
  const accordionBtns = document.querySelectorAll(".item-header");

  accordionBtns.forEach((accordion) => {
    if (accordion.classList.contains("active")) {
      accordion.nextElementSibling.style.maxHeight = "100%";
    }

    accordion.onclick = function () {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
        //this is if the accordion is open
        content.style.maxHeight = null;
      } else {
        //if the accordion is currently closed
        content.style.maxHeight = content.scrollHeight + "px";
      }
    };
  });
}

function configureSplide() {
  const config = {
    type: "loop",
    perPage: 1,
    pagination: false,
  };
  new Splide("#splide_1", config).mount();
  new Splide("#splide_2", config).mount();
  new Splide("#splide_3", config).mount();
}

function fadeOutEffect() {
  var fadeTarget = document.getElementById("loader");
  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.5;
    } else {
      clearInterval(fadeEffect);
    }
  }, 200);
}

function fadeInEffect(el, time) {
  el.style.opacity = 0;

  var last = +new Date();
  var tick = function () {
    el.style.opacity = +el.style.opacity + (new Date() - last) / time;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
        setTimeout(tick, 16);
    }
  };

  tick();
}

document.addEventListener("DOMContentLoaded", () => {
  // fadeOutEffect();
  // fadeInEffect(document.getElementById("body"), 3000);

  configureAccordion();
  configureSplide();
});
