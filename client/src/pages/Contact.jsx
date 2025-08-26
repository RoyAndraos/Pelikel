import styled from "styled-components";
import { Header } from "./WikiPage";
import Back from "./utils/Back";
import { StyledNavlink, Title } from "./utils/Logo";

const Contact = () => {
  return (
    <div>
      <Header>
        <Back />
        <StyledNavlink to="/">
          <Title style={{ opacity: 1 }}>pēlikel</Title>
        </StyledNavlink>
      </Header>

      <ContentWrapper>
        <div style={{ display: "flex", flexDirection: "column" }}>
          For booking and inquiries:
          <a href="mailto:pelikelmusic@gmail.com" target="_blank">
            pelikelmusic@gmail.com
          </a>{" "}
        </div>
      </ContentWrapper>
    </div>
  );
};
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 20px;
  @media (max-width: 798px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
  }
`;

export default Contact;
