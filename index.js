

let amount;
let payment;
let percent;
let interest;





    
function myComputation() {
    amount = Number(amount);
    payment = Number(payment);
    percent = Number(percent);
    amount = document.getElementById("loanAmount").value;
    payment = document.getElementById("loanPayment").value;
    percent = document.getElementById("paymentPeriod").value;
    
    let interest = amount * payment * percent;
    interest = Number(interest);
    document.getElementById("Amount").innerHTML = interest;
}   




// Sample comments data (you can replace this with data from a server/database)
var commentsData = [
    { author: 'Client 1', date: 'Dec. 1, 2023', content: 'This is a helpful website.' },
    { author: 'Client 2', date: 'Dec. 2, 2023', content: 'Great website, reliable!', likes: 0 },
    { author: 'Client 3', date: 'Dec. 3, 2023', content: 'Appreciate this website very much!!', likes: 0 }
  ];

  // Function to render comments
  function renderComments() {
    var commentsSection = $('#commentsSection');
    commentsSection.empty(); // Clear existing comments

    commentsData.forEach(function(comment) {
      var commentHtml = `
        <div class="col-sm-2 text-center">
          <img src="Assets/Boyband1.jpg" class="img-circle" height="65" width="65" alt="Avatar">
        </div>
        <div class="col-sm-10">
          <h4>${comment.author} <small>${comment.date}</small></h4>
          <p>${comment.content}</p>
          <button type="button" class="btn btn-default" onclick="toggleLike(${commentsData.indexOf(comment)})">
            <span class="glyphicon glyphicon-thumbs-up"></span> Like
          </button>
          <span id="likesCount${commentsData.indexOf(comment)}">${comment.likes || 0}</span>
          <br><br>
        </div>
      `;
      commentsSection.append(commentHtml);
    });

    // Update comment count
    $('#commentCount').text(commentsData.length);
  }

  // Function to post a new comment
  function postComment() {
    var newComment = {
      author: 'New User', // You can replace this with the actual user's info
      date: new Date().toLocaleDateString(), // Use the current date
      content: $('#commentText').val(),
      likes: 0
    };

    commentsData.push(newComment);
    renderComments();
  }

  // Function to toggle like on a comment
  function toggleLike(commentIndex) {
    var comment = commentsData[commentIndex];
    comment.likes = comment.likes ? 0 : 1; // Toggle like

    // Update likes count
    $('#likesCount' + commentIndex).text(comment.likes);
  }

  // Initial rendering of comments
  renderComments();