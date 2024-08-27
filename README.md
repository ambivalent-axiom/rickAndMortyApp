Rick and Morty API Web Application
Overview
This project focuses on developing a web application using React to explore characters from the "Rick and Morty" series. It utilizes the Rick and Morty API to fetch character data dynamically. Users can interact with an infinite scroll of characters and use features like sorting and filtering to locate their favorites efficiently.

Application Features
Character Display: Display characters along with details such as name, status, species, and image in an infinitely scrolling view.
Infinite Scrolling: Load and display more characters as the user scrolls down, replacing traditional pagination.
Sorting: Users can sort characters by name, status, or species.
Filtering: Implement filtering to view characters by specific criteria such as name, status, or species. This should include debounce techniques to optimize performance and enhance user experience. The search through filters will occur automatically as the user types, without the need to submit a search button, making the debounce implementation crucial for reducing excessive API calls.
Detailed View: Clicking on a character card shows more detailed information in a modal or a dedicated component.
Technical Requirements
Axios: Use Axios for making HTTP requests to the Rick and Morty API.
TanStack Router: Implement routing using TanStack Router for navigating between views.
TanStack Query: Use TanStack Query for efficient data fetching, caching, and state management.
Ant Design (AntD) or any other UI library of your choice: Use Ant Design components for building the UI.
Debouncing: Apply debouncing techniques to filtering inputs to reduce the number of API requests made while typing.