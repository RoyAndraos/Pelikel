import { Header } from "./WikiPage";
import Back from "./utils/Back";
import { StyledNavlink, Title } from "./utils/Logo";
import styled from "styled-components";

const Shows = () => {
  return (
    <Wrapper>
      <Header>
        <Back />
        <StyledNavlink to="/" visible={true}>
          <Title style={{ opacity: 1 }}>pēlikel</Title>
        </StyledNavlink>
      </Header>
      <ContentWrapper>
        <Top>
          <p>Next show:</p>
          <p>TBA</p>
        </Top>
        <Bottom>
          <p>Recent shows:</p>
          <p>July 20, 2025 @ Turbo Haüs</p>
          <p>May 4, 2025 @ Brasserie Beaubien</p>
          <p>March 16, 2025 @ Bar Courcelle</p>
        </Bottom>
      </ContentWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 100%;
`;
const ContentWrapper = styled.div`
  line-height: 3vh;
  font-size: 20px;
  height: 80vh;
  letter-spacing: 0.1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
  p {
    margin: 0;
  }
  p:first-of-type {
    font-weight: bold;
  }
  p:last-of-type {
    margin-bottom: 2vh;
  }
  @media (max-width: 798px) {
    font-size: 16px;
  }
`;

export default Shows;
