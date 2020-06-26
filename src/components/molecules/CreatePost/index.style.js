import styled from 'styled-components';
import {
  Container as _Container,
  Row as _Row,
  Col as _Col,
} from 'styled-bootstrap-grid';

export const Row = {
  Def: styled(_Row)`
    margin-bottom: 8px;
  `,
};

export const Col = {
  Def: styled(_Col)``,
  Input: styled(_Col)`
    label {
      margin-right: 8px;
    }
  `,
};