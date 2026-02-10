const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);
        displayPost(data);
    });
};

const displayPost = (posts) => {
    //1. get the container
    const postsContainer = document.getElementById("post-container");
    postsContainer.innerHTML = "";
    posts.forEach((post) => {
       //2. element create
       const postCard = document.createElement("div");
       postCard.innerHTML = `
       <div class="post-card">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    </div>`;
    //3. append card
    postsContainer.appendChild(postCard);
    });
};

loadPost();

// {
//     "userId": 10,
//     "id": 99,
//     "title": "temporibus sit alias delectus eligendi possimus magni",
//     "body": "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia"
// }



// const displayPost = (posts) => {
//     // console.log(posts);
//     // for (let i = 0; i < posts.length; i++) {
//     //     console.log(posts[i]);
//     // }

//     // for (let post of posts) {
//     //     console.log(posts);
//     // }
// // 1. post the container
//     const postContainer = document.getElementById("post-container");
//     // console.log(postContainer);
// postContainer.innerHTML = "";
//     posts.forEach((post) => {
//         // console.log(post.title);
//         //2. create HTML element
//         const li = document.createElement("li");
//         li.innerText = post.title;
//         // console.log(li);
//         //3. add li into container
//         postContainer.appendChild(li);
//     })
// };