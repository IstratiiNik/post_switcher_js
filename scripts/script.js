function loadPost() {
  fetch(`https://jsonplaceholder.typicode.com/posts/${post_number}`)
    .then((response) => response.json())
    .then(({ title, body }) => createPost(title, body))
    .catch(() =>
      createPost(
        "An error occurred",
        "An error occurred while loading the post"
      )
    );
}

function createPost(title, body) {
  root.innerText = "";
  const title_p = document.createElement("p");
  const body_p = document.createElement("p");
  const container = document.createElement("div");

  body_p.innerText = body;
  title_p.innerText = title;
  container.classList.add("post");
  title_p.classList.add("subheader");

  container.append(title_p, body_p);
  root.append(container);
}

left_trigger.addEventListener("click", () => {
  if (post_number > 0) {
    post_number--;
    loadPost();
  }
});

right_trigger.addEventListener("click", () => {
  post_number++;
  loadPost();
});
