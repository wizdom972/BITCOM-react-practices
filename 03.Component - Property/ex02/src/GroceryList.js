import React from "react";
import GroceryItem from "./GroceryItem";

function GroceryList({ groceries }) {
    // 이렇게 하지는 말고 map을 사용하자
    // const groceryItems = [];

    // groceries.forEach((grocery) => {
    //     groceryItems.push(
    //         <GroceryItem name={grocery.name} count={grocery.count} />
    //     );
    // });

    return (
        <ol className={"grocery-list"}>
            {groceries.map((grocery, index) => {
                return (
                    <GroceryItem
                        key={index}
                        name={grocery.name}
                        count={grocery.count}
                    />
                );
            })}
        </ol>
    );
}

export default GroceryList;
