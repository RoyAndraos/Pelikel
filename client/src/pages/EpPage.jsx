import Back from "./utils/Back";
import { Header } from "./WikiPage";
import { StyledNavlink, Title } from "./utils/Logo";
import styled from "styled-components";

const EpPage = () => {
  return (
    <div>
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
    </div>
  );
};
const TitleWrap = styled.div`
  text-align: center;
  font-size: 20px;
`;

export default EpPage;
