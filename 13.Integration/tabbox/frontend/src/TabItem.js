import React, { useState } from "react";
import styled from "styled-components";

const StyledTabItem = styled.li`
    float: right;
    border: 1px solid #999;
    border-radius: 10px 10px 0 0;
    width: 100px;
    height: 22px;
    margin-right: 2px;

    text-align: center;
    line-height: 22px;

    background-color: #ccc;
    cursor: pointer;

    &.active {
        background-color: #fc6;
    }
`;

function TabItem({ no, name, active, selectTab }) {
    const [select, setSelect] = useState(active);

    return (
        <StyledTabItem
            className={select ? "active" : ""}
            onClick={() => {
                selectTab(no);
            }}
        >
            {name}
        </StyledTabItem>
    );
}

export default TabItem;
