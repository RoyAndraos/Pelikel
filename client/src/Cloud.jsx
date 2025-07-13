import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
const Cloud = () => {
  const [soundId, setSoundId] = useState(0);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const preloadedNotes = Array.from({ length: 10 }, (_, i) => ({
      _id: i,
      note: new Audio(`/Aether Voyage Melody/MP3/AVM_Note_${i}.mp3`),
    }));
    setNotes(preloadedNotes);
  }, []);
  const handleClick = () => {
    if (notes.length === 0) return;

    const nextId = soundId >= 9 ? 1 : soundId + 1;
    setSoundId(nextId);

    const currentAudio = notes[nextId]?.note;

    if (currentAudio) {
      currentAudio.currentTime = 0; // Restart if already playing
      currentAudio.play();
    }
  };

  return (
    <ImageWrapper onClick={handleClick}>
      <Click>click me</Click>
    </ImageWrapper>
  );
};

const Click = styled.span`
  position: absolute;
  bottom:-1vh;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  user-select: none;
  font-family: "Helvetica", Sans-Serif;
  font-weight: 600;
  color: whitesmoke;
  opacity:0.8;
`;
const ImageWrapper = styled.div`
  background-image: url("/cloudNew.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 20vh;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer; 
  padding: 0;
  margin: 0;
  @media (max-width: 1000px) {
    height: 20vh;
  }
`;

export default Cloud;
