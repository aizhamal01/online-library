import styled from 'styled-components';
import BookContainer from '../components/BookContainer';
import InputBook from '../components/InputBook';

const BooksContainer = styled.div`
  padding: 85px;
  
`;

const Books = () => (
  <BooksContainer>
    <BookContainer />
    <hr />
    <InputBook />
  </BooksContainer>
);

export default Books;
