// Import the gql tagged template function
import gql from 'graphql-tag';
// Export a query for getting the logged in user
export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                title
                description
                link
                image
            }
        }
    }
`;