import React from 'react';
import '../BookCard.css';

const BookCard = ({ book }) => {
    const { title, authors, description, imageLinks } = book.volumeInfo;
    const thumbnail = imageLinks ? imageLinks.thumbnail : '/assets/images/product-not-found.png';

    return (
        <div className="book-card">
            <img src={thumbnail} alt={title} className="book-card__image" />
            <div className="book-card__info">
                <h3 className="book-card__title">{title}</h3>
                <p className="book-card__authors">{authors ? authors.join(', ') : 'Unknown Author'}</p>
                <p className="book-card__description">
                    {description ? description.substring(0, 150) + '...' : 'No description available.'}
                </p>
            </div>
        </div>
    );
};

export default BookCard;
