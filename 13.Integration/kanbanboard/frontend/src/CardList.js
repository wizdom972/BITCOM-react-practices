import React from "react";
import Card from "./Card";
import { Card_List } from "./assets/scss/CardList.scss";

function CardList({ title, cards }) {
    return (
        <div className={Card_List}>
            <h1>{title}</h1>
            {cards.map((card) => (
                <Card
                    key={card.no}
                    cardTitle={card.title}
                    cardDetail={card.description}
                    tasks={card.tasks}
                />
            ))}
        </div>
    );
}

export default CardList;
