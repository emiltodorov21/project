import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/authContext'
import Path from './paths'

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import BookList from './components/book-list/BookList'
import BookCreate from './components/book-create/BookCreate'
import Login from './components/login/Login'
import Logout from './components/logout/Logout'
import BookDetails from './components/book-details/BookDetails'
import BookEdit from './components/book-edit/BookEdit'
import ErrorBoundary from './components/ErrorBoundary'
import AuthGuard from './components/guards/AuthGuard'
import Register from './components/register/register'


function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <div id="box">
          <Header />


          <Routes>
            <Route path={Path.Home} element={<Home />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/books/create" element={<AuthGuard><BookCreate /></AuthGuard>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/books/:bookId" element={<BookDetails />} />
            <Route path={Path.BookEdit} element={<AuthGuard><BookEdit /></AuthGuard>} />
            <Route path={Path.Logout} element={<Logout />} />

          </Routes>
        </div>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
