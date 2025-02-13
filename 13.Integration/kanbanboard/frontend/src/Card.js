import React, { useState } from "react";
import TaskList from "./TaskList";

function Card({ cardTitle, cardDetail }) {
    // 자세히 보기/접기 기능이 필요한 경우 예시로 State 사용
    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="_Card">
            <div
                className={`Card_Title ${isOpen ? "Card_Title_Open" : ""}`}
                onClick={toggleDetails}
            >
                {cardTitle}
            </div>
            {isOpen && (
                <div className="Card_Details">
                    {cardDetail}
                    {/* 필요하다면 TaskList도 여기에 삽입 */}
                    <TaskList />
                </div>
            )}
        </div>
    );
}

export default Card;
