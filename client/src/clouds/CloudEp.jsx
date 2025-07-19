import { Cloud, CloudWrapper, StyledLink } from "./CloudWiki";
const CloudEp = ({ cloudEpRef, visible }) => {
  return (
    <CloudWrapper ref={cloudEpRef}>
      <StyledLink
        to="/cloud???"
        visible={visible}
        style={{ textDecoration: "none" }}
      >
        <Cloud
          src="/clouds/cloudEp.svg"
          alt="cloud"
          style={{ width: "15vw" }}
        />
        [???]
      </StyledLink>
    </CloudWrapper>
  );
};
export default CloudEp;
