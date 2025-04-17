document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector("#members-container");
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");
  
    const dataURL = "data/members.json";
  
    async function getMembers() {
      try {
        const response = await fetch(dataURL);
        const data = await response.json();
        displayMembers(data.companies);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    }
  
    function displayMembers(companies) {
      display.innerHTML = '';
  
      companies.forEach((company) => {
        const card = document.createElement("section");
  
        card.innerHTML = `
          <img src="images/${company.image}" alt="${company.name} logo" loading="lazy" class="company-logo">
          <div>
            <h3>${company.name}</h3>
            <p class="description">${company.description}</p>
            <p><strong>Address:</strong> ${company.address}</p>
            <p><strong>Phone:</strong> ${company.phone}</p>
            <p><a href="${company.website}" target="_blank">Visit Website</a></p>
            <p><strong>Level:</strong> ${company.membershipLevel}</p>
          </div>
        `;
  
        display.appendChild(card);
      });
    }
  
    // View toggle handlers
    gridButton.addEventListener("click", () => {
      display.classList.add("grid");
      display.classList.remove("list");
    });
  
    listButton.addEventListener("click", () => {
      display.classList.add("list");
      display.classList.remove("grid");
    });
  
    // Load members on page load
    getMembers();
  });
  