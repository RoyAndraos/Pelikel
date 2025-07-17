import { Cloud, CloudWrapper, StyledLink } from "./CloudWiki";
const CloudEp = ({ cloudEpRef, visible }) => {
  return (
    <CloudWrapper ref={cloudEpRef}>
      <StyledLink to="/cloud???" visible={visible}>
        <Cloud src="/clouds/cloudEp.svg" alt="cloud" />
        [???]
      </StyledLink>
    </CloudWrapper>
  );
};
export default CloudEp;
