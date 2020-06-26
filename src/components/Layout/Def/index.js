import React from 'react';
// Components
import { Container, Row, Col } from './index.style';
import List from '@atom/list/Def';
import Popup from '@molecule/Popup';
import CreatePost from '@molecule/CreatePost';

const DefLayout = () => {
  return (
    <Container.Board>
      <List number="번호" title="제목" author="작성자" date={null} />
      <Popup>
        <CreatePost title="시니어 계획 등록" />
      </Popup>
    </Container.Board>
  );
};

export default DefLayout;
