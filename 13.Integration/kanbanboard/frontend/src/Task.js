import React from "react";

function Task({ text, isCompleted }) {
    return (
        <li className="_Task">
            <input type="checkbox" defaultChecked={isCompleted} />
            {text}
            <a href="#" className="Task_Remove"></a>
        </li>
    );
}

export default Task;
