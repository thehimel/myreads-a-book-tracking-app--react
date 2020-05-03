import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'

class SearchBooks extends Component {
    state = {
        query: ''
    };

    updateQuery = (query) => {
        this.setState(() => ({
            query
        }));
    };

    clearQuery = () => {
        this.updateQuery('');
    };

    render() {
        const { query } = this.state;
        const { books } = this.props;

        const showingBooks = query === ''
            ? books
            : books.filter((b) => (
                b.title.toLowerCase().includes(query.toLowerCase())
        ));

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input
                            className='search-contacts'
                            type='text'
                            placeholder='Search by title or author'
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {/* <ol className="books-grid"></ol> */}
                    <ListBooks
                        books={showingBooks}
                        onUpdateShelf={this.props.onUpdateShelf}
                    />
                </div>
            </div>
        );
    }
}

export default SearchBooks;