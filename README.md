# MyReads Project

The project is developed for the final assessment project for Udacity's React Fundamentals course. I found it very interesting while developing the project. The project covers the following aspects of React:
- Rendering UI with React
- State Management
- Lifecyle Events
- React Router

## Features
- Allows the user to select and categorize books that the user has read, is currently reading, or want to read.
- By clicking on the add button, the user can search the desired books and add to the respective shelf.
- The app updates all the changes automatically by synchronizing with the backend server.
- The defined category is also reflected in the search result if the book exists in the shelf.

## Getting Started

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Backend Server

To simplify your development process, Udacity have provided a backend server to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Author
- Himel Das

## Acknowledgements
- The incredible team at Udacity
