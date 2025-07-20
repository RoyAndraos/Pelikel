import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import WikiPage from "./pages/WikiPage";
import { useEffect, useState } from "react";
import AetherPage from "./pages/AetherPage";
import EpPage from "./pages/EpPage";
import Shows from "./pages/Shows";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./pages/utils/Footer";

const App = () => {
  const [played, setPlayed] = useState(false);
  const [playedCount, setPlayedCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Example: mobile if width <= 768px
    };

    checkMobile(); // Run once on mount

    window.addEventListener("resize", checkMobile); // Listen for window resize

    return () => window.removeEventListener("resize", checkMobile); // Clean up listener
  }, []);
  return (
    <Wrapper>
      <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              played={played}
              setPlayed={setPlayed}
              setPlayedCount={setPlayedCount}
              playedCount={playedCount}
              open={open}
              setOpen={setOpen}
              isMobile={isMobile}
            />
          }
        />
        <Route path="/cloudWiki" element={<WikiPage />} />
        <Route path="/cloudAether" element={<AetherPage />} />
        <Route path="/cloud???" element={<EpPage />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Background src="/background.svg" alt="" />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3vw;
  @media (max-width: 798px) {
    flex-direction: column;
    gap: 0;
  }
`;
const Background = styled.img`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  object-fit: cover;
  z-index: -1;
`;

export default App;
