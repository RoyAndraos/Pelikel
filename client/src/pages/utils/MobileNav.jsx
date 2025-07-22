import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const MobileNav = ({ setOpen, open }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
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
  top: -100px;
  position: relative;
  background-color: transparent;
  border: none;
`;

export default MobileNav;
