import React from "react";
import GroceryItem from "./GroceryItem";

function GroceryList({ groceries }) {
    const groceryItems = [
        <GroceryItem name="bread" count={10} />,
        <GroceryItem name="bread" count={10} />,
        <GroceryItem name="bread" count={10} />,
        <GroceryItem name="bread" count={10} />,
    ];

    return <ol className={"grocery-list"}>{groceryItems}</ol>;
}

export default GroceryList;
