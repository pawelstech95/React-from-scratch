class BookList extends React.Component {
  state = {
      books: []
  }
  
  fetchBooks = () => {
      fetch('https://some-api.com/harry-potter')
      .then((response) => response.json())
      .then(booksList => {
          this.setState({ books: booksList });
      });
  }
  
  render() {
      return (
      <>
          <button onClick={this.fetchBooks}>Load Books</button>
          {this.books.length > 0 && (
              <ul>
                  {this.state.books.map((book) => (
                      <li key={book.id}>{book.name}</li>
                  ))}
              </ul>
          )}
          
      </>
      )
  }
}