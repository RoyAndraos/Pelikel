import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Navbar = ({ navbarRef, visible }) => {
  {
    /* <Button as="a" href="mailto:pelikelmusic@gmail.com">
  pelikelmusic@gmail.com <MdContentCopy />
</Button> */
  }

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
  height: 15vh;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  opacity: 0;
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
const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 16px;
  width: fit-content;
  display: flex;
  gap: 0.5vw;
`;
export default Navbar;
