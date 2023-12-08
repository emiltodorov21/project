import { useEffect, useState } from "react";

import * as bookService from '../../services/bookService';
import BookListItem from "./book-list-item/BookListItem";
import './all-books.css';

export default function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        bookService.getAll()
        .then(result => setBooks(result))
        .catch(err=>{
            console.log(err);
        });

    }, []);

    console.log(books)
    return (
        <section id="catalog-page">
            <h1>All Books</h1>
            {books.map(book =>(
                <BookListItem key={book._id} {...book}/>
            ))}


            {books.length===0 && <h3 className="no-articles">No books yet</h3>}    
            
        </section>
    );
};