import React, { useContext, useState } from 'react';
import {
  Image,
  Input,
  Nav,
  NavHeader,
  NavSearchBar,
  NavSidebar,
  ThemeNav,
  UserNav,
  StyledMenu,
} from './NavBar.styles';
import Switch from './StyledSwitch/StyledSwitch.component';
import mainLogo from '../../assets/images/wizeline.png';
import { ThemeContextProvider } from '../../context/ThemeContext';

function NavBar() {
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
