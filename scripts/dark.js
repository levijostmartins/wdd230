const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.backgroundColor = "#333"; 
        main.style.color = "#000"; 
        modeButton.textContent = "🔆";
    } else {
        main.style.backgroundColor = "#eee"; 
        main.style.color = "#000"; 
        modeButton.textContent = "🕶️";
    }
});
