import Cloud from "./Cloud";
import styled from "styled-components";
const App = () => {
  return (
    <Wrapper>
      <Cloud />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100vh;
  background-image: url("/background.svg");
  overflow: hidden;
`;

export default App;
