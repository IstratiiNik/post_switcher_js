// Getting links to DOM elements
const root = document.querySelector(".root"); // Container for displaying posts
const left_trigger = document.querySelector(".left"); // Button to switch to the previous post
const right_trigger = document.querySelector(".right"); // Button to switch to the next post

// Initialize the current post number
let post_number = 1;

// Function to load a post from the server
function loadPost() {
  // Perform an API request to get post data
  fetch(`https://jsonplaceholder.typicode.com/posts/${post_number}`)
    .then((response) => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Failed to fetch post");
      }
      return response.json();
    })
    .then(({ title, body, id }) => createPost(title, body, id)) // Create a post based on the data
    .catch(() =>
      createPost(
        "An error occurred", // Error title
        "An error occurred while loading the post" // Error message
      )
    );
}

// Function to create and display a post
function createPost(title, body, id) {
  // Clear the container content before adding a new post
  root.innerText = "";

  // Create elements for the post title, text, and ID
  const title_h2 = document.createElement("h2");
  const body_p = document.createElement("p");
  const title_id = document.createElement("h2");
  const container = document.createElement("div");

  // Fill the elements with data
  body_p.innerText = body;
  title_h2.innerText = title;
  title_id.innerText = `Post number: ${id}`;

  // Add classes for styling
  container.classList.add("post");
  title_h2.classList.add("subheader");

  // Add elements to the container
  container.append(title_id, title_h2, body_p);

  // Add the container to the root element
  root.append(container);
}

// Event handler for the button to switch to the previous post
left_trigger.addEventListener("click", () => {
  // If the post number is less than or equal to 1, go to the last post
  if (post_number <= 1) {
    post_number = 101; // Set the post number to 101 (so it becomes 100 after decrement)
  }
  post_number--; // Decrease the post number
  loadPost(); // Load the post
});

// Event handler for the button to switch to the next post
right_trigger.addEventListener("click", () => {
  // If the post number is 100, go to the first post
  if (post_number === 100) {
    post_number = 0; // Set the post number to 0 (so it becomes 1 after increment)
  }
  post_number++; // Increase the post number
  loadPost(); // Load the post
});
