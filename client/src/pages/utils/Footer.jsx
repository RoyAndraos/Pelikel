import styled from "styled-components";
import { RiInstagramFill } from "react-icons/ri";
import { FaSpotify } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { useEffect, useRef } from "react";
import { AiFillTikTok } from "react-icons/ai";
import gsap from "gsap";

const Footer = ({}) => {
  const iconsRef = useRef(null);
  useEffect(() => {
    gsap.to(iconsRef.current, { opacity: 1, duration: 0.1 });
    gsap.to(iconsRef.current, {
      opacity: 1,
      duration: 3.5,
      delay: 1.2,
    });
  }, []);
  return (
    <Container>
      <Wrapper ref={iconsRef}>
        <Link
          target="_blank"
          href="https://www.instagram.com/pelikelmusic?utm_source=ig_web_button_share_sheet&igsh=bXJndWp2MW55aTUx"
        >
          <RiInstagramFill style={{ fontSize: "35px" }} />
        </Link>
        <Link
          target="_blank"
          href="https://www.tiktok.com/@pelikelmusic?_t=ZS-8ySlXaoS5xZ&_r=1"
        >
          <AiFillTikTok style={{ fontSize: "35px" }} />
        </Link>
        <Link
          target="_blank"
          href="https://open.spotify.com/artist/4tiXJDgDwvcHMv77aA9Bb2?si=KcGSUKQuQzuC4WajpX4LrA"
        >
          <FaSpotify style={{ fontSize: "33px" }} />
        </Link>
        <Link
          target="_blank"
          href="https://music.apple.com/ca/artist/pēlikel/1579987164"
        >
          <SiApplemusic style={{ fontSize: "30px" }} />
        </Link>
        <Link
          target="_blank"
          href="https://youtube.com/@pelikelmusic?si=MeBUNEMJSoG4PBWN"
        >
          <PiYoutubeLogoFill style={{ fontSize: "42px" }} />
        </Link>
        <Link target="_blank" href="https://open.anghami.com/02kkBtz74Ub">
          <Anghami src="/anghami.svg" />
        </Link>
      </Wrapper>
      © {new Date().getFullYear()} Pēlikel. All rights reserved.
    </Container>
  );
};
const Container = styled.div`
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  width: 100%;
  min-height: 10vh;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-size: 14px;

  @media (max-width: 798px) {
    position: relative;
    bottom: 0;
    width: 100vw;
    left: unset;
    transform: unset;
  }
`;
const Wrapper = styled.div`
  width: 30vw;
  height: 5vh;
  bottom: 3vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 798px) {
    width: 100vw;
  }
`;

const Link = styled.a`
  opacity: 0.7;
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

const Anghami = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 5px;
  padding: 2px;
`;

export default Footer;
