import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Logo = ({ titleRef }) => {
  return (
    <StyledNavlink to="/">
      <Title ref={titleRef}>pēlikel</Title>
    </StyledNavlink>
  );
};
export const Title = styled.h1`
  font-size: 60px;
  font-family: "mom";
  font-weight: unset;
  letter-spacing: 0.1em;
  transition: opacity 0.1s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`;
export const StyledNavlink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  position: relative;
  right: 2vw;

  @media (max-width: 798px) {
    text-align: center;
  }
`;
export default Logo;
