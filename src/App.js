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

    componentDidMount() {
        BooksAPI.getAll()
        .then((books) => {
            this.setState(() => ({
                books
            }))
        })
    }

    /*
    removeContact = (contact) => {
        this.setState((currentState) => ({
            contacts: currentState.contacts.filter((c) => {
            return c.id !== contact.id
            })
        }))

        ContactsAPI.remove(contact)
    };
    */

    updateShelf = (book, shelf) => {
        const books = JSON.parse(JSON.stringify(this.state.books));

        for(var i = 0; i < books.length; i++) {
            if(books[i].id === book.id) {
                books[i].shelf = shelf;
                break;
            }
        }

        this.setState((currentState) => ({
            books
        }));

        BooksAPI.update(book, shelf);
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
                        books={this.state.books}
                        onUpdateShelf={this.updateShelf}
                    />
                )} />
            </div>
        );
    }
}

export default App;
