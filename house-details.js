// house-details.js

// Function to show the selected tab's content
function showDetails(tabId) {
    // Hide all content sections
    const allContent = document.querySelectorAll('.details-content');
    allContent.forEach(content => content.classList.remove('active'));

    // Show the clicked tab's content
    const selectedContent = document.getElementById(tabId);
    selectedContent.classList.add('active');
}
