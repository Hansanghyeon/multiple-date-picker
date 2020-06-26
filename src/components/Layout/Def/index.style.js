import styled from 'styled-components';
import {
  Container as _Container,
  Row as _Row,
  Col as _Col,
} from 'styled-bootstrap-grid';

export const Container = {
  Def: styled(_Container)``,
  Board: styled(_Container)`
    padding: 20px;
  `,
};
export const Row = {
  Def: styled(_Row)``,
  Header: styled(_Row)``,
};

export const Col = {
  Def: styled(_Col)``,
};
