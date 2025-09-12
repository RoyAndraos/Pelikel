import Header from "./Header";
import Navbar from "../Navbar";
import styled from "styled-components";
import Footer from "./utils/Footer";

const Videos = () => {
  return (
    <Container>
      <Header />
      <Navbar />
      <ContentWrap>
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
