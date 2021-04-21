import { useEffect, useState } from 'react';

import './DynamicPage.scss';
import { useRouteMatch } from 'react-router-dom';
import createHttpClient from '../../http/http-factory';
import { IPage, ISection } from './IPage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function DyanmicPage(): JSX.Element {
    const pageName = (useRouteMatch().params as any).page;

    const [page, setPage] = useState<IPage>();

    useEffect(() => {
        createHttpClient().get<IPage[]>('/pages')
        .then((res) => res.data.find(p => p.path === pageName))
        .then((page) => setPage(page));
    }, [pageName]);


    const sections = () => {
        return page?.sections.map((s) => <Section key={s.id} section={s} />);
    }

    return (
        <div>
            <div>{page?.title}</div>
            <div>
                <Container fluid={true}>
                    <Row>{sections()}</Row>
                </Container>
            </div>
        </div>
    );
}

function Section(props: { section: ISection }): JSX.Element {
    return (
            <Col lg={props.section.position.lg}
                    md={props.section.position.md}
                    sm={props.section.position.sm}
                    xs={props.section.position.xs}>
                <h3>{props.section?.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: props.section?.content?.value }}></div>
            </Col>
    );
}