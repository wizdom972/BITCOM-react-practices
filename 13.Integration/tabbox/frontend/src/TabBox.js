import React, { useState } from "react";
import Tabs from "./Tabs";
import data from "./assets/json/data.js";
import TabView from "./TabView";
import { Tab_Box } from "./assets/scss/TabBox.scss";

function TabBox(props) {
    const [activeIndex, setActiveIndex] = useState(0);

    const selectTab = (no) => {
        setActiveIndex(data.findIndex((e) => e.no === no));
    };

    return (
        <div className={Tab_Box}>
            <Tabs
                data={data.map((e, i) => {
                    // const n = Object.assign({}, e);
                    const { contents, ...rest } = e;

                    rest.active = i === activeIndex;

                    // return n;
                    return rest;
                })}
                selectTab={selectTab}
            />
            <TabView contents={data[activeIndex].contents} />
        </div>
    );
}

export default TabBox;
