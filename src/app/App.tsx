import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.scss';
import { Header } from "./header/Header";
import { SideNav, NavItem } from "./side-nav/SideNav";
import { AppErrorBoundary } from "./error/AppErrorBoundary";
import { AxiosResponse } from "axios";
import { HashRouter as Router } from "react-router-dom";
import { AppRoutes } from "./Routes";
import createHttpClient from "./http/http-factory";

export function App(): JSX.Element {
    const [showNav, setShowNav] = useState<boolean>(true);
    const [nav, setNav] = useState<NavItem[]>([])

    useEffect(() => {
        getPages().then(res => setNav(res as NavItem[]));
    }, []);

    const navigation = () => {
        if (showNav) {
            return  <Col xl={2} lg={3} md={4} sm={6} xs={12}>
                <SideNav navItem={nav} />
            </Col>
        }

        return undefined;
    }

    return (
        <AppErrorBoundary>
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Header onNavClick={() => setShowNav(!showNav)} />
                    </Col>
                </Row>
                <Router>
                    <Row>
                        {navigation()}
                        <Col>
                            <AppRoutes/>
                        </Col>
                    </Row>
                </Router>
            </Container>
        </AppErrorBoundary>
    );
}


export function getPages(): Promise<{ text: string, url: string }[]> {
    return createHttpClient().get<any[]>('/pages')
        .then((res: AxiosResponse<any[]>) => res.data.map(r => { 
            return { 
            text: r.title,
            url: r.path
        }}));
}