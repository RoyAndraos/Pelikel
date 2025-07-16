import { CloudWrapper, Cloud, StyledLink } from "./CloudWiki";
const CloudEp = ({ cloudEpRef }) => {
  return (
    <CloudWrapper ref={cloudEpRef}>
      <StyledLink to="/cloud???">
        <Cloud src="/clouds/cloudEp.svg" alt="cloud" />
        (???)
      </StyledLink>
    </CloudWrapper>
  );
};

export default CloudEp;
