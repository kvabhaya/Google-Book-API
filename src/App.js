import React from 'react';
import './App.css';
import BookList from './components/BookList';

const App = () => {
  return (
      <div className="app">
        <h1 className="app__title">Google Books Finder</h1>
        <BookList />
      </div>
  );
};

export default App;
