import React, { useState } from 'react';
import { fetchBooks } from '../services/api';
import BookCard from './BookCard';
import '../BookList.css';

const BookList = () => {
    const [query, setQuery] = useState(''); // Query entered by the user
    const [books, setBooks] = useState([]); // Books array to store fetched data
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(''); // Error message state

    // Function to handle the search
    const handleSearch = async () => {
        if (!query.trim()) return; // If the search query is empty, return

        setLoading(true); // Set loading state to true
        setError(''); // Reset error message
        setBooks([]); // Clear the previous books if any

        try {
            const results = await fetchBooks(query); // Fetch books using the API
            if (results.length === 0) {
                setError('No books found. Please try another search.'); // Set error if no books found
            }
            setBooks(results); // Set the fetched books to state
        } catch (err) {
            setError('An error occurred while fetching books. Please try again.'); // Set error if there’s an issue with the API call
        }
        setLoading(false); // Set loading state to false
    };

    return (
        <div className="book-list">
            {/* Search Bar */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for books..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={handleSearch} disabled={loading}>
                    {loading ? 'Loading...' : 'Search'}
                </button>
            </div>

            {/* Error Message */}
            {error && <p className="error-message">{error}</p>}

            {/* Book List */}
            <div className="book-list__grid">
                {books.length > 0 ? (
                    books.map((book, index) => <BookCard key={index} book={book} />) // Display Book Cards
                ) : (
                    !loading && !error && <p className="info-message">Start searching for books!</p> // Show this message when no books have been fetched yet
                )}
            </div>
        </div>
    );
};

export default BookList;