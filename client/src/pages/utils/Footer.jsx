import styled from "styled-components";
import { RiInstagramFill } from "react-icons/ri";
import { FaSpotify } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { useEffect, useRef } from "react";
import gsap from "gsap";
const Footer = ({ played, playedCount }) => {
  const iconsRef = useRef(null);
  useEffect(() => {
    if (!played) return;
    if (playedCount === 1) {
      gsap.to(iconsRef.current, { opacity: 1, duration: 0.1 });
    }

    gsap.to(iconsRef.current, {
      opacity: 1,
      duration: 3.5,
      delay: 1.2,
    });
  }, [played]);
  return (
    <Wrapper ref={iconsRef}>
      <Link href="https://www.instagram.com/pelikelmusic?utm_source=ig_web_button_share_sheet&igsh=bXJndWp2MW55aTUx">
        <RiInstagramFill style={{ fontSize: "35px" }} />
      </Link>
      <Link href="https://open.spotify.com/artist/4tiXJDgDwvcHMv77aA9Bb2?si=KcGSUKQuQzuC4WajpX4LrA">
        <FaSpotify style={{ fontSize: "33px" }} />
      </Link>
      <Link href="https://music.apple.com/ca/artist/pēlikel/1579987164">
        <SiApplemusic style={{ fontSize: "30px" }} />
      </Link>
      <Link href="https://youtube.com/@pelikelmusic?si=MeBUNEMJSoG4PBWN">
        <PiYoutubeLogoFill style={{ fontSize: "42px" }} />
      </Link>
      <Link href="https://open.anghami.com/02kkBtz74Ub">
        <Anghami src="/anghami.svg" />
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 30vw;
  height: 5vh;
  position: fixed;
  bottom: 3vh;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  opacity: 0;
`;
const Link = styled.a`
  opacity: 0.7;
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;
const Anghami = styled.img`
  width: 25px;
  height: 25px;
  background-color: whitesmoke;
  border-radius: 5px;
  padding: 2px;
`;

// IG icon
// https://www.instagram.com/pelikelmusic?utm_source=ig_web_button_share_sheet&igsh=bXJndWp2MW55aTUx
// SPOTIFY icon
// https://open.spotify.com/artist/4tiXJDgDwvcHMv77aA9Bb2?si=KcGSUKQuQzuC4WajpX4LrA
// APPLE MUSIC icon https://music.apple.com/ca/artist/pēlikel/1579987164
// YOUTUBE icon https://youtube.com/@pelikelmusic?si=MeBUNEMJSoG4PBWN
// ANGHAMI ICON https://open.anghami.com/02kkBtz74Ub

export default Footer;
