import Back from "./utils/Back";
import styled from "styled-components";
import { TitleWrap, Header } from "./WikiPage";
import { StyledNavlink, Title } from "./utils/Logo";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
const AetherPage = () => {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 798);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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

  return (
    <Wrapper>
      <Header>
        <Back /> <div></div>
        <TitleWrap>
          <h1 style={{ textDecoration: "underline" }}>aether voyage</h1>
        </TitleWrap>
        <StyledNavlink to="/" visible={true}>
          <Title style={{ opacity: 1 }}>pēlikel</Title>
        </StyledNavlink>
      </Header>
      {!isMobile && (
        <StyledLink href="https://linktr.ee/pelikelmusic" target="_blank">
          LISTEN TO AETHER VOYAGE
        </StyledLink>
      )}
      <ContentWrapper>
        <StyledLink href="https://ffm.to/od9jvea" target="_blank">
          <span>
            PRE-SAVE <br /> AETHER VOYAGE
          </span>
        </StyledLink>
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
        <TextWrapper ref={text1Ref}>
          Nowhere to run to, the lawn's freshly mowed
          <br />
          The strain of the lover is choking me
          <br />
          The bed's made of flowers, my hair's nicely combed <br />
          The voice of the living is calling me <br />
          Let my young memory rise <br />
          Reach the canopy of stars in the sky <br />
          Tethered, twinkling bits <br />
          One can gaze at, reminisce <br />
          Floating through aether, free as a leaf
          <br /> Blown by the gust of a sighing old tree <br />
          High, I'm as light as I can be
          <br /> Will I ever learn about gravity?
        </TextWrapper>
        <Image
          src="/artwork.webp"
          alt="Aether"
          onClick={() =>
            window.open("https://linktr.ee/pelikelmusic", "_blank")
          }
        />
        {isMobile && (
          <StyledLink href="https://linktr.ee/pelikelmusic" target="_blank">
            LISTEN TO AETHER VOYAGE
          </StyledLink>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};
const TextWrapper = styled.div`
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  @media (max-width: 798px) {
    width: 90vw;
  }
`;
const Image = styled.img`
  max-width: 40vw;
  max-height: 50vh;
  margin-top: 2vh;
  box-shadow: 5px 14px 8px rgba(0, 0, 0, 0.2);
  @media (max-width: 798px) {
    max-width: 90vw;
    max-height: unset;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;
const ContentWrapper = styled.div`
  font-family: "mom";
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5vw;
  font-size: 23px;
  line-height: 1.5;
  text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 798px) {
    flex-direction: column;
    line-height: 1.5;
    letter-spacing: -0.1rem;
    position: relative;
    top: 13vh;
    font-size: 18px;
  }
`;

const StyledLink = styled.a`
  text-decoration: underline;
  font-family: sans-serif;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 2vh;
  @media (max-width: 798px) {
    font-size: 18px;
  }
`;
export default AetherPage;
