import { NavLink } from 'react-router-dom';
import styled from 'styled-components';



const NavBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 65px;
  background: none; 
  transition: background 0.40s linear;
  }
`;

const NavContainer = styled(NavBar)`
  padding: 0;
 

  > div {
    color: grey;
    transition: color 0.40s linear;

    h2 {
      font-size: 30px;
      font-weight: bold;
      letter-spacing: normal;
    }
  }

  > nav {

    > .links {
      opacity: 0.5;
      font-size: 15px;
      font-weight: normal;
      letter-spacing: 1.9px;
      color: grey;
      transition: color 0.40s linear;

      &:first-child {
        margin-left: 55px;
        margin-right: 55px
      }
  }
`;

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/liked',
      text: 'LIKED',
    },
  ];
  return (
    <NavBar>
      <NavContainer as="div">
        <div>
          <h2>Online Library</h2>
        </div>
        <nav>
          {links.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className="links"
              style={({ isActive }) => ({
                opacity: isActive ? '1' : '0.5',
              })}
            >
              {link.text}
            </NavLink>
          ))}
        </nav>
      </NavContainer>
    </NavBar>
  );
};



export default Header;
