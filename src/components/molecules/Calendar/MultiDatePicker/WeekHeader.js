import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WeekHeader = (props) => {
  return (
    <Wrap>
      <span>{props[0]}</span>
    </Wrap>
  );
};

export default WeekHeader;
