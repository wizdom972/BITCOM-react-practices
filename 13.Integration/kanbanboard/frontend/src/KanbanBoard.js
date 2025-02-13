import React from "react";
import CardList from "./CardList";
import { Kanban_Board } from "./assets/scss/KanbanBoard.scss";
import data from "./assets/json/data";

function KanbanBoard() {
    const cardsToDo = data.filter((card) => card.status === "ToDo");
    const cardsDoing = data.filter((card) => card.status === "Doing");
    const cardsDone = data.filter((card) => card.status === "Done");

    return (
        <div className={Kanban_Board}>
            {/* "To Do" 목록 */}
            <CardList title="To Do" cards={cardsToDo} />
            {/* "Doing" 목록 */}
            <CardList title="Doing" cards={cardsDoing} />
            {/* "Done" 목록 */}
            <CardList title="Done" cards={cardsDone} />
        </div>
    );
}

export default KanbanBoard;
