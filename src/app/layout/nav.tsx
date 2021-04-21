import React from "react";

export function Nav(props: any) {
    return (
        <nav className="nav">
            {props.children}
        </nav>
    );
}