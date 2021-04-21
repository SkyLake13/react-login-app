import { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import './Header.scss';
import { Portal } from "../Portal";
import { UserCard } from "./user-card/UserCard";

export function Header(props: { onNavClick: Function }): JSX.Element {
    const [variant] = useState<'dark' | 'light' | undefined>('dark');
    const [showUserCard, setShowUserCard] = useState<boolean>(false);
    const [clickPosition, setClickPosition] = useState<{x: number, y: number}>({x: 0, y: 0});

    const userCard = () => {
        if(showUserCard) {
            let container = document.getElementById('portal');
            if(!container) {
                container = document.createElement('div');
                document.appendChild(container);
            }
            container.style.left = `${clickPosition.x}px`;
            container.style.top = `${clickPosition.y}px`;
            container.style.position = 'absolute';
            

            return <Portal container={container}>
                        <UserCard userName="skylake" fullName="Abhishe Kumar"/>
                    </Portal>
        }

        return <></>;
    }

    const userClick = (event: any) => {
        setShowUserCard(!showUserCard);
        setClickPosition({ x: event.clientX, y: event.clientY });
        console.log(!showUserCard);
    }

    return (
        <Navbar bg={variant} variant={variant}>
            <Button variant={variant} onClick={() => props.onNavClick() }>
                <i className="bi bi-list"></i>
            </Button>
            <Navbar.Brand className="mr-auto">
                <div className="user-round">
                    Rainbow
                </div>
            </Navbar.Brand>
            <div className="user-round" onClick={(event) => userClick(event)}>
                img
            </div>
            {userCard()}
        </Navbar>
    );
}
