import { useNavigate, useParams } from 'react-router-dom'

import * as bookService from "../../services/bookService";
import { useEffect, useState } from 'react';
import '../book-create/create-edit.css';

export default function BookEdit() {
    const navigate = useNavigate();
    const { bookId } = useParams();
    const [book, setBook] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    });

    useEffect(() => {
        bookService.getOne(bookId)
            .then(result => {
                setBook(result);
            });
    }, [bookId]);

    const editBookSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget)); 
        try {
            await bookService.edit(bookId, values);

            navigate('/books');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    };

    const onChange = (e) => {
        setBook(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section id="create-page" className="auth" >
            <form id="create" onSubmit={editBookSubmitHandler}>
                <div className="container" >

                    <h1>Edit Book</h1>
                    <label htmlFor="leg-title">Title:</label>
                    <input type="text" id="title" name="title" value={book.title} onChange={onChange} placeholder="Enter book title..." />

                    <label htmlFor="category">Genre:</label>
                    <input type="text" id="category" name="category" value={book.category} onChange={onChange} placeholder="Enter book genre..." />

                    <label htmlFor="levels">Author:</label>
                    <input type="text" id="maxLevel" name="maxLevel" value={book.maxLevel} onChange={onChange} min="1" placeholder="Enter book author..." />

                    <label htmlFor="book-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={book.imageUrl} onChange={onChange} placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" value={book.summary} onChange={onChange} id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Edit Book" />
                </div>
            </form>
        </section>
    );
}