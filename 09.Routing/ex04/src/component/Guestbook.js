import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

export default function Guestbook() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            // window.location.href = "/gallery";

            navigate("/error/500");
        }, 3000);
    }, []);

    return (
        <>
            <ul>
                <li>
                    <NavLink to={"/"}>[Main]</NavLink>
                </li>
                <li>
                    <NavLink to={"/guestbook"}>[Guestbook]</NavLink>
                </li>
                <li>
                    <NavLink to={"/gallery"}>[Gallery]</NavLink>
                </li>
            </ul>

            <div>
                <h1>Guestbook</h1>
            </div>
        </>
    );
}
