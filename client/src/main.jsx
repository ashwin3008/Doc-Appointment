import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "antd/dist/reset.css";
import '@ant-design/v5-patch-for-react-19';
import { unstableSetRender } from 'antd';
import { createRoot } from 'react-dom/client';
import{Provider}from"react-redux";
import store from "./redux/store";

unstableSetRender((node, container) => {
  container._reactRoot ||= createRoot(container);
  const root = container._reactRoot;
  root.render(node);
  return async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    root.unmount();
  };
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
 <React.StrictMode>
    <App/>
  </React.StrictMode>
  </Provider>
 
);
