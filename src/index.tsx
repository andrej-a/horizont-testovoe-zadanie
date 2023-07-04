import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary';
import GlobalStyle from './globalStyles';

const Root = () => {
    return (
        <ErrorBoundary>
            <App />
            <GlobalStyle />
        </ErrorBoundary>
    );
};

ReactDOM.render(<Root />, document.getElementById('root'));
