import React, { useRef, useState } from "react";

import './frame.scss'


export function Frame(props: any): JSX.Element {
    const frame = useRef<HTMLIFrameElement>(null);
    const [, setLoaded] = useState(false);
    const [, sethasError] = useState(false);
    const [isFullscreen] = useState(false);

    const maximize = async () => {
        if (!isFullscreen) {
            await frame.current?.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    const onLoad = () => {
        setLoaded(true);
    }

    const onError = () => {
        sethasError(true);
    }

    return (
        <div>
            <div className="frame-header">
                <span>{props.name}</span>
                <button onClick={() => maximize()}>_</button>
            </div>
            <iframe ref={frame} src={props.src} 
                allowFullScreen
                onLoad={() => onLoad()}
                onError={() => onError()}>
            </iframe>
        </div>
    );
}


