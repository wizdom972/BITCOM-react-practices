import React from "react";
import { _Task, Task_Remove } from "./assets/scss/Task.scss";

function Task({ text, isCompleted }) {
    return (
        <li className={_Task}>
            <input type="checkbox" defaultChecked={isCompleted} />
            {text}
            <a href="#" className={Task_Remove}></a>
        </li>
    );
}

export default Task;
