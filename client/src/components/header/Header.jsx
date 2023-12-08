import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../contexts/authContext'
import './navigation.css'

export default function Header() {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);

    return (
        <header>
            <h1><Link className="home" to="/">BookWorld</Link></h1>
            <nav>
                <Link to="/books">All books</Link>
                {isAuthenticated && (
                    <div id="user">
                        <Link to="/books/create">Create Book</Link>
                        <Link to="/logout">Logout</Link>                        
                    </div>
                )}
                {!isAuthenticated && (
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}

            </nav>
        </header>
    )
};