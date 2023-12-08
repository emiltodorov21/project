import { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as bookService from '../../services/bookService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";
import './comments.css';
import './details.css';

export default function BookDetails() {
    const navigate = useNavigate();
    const { email, userId } = useContext(AuthContext);
    const [book, setBook] = useState({});
    const [comments, setComments] = useState([]);
    const { bookId } = useParams();


    useEffect(() => {
        bookService.getOne(bookId)
            .then(setBook);


        commentService.getAll(bookId)
            .then(setComments);
    }, [bookId]);


    const addCommentHandler = async (values) => {

        const newComment = await commentService.create(
            bookId,
            values.comment,
        );



        setComments(state => [...state, { ...newComment, owner: { email } }]);
    };

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${book.title}`);

        if (hasConfirmed) {
            await bookService.remove(bookId);

            navigate('/books');
        };
    };

  

    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: '',
    });


    const isOwner = userId === book._ownerId;

    return (
        <section id="book-details">
            <h1>Book Details</h1>
            <div className="info-section">

                <div className="book-header">
                    <img className="book-img" src={book.imageUrl} alt={book.title} />
                    <h1>{book.title}</h1>
                    <h2 className="levels">Author: {book.maxLevel}</h2>
                    <p className="type">{book.category}</p>
                </div>

                <p className="text">{book.summary}</p>


                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({ _id, text, owner: { email } }) => (
                            <li key={_id} className="comment">
                                <p>{email}: {text}</p>
                            </li>
                        ))}

                    </ul>
                    {comments.length === 0 && (<p className="no-comment">No comments.</p>)}

                </div>

                {isOwner && (
                    <div className="buttons">
                        <Link to={pathToUrl(Path.BookEdit, { bookId })} className="button">Edit</Link>
                        <button className="button" onClick={deleteButtonClickHandler}>Delete</button>
                    </div>
                )}

            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onSubmit}>
                    <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    );
}