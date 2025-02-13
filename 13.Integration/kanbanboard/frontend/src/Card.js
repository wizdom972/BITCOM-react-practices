import React, { useState } from "react";
import TaskList from "./TaskList";
import { _Card, Card_Title, Card_Title_Open } from "./assets/scss/Card.scss";

function Card({ cardTitle, cardDetail, tasks }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={_Card}>
            <div
                className={`${Card_Title} ${isOpen ? Card_Title_Open : ""}`}
                onClick={toggleDetails}
            >
                {cardTitle}
            </div>
            {isOpen && (
                <div className="Card_Details">
                    {cardDetail}
                    {tasks && tasks.length > 0 && <TaskList tasks={tasks} />}
                </div>
            )}
        </div>
    );
}

export default Card;
