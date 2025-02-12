import React from "react";
import TabItem from "./TabItem";
import { Tabs_Style } from "./assets/scss/Tabs.scss";

function Tabs({ data }) {
    return (
        <ul className={Tabs_Style}>
            {data.map((tab) => (
                <TabItem key={tab.no} name={tab.name} active={tab.active} />
            ))}
        </ul>
    );
}

export default Tabs;
