import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';

const Container = styled.div`
  width: 300px;
  background-color: green;
  height: ${prop('boxHeight')}px;
`;

export default function Box(props) {
  return <Container {...props} />;
}
