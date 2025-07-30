import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const MobileNav = ({ setOpen, open }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div>
        <StyledLink href="https://show.co/s2RjWiG" target="_blank">
          <span>PRE-SAVE AETHER VOYAGE</span>
        </StyledLink>
      </div>
      <StyledNavLink
        onClick={() => {
          setOpen(!open);
          navigate("/about");
        }}
      >
        ABOUT
      </StyledNavLink>
      <StyledNavLink
        onClick={() => {
          setOpen(!open);
          navigate("/shows");
        }}
      >
        SHOWS
      </StyledNavLink>
      <StyledNavLink
        onClick={() => {
          setOpen(!open);
          navigate("/contact");
        }}
      >
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
const StyledNavLink = styled.button`
  text-decoration: none;
  font-family: sans-serif;
  font-size: 20px;
  top: -50px;
  position: relative;
  background-color: transparent;
  border: none;
  text-align: center;
`;
const StyledLink = styled.a`
  text-decoration: none;
  position: relative;
  font-family: sans-serif;
  top: -50px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default MobileNav;
