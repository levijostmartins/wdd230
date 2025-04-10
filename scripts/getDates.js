const visitsDisplay = document.querySelector("#visits");
let numVisits = Number(localStorage.getItem("visits-ls")) || 0;
visitsDisplay.textContent = numVisits;

numVisits++;
localStorage.setItem("visits-ls", numVisits);
