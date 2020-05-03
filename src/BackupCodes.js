updateShelf = (book, shelf) => {
    const books = this.state.books;

    var found = false;

    for(var i = 0; i < books.length; i++) {
        if(books[i].id === book.id) {
            books[i].shelf = shelf;

            this.setState((currentState) => ({
                books
            }));

            found = true;
            break;
        }
    }

    if (!found) {
        book.shelf = `"${shelf}"`;
        console.log(book);
        this.setState((currentState) => ({
            books: currentState.books.concat([book])
        }))
    }

    BooksAPI.update(book, shelf);
};