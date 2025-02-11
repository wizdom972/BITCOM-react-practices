import React from "react";
import { title } from "./assets/scss/App.scss";
import GroceryList from "./GroceryList";

function App(props) {
    const groceries = [
        { name: "milk", count: 10 },
        { name: "bread", count: 20 },
        { name: "egg", count: 30 },
        { name: "meat", count: 40 },
    ];

    return (
        <div id={"App"}>
            <h1 className={title}>{"Grocery List"}</h1>
            <GroceryList groceries={groceries} />
        </div>
    );
}

export default App;
