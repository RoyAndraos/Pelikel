import styled from "styled-components";

const HamburgerMenu = ({ burgerRef, setOpen, open }) => {
  return (
    <Wrapper
      ref={burgerRef}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <LineTop $open={open} />
      <LineMid $open={open} />
      <LineBot $open={open} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column;
  gap: 7px;
  justify-content: center;
  align-items: center;
`;
const LineTop = styled.div`
  height: 3px;
  width: 40px;
  background-color: whitesmoke;
  transform: ${(props) => (props.$open ? "rotate(-45deg)" : "")};
  position: relative;
  top: ${(props) => (props.$open ? "9.5px" : "unset")};
`;
const LineMid = styled.div`
  height: 3px;
  width: 40px;
  background-color: whitesmoke;
  transition: 0.3s ease-in-out;
  opacity: ${(props) => (props.$open ? "0" : "1")};
`;
const LineBot = styled.div`
  height: 3px;
  width: 40px;
  background-color: whitesmoke;
  transition: 0.3s ease-in-out;
  transform: ${(props) => (props.$open ? "rotate(45deg)" : "")};
  top: ${(props) => (props.$open ? "-9.5px" : "unset")};
  position: relative;
`;

export default HamburgerMenu;
