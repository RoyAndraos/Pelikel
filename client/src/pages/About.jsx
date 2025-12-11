import styled from "styled-components";
import Header from "./Header";
import Navbar from "../Navbar";
import Footer from "./utils/Footer";

const About = () => {
  return (
    <Contrainer>
      <Header />
      <Navbar />
      <ContentWrapper>
        <Image src="/about.webp" alt="" />
        <Text>
          Hailing from the Beirut music scene, Pēlikel – from the French
          pellicule – is a Montreal-based band composed of Joey Semaan, Kevin
          Semaan, and Roy Andraos. Rooted in progressive rock yet unbound by it,
          they draw from indie textures, orchestral sensibilities, and the
          emotional immediacy of folk. <br /> Their music balances delicate
          intimacy and explosive intensity, carrying a distinctly human pulse.
          Their almost synesthetic arrangements create a soundworld that is both
          intimate and widescreen, like film rendered through sound, inviting
          moments of self-reflective clarity, where emotion is so vivid you
          become aware of yourself within it. <br /> Following the release of
          their latest conceptual EP Okay, Maybe (2025), Pēlikel is bringing
          this sonic intensity to Canadian stages, joined live by Leslie Torck
          on keys and Étienne Desruisseaux on drums.
        </Text>
      </ContentWrapper>

      <Footer />
    </Contrainer>
  );
};

const Contrainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 5vw;
  height: auto;
  padding: 20vh 5vw;
  @media (max-width: 798px) {
    flex-direction: column;
    width: 90vw;
    align-items: center;
  }
`;
const Image = styled.img`
  max-width: 25vw;
  @media (max-width: 798px) {
    width: 80vw;
  }
`;

const Text = styled.div`
  letter-spacing: 0.1rem;
  max-width: 35vw;
  text-align: justify;
  font-size: 1vw;
  line-height: 1.5rem;
  font-family: sans-serif;
  @media (max-width: 798px) {
    max-width: 80vw;
    padding-bottom: env(safe-area-inset-bottom);
    font-size: 18px;
  }
`;

export default About;
