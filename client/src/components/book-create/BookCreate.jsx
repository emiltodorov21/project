import { useNavigate } from 'react-router-dom'
import * as bookService from "../../services/bookService";
import './create-edit.css';

export default function BookCreate() {
    const navigate = useNavigate();

    const createBookSubmitHandler = async (e) => {
        e.preventDefault();

        const bookData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await bookService.create(bookData);

            navigate('/books');
        } catch(err){
            // Error notification
            console.log(err);
        }
    }


    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createBookSubmitHandler}>
                <div className="container">

                    <h1>Create Book</h1>
                    <label htmlFor="leg-title">Title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter book title..." />

                    <label htmlFor="category">Genre:</label>
                    <input type="text" id="category" name="category" placeholder="Enter book genre..." />

                    <label htmlFor="levels">Author:</label>
                    <input type="text" id="author" name="maxLevel" min="1" placeholder="Enter book author..." />

                    <label htmlFor="book-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Book" />
                </div>
            </form>
        </section>
    );
}