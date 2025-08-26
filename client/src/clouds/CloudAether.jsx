import { CloudWrapper, Cloud, StyledLink } from "./CloudWiki";

const CloudAether = ({ cloudAether }) => {
  return (
    <CloudWrapper ref={cloudAether}>
      <StyledLink to="/cloudAether">
        <Cloud src="/clouds/cloudAether.svg" alt="" />
        aether voyage
      </StyledLink>
    </CloudWrapper>
  );
};

export default CloudAether;
