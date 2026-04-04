import { useRef } from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../Navbar";
import Footer from "./utils/Footer";
import MobileNav from "./utils/MobileNav";
import Header from "./Header";
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;
const Homepage = ({ open, setOpen, isMobile }) => {
  const navbarRef = useRef(null);
  const burgerRef = useRef(null);
  const titleRef = useRef(null);
  const handleClick = () => {};

  return (
    <div>
      <Container>
        <Header isMobile={isMobile} burgerRef={burgerRef} titleRef={titleRef} />
        <Wrapper target="_blank" href="https://linktr.ee/pelikelmusic">
          <StyledImage src="/justLayArtwork.webp" alt="I'll Just Lay Artwork" />
          <Album>
            I'LL JUST LAY <Small>(FOR A WHILE)</Small>
          </Album>
          <Out>OUT NOW</Out>
          <Link>Listen HERE</Link>
        </Wrapper>
        {open && <MobileNav open={open} setOpen={setOpen} />}
        {!isMobile && <Navbar navbarRef={navbarRef} />}
      </Container>
      <Footer />
    </div>
  );
};
const Small = styled.span`
  font-size: 25px;
  display: inline-block;
  animation: ${float} 3s ease-in-out infinite;
`;
const StyledImage = styled.img`
  width: 10vw;
  box-shadow: 0 0 20px #0005;
  cursor: pointer;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  gap: 5vh;
  align-items: center;
  @media (max-width: 798px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 0;
    height: 80vh;
  }
`;
const Out = styled.h2`
  font-weight: normal;
  font-size: 25px;
  cursor: default;
  font-family: sans-serif;
`;
const Link = styled.span`
  text-decoration: underline;
  font-family: sans-serif;
  font-size: 25px;
`;

const Album = styled.h1`
  font-family: "mom";
  font-size: 40px;
  letter-spacing: 0.1em;
  cursor: pointer;
  font-weight: normal;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
const Wrapper = styled.a`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1vw;
  top: 40%;
  transform: translateY(-50%);
  position: relative;
  cursor: pointer;
  text-decoration: unset;

  @media (max-width: 798px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    gap: 3vh;
    top: 0;
    transform: translateY(0);
  }
`;

export default Homepage;
