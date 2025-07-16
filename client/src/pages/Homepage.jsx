import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import CloudAether from "../clouds/CloudAether";
import CloudShows from "../clouds/CloudShows";
import CloudWiki from "../clouds/CloudWiki";
import CloudClickMe from "../clouds/CloudClickMe";
import gsap from "gsap";
import CloudEp from "../clouds/CloudEp";

const Homepage = ({ played, setPlayed, playedCount, setPlayedCount }) => {
  const cloudShows = useRef(null);
  const cloudAether = useRef(null);
  const cloudWiki = useRef(null);
  const cloudEpRef = useRef(null);

  useEffect(() => {
    if (!played) return;
    if (playedCount === 1) return;
    else {
      gsap.fromTo(
        cloudShows.current,
        {
          opacity: 0,
          display: "none",
        },
        {
          opacity: "1",
          duration: 3.5,
          display: "inline-block",
        }
      );
      gsap.fromTo(
        cloudAether.current,
        {
          opacity: 0,
          display: "none",
        },
        {
          opacity: "1",
          duration: 3.5,
          display: "inline-block",
          delay: 0.6,
        }
      );
      gsap.fromTo(
        cloudWiki.current,
        {
          opacity: 0,
          display: "none",
        },
        {
          opacity: "1",
          duration: 3.5,
          display: "inline-block",
          delay: 0.2,
        }
      );
      gsap.fromTo(
        cloudEpRef.current,
        {
          opacity: 0,
          display: "none",
        },
        {
          opacity: "1",
          duration: 3.5,
          display: "inline-block",
          delay: 0.8,
        }
      );
    }
  }, [played]);
  return (
    <Wrapper>
      {" "}
      {played && <CloudWiki cloudWiki={cloudWiki} />}
      {played && <CloudAether cloudAether={cloudAether} />}
      <CloudClickMe
        played={played}
        setPlayed={setPlayed}
        setPlayedCount={setPlayedCount}
      />
      {played && <CloudEp cloudEpRef={cloudEpRef} />}
      {played && <CloudShows cloudShows={cloudShows} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  /* background-image: url("/background.svg"); */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3vw;
  @media (max-width: 798px) {
    flex-direction: column;
    gap: 0;
  }
`;

export default Homepage;
