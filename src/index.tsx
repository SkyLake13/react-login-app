import { render } from 'react-dom';
import { App } from './app';
import './tailwind.css';


// Run build:style command first to resolve err => Can't resolve './tailwind.css'

render(<App />, document.getElementById("root"));
