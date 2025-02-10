import React from "react";
import Tabs from "./Tabs";
import data from "./assets/json/data.js";
import TabView from "./TabView";

function TabBox(props) {
    return (
        <div className={"tab-box"}>
            <Tabs data={data} />
            <TabView />
        </div>
    );
}

export default TabBox;
