import React from "react";

function App() {
    // JSX 구간
    return (
        <div>
            <h1>Ex01</h1>
            <p>특징 I: HTML과 비교</p>

            <input type="text" />
            <hr />
            <img
                src="https://i.namu.wiki/i/Vp_U_w8sszXzBqBKahsODEbJyGn9LRguV03crZZqxE1OgKrh_bvDLo5G1igok4tbspPaJ1KRC4l0ZFCIaWZ1Sw.webp"
                width={300}
            />
            <h4
                id="title"
                className="header"
                style={{ textDecoration: "underline" }}
            >
                Hello World!
            </h4>
        </div>
    );
}

export { App };
