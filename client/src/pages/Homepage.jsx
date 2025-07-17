import { useRef, useEffect } from "react";
import styled from "styled-components";
import CloudAether from "../clouds/CloudAether";
import CloudWiki from "../clouds/CloudWiki";
import CloudClickMe from "../clouds/CloudClickMe";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import CloudEp from "../clouds/CloudEp";
import { Header } from "./WikiPage";
import Navbar from "../Navbar";
import Logo from "./utils/Logo";
gsap.registerPlugin(MotionPathPlugin);

const Homepage = ({ played, setPlayed, playedCount, setPlayedCount }) => {
  const cloudEp = useRef(null);
  const cloudAether = useRef(null);
  const cloudWiki = useRef(null);
  const titleRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    if (!played) return;
    if (playedCount === 1) {
      // MOTION PATH — also start at 0
      gsap.to(
        cloudEp.current,
        {
          motionPath: {
            path: "M20,0 A20,20 0 1,1 -20,0 A20,20 0 1,1 20,0",
            alignOrigin: [0.5, 0.5],
          },
          duration: 8,
          repeat: -1,
          ease: "none",
        },
        0 // position: start at same time as fade
      );

      gsap.to(cloudEp.current, {
        opacity: 1,
        duration: 0.1,
      });
      // FADE IN cloudAether
      gsap.to(cloudAether.current, { opacity: 1, duration: 0.1 });

      // FADE IN cloudWiki
      gsap.to(cloudWiki.current, { opacity: 1, duration: 0.1 });
      gsap.to(titleRef.current, { opacity: 1, duration: 0.1 });
      gsap.to(navbarRef.current, { opacity: 1, duration: 0.1 });
    }

    // FADE IN cloudEp
    const tlEp = gsap.timeline();

    // FADE IN
    tlEp.fromTo(
      cloudEp.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 3,
      },
      0
    );

    // MOTION PATH — also start at 0
    tlEp.to(
      cloudEp.current,
      {
        motionPath: {
          path: "M20,0 A20,20 0 1,1 -20,0 A20,20 0 1,1 20,0",
          alignOrigin: [0.5, 0.5],
        },
        duration: 8,
        repeat: -1,
        ease: "none",
      },
      0 // position: start at same time as fade
    );

    // FADE IN cloudAether
    gsap.to(cloudAether.current, { opacity: 1, duration: 3.5, delay: 0.4 });

    // FADE IN cloudWiki
    gsap.to(cloudWiki.current, { opacity: 1, duration: 3.5, delay: 0.2 });

    gsap.to(titleRef.current, {
      opacity: 1,
      duration: 3.5,
      delay: 0.8,
    });

    gsap.to(navbarRef.current, {
      opacity: 1,
      duration: 3.5,
      delay: 1.2,
    });
  }, [played]);
  return (
    <Container>
      <Header>
        <Logo titleRef={titleRef} visible={played} />
      </Header>
      <Navbar navbarRef={navbarRef} visible={played} />
      <div>
        {" "}
        <CloudEp cloudEpRef={cloudEp} visible={played} />
      </div>
      <Wrapper>
        <CloudWiki cloudWiki={cloudWiki} visible={played} />
        <CloudClickMe
          played={played}
          setPlayed={setPlayed}
          setPlayedCount={setPlayedCount}
        />
        <CloudAether cloudAether={cloudAether} visible={played} />
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-rows: 40vh 20vh;
  height: 100vh;
  align-items: center;
`;

const Wrapper = styled.div`
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
