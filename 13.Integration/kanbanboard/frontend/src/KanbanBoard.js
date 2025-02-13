import React from "react";
import CardList from "./CardList";

function KanbanBoard() {
    return (
        <div className="Kanban_Board">
            {/* "To Do" 목록 */}
            <CardList title="To Do" />
            {/* "Doing" 목록 */}
            <CardList title="Doing" />
            {/* "Done" 목록 */}
            <CardList title="Done" />
        </div>
    );
}

export default KanbanBoard;
