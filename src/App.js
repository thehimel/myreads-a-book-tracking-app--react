import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class App extends Component {
    state = {
        books: []
    }

    getBooks = () => {
        BooksAPI.getAll()
        .then((books) => {
            this.setState(() => ({
                books
            }));
        });
    };

    componentDidMount() {
        // After the component is loaded, fetch the data.
        this.getBooks();
    }

    updateShelf = (book, shelf) => {
        /*
        First update in the remote server, Then fetch it
        Alwasy use then in this format. If you use function.then(function), it won't work properly.
        */
        BooksAPI.update(book, shelf)
        .then(() => {
            this.getBooks();
        });
    };

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <ListBooks
                        books={this.state.books}
                        onUpdateShelf={this.updateShelf}
                    />
                )} />

                <Route path='/search' render={() => (
                    <SearchBooks
                        onUpdateShelf={this.updateShelf}
                    />
                )} />
            </div>
        );
    }
}

export default App;
