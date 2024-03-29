import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from 'react-router-dom'
import App from "./App";
import "antd/dist/antd.css";
import {Provider} from "react-redux";
import store from './store'

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
);
