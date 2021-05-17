import { Logo, StyledLink, Wrapper } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study <br /> Buddy{' '}
        </h1>
      </Logo>
      <StyledLink exact to="/">
        Dashboard
      </StyledLink>
      <StyledLink to="/add-user">Add User</StyledLink>
      <StyledLink to="/settings">Settings</StyledLink>
      <StyledLink to="/logout">Logout</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
