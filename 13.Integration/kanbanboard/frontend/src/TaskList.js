// src/components/TaskList.js
import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
    return (
        <div className="Task_List">
            <ul>
                {tasks.map((task, index) => (
                    <Task
                        key={index}
                        text={task.text}
                        isCompleted={task.isCompleted}
                    />
                ))}
            </ul>
            <input
                className="Input_Add_Task"
                type="text"
                placeholder="태스크 추가"
            />
        </div>
    );
}

export default TaskList;
