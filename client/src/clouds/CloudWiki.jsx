import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CloudWiki = ({ cloudWiki, visible }) => {
  return (
    <CloudWrapper ref={cloudWiki}>
      <StyledLink to="/cloudWiki" visible={visible}>
        <Cloud src="/clouds/cloudWiki.svg" alt="" />
        cloud wiki
      </StyledLink>
    </CloudWrapper>
  );
};

export const Cloud = styled.img`
  width: 12vw;
  aspect-ratio: 1.5/1;
  cursor: pointer;
  @media (max-width: 798px) {
    width: 45vw;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  color: whitesmoke;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
`;

export const CloudWrapper = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
`;

export default CloudWiki;
