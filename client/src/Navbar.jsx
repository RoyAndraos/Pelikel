import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
const Navbar = ({ navbarRef }) => {
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    setSelected(window.location.pathname);
  }, []);
  return (
    <Wrapper ref={navbarRef}>
      <StyledNavLink to={"/"} $selected={selected}>
        HOME
      </StyledNavLink>
      <StyledNavLink to={"/music"} $selected={selected}>
        MUSIC
      </StyledNavLink>
      <StyledNavLink to={"/videos"} $selected={selected}>
        VIDEOS
      </StyledNavLink>
      <StyledNavLink to={"/shows"} $selected={selected}>
        SHOWS
      </StyledNavLink>
      <StyledNavLink to={"/about"} $selected={selected}>
        ABOUT
      </StyledNavLink>
      <StyledNavLink to={"/contact"} $selected={selected}>
        <span>CONTACT</span>
      </StyledNavLink>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  left: 2vw;
  top: 3vh;
  display: flex;
  height: 40vh;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  @media (max-width: 1000px) {
    display: none;
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: ${(props) =>
    props.$selected === props.to ? "underline" : "none"};
  font-family: sans-serif;
  font-size: 1.5vw;
  transform: scaleY(1.2);
  letter-spacing: 0.1em;
  transition: 0.2s ease-in-out;
  font-weight: ${(props) => (props.$selected === props.to ? "600" : "400")};
  &:hover {
    text-decoration: underline;
    opacity: 0.7;
  }
`;

export default Navbar;
