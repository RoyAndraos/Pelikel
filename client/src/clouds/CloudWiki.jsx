import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CloudWiki = ({ cloudWiki }) => {
  return (
    <CloudWrapper ref={cloudWiki}>
      <StyledLink to="/cloudWiki">
        <Cloud src="/clouds/cloudWiki.svg" alt="cloud" />
        cloud wiki
      </StyledLink>
    </CloudWrapper>
  );
};

export const Cloud = styled.img`
  width: 15vw;
  aspect-ratio: 1.5/1;
  cursor: pointer;
  @media (max-width: 798px) {
    width: 25vw;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  color: whitesmoke;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CloudWrapper = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default CloudWiki;
