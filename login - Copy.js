// Handle the form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const regNumber = document.getElementById('regNumber').value;
    const house = document.getElementById('house').value; // Get selected house
    const club1 = document.getElementById('club1').value;
    const club2 = document.getElementById('club2').value;
    const club3 = document.getElementById('club3').value;

    // Store values in localStorage
    localStorage.setItem('house', house);
    localStorage.setItem('club1', club1);
    localStorage.setItem('club2', club2);
    localStorage.setItem('club3', club3);

    // Redirect to the dashboard
    window.location.href = 'dashboard.html';
});
