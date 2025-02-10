import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.js";

// Production 모드에서는 console.log() 등의 출력이 브라우저에 표시되지 않도록 설정
if (process.env.NODE_ENV === "production") {
    console.log = () => {};
    console.info = () => {};
    console.warn = () => {};
    console.error = () => {};
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
