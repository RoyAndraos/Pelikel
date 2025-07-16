import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CloudWrapper, Cloud, StyledLink } from "./CloudWiki";

const CloudAether = ({ cloudAether }) => {
  return (
    <CloudWrapper ref={cloudAether}>
      <StyledLink to="/cloudAether">
        <Cloud src="/clouds/cloudAether.svg" alt="cloud" />
        aether
      </StyledLink>
    </CloudWrapper>
  );
};

export default CloudAether;
