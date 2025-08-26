import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
const YouTubeEmbed = ({ setShowYoutube, setClosedYoutube }) => {
  return (
    <Wrapper>
      <Title>AETHER VOYAGE</Title>
      <iframe
        width="75%"
        height="60%"
        padding="0"
        src="https://www.youtube.com/embed/nHTSPHYWjas?si=o41IZLqwDuU5Efjz"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <Link href="https://linktr.ee/pelikelmusic" target="_blank">
        WATCH NOW
      </Link>
      <Close
        onClick={() => {
          setClosedYoutube(true);
          setShowYoutube(false);
        }}
      >
        <CloseIcon />
      </Close>
    </Wrapper>
  );
};
const Title = styled.h1`
  font-size: 1.5rem;
  color: black;
  text-align: center;
  cursor: default;
`;
const Wrapper = styled.div`
  position: relative;
  width: 45vw;
  height: 65vh;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3vh;
  @media (max-width: 798px) {
    width: 80vw;
    height: 80vh;
    top: 10vh;
  }
`;
const Close = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 3rem;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  @media (max-width: 798px) {
    top: 5px;
    right: 5px;
  }
`;

const CloseIcon = styled(IoMdClose)`
  transition: opacity 0.3s ease;
  fill: black;

  &:hover {
    opacity: 0.7;
  }
`;
const Link = styled.a`
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 1.5rem;
  transition: 0.3s ease-in-out;
  color: black;
  &:hover {
    opacity: 0.7;
  }
`;

export default YouTubeEmbed;
