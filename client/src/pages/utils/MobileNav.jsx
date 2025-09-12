import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const MobileNav = ({ setOpen, open }) => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("/");
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);
  return (
    <Wrapper>
      <StyledNavLink
        to="/"
        onClick={() => {
          setOpen(!open);
        }}
        $activeLink={activeLink}
      >
        HOME
      </StyledNavLink>
      <StyledNavLink
        to="/music"
        onClick={() => {
          setOpen(!open);
        }}
        $activeLink={activeLink}
      >
        MUSIC
      </StyledNavLink>
      <StyledNavLink
        to="/videos"
        onClick={() => {
          setOpen(!open);
        }}
        $activeLink={activeLink}
      >
        VIDEOS
      </StyledNavLink>
      <StyledNavLink
        to="/shows"
        onClick={() => {
          setOpen(!open);
        }}
        $activeLink={activeLink}
      >
        SHOWS
      </StyledNavLink>

      <StyledNavLink
        to="/about"
        onClick={() => {
          setOpen(!open);
        }}
        $activeLink={activeLink}
      >
        ABOUT
      </StyledNavLink>
      <StyledNavLink
        to="/contact"
        onClick={() => {
          setOpen(!open);
        }}
        $activeLink={activeLink}
      >
        <span>CONTACT</span>
      </StyledNavLink>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: fixed;
  top: 12vh;
  left: 0;
  width: 100vw;
  height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;
  background-image: url("/bg.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  z-index: 1000;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: ${(props) =>
    props.$activeLink === props.to ? "underline" : "none"};
  font-family: sans-serif;
  font-size: 20px;
  font-weight: ${(props) => (props.$activeLink === props.to ? "600" : "400")};
  letter-spacing: 0.1em;
  top: -50px;
  position: relative;
  background-color: transparent;
  border: none;
  text-align: center;
`;

export default MobileNav;
