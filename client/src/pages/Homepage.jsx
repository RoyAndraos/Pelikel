import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import CloudAether from "../clouds/CloudAether";
import CloudWiki from "../clouds/CloudWiki";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import CloudEp from "../clouds/CloudEp";
import { Header } from "./WikiPage";
import Navbar from "../Navbar";
import Logo from "./utils/Logo";
gsap.registerPlugin(MotionPathPlugin);
import Footer from "./utils/Footer";
import HamburgerMenu from "./utils/HamburgerMenu";
import MobileNav from "./utils/MobileNav";
import YouTubeEmbed from "./utils/YouTubeEmbed";
const Homepage = ({
  open,
  setOpen,
  isMobile,
  closedYoutube,
  setClosedYoutube,
  showYoutube,
  setShowYoutube,
}) => {
  const cloudEp = useRef(null);
  const cloudAether = useRef(null);
  const cloudWiki = useRef(null);
  const titleRef = useRef(null);
  const navbarRef = useRef(null);
  const burgerRef = useRef(null);
  const presaveRef = useRef(null);
  const cloudClickMeRef = useRef(null);
  useEffect(() => {
    if (showYoutube) return;
    const tl = gsap.timeline();

    // motion path (infinite loop)
    tl.to(
      cloudEp.current,
      {
        motionPath: {
          path: "M10,0 A10,10 0 1,1 -10,0 A10,10 0 1,1 10,0",
          alignOrigin: [0.5, 0.5],
        },
        duration: 8,
        repeat: -1,
        ease: "none",
      },
      0
    ); // start at time 0

    // fade in over 2s at the same time
    tl.to(
      cloudEp.current,
      {
        opacity: 1,
        duration: 2,
      },
      0
    );

    // Other elements fading in
    gsap.to(cloudAether.current, { opacity: 1, duration: 2 });
    gsap.to(cloudWiki.current, { opacity: 1, duration: 2 });
    gsap.to(titleRef.current, { opacity: 1, duration: 2 });
    gsap.to(navbarRef.current, { opacity: 1, duration: 2 });
    gsap.to(burgerRef.current, { opacity: 1, duration: 2 });
    gsap.to(presaveRef.current, { opacity: 1, duration: 2 });
    gsap.to(cloudClickMeRef.current, { opacity: 1, duration: 2 });
  }, [showYoutube, closedYoutube]);

  return (
    <>
      {showYoutube && !closedYoutube ? (
        <YouTubeEmbed
          setShowYoutube={setShowYoutube}
          setClosedYoutube={setClosedYoutube}
        />
      ) : (
        <Container>
          <Header>
            {isMobile && (
              <HamburgerMenu
                burgerRef={burgerRef}
                setOpen={setOpen}
                open={open}
              />
            )}
            <Logo titleRef={titleRef} />
          </Header>
          <Link
            href="https://linktr.ee/pelikelmusic"
            target="_blank"
            ref={presaveRef}
          >
            LISTEN TO 'AETHER VOYAGE'
          </Link>

          <Wrapper>
            <CloudWiki cloudWiki={cloudWiki} />
            <CloudEp cloudEpRef={cloudEp} />
            <CloudAether cloudAether={cloudAether} />
          </Wrapper>
          {open && <MobileNav open={open} setOpen={setOpen} />}
          {!isMobile && <Navbar navbarRef={navbarRef} />}
          <Footer />
        </Container>
      )}
    </>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  gap: 5vh;
  align-items: center;
  @media (max-width: 798px) {
    padding-top: env(safe-area-inset-top);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100vh;
    width: 100%;
    gap: 0;
  }
`;
const Link = styled.a`
  font-size: 20px;
  position: relative;
  top: 8vh;
  text-align: center;
  text-decoration: none;
  font-family: sans-serif;
  opacity: 0;
  line-height: 3vh;
  letter-spacing: 0.1rem;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 798px) {
    font-size: 14px;
    top: 3vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3vw;
  top: 12vh;
  position: relative;
  height: 40vh;

  @media (max-width: 798px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    gap: 3vh;
    top: unset;
    bottom: 5vh;
  }
`;

export default Homepage;
