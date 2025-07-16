import { useState, useEffect } from "react";
import { CloudWrapper, StyledLink, Cloud } from "./CloudWiki";

const CloudClickMe = ({ played, setPlayed, setPlayedCount }) => {
  const [soundId, setSoundId] = useState(0);
  const [notes, setNotes] = useState([]);

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
      <Cloud src="/clouds/cloudClickMe.svg" alt="cloud" />
      <StyledLink>click me</StyledLink>
    </CloudWrapper>
  );
};

export default CloudClickMe;
