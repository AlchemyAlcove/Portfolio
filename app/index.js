import Promise from "promise-polyfill"; // eslint-disable-line no-unused-vars
import Router from "./router";
import React from "react"; // eslint-disable-line no-unused-vars
import { render } from "react-dom";
import { isNil } from "lodash";
import { injectGlobal } from "emotion";

injectGlobal`
  html, body, #react-app {
    height: 100vh;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

document.addEventListener("DOMContentLoaded", () => {
  let app = document.getElementById("app-container");

  if(!isNil(app)) {
    render(<Router/>, app);
  }
});