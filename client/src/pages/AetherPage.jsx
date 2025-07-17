import Back from "./utils/Back";
import styled from "styled-components";
import { TitleWrap, Header } from "./WikiPage";
import { StyledNavlink, Title } from "./utils/Logo";

const AetherPage = () => {
  return (
    <div>
      <Header>
        <Back /> <div></div>
        <TitleWrap>
          <h1>coming soon</h1>
        </TitleWrap>
        <StyledNavlink to="/" visible={true}>
          <Title style={{ opacity: 1 }}>pēlikel</Title>
        </StyledNavlink>
      </Header>
      <ContentWrapper>
        <Line key={"1"} style={{ width: "350px" }}></Line>
        <Line key={"2"} style={{ width: "330px" }}></Line>
        <Line key={"3"} style={{ width: "450px" }}></Line>
        <Line key={"4"} style={{ width: "315px" }}></Line>
        <br />
        <Line key={"5"} style={{ width: "240px" }}></Line>
        <Line key={"6"} style={{ width: "315px" }}></Line>
        <Line key={"7"} style={{ width: "220px" }}></Line>
        <Line key={"8"} style={{ width: "245px" }}></Line>
        <br />
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <Line key={"9"} style={{ width: "150px" }}></Line>
          aether,
          <Line key={"11"} style={{ width: "100px" }}></Line>
        </div>
        <Line key={"12"} style={{ width: "325px" }}></Line>
        <Line key={"13"} style={{ width: "245px" }}></Line>
        Will I ever learn about gravity?
      </ContentWrapper>
    </div>
  );
};
const ContentWrapper = styled.div`
  font-family: "mom";
  display: flex;
  letter-spacing: 0.1rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 23px;
`;
const Line = styled.div`
  height: 25px;
  margin-bottom: 5px;
  background-color: whitesmoke;
`;
export default AetherPage;
