import React from "react";
import TabItem from "./TabItem";

function Tabs({ data }) {
    return (
        <ul>
            {data.map((tab, index) => (
                <TabItem key={index} name={tab.name} />
            ))}
        </ul>
    );
}

export default Tabs;
