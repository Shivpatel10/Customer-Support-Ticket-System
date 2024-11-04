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

    } catch (error) {
        // Display the error message in the error message section
        document.getElementById('errorMessage').textContent = error.message;
        console.error('Error:', error.message);
    }
}
fetchUnresolvedTicketsAPI(); // Call the function to fetch tickets