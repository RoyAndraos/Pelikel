import styled from "styled-components";
import Back from "../Back";
const WikiPage = () => {
  return (
    <div>
      <Header>
        <Back />
        <TitleWrap>
          <h1>cloud wiki</h1>
          <SubTitle>a nonexhaustive cloud-watcher's guide</SubTitle>
        </TitleWrap>
      </Header>
      <ContentWrap>
        <div>
          <ImageInfoWrap style={{ marginBottom: "2vh" }}>
            <StyledImage src="/wiki/cumulus.svg" alt="cumulus cloud" />
            <div>
              <BoldItal>cumulus</BoldItal>
              <Reg>/ˈkjuːmjʊləs/</Reg>
              <Reg>KYOO-myuh-luhs</Reg>
              <Definition>Cumulus = “heap” or “pile”</Definition>
              <H2>Description:</H2>
              <Reg>
                Puffy, white clouds with flat bottoms and rounded tops that
                usually form at low altitudes around 1,000 to 2,000 meters. They
                develop when warm air rises gently from the ground.
              </Reg>
              <Reg>
                <H2>When they appear:</H2>
                On calm and sunny days when the surface heats the air. They
                usually signal fair weather but can grow into storms if
                conditions become unstable (uh-oh!).
              </Reg>
            </div>
          </ImageInfoWrap>{" "}
          <ImageInfoWrap
            style={{
              position: "relative",
              left: "12vw",
              width: "32vw",
              marginBottom: "0",
            }}
          >
            <StyledImage
              style={{ width: "8vw" }}
              src="/wiki/cumulusHumilis.svg"
              alt="cumulus humilis cloud"
            />
            <div>
              <H2>Cumulus Humilis</H2>

              <Reg>/ˈkjuːmjʊləs ˈhjuːmɪlɪs/</Reg>
              <Reg>KYOO-myuh-luhs HYOO-mih-liss</Reg>
              <Reg style={{ marginTop: "15px" }}>
                Note: In the cumulus family, you may find the baby brother,
                Cumulus humilis, a less voluminous, flatter form of cumulus that
                stays low and doesn’t grow upward. A little, lonesome cloud,
                hovering alone in the middle of the big, big, big blue sky :(
              </Reg>
            </div>
          </ImageInfoWrap>
        </div>
        <ImageInfoWrap>
          <StyledImage src="/wiki/stratus.svg" alt="stratus cloud" />
          <div>
            <BoldItal>stratus</BoldItal> <Reg>/ˈstreɪtəs/</Reg>{" "}
            <Reg>STRAY-tuhs</Reg>
            <Definition>Stratus = “spread out” or “layer”</Definition>
            <H2>Description:</H2>
            <Reg>
              These form a thick, gray layer that covers the entire sky like a
              blanket. They are very low-level clouds, typically found below
              2,000 meters. Once they touch the ground, stratus clouds get
              promoted to the “fog” status :)
            </Reg>
            <H2>When they appear:</H2>
            <Reg>
              During cool, calm, and humid weather, often in the morning. They
              can bring light mist or drizzle and reduce visibility. Turn on
              those fog lights !
            </Reg>
          </div>
        </ImageInfoWrap>
        <ImageInfoWrap>
          <StyledImage src="/wiki/cumulonimbus.svg" alt="cumulonimbus cloud" />
          <div>
            <BoldItal>cumulonimbus</BoldItal>
            <Reg>/ˌkjuːmjʊləʊˈnɪmbəs/</Reg>
            <Reg>KYOO-myuh-loh-NIM-buhs</Reg>
            <Definition>Cumulus = “heap” + Nimbus = “rainstorm” </Definition>
            <H2>Description:</H2>

            <Reg>
              These are towering storm clouds that grow vertically from near the
              ground up to over 12,000 meters. They have dark, flat bases and
              huge, anvil-shaped tops.
            </Reg>
            <H2>When they appear:</H2>

            <Reg>
              On hot, humid days with strong rising air. Cumulonimbus clouds are
              responsible for thunderstorms, lightning, heavy rain, hail, and
              sometimes tornadoes (yikes!).
            </Reg>
          </div>
        </ImageInfoWrap>
        <ImageInfoWrap>
          <StyledImage src="/wiki/cirrus.svg" alt="cirrus cloud" />
          <div>
            <BoldItal>cirrus</BoldItal>
            <Reg>/ˈsɪrəs/</Reg>
            <Reg>SIR-uhs</Reg>
            <Definition>Cirrus = “curl of hair”</Definition>
            <H2>Description:</H2>

            <Reg>
              Cirrus clouds are high, thin, and wispy, made of ice crystals
              (pretty!). They form at altitudes above 6,000 meters, often well
              into the upper troposphere (whatever that means).
            </Reg>
            <H2>When they appear:</H2>

            <Reg>
              On fair days, often ahead of a warm front or weather system.
              They’re usually an early sign that a change in the weather is
              coming (change is always good I guess).
            </Reg>
          </div>
        </ImageInfoWrap>
        <ImageInfoWrap>
          <StyledImage src="/wiki/altocumulus.svg" alt="alto cumulus cloud" />
          <div>
            <BoldItal>altocumulus</BoldItal>
            <Reg>/ˌæltəʊˈkjuːmjʊləs/</Reg>
            <Reg>AL-toh-KYOO-myuh-luhs</Reg>
            <Definition>Altus = “high” + Cumulus = “heap”</Definition>

            <H2>Description:</H2>

            <Reg>
              Altocumulus clouds appear as gray or white patches, often in
              ripple-like patterns. They form in the middle level of the
              atmosphere, between 2,000 and 6,000 meters.
            </Reg>

            <H2>When they appear:</H2>

            <Reg>
              In the morning or early afternoon on warm, humid days. Their
              presence can signal developing instability and possible
              thunderstorms later (Ooo…).
            </Reg>
          </div>
        </ImageInfoWrap>
      </ContentWrap>
    </div>
  );
};

export const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2vh 0;
  height: 7vh;
`;
export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SubTitle = styled.h2`
  font-style: italic;
  font-weight: normal;
`;
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 91vw;
  top: 12vh;
  gap: 7vh;
  position: relative;
  padding: 0 4vw;
`;
const ImageInfoWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1vw;
  width: 44vw;
  &:last-of-type {
    margin-bottom: 10vh;
  }
  &:first-of-type {
    margin-top: 5vh;
  }
`;
const StyledImage = styled.img`
  width: 10vw;
`;
const BoldItal = styled.p`
  font-weight: 600;
  font-style: italic;
  font-size: 20px;
`;
const H2 = styled.p`
  font-weight: 600;
  font-size: 12px;
  margin-top: 15px;
  letter-spacing: -0.5px;
`;
const Reg = styled.p`
  font-size: 12px;
  letter-spacing: -0.5px;
`;
const Definition = styled.p`
  font-size: 12px;
  letter-spacing: -0.5px;
  margin-top: 5px;
  font-style: italic;
`;

export default WikiPage;
