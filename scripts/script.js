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
