import React from "react";
import { UserContext } from "../user.context";

const header = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'blanchedalmond',
}

const headerName = {
    fontSize: '44px'
}

export function Header(props: any) {
    return (
            <UserContext.Consumer>
                { (value: any) => (
                    <div style={header}>
                        <div style={headerName}>
                            {props.children}
                        </div>
                        <div>
                            {value.username}
                        </div>
                    </div>
                ) }
            </UserContext.Consumer>
    );
}