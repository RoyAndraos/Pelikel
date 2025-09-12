import styled from "styled-components";
import HamburgerMenu from "./utils/HamburgerMenu";
import Logo from "./utils/Logo";
import { useEffect, useState } from "react";
import MobileNav from "./utils/MobileNav";

const Header = ({ burgerRef, titleRef }) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Example: mobile if width <= 768px
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  return (
    <Wrapper>
      {isMobile && <Logo titleRef={titleRef} />}
      {isMobile && (
        <HamburgerMenu burgerRef={burgerRef} setOpen={setOpen} open={open} />
      )}

      {open && <MobileNav open={open} setOpen={setOpen} />}
      {!isMobile && <div></div>}
      {!isMobile && <Logo titleRef={titleRef} />}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 90vw;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 2vh 5vw;
`;
export default Header;
