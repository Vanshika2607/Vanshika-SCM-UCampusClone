const searchBox = document.getElementById("Searchbox");
const books = document.querySelectorAll('.book'); // Select all book elements

// Add an event listener to the search input
searchBox.addEventListener('input', () => {
    const filter = searchBox.value.toLowerCase(); // Get the search term and convert it to lowercase
    
    // Loop through all the books and check if their title includes the search term
    books.forEach(book => {
        const title = book.querySelector('h3').textContent.toLowerCase(); // Get the book title
        if (title.includes(filter)) {
            book.style.display = ''; // Show the book if it matches
        } else {
            book.style.display = 'none'; // Hide the book if it doesn't match
        }
    });
});