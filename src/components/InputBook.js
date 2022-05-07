import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Select from './Select';
import { addBookAPI } from '../redux/books/thunks/bookThunks';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 25px;

  > div:first-of-type {
    > h2 {
      font-size: 20px;
      color: #888888;
    }
  }

  > div:last-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > input {
      width: 30%;
      height: 55px;
      border: solid 1px grey;
      padding: 0 20px;
      font-size: 15px; 
      font-family: sans-serif;
      background:none;
      transition: background 0.40s linear;

      &::placeholder {
        font-size: 15px;
        font-family: sans-serif;
        color:grey;
        transition: color 0.40s linear;
      }
    }
  }
`;

const InputBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const titleInput = useRef(null);

  const dispatch = useDispatch();

  const submitBook = () => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };
    const res = () => title !== '' && author !== '' && dispatch(addBookAPI(newBook));
    res();
    titleInput.current.focus();
    setTitle('');
    setAuthor('');
  };

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <Container>
      <div>
        <h2>ADD NEW BOOK</h2>
      </div>
      <div>
        <input type="text" ref={titleInput} placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <Select handleChange={handleChange} selectValue={category} />
        <Button text="ADD BOOK" handleClick={submitBook} />
      </div>
    </Container>
  );
};

export default InputBook;
