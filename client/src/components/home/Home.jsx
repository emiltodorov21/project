import { useEffect, useState } from "react";
import withAuth from "../../HOC/withAuth";
import * as bookService from "../../services/bookService";
import './welcome.css';
import RandomBook from "./random-book/RandomBook";

function Home({
    email,
}) {
    // const [latestGames, setLatestGames] = useState([]);

    // useEffect(() => {
    //     gameService.getLatest()
    //         .then(result => setLatestGames(result));
    // },[]);

    const [randomBooks, setRandomBooks] = useState([]);

    useEffect(() => {
        bookService.getRandomBooks()
            .then(result => setRandomBooks(result));
    },[]);

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>Welcome to the book world</h2>
                <h2>Stories shape souls</h2>
            </div>

            <div id="home-page">
                <h1>Featured Books</h1>

                {randomBooks.map(book=><RandomBook key={book._id} {...book}/>)}

                {!randomBooks.length && <p className="no-articles">No books yet</p>}
  
            </div>
        </section>
    );
};


export default withAuth(Home);