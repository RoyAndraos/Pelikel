import { useRef } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import Footer from "./utils/Footer";
import MobileNav from "./utils/MobileNav";
import Header from "./Header";
const Homepage = ({ open, setOpen, isMobile }) => {
  const navbarRef = useRef(null);
  const burgerRef = useRef(null);
  const titleRef = useRef(null);
  return (
    <div>
      <Container>
        <Header isMobile={isMobile} burgerRef={burgerRef} titleRef={titleRef} />
        <Wrapper>
          <Album>OKAY, MAYBE</Album>
          <Out>OUT NOW</Out>
          <Link target="_blank" href="https://linktr.ee/pelikelmusic">
            Listen HERE
          </Link>
        </Wrapper>
        {open && <MobileNav open={open} setOpen={setOpen} />}
        {!isMobile && <Navbar navbarRef={navbarRef} />}
      </Container>
      <Footer />
    </div>
  );
};
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
const Link = styled.a`
  text-decoration: underline;
  font-family: sans-serif;
  font-size: 25px;
`;

const Album = styled.h1`
  font-family: "mom";
  font-size: 40px;
  letter-spacing: 0.1em;
  cursor: default;
  font-weight: normal;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1vw;
  top: 40%;
  transform: translateY(-50%);
  position: relative;

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
