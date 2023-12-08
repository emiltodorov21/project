# React Project Documentation

## Introduction
This documentation provides an overview of the structure and functionality of the React project. The project includes pages for registering, logging in, managing books (create, edit, delete), and a home page. Data is fetched and updated using the "SoftUni Practice Server."

## Project Structure

### Components
- `BookCreate`: Component for creating a new book.
- `BookEdit`: Component for editing book details.
- `BookDetails`: Component for displaying detailed information about a book.
- `BookList`: Component for listing all books.
- `BookListItem`: Component for displaying individual books in the book list.
- `AuthGuard`: Higher Order Component (HOC) for protecting routes that require authentication.
- `Header`: Component for displaying the application header.
- `Home`: Component for the home page.
- `Login`: Component for user login.
- `Logout`: Component for user logout.
- `Register`: Component for user registration.
- `ErrorBoundary`: Component for error handling.

### Context
- `authContext`: Context provider with login, register, and logout handlers.

### Higher Order Component (HOC)
- `withAuth`: HOC for adding authentication logic to components.

### Hooks
- `useForm`: Hook for managing form state.
- `usePersistedState`: Hook for persisting state across sessions.

### Utilities
- `request`: Library for making HTTP requests.
- `services`: Directory containing utility functions.
  - `authService`: Service for user authentication.
  - `commentService`: Service for managing comments.
  - `bookService`: Service for managing books.
- `PathUtil`: Utility for handling paths.
- `paths`: File containing path-related constants.

## Usage

### Pages
- **Home Page**: Displays a welcome message or overview of the application.
- **Register Page**: Allows users to register with the application.
- **Login Page**: Allows users to log in to their accounts.
- **Books Page**: Displays a list of books fetched from the SoftUni Practice Server.
- **Edit Book Page**: Allows users to edit details of a specific book.
- **Create Book Page**: Allows users to create a new book entry.

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
