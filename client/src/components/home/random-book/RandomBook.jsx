import { Link } from "react-router-dom";
import Path from "../../../paths";
import { pathToUrl } from "../../../utils/pathUtils";

export default function RandomBook({
    imageUrl,
    title,
    _id,
    category,
}) {
    return (
        <div className="book">
            <div className="image-wrap">
                <img src={imageUrl} />
            </div>
            <h3>{title}</h3>
            
            <h4>{category}</h4>
            
            <div className="data-buttons">
                <Link to={pathToUrl(Path.BookDetails, { bookId:_id })} className="btn details-btn">Details</Link>
            </div>
        </div>
    );
};