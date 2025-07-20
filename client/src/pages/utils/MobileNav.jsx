import styled from "styled-components";
import { NavLink } from "react-router-dom";
const MobileNav = () => {
  return (
    <Wrapper>
      <StyledNavLink to={"/about"}>ABOUT</StyledNavLink>
      <StyledNavLink to={"/shows"}>SHOWS</StyledNavLink>
      <StyledNavLink to={"/contact"}>
        <span>CONTACT</span>
      </StyledNavLink>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;
  background-image: url("/background.svg");
  z-index: 1000;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: sans-serif;
  font-size: 20px;
  top: -100px;
  position: relative;
  &:hover {
    text-decoration: underline;
  }
`;

export default MobileNav;
