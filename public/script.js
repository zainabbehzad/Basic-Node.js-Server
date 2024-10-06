const books = [
  {
    id: 1,
    title: 'The Alchemist',
    author: 'Paulo Coelho', 
    rating: 5,
    review: 'A beautiful tale about following your dreams.',
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    rating: 5,
    review: 'A powerful exploration of morality and human behavior.',
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    rating: 4,
    review: 'A chilling depiction of totalitarianism and surveillance.',
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    rating: 5,
    review: 'A classic romantic novel that critiques societal norms.',
  },
  {
    id: 5,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    rating: 4,
    review: 'A tragic story of love and ambition in the Jazz Age.'
  },
  {
    id: 6,
    title: 'Moby Dick',
    author: 'Herman Melville',
    rating: 4,
    review: 'An epic tale of obsession and the sea.',
  },
  {
    id: 7,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    rating: 4,
    review: 'A story about teenage angst and alienation.',
  },
  {
    id: 8,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    rating: 5,
    review: 'A delightful adventure in a richly imagined world.',
  },
  {
    id: 9,
    title: 'Brave New World', 
    author: 'Aldous Huxley',
    rating: 4,
    review: 'A thought-provoking look at a dystopian future.',
  },
  {
    id: 10,
    title: 'The Diary of a Young Girl',
    author: 'Anne Frank',
    rating: 5,
    review: 'A poignant account of life during the Holocaust.',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const bookListElement = document.getElementById('bookItems');
  const searchBar = document.getElementById('searchBar');
  const bookForm = document.getElementById('newBookForm');

  displayBooks(books);

  searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    const filteredBooks = books.filter((book) => 
      book.title.toLowerCase().includes(query) || 
      book.author.toLowerCase().includes(query)
    );
    displayBooks(filteredBooks);
  });

  bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const bookTitle = document.getElementById('bookTitle').value;
    const bookAuthor = document.getElementById('bookAuthor').value;
    const bookRating = document.getElementById('bookRating').value;
    const bookReview = document.getElementById('bookReview').value;

    const newBookData = {
      id: Date.now(),
      title: bookTitle,
      author: bookAuthor,
      rating: Number(bookRating),
      review: bookReview,
    };

    books.push(newBookData);
    displayBooks(books);
    bookForm.reset();
  });
});

function displayBooks(books) {
  const bookListElement = document.getElementById('bookItems');
  bookListElement.innerHTML = '';

  if (books.length === 0) {
    bookListElement.innerHTML = '<li>No books found</li>';
    return;
  }

  books.forEach((book) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <strong>Title:</strong> ${book.title} <br>
      <strong>Author:</strong> ${book.author} <br>
      <strong>Rating:</strong> ${book.rating} <br>
      <strong>Review:</strong> ${book.review} <br>
      <button onclick="borrowBook(${book.id}, this)">Borrow</button>
      <button onclick="deleteBook(${book.id}, this)">Delete</button>
    `;
    bookListElement.appendChild(listItem);
  });
}

function borrowBook(id, button) {
  const book = books.find((b) => b.id === id);
  if (book) {
    console.log(`You borrowed "${book.title}" by ${book.author}.`);
    button.style.backgroundColor = 'green';
  }
}

function deleteBook(id, button) {
  const index = books.findIndex(b => b.id === id);
  if (index !== -1) {
    books.splice(index, 1);
    displayBooks(books);
    button.style.backgroundColor = 'green';
  }
}