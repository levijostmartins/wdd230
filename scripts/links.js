const baseURL = "https://yourusername.github.io/wdd230/";
const linksURL = "data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.weeks);
}

function displayLinks(weeks) {
  const activitiesDiv = document.getElementById("activities");
  weeks.forEach(week => {
    const weekSection = document.createElement("section");
    const weekTitle = document.createElement("h3");
    weekTitle.textContent = week.week;
    weekSection.appendChild(weekTitle);

    const ul = document.createElement("ul");

    week.links.forEach(link => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = baseURL + link.url;
      a.textContent = link.title;
      a.target = "_blank";
      li.appendChild(a);
      ul.appendChild(li);
    });

    weekSection.appendChild(ul);
    activitiesDiv.appendChild(weekSection);
  });
}

getLinks();
