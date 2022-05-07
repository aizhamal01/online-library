import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { removeBookAPI } from '../redux/books/thunks/bookThunks';


const Container = styled.div`
  padding: 25px;
  border: solid 1px grey;
  border-radius: 4px;
  font-style: normal;
  line-height: normal;
  font-weight: bold;
  color: black;

  > .first {
    font-family: sans-serif;
    > p {
      font-family: roboto;
      font-size: 20px;
      letter-spacing: normal;
      margin-bottom: 10px;
      color: grey;
    }

    > h2 {
      font-size: 20px;
      color: black;
    }

    > span {
      font-size:20px;
      font-weight: 300;
      color: black;
    }

    .buttons {
      margin-top: 35px;
      > button {
        border: none;
        background: none;
        margin: 5px;
        font-family: roboto;
        font-size: 20px;
        font-weight: 300;
        color: black;
        cursor: pointer;
        transition: background 0.40s linear;
      }
  }
`;

const Book = ({
  id, category, title, author, 
}) => {
  
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBookAPI(id));
  };

//   const Edit = (id) => {
//      let newEdit = items.find((elem) => {
//      return elem.id === id 
//   })
// }

  return (
    <Container className='container'>
      <div className="first">
        <p>{category}</p>
        <h2>{title}</h2>
        <span>{author}</span>
        <div className="buttons">
          <button type="button" onClick={handleRemove}>Remove</button>
          <span />
          <button type="button" >Edit</button>
        </div>
      </div>
      
    </Container>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
 
};

export default Book;
