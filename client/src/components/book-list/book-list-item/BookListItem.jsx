import {Link} from 'react-router-dom'

export default function BookListItem({
    _id,
    title,
    category,
    imageUrl,
})  {
    return (
        <div className="allBooks">
            <div className="allBooks-info">
                <img src={imageUrl} />
                <h2>{title}</h2>
                <h6>{category}</h6>
                <Link to={`/books/${_id}`} className="details-button">Details</Link>
            </div>

        </div>
    );
};