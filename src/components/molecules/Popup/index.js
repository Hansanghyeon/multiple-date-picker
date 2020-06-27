import React, { useRef } from 'react';
import { TimelineLite } from 'gsap';
// components
import { PupupWrap, Container } from './index.style';
import useOutsideAlerter from '@utile/useOutsideAlerter';

const Popup = ({ children }) => {
  const MainContainer = useRef();
  const Popup = useRef();
  const closedPopup = () => {
    const tl = new TimelineLite();
    tl.to(Popup.current, 0, {
      display: 'none',
    });
  };
  const OpenPopup = () => {
    const tl = new TimelineLite();
    tl.to(Popup.current, 0, {
      display: null,
    });
  };
  useOutsideAlerter({ ref: MainContainer, inFunction: closedPopup });
  return (
    <PupupWrap ref={Popup}>
      <Container.Def ref={MainContainer}>{children}</Container.Def>
    </PupupWrap>
  );
};

export default Popup;
