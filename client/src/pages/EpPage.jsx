import Back from "./utils/Back";
import { Header } from "./WikiPage";
import { StyledNavlink, Title } from "./utils/Logo";
import styled from "styled-components";

const EpPage = () => {
  return (
    <Wrapper>
      <Header>
        <Back />
        <StyledNavlink to="/">
          <Title style={{ opacity: 1 }}>pēlikel</Title>
        </StyledNavlink>
      </Header>
      <TitleHere>
        <Line style={{ width: "130px" }}></Line>
      </TitleHere>
      <TitleWrap>
        <ListItem>
          <Line style={{ width: "130px" }}></Line>
        </ListItem>
        <ListItem>
          <Line style={{ width: "120px" }}></Line>
        </ListItem>
        <ListItem>
          {" "}
          <a href="https://linktr.ee/pelikelmusic" target="_blank">
            Aether Voyage
          </a>
        </ListItem>
        <ListItem>
          <Line style={{ width: "150px" }}></Line>
        </ListItem>
        <ListItem>
          <Line style={{ width: "170px" }}></Line>
        </ListItem>
        <ListItem>
          <Line style={{ width: "110px" }}></Line>
        </ListItem>
      </TitleWrap>
    </Wrapper>
  );
};
const ListItem = styled.li`
  display: grid;
  grid-template-columns: 40px 1fr; /* fixed width for numerals */
  align-items: center;
  margin: 2px 0;

  &::marker {
    content: none; /* hide default marker */
  }

  &::before {
    counter-increment: roman;
    content: counter(roman, upper-roman) ".";
    margin-right: 12px;
  }
`;
const TitleHere = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 16px 0;
`;
const TitleWrap = styled.ul`
  font-size: 20px;
  list-style: none;
  counter-reset: roman;
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
const Line = styled.div`
  height: 20px;
  background: whitesmoke;
  margin: 8px 0;
`;
export default EpPage;
