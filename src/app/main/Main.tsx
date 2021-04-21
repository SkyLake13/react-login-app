import './Main.scss';

export function Main(props: { sections: any[] }): JSX.Element {
    return (
        <div className="sections margin">
            { props.sections.map((section: any) => <Section key={section.heading} heading={section.heading} content={section.content}/>) }
        </div>
    );
}

export function Section(props: { heading: string, content: string }): JSX.Element {
    return (
        <div>
            <h3>{props.heading}</h3>
            <div>{props.content}</div>
        </div>
    );
}
