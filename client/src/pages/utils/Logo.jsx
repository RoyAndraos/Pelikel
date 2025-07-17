import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Logo = ({ titleRef, visible }) => {
  return (
    <StyledNavlink to="/" visible={visible}>
      <Title ref={titleRef}>pēlikel</Title>
    </StyledNavlink>
  );
};
export const Title = styled.h1`
  font-size: 45px;
  font-family: "mom";
  font-weight: unset;
  opacity: 0;
`;
export const StyledNavlink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
`;
export default Logo;
