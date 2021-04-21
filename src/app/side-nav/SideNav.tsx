import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

export function SideNav(props: { navItem: NavItem[] }): JSX.Element {

    const item = (navItem: NavItem) => {
        return <Link to={`/${navItem.url}`} key={navItem.text}>
                <ListGroup.Item action key={navItem.text}>
                    {navItem.text}
                </ListGroup.Item>
            </Link>
    };

    return (
            <ListGroup>
                { props.navItem.map((n: NavItem) => item(n)) }
            </ListGroup>
    );
}

export interface NavItem {
    type: string;
    text: string;
    url: string;
}