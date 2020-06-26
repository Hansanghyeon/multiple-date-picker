import React from 'react';
// components
import { PupupWrap, Container } from './index.style';

const Popup = ({ children }) => {
  return (
    <PupupWrap>
      <Container.Def>{children}</Container.Def>
    </PupupWrap>
  );
};

export default Popup;
