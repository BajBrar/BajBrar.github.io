document.addEventListener("DOMContentLoaded", function () {
    const genreFilter = document.getElementById("genreFilter");
    const authorFilter = document.getElementById("authorFilter");
    const formatFilter = document.getElementById("formatFilter");
    const bookGrid = document.getElementById("bookGrid");
  
    let booksData = [];
  
    // Fetch books data from JSON
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
  
    // Populate the book grid
    function populateBooks(filteredBooks) {
      bookGrid.innerHTML = ""; // Clear previous results
  
      filteredBooks.forEach((book) => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
  
        const shortText = book.text.slice(0, 160);
        const isLong = book.text.length > 160;
  
        bookElement.innerHTML = `
          <a href="${book.wikiLink}" target="_blank">
            <img src="${book.imageUrl}" alt="${book.altText}" />
          </a>
          <h2><a href="${book.wikiLink}" target="_blank">${book.title}</a></h2>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Genre:</strong> ${book.genre}</p>
          <p><strong>Format:</strong> ${book.format}</p>
          <p><strong>Read on:</strong> ${book.dateRead}</p>
          <p class="book-text">
            ${isLong 
              ? `${shortText}<span class="dots">...</span><span class="more-text">${book.text.slice(160)}</span>` 
              : book.text}
          </p>
          ${isLong ? `<button class="toggle-btn">Show More</button>` : ""}
        `;
  
        bookGrid.appendChild(bookElement);
      });
  
      // Attach toggle listeners for each button
      document.querySelectorAll(".toggle-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          const textEl = this.previousElementSibling;
          const dots = textEl.querySelector(".dots");
          const moreText = textEl.querySelector(".more-text");
  
          const isExpanded = moreText.style.display === "inline";
  
          if (isExpanded) {
            dots.style.display = "inline";
            moreText.style.display = "none";
            this.textContent = "Show More";
          } else {
            dots.style.display = "none";
            moreText.style.display = "inline";
            this.textContent = "Show Less";
          }
        });
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
  