import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "../components/homepage/App";
import Test from "../components/Test";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MemoryRouter, Route } from 'react-router'


ReactDOM.render(<MemoryRouter>
    <Route exact path="/" component={App} />
    <Route exact path="/test" component={Test} />
</MemoryRouter>, document.getElementById("app"));
