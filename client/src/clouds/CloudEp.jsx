import { CloudWrapper, StyledLink } from "./CloudWiki";
import styled from "styled-components";
const CloudEp = ({ cloudEpRef, visible }) => {
  return (
    <CloudWrapper ref={cloudEpRef}>
      <StyledLink
        to="/cloud???"
        visible={visible}
        style={{ textDecoration: "none" }}
      >
        <Cloud src="/clouds/cloudEp.svg" alt="" />
        [???]
      </StyledLink>
    </CloudWrapper>
  );
};

const Cloud = styled.img`
  width: 15vw;
  aspect-ratio: 1.5/1;
  cursor: pointer;
  @media (max-width: 798px) {
    width: auto;
    height: 15vh;
  }
`;
export default CloudEp;
