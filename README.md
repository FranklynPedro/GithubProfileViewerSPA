# 🧑‍💻 GitHub Profile Viewer

## Project Overview
This is a single-page web application that allows users to view detailed GitHub profiles and repositories by entering a username. It displays user information such as followers, following, and public repositories. The app also features a toggle for light and dark modes, enhancing the user experience.

## 🌟 Key Features
- **GitHub Profile Data**: Displays the user's name, bio, followers, following, and repositories.
- **Repository Listing**: Shows up to 5 repositories, with clickable links to each repository's GitHub page.
- **Light and Dark Mode**: Users can toggle between light and dark themes for a personalized experience.
- **Error Handling**: Provides informative error messages when no profile is found or there is an issue fetching repositories.
- **Responsive Design**: The app is fully responsive, making it usable on both desktop and mobile devices.
- **Interactive Elements**: Hover effects for interactive elements like repositories and buttons.

## 💻 Technologies Used
The following technologies were used in the development of this application:
- **HTML5**: Used for the basic structure and layout of the application.
- **CSS3**: Styled the page, managed responsive design, and implemented the light/dark mode themes.
- **JavaScript**: Used for the app’s logic, including handling user input, managing the state, and dynamically updating the UI without page reloads.
- **Axios**: A promise-based HTTP client used for fetching data from the GitHub API.
- **Font Awesome**: A library used to provide icons, including the theme toggle icon.

## 💡 Concepts Learned
While working on this project, the following concepts were explored:

### 1. **HTML5 (Structure and Semantics)**
   - **Document Structure**: Understanding the essential building blocks of a webpage, such as `<html>`, `<head>`, `<body>`, and meta tags.
   - **Forms and Inputs**: Using `<input>` elements for user data entry and buttons for triggering actions.
   - **Semantic HTML**: Using header and section elements to structure content clearly.

### 2. **CSS3 (Styling and Layout)**
   - **Responsive Design**: Implementing styles that adapt to different screen sizes, ensuring a mobile-friendly design.
   - **Flexbox**: Leveraging Flexbox for layout, particularly for centering content and arranging elements in the header.
   - **Transitions and Animations**: Using smooth transitions to enhance user interaction (e.g., theme switching and hover effects).
   - **Light and Dark Mode**: Implementing a dynamic theme system using CSS classes and transitions.
   - **Button and Input Styling**: Creating visually appealing and interactive buttons and input fields.

### 3. **JavaScript (Logic and Interactivity)**
   - **DOM Manipulation**: Dynamically updating the content and layout of the page based on user interactions using JavaScript (e.g., updating profile info and repositories).
   - **Event Handling**: Adding event listeners to buttons and inputs to trigger actions, such as submitting a username and toggling themes.
   - **Conditional Logic**: Using if-else statements to handle errors, like displaying error messages when the profile is not found.
   - **API Integration**: Fetching data from the GitHub API using Axios to display user information and repositories.

### 4. **User Experience (UX) Design**
   - **Error Handling**: Providing real-time feedback to users when an error occurs, such as when a profile or repositories cannot be found.
   - **Interactive Design**: Implementing hover effects and interactive elements to improve the user experience.

## 🔍 Features and How They Work

### 1. 🧑‍💻 User Profile Information
Users can input any GitHub username, and the app fetches and displays the following:
- User's **name** and **bio** (if available).
- Number of **followers**, **following**, and **public repositories**.

### 2. 📂 Repository List
The app shows the first 5 public repositories of the user, with clickable links leading to each repository on GitHub.

### 3. 🌗 Light and Dark Mode
Users can toggle between light mode and dark mode using an emoji (🌙) in the top right corner. This enhances accessibility and personalization.

### 4. ⚠️ Error Handling
If the profile or repositories cannot be found, the app will display an error message to the user.

### 5. 📱 Mobile-Friendly
The app is fully responsive and works on both mobile and desktop devices, providing an optimized experience on all screen sizes.

## 🚀 Installation
To run the GitHub Profile Viewer locally:

1. Clone this repository:

    ```bash
    git clone https://github.com/FranklynPedro/GithubProfileViewerSPA.git
    ```

2. Navigate to the project folder:

    ```bash
    cd GithubProfileViewerSPA
    ```

3. Open the `index.html` file in your browser to start using the application.

No server setup is required, as this is a client-side application.

## 📐 Usage

### Searching for a Profile
1. Enter a GitHub username in the search bar and hit "Search."
2. The user's profile information will appear below, including their name, bio, followers, and public repositories.

### Toggling Themes
Click on the moon icon (🌙) in the top right corner to toggle between light and dark modes.

### Viewing Repositories
Click on the repository names to open them on GitHub.

## 🌐 Live Demo
Try the GitHub Profile Viewer online! You can view the [live demo here](https://franklynpedro.github.io/GithubProfileViewerSPA/).

## 🤝 Contributing
If you'd like to contribute to this project, please follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:
    ```bash
    git checkout -b feature-branch
    ```
3. **Commit your changes**:
    ```bash
    git commit -m 'Add new feature'
    ```
4. **Push to your branch**:
    ```bash
    git push origin feature-branch
    ```
5. **Open a pull request**.

## 📜 License
This project is open source and available under the MIT License.

## 🙏 Acknowledgements
- **[Axios](https://axios-http.com/)** for fetching data from the GitHub API.
- **[Font Awesome](https://fontawesome.com/)** for the theme toggle icon.
- **[W3Schools](https://www.w3schools.com/)** and **[GeeksforGeeks](https://www.geeksforgeeks.org/)** for resources on JavaScript and CSS concepts used in the project.

## 🌱 Future Improvements
- **Additional Data**: Include more user data, such as location, company, and website.
- **Infinite Scrolling**: Implement infinite scrolling for displaying more repositories.
- **Search Suggestions**: Add auto-complete suggestions for GitHub usernames.
