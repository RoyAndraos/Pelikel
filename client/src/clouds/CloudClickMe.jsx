import { useState, useEffect } from "react";
import { StyledLink, Cloud } from "./CloudWiki";
import styled from "styled-components";

const CloudClickMe = ({ played, setPlayed, setPlayedCount }) => {
  const [soundId, setSoundId] = useState(0);
  const [notes, setNotes] = useState([]);
  const [counter, setCounter] = useState(9);

  useEffect(() => {
    const preloadedNotes = Array.from({ length: 10 }, (_, i) => ({
      _id: i,
      note: new Audio(`/Aether Voyage Melody/MP3/AVM_Note_${i}.mp3`),
    }));
    const riser = {
      _id: 10,
      note: new Audio("/Aether Voyage Melody/RISER.wav"),
    };
    preloadedNotes.push(riser);

    setNotes(preloadedNotes);
  }, []);

  const handleClick = () => {
    if (notes.length === 0) return;

    const nextId = soundId >= 9 ? 1 : soundId + 1;
    if (counter !== 1) {
      setCounter((prev) => {
        return prev - 1;
      });
    } else {
      setCounter(9);
    }

    setSoundId(nextId);

    const currentAudio = notes[nextId]?.note;

    if (currentAudio) {
      currentAudio.currentTime = 0; // Restart if already playing
      currentAudio.play();
      if (soundId === 8) {
        const nextAudio = notes[nextId + 1]?.note;
        if (!played) {
          nextAudio.play();
          setPlayed(true);
          setTimeout(() => {
            setPlayedCount(1);
          }, 4000);
        }
      }
    }
  };

  return (
    <CloudWrapper
      onClick={() => {
        handleClick();
      }}
    >
      <Cloud src="/clouds/cloudClickMe.svg" alt="" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "3px",
          alignItems: "center",
        }}
      >
        <StyledLink>click me! </StyledLink>
        {!played && (
          <span style={{ fontSize: "12px", textDecoration: "none !important" }}>
            [{counter}]
          </span>
        )}
      </div>
    </CloudWrapper>
  );
};
const CloudWrapper = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: default !important;
`;

export default CloudClickMe;
