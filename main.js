// Task 1: Setup HTML Structure for the Ticket System

// Task 2: Fetch Tickets Using Async/Await and Handle Errors
async function fetchUnresolvedTicketsAPI() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const customer = await response.json();
    console.log('Customer:', customer);
}