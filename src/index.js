import React from 'react';
import { render } from 'react-dom';
import '../styles.scss';

const App = () => {
    return (
        <div>
            <h2>Feather & Ash</h2>
            <h3>Production Company</h3>
        </div>
    );
}

render(<App />, document.getElementById('app'));