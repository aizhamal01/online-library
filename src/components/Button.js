import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 125px;
  height:55px;
  padding: 15px;
  border-radius: 3px;
  font-family: sans-serif;
  background: grey;
  border: none;
  color: none;
  cursor: pointer;
  transition: background 0.40s linear;

`;

const Button = ({ text, handleClick, update }) => (
  <StyledButton type="button" onClick={handleClick} update={update}>{text}</StyledButton>
);

Button.defaultProps = {
  update: 'something',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  update: PropTypes.string,
};

export default Button;
