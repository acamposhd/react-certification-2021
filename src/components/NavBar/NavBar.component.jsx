import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Switch from './StyledSwitch/StyledSwitch.component';
import mainLogo from '../../assets/images/wizeline.png';
import { ThemeContextProvider } from '../../context/ThemeContext';

function NavBar() {
  const Nav = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  `;

  const NavHeader = styled.div`
    padding: 10px 20px;
    width: 100%;
    display: flex;
  `;

  const NavSidebar = styled.div`
    width: 10.333%;
    text-align: left;
  `;

  const NavSearchBar = styled.div`
    width: 50.333%;
    padding-right: 1vh;
    text-align: left;
  `;

  const Input = styled.input`
    width: 100%;
    font-size: 16px;
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    color: #262626;
    padding: 7px 33px;
    color: #999;
    cursor: text;
    font-weight: 300;
    text-align: left;
    background: #fafafa;

    &:active,
    &:focus {
      border: solid 1px #dbdbdb;
      box-shadow: 0px 0px 11px 0px #800e13;
      outline: none;
    }
  `;

  const UserNav = styled.div`
    width: 10.333%;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  `;
  const ThemeNav = styled.div`
    width: 33.333%;
    text-align: right;
    display: table-cell;
    vertical-align: middle;
    margin-top: 5px;
  `;
  const StyledMenu = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 1rem;
    height: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1;

    span {
      margin-top: 0.3rem;
      width: 1.2rem;
      height: 0.2rem;
      background: ${({ theme }) => theme.text};
      border-radius: 10px;
      position: relative;
      transform-origin: 1px;
    }
  `;
  const Image = styled.img`
    width: 38px;
    height: 38px;
  `;

  const { themeToggler } = useContext(ThemeContextProvider);

  const [isToggled, setIsToggled] = useState(false);

  const changeTheme = () => {
    setIsToggled(!isToggled);
    themeToggler();
  };
  return (
    <Nav>
      <NavHeader>
        <NavSidebar>
          <StyledMenu>
            <span />
            <span />
            <span />
          </StyledMenu>
        </NavSidebar>
        <NavSearchBar>
          <Input type="text" placeholder="Search" />
        </NavSearchBar>
        <ThemeNav>
          <Switch id="test-switch" toggled={isToggled} onChange={() => changeTheme()} />
        </ThemeNav>
        <UserNav>
          <Image src={mainLogo} />
        </UserNav>
      </NavHeader>
    </Nav>
  );
}

export default NavBar;
