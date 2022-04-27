function httpGet(url) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

document.addEventListener("DOMContentLoaded", () => {
  // loads static html using ajax and displays it in the main div
  document.querySelector("#section-services__depilation_spanish").innerHTML =
    httpGet(
      `${window.location.origin}/content/section-services__depilation_spanish.html`
    );
  document.querySelector("#section-services__depilation_definitive").innerHTML =
    httpGet(
      `${window.location.origin}/content/section-services__depilation_definitive.html`
    );
  document.querySelector("#section-services__massages").innerHTML = httpGet(
    `${window.location.origin}/content/section-services__massages.html`
  );
  document.querySelector("#team").innerHTML = httpGet(
    `${window.location.origin}/content/team.html`
  );
  document.querySelector("#team").innerHTML = httpGet(
    `${window.location.origin}/content/attention-schedule.html`
  );
});
