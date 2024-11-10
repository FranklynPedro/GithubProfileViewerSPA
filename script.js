const APIURL = "https://api.github.com/users/";
const form = document.getElementById("form");
const main = document.getElementById("main");
const search = document.getElementById("search");
const clearButton = document.getElementById("clear-search");
const themeToggle = document.getElementById("theme-toggle");

// Function to toggle dark mode
themeToggle.addEventListener("click", () => {
  // Toggle dark-mode class on the body element
  document.body.classList.toggle("dark-mode");
  // Change the emoji based on dark mode state
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "🌞"; // Sun emoji for light mode
  } else {
    themeToggle.textContent = "🌙"; // Moon emoji for dark mode
  }
});

// Function to create the user card with their data
function createUserCard(user) {
  const cardHTML = `
    <div class="card">
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar" />
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio || "This user has no bio."}</p>
        <ul>
          <li><strong>${user.followers}</strong> Followers</li>
          <li><strong>${user.following}</strong> Following</li>
          <li><strong>${user.public_repos}</strong> Repos</li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>
  `;
  main.innerHTML = cardHTML;
}

// Function to handle errors (in case of invalid username)
function createErrorCard(message) {
  main.innerHTML = `<div class="card"><h2>${message}</h2></div>`;
}

// Function to add repositories to the user profile card
function addReposToCard(repos) {
  const reposElement = document.getElementById("repos");
  repos.slice(0, 5).forEach((repo) => {
    const repoElement = document.createElement("a");
    repoElement.classList.add("repo");
    repoElement.href = repo.html_url;
    repoElement.target = "_blank";
    repoElement.innerText = repo.name;
    reposElement.appendChild(repoElement);
  });
}

// Fetch user data from GitHub API
async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
    getRepos(username);
  } catch (error) {
    createErrorCard("No profile found with this username.");
  }
}

// Fetch repositories from GitHub API
async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");
    addReposToCard(data);
  } catch (error) {
    createErrorCard("Problem fetching repositories.");
  }
}

// Event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value.trim();
  if (user) {
    getUser(user);
    search.value = "";
  }
});

// Event listener for clearing search
clearButton.addEventListener("click", () => {
  search.value = "";
  main.innerHTML = "";
});
