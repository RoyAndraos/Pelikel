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
      <Click>Click Me!</Click>
    </ImageWrapper>
  );
};
const float = keyframes`
  0% {
    transform: translate(-50%, -50%) translate(0, 0);
  }
  25% {
    transform: translate(-50%, -50%) translate(10px, -10px);
  }
  50% {
    transform: translate(-50%, -50%) translate(20px, 0);
  }
  75% {
    transform: translate(-50%, -50%) translate(10px, 10px);
  }
  100% {
    transform: translate(-50%, -50%) translate(0, 0);
  }
`;
const Click = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  user-select: none;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;
const ImageWrapper = styled.div`
  background-image: url("/cloud.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${float} 4s ease-in-out infinite;
  cursor: pointer; /* ✅ fix: remove quotes! */
`;

export default Cloud;
