const selectedDate = document.getElementById("selectedDate");
const eventsList = document.getElementById("eventsList");
const addEventButton = document.getElementById("addEventButton");
const showAppointmentsButton = document.getElementById("showAppointmentsButton");
const appointmentsTable = document.getElementById("appointmentsTable");
const appointmentsTableBody = document.querySelector("#appointments tbody");

let events = {};

// Function to handle day click
document.querySelectorAll('.day').forEach(day => {
    day.addEventListener('click', (e) => {
        const date = e.target.textContent;
        selectedDate.textContent = `October ${date}, 2024`;
        displayEvents(date);
    });
});

// Function to display events for the selected date
function displayEvents(date) {
    eventsList.innerHTML = '';
    if (events[date] && events[date].length > 0) {
        events[date].forEach(event => {
            const eventItem = document.createElement("div");
            eventItem.classList.add("event-item");
            eventItem.textContent = `${event.time} - ${event.title}`;
            eventsList.appendChild(eventItem);
        });
    } else {
        eventsList.innerHTML = '<p>No events scheduled for this day.</p>';
    }
}

// Add event handler
addEventButton.addEventListener("click", () => {
    const date = selectedDate.textContent.split(' ')[1];
    const eventTitle = document.getElementById("eventTitle").value;
    const eventTime = document.getElementById("eventTime").value;

    if (!date || !eventTitle || !eventTime) {
        alert("Please fill in all fields.");
        return;
    }

    if (!events[date]) {
        events[date] = [];
    }

    events[date].push({ title: eventTitle, time: eventTime });
    displayEvents(date);

    document.getElementById("eventTitle").value = '';
    document.getElementById("eventTime").value = '';
});

// Show all appointments handler
showAppointmentsButton.addEventListener("click", () => {
    appointmentsTableBody.innerHTML = ''; // Clear the table before adding new rows

    // Loop through all events and add them to the table
    Object.keys(events).forEach(date => {
        events[date].forEach(event => {
            const row = document.createElement("tr");
            const dateCell = document.createElement("td");
            const timeCell = document.createElement("td");
            const titleCell = document.createElement("td");

            dateCell.textContent = `October ${date}, 2024`;
            timeCell.textContent = event.time;
            titleCell.textContent = event.title;

            row.appendChild(dateCell);
            row.appendChild(timeCell);
            row.appendChild(titleCell);
            appointmentsTableBody.appendChild(row);
        });
    });

    // Show the appointments table
    appointmentsTable.style.display = 'block';
});


