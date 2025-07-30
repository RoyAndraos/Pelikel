import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Navbar = ({ navbarRef, visible }) => {
  return (
    <Wrapper ref={navbarRef}>
      <StyledNavLink to={"/about"} visible={visible}>
        ABOUT
      </StyledNavLink>
      <StyledNavLink to={"/shows"} visible={visible}>
        SHOWS
      </StyledNavLink>
      <StyledNavLink to={"/contact"} visible={visible}>
        <span>CONTACT</span>
      </StyledNavLink>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: fixed;
  top: 10vh;
  left: 2vw;
  display: flex;
  height: 20vh;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  opacity: 0;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: sans-serif;
  font-size: 20px;
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
  &:hover {
    text-decoration: underline;
  }
`;

export default Navbar;
