'use strict;'

function searchPost() {
  const postId = document.getElementById("postIdInput").value;
  if (postId < 1 || postId > 100) {
    alert("ID повинно бути від 1 до 100");
    return;
  }

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((post) => {
        const postContainer = document.getElementById("postContainer");
        postContainer.innerHTML = `
        <h2>Знайдений пост:</h2>
        <div>
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <button onclick="fetchComments(${postId})">Отримати
коментарі</button>
        </div>
      `;
      })
      .catch((error) => {
        alert("При пошуку поста виникла помилка:", error.message);
        console.error("Error:", error);
      });
}

function fetchComments(postId) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((comments) => {
        const postContainer = document.getElementById("postContainer");
        const commentsList = comments
            .map((comment) => `<li>${comment.body}</li>`)
            .join("");
        postContainer.innerHTML += `
        <h3>Коментарі:</h3>
        <ul>${commentsList}</ul>
      `;
      })
      .catch((error) => {
        alert("При отриманні коментарів виникла помилка:", error.message);
        console.error("Error:", error);
      });
}


