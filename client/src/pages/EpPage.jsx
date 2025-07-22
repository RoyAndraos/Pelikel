import Back from "./utils/Back";
import { Header } from "./WikiPage";
import { StyledNavlink, Title } from "./utils/Logo";
import styled from "styled-components";

const EpPage = () => {
  return (
    <Wrapper>
      <Header>
        <Back />
        <StyledNavlink to="/" visible={true}>
          <Title style={{ opacity: 1 }}>pēlikel</Title>
        </StyledNavlink>
      </Header>

      <TitleWrap>
        Nothing to see here, <br />
        <span style={{ fontStyle: "italic" }}>
          I think I'll just lay for a while…
        </span>
      </TitleWrap>
    </Wrapper>
  );
};
const TitleWrap = styled.div`
  text-align: center;
  font-size: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  @media (max-width: 798px) {
    height: 100vh;
  }
`;

export default EpPage;
