import { Header } from "./WikiPage";
import Back from "./utils/Back";
import { StyledNavlink, Title } from "./utils/Logo";

const Contact = () => {
  return (
    <div>
      <Header>
        <Back />

        <StyledNavlink to="/" visible={true}>
          <Title style={{ opacity: 1 }}>pēlikel</Title>
        </StyledNavlink>
      </Header>
    </div>
  );
};

export default Contact;
