import * as React from "react";
import { hot } from "react-hot-loader/root";
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import "./css/custom-style.css";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function App() {
  return <Wrapper>  
    <div>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <div>Node version: {process.versions.node}</div>
    </div>
</Wrapper>;
}

export default hot(App);
