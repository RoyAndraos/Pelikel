import Back from "./utils/Back";
import styled from "styled-components";
import { TitleWrap, Header, SubTitle } from "./WikiPage";
import { StyledNavlink, Title } from "./utils/Logo";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
const AetherPage = () => {
  const [countdown, setCountdown] = useState("00d 00h 00m 00s");
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    gsap.to(text1Ref.current, {
      opacity: 1,
      duration: 2,
    });
    gsap.to(text2Ref.current, {
      opacity: 1,
      duration: 2,
    });
  }, []);
  useEffect(() => {
    const targetDate = new Date("2025-08-08T00:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setCountdown("It's time!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Wrapper>
      <Header>
        <Back /> <div></div>
        <TitleWrap>
          <h1>aether voyage</h1>
          <SubTitle style={{ fontSize: "15px", marginTop: "10px" }}>
            {countdown}
          </SubTitle>
        </TitleWrap>
        <StyledNavlink to="/" visible={true}>
          <Title style={{ opacity: 1 }}>pēlikel</Title>
        </StyledNavlink>
      </Header>
      <ContentWrapper>
        <Line key={"1"} style={{ width: "350px" }}></Line>
        <Line key={"2"} style={{ width: "330px" }}></Line>
        <Line key={"3"} style={{ width: "450px" }}></Line>
        <Line key={"4"} style={{ width: "315px" }}></Line>
        <br />
        <Line key={"5"} style={{ width: "240px" }}></Line>
        <Line key={"6"} style={{ width: "315px" }}></Line>
        <Line key={"7"} style={{ width: "220px" }}></Line>
        <Line key={"8"} style={{ width: "245px" }}></Line>
        <br />
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <Line key={"9"} style={{ width: "150px" }}></Line>
          <span ref={text1Ref} style={{ opacity: 0 }}>
            aether,
          </span>
          <Line key={"11"} style={{ width: "100px" }}></Line>
        </div>
        <Line key={"12"} style={{ width: "325px" }}></Line>
        <Line key={"13"} style={{ width: "245px" }}></Line>
        <span ref={text2Ref} style={{ opacity: 0 }}>
          Will I ever learn about gravity?
        </span>
      </ContentWrapper>
    </Wrapper>
  );
};
const ContentWrapper = styled.div`
  font-family: "mom";
  display: flex;
  letter-spacing: 0.1rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 23px;

  @media (max-width: 798px) {
    transform: scale(0.75);
    top: 15vh;
    position: relative;
  }
`;
const Line = styled.div`
  height: 25px;
  margin-bottom: 5px;
  background-color: whitesmoke;
`;
const Wrapper = styled.div``;
export default AetherPage;
