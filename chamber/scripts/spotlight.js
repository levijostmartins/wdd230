const spotlightContainer = document.getElementById("member-container");

async function getMembers() {
    try {
        const response = await fetch("data/members.json");
        const data = await response.json();
        const members = data.companies;

        // Shuffle and select 3 random members
        const shuffled = members.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);

        displaySpotlights(selected);
    } catch (error) {
        console.error("Error loading members:", error);
    }
}

function displaySpotlights(members) {
    spotlightContainer.innerHTML = ""; // clear

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("spotlight-card");

        const img = document.createElement("img");
        img.src = `images/${member.image}`;
        img.alt = `${member.name} logo`;

        const name = document.createElement("h4");
        name.textContent = member.name;

        card.appendChild(img);
        card.appendChild(name);
        spotlightContainer.appendChild(card);
    });
}

getMembers();
