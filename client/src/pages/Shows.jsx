import { Header } from "./WikiPage";
import Back from "./utils/Back";
import { StyledNavlink, Title } from "./utils/Logo";
import styled from "styled-components";

const Shows = () => {
  return (
    <div>
      <Header>
        <Back />
        <StyledNavlink to="/" visible={true}>
          <Title style={{ opacity: 1 }}>pēlikel</Title>
        </StyledNavlink>
      </Header>
      <ContentWrapper>
        <a href="https://tally.so/r/mReMAv">
          <Image src="/july.jpg" alt="" />
        </a>
        <br />
        <span style={{ fontWeight: "bold" }}>Next show:</span> <br />
        July 20 - at Turbo Haüs <br />
        <a href="https://tally.so/r/mReMAv" target="_blank">
          Get your tickets.
        </a>
      </ContentWrapper>
    </div>
  );
};
const ContentWrapper = styled.p`
  line-height: 3vh;
  font-size: 20px;
  letter-spacing: 0.1rem;
`;
const Image = styled.img`
  width: 15vw;
`;

export default Shows;
