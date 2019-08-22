import * as React from "react";
import { hot } from "react-hot-loader/root";
import "./css/custom-style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'reactstrap';

function App() {
  return <div>
  <Link to={`test`}>
    <Button outline color="primary">
          Rendering with React
    </Button>{' '}
  </Link>
  <Button outline color="secondary">secondary</Button>{' '}
  <Button outline color="success">success</Button>{' '}
  <Button outline color="info">info</Button>{' '}
  <Button outline color="warning">warning</Button>{' '}
  <Button outline color="danger">danger</Button>
</div>;
}

export default hot(App);
