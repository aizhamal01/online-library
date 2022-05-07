import PropTypes from 'prop-types';
import styled from 'styled-components';

const SelectContainer = styled.div`
    > select {
      appearance: none;
      background-color: transparent;
      border: none;
      padding: 5px;
      margin: 0;
      width: 250px;
      height: 15px;
      font-family: sans-serif;
      outline: none;
      color: black;
      cursor: pointer;
      padding: 0 0 0 20px;
      transition: color 0.40s linear;
    } 

    & {
        width: 15%;
        border: solid 1px black;
        border-radius: 4px;
        background: grey;
        height: 55px;
        cursor: pointer;
        display: flex;
        align-items: center;
        margin: 20px 0;
        padding-right: 20px; 
        transition: background 0.40s linear; 
       
      }

      &::after {
        content: "";
        width: 15px;
        height: 15px;
        background-color: #c7c7c7;
      }

      &:focus-within {
        border: solid 1px black;
      }
`;
const Select = ({ selectValue, handleChange }) => {
  const types = [
    {
      id: 1,
      val: 'Categories',
    },
    {
      id: 2,
      val: 'Action',
    },
    {
      id: 3,
      val: 'Science Fiction',
    },
    {
      id: 4,
      val: 'Economy',
    },
    {
      id: 5,
      val: 'Comedy',
    },
  ];
  return (
    <SelectContainer>
      <select value={selectValue} onChange={handleChange}>
        {types.map((type) => (
          <option key={type.id} value={type.val}>{type.val}</option>
        ))}
      </select>
    </SelectContainer>
  );
};

Select.propTypes = {
  selectValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Select;
