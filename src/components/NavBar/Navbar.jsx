import React, { useContext, useEffect, useState } from 'react';
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
import useYoutubeAPI from '../../hooks/useYoutubeAPI';

function NavBar() {
  const { themeToggler } = useContext(ThemeContextProvider);
  const [isToggled, setIsToggled] = useState(false);

  const { query, setQuery, searchVideos } = useYoutubeAPI();

  useEffect(() => {
    searchVideos();
  }, []);

  const changeTheme = () => {
    setIsToggled(!isToggled);
    themeToggler();
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSearch = (e) => {
    if (e.key === 'Enter') {
      searchVideos();
    }
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
          <Input
            type="text"
            placeholder="Search"
            onKeyDown={onSearch}
            onChange={onChange}
            defaultValue={query}
          />
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
