import { Header } from "./WikiPage";
import Back from "./utils/Back";
import { StyledNavlink, Title } from "./utils/Logo";

import styled from "styled-components";

const About = () => {
  return (
    <div>
      <Header>
        <Back />
        <StyledNavlink to="/" visible={true}>
          <Title style={{ opacity: 1 }}>pēlikel</Title>
        </StyledNavlink>
      </Header>
      <ContentWrapper>
        <Image src="/about.png" alt="" />

        <Text>
          Pēlikel – from the French{" "}
          <span style={{ fontStyle: "italic" }}> “pellicule” </span>– is a
          musical group from Beirut, Lebanon, composed of Joey Semaan, Kevin
          Semaan, and Roy Andraos, who debuted under that name in 2019. Having
          disparate influences ranging from folk and pop to prog and classical
          music, each member brings their own impressions to the table, creating
          an eclectic and colorful musical style.
          <br />
          <br /> This sonic blend first culminated in{" "}
          <span style={{ fontStyle: "italic" }}>Shambles</span>, an 8-track
          debut record independently released in 2021. Half-sheltering itself
          under the progressive rock umbrella,{" "}
          <span style={{ fontStyle: "italic" }}>Shambles</span> was the band’s
          canvas for defining their sound and setting the stage for their
          evolution. With the explosive drumming of Mark Bitar, the band put
          their music into motion, propelling them from the Beirut music scene
          to Montreal stages.
          <br />
          <br /> Alongside the change of scenery, Pēlikel 's sound transformed.
          The rhythmic contributions of drummer Anton Samoylenko, brought a new
          turn of groove to the band’s live performances, and keyboardist Leslie
          Torck helped them translate the full scope of their sound to the
          stage, rendering it fuller, more true, more intentional.
          <br />
          <br /> Their upcoming project{" "}
          <Line key={"1"} style={{ width: "110px" }} /> is set for release later
          this year. Marked by sparse, vaporous vocals and a dynamic
          instrumentation, this release promises splashes of colors and sounds
          that pushes genre boundaries. Steel meets mellotron, strings meet
          synths, in a 6-piece record on{" "}
          <Line key={"3"} style={{ width: "80px" }} />,{" "}
          <Line key={"4"} style={{ width: "100px" }} />, and the{" "}
          <Line key={"5"} style={{ width: "120px" }} />.
        </Text>
      </ContentWrapper>
    </div>
  );
};
const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10vh 5vw 0 5vw;
  gap: 5vw;
  @media (max-width: 798px) {
    flex-direction: column;
    padding: 15vh 0;
  }
`;
const Image = styled.img`
  width: 25vw;
  @media (max-width: 798px) {
    width: 80vw;
  }
`;

const Text = styled.div`
  letter-spacing: 0.1rem;
  max-width: 35vw;
  text-align: justify;
  line-height: 1.5rem;
  @media (max-width: 798px) {
    max-width: 80vw;
    padding-bottom: env(safe-area-inset-bottom);
  }
`;

const Line = styled.img`
  height: 15px;
  background-color: whitesmoke;
`;

export default About;
