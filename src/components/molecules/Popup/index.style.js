import styled from 'styled-components';
import {
  Container as _Container,
  Row as _Row,
  Col as _Col,
} from 'styled-bootstrap-grid';

export const PupupWrap = styled.div`
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100vw;
  position: fixed;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: scroll;
  box-sizing: border-box;
`;

export const Container = {
  Def: styled(_Container)`
    background-color: #ececec;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 8px;
    box-sizing: border-box;
  `,
};

export const Inner = styled.div``;
