import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { forwardRef, useMemo, useState } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export default function Nav(): JSX.Element {

    const [routes] = useState([
        { text: 'Main', url: '/' },
        { text: 'Page 1', url: '/page1', icon: <MailIcon /> },
        { text: 'Page 2', url: '/page2' },
    ]);

    return (
        <List component="nav">
            {routes.map((route) => (
                <ListItemLink key={route.url} primary={route.text} to={route.url} />
            ))}
        </List>
    );
}

interface ListItemLinkProps {
    icon?: React.ReactElement;
    primary: string;
    to: string;
}

function ListItemLink({ primary, to }: ListItemLinkProps) {
    const renderLink = useMemo(() => forwardRef<any, Omit<LinkProps, 'to'>>((itemProps, ref) => (
            <Link to={to} ref={ref} {...itemProps} />)), [to]);

    return (
        <ListItem button component={renderLink}>
            <ListItemIcon>
                <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary={primary} />
        </ListItem>
    );
}
