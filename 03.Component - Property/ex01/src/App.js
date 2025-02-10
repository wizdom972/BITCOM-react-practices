import React from "react";
import "./assets/css/styles.css";
import GroceryList from "./GroceryList";

function App(props) {
    const goroceries = [
        { name: "milk", count: 10 },
        { name: "bread", count: 20 },
        { name: "egg", count: 30 },
        { name: "meat", count: 40 },
    ];

    return (
        <div id={"App"}>
            <h1>{"Grocery List"}</h1>

            <GroceryList />
        </div>
    );
}

export default App;
