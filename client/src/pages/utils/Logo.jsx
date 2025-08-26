import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Logo = ({ titleRef }) => {
  return (
    <StyledNavlink to="/">
      <Title ref={titleRef} style={{ fontSize: "45px" }}>
        pēlikel
      </Title>
    </StyledNavlink>
  );
};
export const Title = styled.h1`
  font-size: 35px;
  font-family: "mom";
  font-weight: unset;
  opacity: 0;
`;
export const StyledNavlink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 798px) {
    text-align: center;
  }
`;
export default Logo;
