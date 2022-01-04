const scrollTop = document.querySelector("#return-to-top");
window.onscroll = () => {
  if (window.scrollY > 300) {
    scrollTop.style.visibility = "visible";
  } else {
    scrollTop.style.visibility = "hidden";
  }
};

const hydrateURL = (text) => {
  const phone = "+5492942560668";
  return `https://wa.me/${phone}?text=${text}`;
};

function sendMessage(kindOfService) {
  const products = ["uñas", "depilación"];
  const baseMessage = products.includes(kindOfService)
    ? `
      Hola! me gustaría agendar un turno para ${kindOfService}! :) cuál es el precio y las fechas disponibles?
    `
    : kindOfService;
  const url = hydrateURL(baseMessage);
  window.open(url, "_blank");
}
