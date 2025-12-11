import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
const Navbar = ({ navbarRef }) => {
  const [selected] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });
  const location = window.location.pathname;
  useEffect(() => {
    const target = new Date("2026-01-28T20:00:00-05:00");

    const tick = () => {
      // Convert current time to Montreal time
      const now = new Date(
        new Date().toLocaleString("en-US", { timeZone: "America/Toronto" })
      );

      const diff = target - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, mins, secs });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Wrapper ref={navbarRef}>
      <StyledNavLink to={"/"} $selected={selected}>
        HOME
      </StyledNavLink>
      <StyledNavLink to={"/music"} $selected={selected}>
        MUSIC
      </StyledNavLink>
      <StyledNavLink to={"/videos"} $selected={selected}>
        VIDEOS
      </StyledNavLink>
      <StyledNavLink
        to={"/shows"}
        $selected={selected}
        style={{ display: "flex" }}
      >
        SHOWS
        {location !== "/shows" && (
          <NewShow>
            <FaArrowLeft />
            {/* add timer here till january 28th at 8pm montreal time */}
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.mins}m {timeLeft.secs}s
          </NewShow>
        )}
      </StyledNavLink>
      <StyledNavLink to={"/about"} $selected={selected}>
        ABOUT
      </StyledNavLink>
      <StyledNavLink
        to={"/contact"}
        $selected={selected}
        style={{ cursor: "pointer" }}
      >
        <span>CONTACT</span>
      </StyledNavLink>
    </Wrapper>
  );
};
//animate new show right left slowly
const animateNewShow = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
`;
const NewShow = styled.div`
  animation: ${animateNewShow} 1.5s ease-in-out infinite;
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-left: 1rem;
  gap: 0.5rem;
  &:hover {
    opacity: 1 !important;
    cursor: pointer;
  }
`;
const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  left: 2vw;
  top: 3vh;
  display: flex;
  height: 40vh;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  @media (max-width: 1000px) {
    display: none;
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: ${(props) =>
    props.$selected === props.to ? "underline" : "none"};
  font-family: sans-serif;
  font-size: 1.5vw;
  transform: scaleY(1.2);
  letter-spacing: 0.1em;
  transition: 0.2s ease-in-out;
  font-weight: ${(props) => (props.$selected === props.to ? "600" : "400")};
  &:hover {
    text-decoration: underline;
    opacity: 0.7;
    cursor: pointer;
  }
`;

export default Navbar;
