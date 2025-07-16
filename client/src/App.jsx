import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import WikiPage from "./pages/wiki/WikiPage";
import { useState } from "react";
import AetherPage from "./pages/AetherPage";
import ShowsPage from "./pages/ShowsPage";
import EpPage from "./pages/EpPage";
const App = () => {
  const [played, setPlayed] = useState(false);
  const [playedCount, setPlayedCount] = useState(0);
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
            />
          }
        />
        <Route path="/cloudWiki" element={<WikiPage />} />
        <Route path="/cloudAether" element={<AetherPage />} />
        <Route path="/cloudShows" element={<ShowsPage />} />
        <Route path="/cloud???" element={<EpPage />} />
      </Routes>
      <Background src="/background.svg" alt="blue linear gradient" />
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
