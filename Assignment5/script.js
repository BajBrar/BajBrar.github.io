document.addEventListener("DOMContentLoaded", function () {
    //grabs the dropdown elements
    const genreFilter = document.getElementById("genreFilter");
    const authorFilter = document.getElementById("authorFilter");
    const formatFilter = document.getElementById("formatFilter");
    const bookGrid = document.getElementById("bookGrid");
  
    //I have an empty array that I will store the books in
    let booksData = [];
  
    // Fetch books data from JSON (Followed an example from the geeksforgeeks web)
    fetch("books.json")
      .then((response) => response.json())
      .then((data) => {
        booksData = data;
        populateFilters(data);
        populateBooks(data);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  
    // Populate filter dropdowns with unique values
    function populateFilters(books) {
      const genres = new Set();
      const authors = new Set();
      const formats = new Set();
      //The sets should only contain unique values
      books.forEach((book) => {
        genres.add(book.genre);
        authors.add(book.author);
        formats.add(book.format);
      });
  
      genres.forEach((genre) => {
        genreFilter.appendChild(new Option(genre, genre));
      });
  
      authors.forEach((author) => {
        authorFilter.appendChild(new Option(author, author));
      });
  
      formats.forEach((format) => {
        formatFilter.appendChild(new Option(format, format));
      });
    }
  
    function populateBooks(filteredBooks) {
      bookGrid.innerHTML = ""; 
  
      filteredBooks.forEach((book) => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
  
        //My text was too long and it was creating blank sections in the website
        const shortText = book.text.slice(0, 160);
        const isLong = book.text.length > 160;
  
        //Create and append the book link and image
        const bookLink = document.createElement("a");
        bookLink.href = book.wikiLink;
        bookLink.target = "_blank";
        
        const bookImage = document.createElement("img");
        bookImage.src = book.imageUrl;
        bookImage.alt = book.altText;
        bookLink.appendChild(bookImage); 
        bookElement.appendChild(bookLink);
  
        // Create and append the book title
        const bookTitle = document.createElement("h2");
        const titleLink = document.createElement("a");
        titleLink.href = book.wikiLink;
        titleLink.target = "_blank";
        titleLink.textContent = book.title;
        bookTitle.appendChild(titleLink); 
        bookElement.appendChild(bookTitle);

        // Create and append author, genre, format, and date read
        const author = document.createElement("p");
        author.innerHTML = `<strong>Author:</strong> ${book.author}`;
        const genre = document.createElement("p");
        genre.innerHTML = `<strong>Genre:</strong> ${book.genre}`;
        const format = document.createElement("p");
        format.innerHTML = `<strong>Format:</strong> ${book.format}`;
        const dateRead = document.createElement("p");
        dateRead.innerHTML = `<strong>Read on:</strong> ${book.dateRead}`;
  
        bookElement.append(author, genre, format, dateRead); 
        
        // Create the book description
        const bookText = document.createElement("p");
        bookText.classList.add("book-text");
  
        // Check if the text is long and display accordingly
        if (isLong) {
          const textNode = document.createTextNode(shortText); // Create text node for the short text
          const dots = document.createElement("span");
          dots.className = "dots";
          dots.textContent = "...";
  
          const moreText = document.createElement("span");
          moreText.className = "more-text";
          moreText.textContent = book.text.slice(160);
          moreText.style.display = "none"; // Initially hide the "more text" part
  
          bookText.appendChild(textNode); // Append short text
          bookText.appendChild(dots); // Append ellipsis
          bookText.appendChild(moreText); // Append the rest of the long text
  
          // Create and append the "Show More" button
          const toggleBtn = document.createElement("button");
          toggleBtn.className = "toggle-btn";
          toggleBtn.textContent = "Show More";
  
          // Add click event listener for toggling text visibility
          toggleBtn.addEventListener("click", function () {
            const isExpanded = moreText.style.display === "inline";
            moreText.style.display = isExpanded ? "none" : "inline"; // Toggle text visibility
            dots.style.display = isExpanded ? "inline" : "none"; // Toggle ellipsis visibility
            this.textContent = isExpanded ? "Show More" : "Show Less"; // Toggle button text
          });
  
          bookElement.appendChild(bookText); // Append book description
          bookElement.appendChild(toggleBtn); // Append toggle button for long text
        } else {
          bookText.textContent = book.text;
          bookElement.appendChild(bookText); // Append the book text if it's not long
        }
  
        // Append the book element to the grid
        bookGrid.appendChild(bookElement);
      });
    }
  
    // Filter books based on dropdown selections
    function applyFilters() {
      const genre = genreFilter.value;
      const author = authorFilter.value;
      const format = formatFilter.value;
  
      const filteredBooks = booksData.filter((book) => {
        return (
          (genre === "" || book.genre === genre) &&
          (author === "" || book.author === author) &&
          (format === "" || book.format === format)
        );
      });
  
      populateBooks(filteredBooks);
    }
  
    // Event listeners for filter changes
    genreFilter.addEventListener("change", applyFilters);
    authorFilter.addEventListener("change", applyFilters);
    formatFilter.addEventListener("change", applyFilters);
  });
  