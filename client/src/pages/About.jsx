import styled from "styled-components";
import Header from "./Header";
import Navbar from "../Navbar";
import Footer from "./utils/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <ContentWrapper>
        <Image src="/about.webp" alt="" />
        <Text>
          Pēlikel – from the French “pellicule” – is a progressive rock band
          composed of Joey Semaan, Kevin Semaan, and Roy Andraos. <br />
          <br />
          Their debut record Shambles (2021) was the canvas for defining their
          sound and setting the stage for their evolution.
          <br />
          <br /> With it, the band put their music into motion, propelling them
          from the Beirut music scene to Montreal stages.
          <br /> With the freedom of progressive rock, their music explores the
          wind of classical compositions, the textures of indie, and the weight
          of folk. It blends delicate intimacy and explosive intensity, weaving
          emotion into motion and spontaneity into structure, reading like a
          film.
        </Text>
        <Footer />
      </ContentWrapper>
    </div>
  );
};
const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5vw 0 5vw;
  gap: 5vw;
  @media (max-width: 798px) {
    flex-direction: column;
    padding: 15vh 5vw;
    width: 90vw;
    align-items: center;
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
  font-size: 1.5vw;
  line-height: 1.5rem;
  font-family: sans-serif;
  @media (max-width: 798px) {
    max-width: 80vw;
    padding-bottom: env(safe-area-inset-bottom);
    font-size: 18px;
  }
`;

export default About;
