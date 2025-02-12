import React, { useState, useEffect } from "react";

export default function Hook({ color }) {
    const [boxColor, setBoxColor] = useState(null);
    const [title, setTitle] = useState("");

    /**
     *   [1] Alternative 01: getDerivedStateFromProps
     */

    if (boxColor !== color) {
        setBoxColor(color);
    }

    /**
     *   [2-1] After Rendering 함수 - Alternative 02: componentDidUpdate
     */

    useEffect(() => {
        console.log("After Rendering");
    });

    /**
     *  [2-2] After Rendering 함수 - 어떤 특정 상태(boxColor)의 변화에 반응(관심 분리)
     */

    useEffect(() => {
        console.log("After Rendering: boxColor Updated");
    }, [boxColor]);

    useEffect(() => {
        console.log("After Rendering: title Updated");
    }, [title]);

    /**
     *  [3] Alternative 03: componentDidMount & componentWillUnmount
     */

    useEffect(() => {
        // 여기는 mount 된 후에 실행됨
        console.log("After Mount(componentDidMount)");

        return () => {
            // 여기는 unmount 되기 전에 실행됨
            console.log("Before Unmount(componentWillUnmount)");
        };
    }, []);

    // render
    return (
        <>
            <h3
                style={{
                    width: 100,
                    height: 50,
                    backgroundColor: boxColor,
                }}
            />
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </>
    );
}
