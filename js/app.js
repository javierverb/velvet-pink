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

document.addEventListener("DOMContentLoaded", () => {
  new Splide("#splide_1").mount();
  new Splide("#splide_2").mount();
  new Splide("#splide_3").mount();
});
