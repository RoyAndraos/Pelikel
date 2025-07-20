import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Back = () => {
  const navigate = useNavigate();

  return (
    <BackButton
      onClick={() => {
        navigate("/");
      }}
    >
      back
    </BackButton>
  );
};

const BackButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: whitesmoke;
  position: absolute;
  left: 10vw;
  top: 50%;
  transform: translateY(-50%);
  text-decoration: underline;

  @media (max-width: 798px) {
    display: none;
  }
`;
export default Back;
