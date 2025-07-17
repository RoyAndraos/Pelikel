import { CloudWrapper, Cloud, StyledLink } from "./CloudWiki";

const CloudAether = ({ cloudAether, visible }) => {
  return (
    <CloudWrapper ref={cloudAether}>
      <StyledLink to="/cloudAether" visible={visible}>
        <Cloud src="/clouds/cloudAether.svg" alt="cloud" />
        aether voyage
      </StyledLink>
    </CloudWrapper>
  );
};

export default CloudAether;
