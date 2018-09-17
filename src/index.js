import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import '../scss/styles.scss';

const Main = () => {
    return (
        <div>
            <App />
        </div>
    );
}

render(<Main />, document.getElementById('app'));