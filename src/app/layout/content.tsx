import React from "react";

export function Content(props: any) {
    return (
        <div className="content-list">
            {props.children}
        </div>
    );
}