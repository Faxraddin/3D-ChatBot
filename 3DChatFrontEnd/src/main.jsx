import React from "react";
import { render } from "react-dom"; 
import App from "./App";
import ChatProvider from "./hooks/ChatProvider"; 
import "./index.css";

render(
  <React.StrictMode>
    <ChatProvider>
      <App />
    </ChatProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
