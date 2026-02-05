import styled from "styled-components";
import Header from "./Header";
import Navbar from "../Navbar";
import Footer from "./utils/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <ContentWrapper>
        <a href="mailto:Pelikelmusic@gmail.com" target="_blank">
          Pelikelmusic@gmail.com
        </a>{" "}
      </ContentWrapper>
      <Footer />
    </div>
  );
};
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  font-size: 25px;
  transform: translateY(-50%);
  font-family: sans-serif;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 20px;
  border-radius: 10px;
  @media (max-width: 798px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: unset;
    height: 80vh;
    top: 12vh;
    transform: translateY(0);
    position: relative;
  }
`;

export default Contact;
