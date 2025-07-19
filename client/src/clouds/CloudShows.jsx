import { CloudWrapper, Cloud, StyledLink } from "./CloudWiki";

const CloudShows = ({ cloudShows }) => {
  return (
    <CloudWrapper ref={cloudShows}>
      <StyledLink to="/cloudShows">
        <Cloud src="/clouds/cloudShows.svg" alt="" />
        shows
      </StyledLink>
    </CloudWrapper>
  );
};

export default CloudShows;
