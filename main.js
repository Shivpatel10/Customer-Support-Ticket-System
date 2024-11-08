// Task 1: Setup HTML Structure for the Ticket System


// Task 2: Fetch Tickets Using Async/Await and Handle Errors
async function fetchUnresolvedTicketsAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); //// Fetch data from the API

        
        if (!response.ok) { //using if to see response success
            throw new Error('Problem fetching tickets.');
        }
        const ticketsUnresolved = await response.json(); //// Parse the JSON data

        if (ticketsUnresolved.length === 0) { // If tickets found = 0 then, error
            throw new Error('No unresolved tickets found.');
        }
        displayTickets(ticketsUnresolved); // calls displaytickets so it can display when the function is used

    } catch (error) {  // Display the error message in the error message section
        document.getElementById('errorMessage').textContent = error.message;
        console.error('Error:', error.message);
    }
}

// Task 3: Display Tickets Dynamically on the Page
function displayTickets(tickets) {
    const ticketContainer = document.getElementById('ticketContainer');

    tickets.forEach(ticket => {
        const ticketItem = document.createElement('div');

    // Creating elements for each piece of info
    const ticketID = document.createElement('div');
        ticketID.textContent = `Ticket ID: ${ticket.id}`;
            ticketItem.appendChild(ticketID); //appending the created item

    const customerName = document.createElement('div');
        customerName.textContent = `Customer Name: User ${ticket.userId}`;
            ticketItem.appendChild(customerName); //appending the created item

    const issueDescription = document.createElement('div');
        issueDescription.textContent = `Issue Description: ${ticket.title}`;
            ticketItem.appendChild(issueDescription); //appending the created item

    const Details = document.createElement('div');
        Details.textContent = `Issue Details: ${ticket.body}`;
            ticketItem.appendChild(Details); //appending the created item
    });
}

fetchUnresolvedTicketsAPI(); // Call the function to fetch tickets


// Task 4: Use finally to Ensure Cleanup
 if (ticketContainer.innerHTML === 'Fetching support tickets...') {
    ticketContainer.innerHTML = 'No tickets fetched.'; // Used as an update if still showing loading message
 };