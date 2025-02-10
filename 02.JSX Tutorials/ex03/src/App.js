import React from "react";
import Header from "./Header";
import Contents from "./Contents";

// <Header /> == React.createElement("div", null, Header, React.createElement);

function App() {
    return (
        <div>
            <Header />
            <Contents />
        </div>
    );
}

export { App };
