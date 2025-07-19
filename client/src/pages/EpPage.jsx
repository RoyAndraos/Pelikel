import React from "react";
import Back from "./utils/Back";
import { Header, TitleWrap } from "./WikiPage";
import { StyledNavlink, Title } from "./utils/Logo";

const EpPage = () => {
  return (
    <div>
      <Header>
        <Back />
        <div></div>
        <TitleWrap>
          <h1 style={{ textAlign: "center" }}>
            Nothing to see here. <br />I think I'll just lay for a while…
          </h1>
        </TitleWrap>
        <StyledNavlink to="/" visible={true}>
          <Title style={{ opacity: 1 }}>pēlikel</Title>
        </StyledNavlink>
      </Header>
    </div>
  );
};

export default EpPage;
