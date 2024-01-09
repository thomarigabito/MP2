// Array of products
const product = [
  {
    id: 0,
    image: "Assets/house_specs/CamellaArielle.jpg",
    title: "Harmony Haven",
    price: "1200000",
    details: "loginpage.html",
    floor: "98sqm",
    bathroom: "2",
  },
  {
    id: 1,
    image: "Assets/house_specs/CamellaCriselle.jpg",
    title: "Serenity Suite",
    price: "1500000",
    details: "loginpage.html",
    floor: "98sqm",
    bathroom: "2",
  },
  {
    id: 2,
    image: "Assets/house_specs/CamellaDana.jpg",
    title: "Crestview",
    price: "2300000",
    details: "loginpage.html",
    floor: "98sqm",
    bathroom: "2",
  },
  {
    id: 3,
    image: "Assets/house_specs/CamellaElla.jpg",
    title: "Radiant Retreat",
    price: "3500000",
    details: "loginpage.html",
    floor: "98sqm",
    bathroom: "2",
  },
  {
    id: 4,
    image: "Assets/house_specs/CamellaEzabelle.jpg",
    title: "Tranquil Terrace",
    price: "2300000",
    details: "loginpage.html",
    floor: "98sqm",
    bathroom: "2",
  },
  {
    id: 5,
    image: "Assets/house_specs/CamellaFreya.jpg",
    title: "Majestic Manor",
    price: "4500000",
    details: "loginpage.html",
    floor: "98sqm",
    bathroom: "2",
  },
  {
    id: 6,
    image: "Assets/house_specs/CamellaGreta.jpg",
    title: "Majestic Manor",
    price: "4500000",
    details: "loginpage.html",
    floor: "98sqm",
    bathroom: "2",
  },
  {
    id: 7,
    image: "Assets/house_specs/CamellaGreta.jpg",
    title: "Majestic Manor",
    price: "4500000",
    details: "loginpage.html",
    floor: "98sqm",
    bathroom: "2",
  },
  {
    id: 8,
    image: "Assets/house_specs/CamellaEzabelle.jpg",
    title: "Tranquil Terrace",
    price: "2300000",
    details: "loginpage.html",
    floor: "98sqm",
    bathroom: "2",
  },
  {
    id: 9,
    image: "Assets/house_specs/CamellaEzabelle.jpg",
    title: "Tranquil Terrace",
    price: "2300000",
    details: "loginpage.html",
    floor: "98sqm",
    bathroom: "2",
  },
  {
    id: 10,
    image: "Assets/house_specs/CamellaEzabelle.jpg",
    title: "Tranquil Terrace",
    price: "2300000",
    details: "loginpage.html",
    floor: "98sqm",
    bathroom: "2",
  },
];

// Array of categories (using Set to get unique items based on title)
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];

// Event listener for the search bar
document.getElementById("searchBar").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filteredData = categories.filter((item) => {
    return item.title.toLowerCase().includes(searchData);
  });
  displayItem(filteredData);
});

// Event listener for the price bar
document.getElementById("priceBar").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filteredData = categories.filter((item) => {
    return item.price.toLowerCase().includes(searchData);
  });
  displayItem(filteredData);
});

// Function to display items based on filtered data
const displayItem = (items) => {
  document.getElementById("root").innerHTML = items
    .map((item) => {
      var { image, title, price, details, floor, bathroom,  } = item;
      return `<div class='box'>
                    <div class='img-box'>
                        <img class='images' src=${image}></img>
                    </div> 
                    <div class='detailsbox'>
                        <div class='bottom'>
                            <h1>${title}</h1>
                            <h2>PHP ${price}.00</h2>
                            <p> <i class="fa-solid fa-house"></i> Floor Area: ${floor} </p>
                            <p> <i class="fa-solid fa-toilet"></i> Bathroom: ${bathroom} </p>
                            <button class="cardbtn"><a href=${details}> Details </a> </button>
                        </div>
                    </div>  
                </div>`;
    })
    .join("");
};

// Initial display of all categories
displayItem(categories);


//Feedback Section- Arrays used= "postsData" and the "replies" property 
      //*(For fundamental data structure in programming that allows you to store and manipulate collections of data.)*

// Initialize postsData array to store posts and replies
let postsData = [];

// Function to publish a post
function publishPost() {
  // Get input values from the form
  let postText = document.getElementById('postText').value;
  let authorName = document.getElementById('authorName').value || 'Anonymous';
  // Create a new post object
  let newPost = {
    text: postText,
    author: authorName,
    replies: [], // Reply array to store replies for the post
    likes: 0,
    loves: 0,
    unlikes: 0
  };

  // Add the new post to the postsData array
  postsData.push(newPost);
  // Save postsData to local storage, Convert postsData array to a JSON string and store it in local storage
      //*(JSON.stringify() is used to serialize a JavaScript object (or value) into a string representation that can be easily stored, transmitted, or shared.)*
  localStorage.setItem('postsData', JSON.stringify(postsData));
  // Show updated posts
  showPosts();

  // Clear the text area and author name after publishing
  document.getElementById('postText').value = "";
  document.getElementById('authorName').value = "";
}

