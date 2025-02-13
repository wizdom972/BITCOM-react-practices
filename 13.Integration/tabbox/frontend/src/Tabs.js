import React from "react";
import TabItem from "./TabItem";
import { Tabs_Style } from "./assets/scss/Tabs.scss";

function Tabs({ data, selectTab }) {
    return (
        <ul className={Tabs_Style}>
            {data.map((tab) => (
                <TabItem
                    key={tab.no}
                    no={tab.no}
                    name={tab.name}
                    active={tab.active}
                    selectTab={selectTab}
                />
            ))}
        </ul>
    );
}

export default Tabs;
