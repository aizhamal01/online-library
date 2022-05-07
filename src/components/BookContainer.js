import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styled from 'styled-components';
import { displayBooks } from '../redux/books/thunks/bookThunks';
import Book from './Book';


const Container = styled.div`
  margin-bottom: 35px;
`;

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector(({ booksReducer }) => booksReducer.books);
  const loading = useSelector(({ loadingReducer }) => loadingReducer.loading);


  useEffect(() => {
    dispatch(displayBooks());
  }, []);

  if (loading) return ;
  if (books.length === 0) return <h2>No books Added yet</h2>;

  return (
    <Container>
      {books.map((book) => (
        <Book key={book.id} category={book.category} title={book.title} author={book.author}  id={book.id} />
      ))}
    </Container>
  );
};

export default BookList;
