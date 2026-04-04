import Header from "./Header";
import Navbar from "../Navbar";
import styled from "styled-components";
import { FaPlayCircle } from "react-icons/fa";
import Footer from "./utils/Footer";
//  ANOTHER FALL - LIVE (CLIP)
// https://www.youtube.com/watch?v=bNPxPoHRtOg
// ● BACK TO YOU - LIVE (CLIP)
// https://youtu.be/cLd4cws8ilc?si=PJv3CcgnhhBb-eCY
const Music = () => {
  return (
    <Wrapper>
      <Header />
      <Navbar />
      <ContentWrap>
        <ImageInfoWrap>
          <a
            href="https://www.submithub.com/link/pelikel-okay-maybe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImage src="/okayMaybeArtwork.webp" />
            <Name>OKAY, MAYBE</Name>
            <StyledPlay />
          </a>
        </ImageInfoWrap>
        <ImageInfoWrap>
          <a
            href="https://www.submithub.com/link/pelikel-live-at-radio-beirut"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImage src="/radioLive.webp" />
            <Name>LIVE AT RADIO BEIRUT</Name>
            <StyledPlay />
          </a>
        </ImageInfoWrap>
        <ImageInfoWrap>
          <a
            href="https://www.submithub.com/link/pelikel-shambles"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImage src="/shamblesArtwork.webp" />
            <Name>SHAMBLES</Name>
            <StyledPlay />
          </a>
        </ImageInfoWrap>
        <ImageInfoWrap>
          <a
            href="https://www.submithub.com/link/pelikel-ill-just-lay-for-a-while"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImage src="/justLayArtwork.webp" />
            <Name>I’LL JUST LAY (FOR A WHILE)</Name>
            <StyledPlay />
          </a>
        </ImageInfoWrap>

        <Footer />
      </ContentWrap>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  @media (max-width: 798px) {
  }
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 32px;

  transition: 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const StyledPlay = styled(FaPlayCircle)`
  position: absolute;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  fill: white;
  font-size: 5rem;
  transition: 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 798px) {
    font-size: 5rem;
    &:hover {
      opacity: unset;
    }
  }
`;

const ImageInfoWrap = styled.div`
  height: 13vw;
  aspect-ratio: 1 / 1;
  border: 1px solid black;
  border-radius: 32px;
  position: relative;
  top: -10vh;
  @media (max-width: 798px) {
    height: 60vw;
  }
`;
const ContentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 5vw;
  @media (max-width: 798px) {
    flex-direction: column;
    align-items: center;
    gap: 12vh;
    position: relative;
    top: 20vh;
    padding-bottom: 25vh;
  }
`;
const Name = styled.h2`
  text-align: center;
  position: relative;
  bottom: -1vw;
  font-size: 1.2rem;
  font-family: sans-serif;
  transform: scaleY(1.2);
  letter-spacing: 0.1em;
`;

export default Music;
