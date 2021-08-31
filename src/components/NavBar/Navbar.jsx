import React, { useEffect, useState } from 'react';
import { ModalProvider } from 'styled-react-modal';
import { useHistory } from 'react-router';
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
import useYoutubeAPI from '../../hooks/useYoutubeAPI';
import useAuthentication from '../../hooks/useAuthentication';
import useTheme from '../../hooks/useTheme';
import { FadingBackground } from '../Modal/FadingBackground.component';
import { StyledModalComponent } from '../Modal/StyledModal.component';
import { LoginForm } from '../LoginForm/LoginForm.component';
import noAuthImage from '../../assets/images/user.png';
import StarIcon from '../../assets/images/star-icon.png';

function NavBar() {
  const { query } = useYoutubeAPI();
  const { userLogged, modal } = useAuthentication();
  const { toggleModal, afterOpen, beforeClose, isOpen, opacity, closeModal } = modal;
  const { themeToggler, activeTheme } = useTheme();
  const [isToggled, setIsToggled] = useState(activeTheme === 'dark');

  const { searchVideo, searchVideos } = useYoutubeAPI();
  const history = useHistory();

  useEffect(() => {
    searchVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeTheme = () => {
    setIsToggled(!isToggled);
    themeToggler();
  };

  const onChange = (e) => {
    searchVideo(e.target.value);
  };

  const onSearch = (e) => {
    if (e.key === 'Enter') {
      searchVideos();
      history.push('/');
    }
  };

  return (
    <>
      <ModalProvider backgroundComponent={FadingBackground}>
        <StyledModalComponent
          toggleModal={toggleModal}
          afterOpen={afterOpen}
          beforeClose={beforeClose}
          isOpen={isOpen}
          opacity={opacity}
        >
          <LoginForm />
        </StyledModalComponent>
      </ModalProvider>
      <Nav>
        <NavHeader>
          <NavSidebar>
            <StyledMenu>
              {/* <span />
              <span />
              <span /> */}
              <Image src={StarIcon} onClick={() => history.push('/favorite')} />
            </StyledMenu>
          </NavSidebar>
          <NavSearchBar onClick={() => closeModal()}>
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
            <Image
              src={userLogged?.avatarUrl ?? noAuthImage}
              onClick={() => toggleModal()}
            />
          </UserNav>
        </NavHeader>
      </Nav>
    </>
  );
}

export default NavBar;
