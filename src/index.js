import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import books from "./data/books";
import topics from "./data/topics";
import App from "./App";

import "material-components-web/dist/material-components-web.css";
import "./index.css";

ReactDOM.render(
  <Router>
    <App books={books} topics={topics} />
  </Router>,
  document.getElementById("root")
);