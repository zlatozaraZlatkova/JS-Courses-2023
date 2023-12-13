function attachEvents() {
    document.querySelector("#btnLoadPosts").addEventListener("click", loadAllPosts);
    document.querySelector("#btnViewPost").addEventListener("click", displayPost); 
  }
  attachEvents();
  
  
  async function displayPost() {
    const postTitle = document.querySelector("#post-title");
    const postBody = document.querySelector("#post-body");
    const postComments = document.querySelector("#post-comments"); 
  
    postTitle.textContent = "Loading...";
    postBody.textContent = "Loading...";
    postComments.replaceChildren();
  
    const selectedId = document.querySelector("#posts").value;

    const [post, comments] = await Promise.all([
      getPostById(selectedId),
      viewPostById(selectedId)
    ])
  
    postTitle.textContent = post.title;
    postBody.textContent = post.body;
  
    Object.values(comments).forEach(comment => {
      const li = document.createElement("li");
      li.id = comment.id;
      li.textContent = comment.text;
      postComments.appendChild(li);
    })
  
  }
  
  
  async function loadAllPosts(event) {
    const url = `http://localhost:3030/jsonstore/blog/posts`;
    const response = await fetch(url);
    const data = await response.json();
  
    const postsSection = document.querySelector("#posts");
  
    postsSection.replaceChildren();
  
    Object.values(data).forEach(post => {
      const optionEl = document.createElement("option");
      optionEl.value = post.id;
      optionEl.textContent = post.title;
      postsSection.appendChild(optionEl);
  
    })
  
  }
  async function getPostById(postId) {
    const url = `http://localhost:3030/jsonstore/blog/posts/${postId}`;
    const response = await fetch(url);
    try {
      if (response.status != 200) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
  
    } catch (error) {
      const postComments = document.querySelector("#post-comments"); 
      postComments.innerHTML = `<li>Error: ${error.message}</li>`;
  
    }
  
  
    return data;
  }
  
  async function viewPostById(postId) {
    const url = ` http://localhost:3030/jsonstore/blog/comments`;
    const response = await fetch(url);
    try {
      if (response.status != 200) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      const selectedComment = Object.values(data).filter(comment => comment.postId == postId);
  
      return selectedComment;
  
    } catch (error) {
      const postComments = document.querySelector("#post-comments"); 
      postComments.innerHTML = `<li>Error: ${error.message}</li>`;
  
    }
  
  }