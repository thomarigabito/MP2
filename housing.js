// Functionality of Housing Page by Jed- embed on Dec. 20, 2023
document.addEventListener('DOMContentLoaded', function () {
    
    // Get the form and submit button elements
    var form = document.getElementById('myForminquiries');
    var submitBtn = document.querySelector('#myModalForm .btn-success');

    // Add a click event listener to the submit button
    submitBtn.addEventListener('click', function () {
        // Get form data
        var name = document.getElementById('myName').value;
        var email = document.getElementById('myEmail').value;
        var contact = document.getElementById('myContact').value;
        var houseModel = document.getElementById('myHousemodel').value;
        var date = document.getElementById('myDate').value;

        // Validate and store data in local storage
        if (name && email && contact && houseModel && date) {
            var inquiryData = {
                name: name,
                email: email,
                contact: contact,
                houseModel: houseModel,
                date: date
            };

            // Retrieve existing data from local storage or initialize an empty array
            var existingData = JSON.parse(localStorage.getItem('inquiryData')) || [];

            // Add the new inquiry data to the array
            existingData.push(inquiryData);

            // Save the updated data back to local storage
            localStorage.setItem('inquiryData', JSON.stringify(existingData));

            // Send the data to your admin page using AJAX
            sendInquiryData(inquiryData);

            // Show a success message alert
            alert('Inquiry submitted successfully! Thank you!');

            // Close the modal
            var modal = new bootstrap.Modal(document.getElementById('myModalForm'));
            modal.hide();

            // Clear the form
            form.reset();
        } else {
            alert('Please fill in all fields');
        }
    });

    // Function to send inquiry data to the admin page using AJAX
    function sendInquiryData(data) {
        // Assuming your admin page URL is "admin.html"
        var adminPageURL = 'admin.html';

        // Use AJAX to send the data to the admin page
        var xhr = new XMLHttpRequest();
        xhr.open('POST', adminPageURL, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log('Data sent successfully to admin page');
            }
        };

        xhr.send(JSON.stringify(data));
    }
});