import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import GlobalStyle from './globalStyles';

const Root = () => {
    return (
        <>
            <App />
            <GlobalStyle />
        </>
    );
};

ReactDOM.render(<Root />, document.getElementById('root'));