// Function to show posts
function showPosts() {
  // Retrieve stored postsData from local storage or initialize an empty array
  let storedPosts = JSON.parse(localStorage.getItem('postsData')) || [];
  let postsSection = $('#postsSection');
  postsSection.empty(); // Clear existing posts

  // Loop through each stored post and render it
  storedPosts.forEach(function (post, index) {
    let postHtml = `
      <div class="col-sm-12">
        <p class="author-name">${post.author}: ${post.text}</p>

        <!-- Like button and count -->
        <button type="button" class="btn btn-primary" onclick="toggleLike(${index})">
          <span class="glyphicon glyphicon-thumbs-up"></span> Like
        </button>
        <span id="likesCount${index}" class="like-icon">${post.likes || 0}</span>

        <!-- Love button and count -->
        <button type="button" class="btn btn-danger" onclick="toggleLove(${index})">
          <span class="glyphicon glyphicon-heart"></span> Love
        </button>
        <span id="lovesCount${index}" class="love-icon">${post.loves || 0}</span>
        
        <!-- Unlike button and count -->
        <button type="button" class="btn btn-warning" onclick="toggleUnlike(${index})">
          <span class="glyphicon glyphicon-thumbs-down"></span> Unlike
        </button>
        <span id="unlikesCount${index}" class="unlike-icon">${post.unlikes || 0}</span>
        <br />

        <!-- Textarea for replying to the post -->
        <textarea id="replyText${index}" rows="2" placeholder="Write a reply"></textarea>
        <button type="button" class="btn btn-info" onclick="replyToPost(${index})">Reply</button>
        <br />

        <!-- Container for displaying replies -->
        <div id="repliesSection${index}">
          <!-- Replies will be dynamically added here -->

        </div>
      </div>
    `;

    postsSection.append(postHtml);


    renderReplies(index);
  });

  // Update post count
  $('#postCount').text(storedPosts.length);
}


// Function to render replies for a post
function renderReplies(postIndex) {
  let repliesSection = $('#repliesSection' + postIndex);
  repliesSection.empty(); // Clear existing replies

  // Loop through each reply for the current post and render it
  postsData[postIndex].replies.forEach(function (reply, replyIndex) {
    let replyHtml = `
      <div class="col-sm-12">
        <p class="author-name">${reply.author}: ${reply.text}</p>

        <!-- Like button and count for reply -->
        <button type="button" class="btn btn-primary" onclick="toggleLike(${postIndex}, ${replyIndex})">
          <span class="glyphicon glyphicon-thumbs-up"></span> Like
        </button>
        <span id="likesCount${postIndex}-${replyIndex}" class="like-icon">${reply.likes || 0}</span>

        <!-- Love button and count for reply -->
        <button type="button" class="btn btn-danger" onclick="toggleLove(${postIndex}, ${replyIndex})">
          <span class="glyphicon glyphicon-heart"></span> Love
        </button>
        <span id="lovesCount${postIndex}-${replyIndex}" class="love-icon">${reply.loves || 0}</span>

        <!-- Unlike button and count for reply -->
        <button type="button" class="btn btn-warning" onclick="toggleUnlike(${postIndex}, ${replyIndex})">
          <span class="glyphicon glyphicon-thumbs-down"></span> Unlike
        </button>
        <span id="unlikesCount${postIndex}-${replyIndex}" class="unlike-icon">${reply.unlikes || 0}</span>
      </div>
    `;

    repliesSection.append(replyHtml);
  });
}

// Function to reply to a post
function replyToPost(postIndex) {
  // Get reply text and author name from the form
  let replyText = document.getElementById('replyText' + postIndex).value;
  let authorName = document.getElementById('authorName').value || 'Anonymous'; // Changed from 'authorName' + postIndex to 'authorName'

  // Create a new reply object
  let newReply = {
    text: replyText,
    author: authorName,
    likes: 0,
    loves: 0,
    unlikes: 0
  };

  // Add the new reply to the replies array of the current post
  postsData[postIndex].replies.push(newReply);

  // Render updated replies for the current post
  renderReplies(postIndex);

  // Save postsData to local storage
  localStorage.setItem('postsData', JSON.stringify(postsData));

  // Clear the reply text area and author name after replying
  document.getElementById('replyText' + postIndex).value = "";
  document.getElementById('authorName').value = ""; // Changed from 'authorName' + postIndex to 'authorName'
}

// Function to toggle like on a post or reply
function toggleLike(postIndex, replyIndex) {
  let target = replyIndex !== undefined ? postsData[postIndex].replies[replyIndex] : postsData[postIndex];
  target.likes = target.likes ? 0 : 1; // Toggle like

  // Update likes count and color
  let elementId = replyIndex !== undefined ? `likesCount${postIndex}-${replyIndex}` : `likesCount${postIndex}`;
  $('#' + elementId).text(target.likes);
  $('#' + elementId).toggleClass('like-icon', target.likes !== 0);
  localStorage.setItem('postsData', JSON.stringify(postsData));
}

// Function to toggle love on a post or reply
function toggleLove(postIndex, replyIndex) {
  let target = replyIndex !== undefined ? postsData[postIndex].replies[replyIndex] : postsData[postIndex];
  target.loves = target.loves ? 0 : 1; // Toggle love

  // Update loves count and color
  let elementId = replyIndex !== undefined ? `lovesCount${postIndex}-${replyIndex}` : `lovesCount${postIndex}`;
  $('#' + elementId).text(target.loves);
  $('#' + elementId).toggleClass('love-icon', target.loves !== 0);
  localStorage.setItem('postsData', JSON.stringify(postsData));
}

// Function to toggle unlike on a post or reply
function toggleUnlike(postIndex, replyIndex) {
  let target = replyIndex !== undefined ? postsData[postIndex].replies[replyIndex] : postsData[postIndex];
  target.unlikes = target.unlikes ? 0 : 1; // Toggle unlike

  // Update unlikes count and color
  let elementId = replyIndex !== undefined ? `unlikesCount${postIndex}-${replyIndex}` : `unlikesCount${postIndex}`;
  $('#' + elementId).text(target.unlikes);
  $('#' + elementId).toggleClass('unlike-icon', target.unlikes !== 0);
  localStorage.setItem('postsData', JSON.stringify(postsData));
}

// Initial rendering of posts
showPosts();
