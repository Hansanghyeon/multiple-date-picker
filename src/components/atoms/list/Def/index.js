import React from 'react';
import moment from 'moment';
// components
import { Row, Col } from './index.style';

const List = ({ number, title, author, date }) => {
  return (
    <Row.Def>
      <Col.Def col={1}>{number}</Col.Def>
      <Col.Def col>{title}</Col.Def>
      <Col.Def col={2}>{author}</Col.Def>
      <Col.Def col={2}>
        {date ? moment(date).format('YYYY.MM.DD') : '작성일'}
      </Col.Def>
    </Row.Def>
  );
};

export default List;
