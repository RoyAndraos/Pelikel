import Header from "./Header";
import Navbar from "../Navbar";
import styled from "styled-components";
import Footer from "./utils/Footer";

const Videos = () => {
  //   ANOTHER FALL - LIVE (CLIP)
  // https://www.youtube.com/watch?v=bNPxPoHRtOg
  // ● BACK TO YOU - LIVE (CLIP)
  // https://youtu.be/cLd4cws8ilc?si=PJv3CcgnhhBb-eCY
  return (
    <Container>
      <Header />
      <Navbar />
      <ContentWrap>
        <Title>BACK TO YOU - LIVE (CLIP)</Title>

        <VideoWrap>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/cLd4cws8ilc?si=VWIieXZAACrKKvr7"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </VideoWrap>

        <Title>ANOTHER FALL - LIVE (CLIP)</Title>
        <VideoWrap>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bNPxPoHRtOg?si=NdwO373ToyN_7ZRc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </VideoWrap>
        <Title>BITS OF SPACE - LIVE (ACOUSTIC)</Title>
        <VideoWrap>
          <iframe
            src="https://www.youtube.com/embed/joewtAKFY00?si=yQ4XAW-8fa8PV1M8"
            title="Pēlikel – Aether Voyage (acoustic live at Turbo Haüs – Montreal)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrap>
        <Title>AETHER VOYAGE - LIVE (ACOUSTIC)</Title>
        <VideoWrap>
          <iframe
            src="https://www.youtube.com/embed/mhkirJ2MgX4"
            title="Pēlikel – Aether Voyage (acoustic live at Turbo Haüs – Montreal)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrap>

        <Title>AETHER VOYAGE - MUSIC VIDEO</Title>
        <VideoWrap>
          <iframe
            src="https://www.youtube.com/embed/nHTSPHYWjas"
            title="Pēlikel – Aether Voyage (acoustic live at Turbo Haüs – Montreal)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrap>
        <Footer />
      </ContentWrap>
    </Container>
  );
};
const Container = styled.div`
  min-height: 100vh;
`;
const Title = styled.h2`
  font-size: 22px;
  font-weight: unset;
  font-family: sans-serif;
  letter-spacing: 0.1em;
  margin-top: 5vh;
  margin-bottom: -3vh;
  @media (max-width: 798px) {
    font-size: 18px;
    padding: 0 5vw;
  }
`;
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 98vw;
  gap: 7vh;
  min-height: 50vh;
  position: relative;
  top: 12vh;
  padding-bottom: 20vh;
`;
const VideoWrap = styled.div`
  width: 40vw;
  aspect-ratio: 16/9;
  box-shadow: 5px 14px 8px rgba(0, 0, 0, 0.2);
  @media (max-width: 798px) {
    width: 80vw;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;
export default Videos;
