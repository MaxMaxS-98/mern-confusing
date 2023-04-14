// this file contains the mutations for the application
import ggl from 'graphql-tag'
// this is the mutation that is used to login the user
export const LOGIN_USER = ggl`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`
// this is the mutation that is used to add a user
export const ADD_USER = ggl`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`
// this is the mutation that is used to save a book
export const SAVE_BOOK = ggl`
    mutation saveBook($input: BookInput!) {
        saveBook(input: $input) {
            _id
            username
            email
            bookCount
            savedBooks {
                authors
                description
                bookId
                title
                link
                image
            }
        }
    }
`
// this is the mutation that is used to remove a book
export const REMOVE_BOOK = ggl`

    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            _id
            username
            email
            bookCount
            savedBooks {
                authors
                description
                bookId
                title
                link
                image
            }
        }
    }
`
