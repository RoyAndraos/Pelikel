import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Tippy from "@tippyjs/react";
import { MdContentCopy } from "react-icons/md";
const Navbar = ({ navbarRef, visible }) => {
  {
    /* <Button as="a" href="mailto:pelikelmusic@gmail.com">
  pelikelmusic@gmail.com <MdContentCopy />
</Button> */
  }

  return (
    <Wrapper ref={navbarRef}>
      <StyledNavLink visible={visible}>
        <Tippy
          interactive={true}
          placement="right"
          content={
            <a href="mailto:pelikelmusic@gmail.com">
              <Button
                onClick={() => {
                  navigator.clipboard.writeText("pelikelmusic@gmail.com");
                }}
              >
                pelikelmusic@gmail.com <MdContentCopy />
              </Button>
            </a>
          }
        >
          <span>CONTACT</span>
        </Tippy>
      </StyledNavLink>
      <StyledNavLink to={"/about"} visible={visible}>
        ABOUT
      </StyledNavLink>
      <StyledNavLink to={"/shows"} visible={visible}>
        SHOWS
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
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: sans-serif;
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
