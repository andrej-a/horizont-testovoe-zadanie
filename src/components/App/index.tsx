import React from 'react';

import Catalog from '../Catalog';
import Header from '../UI/Header';
import Wrapper from '../Wrapper';

const App = () => {
    return (
        <Wrapper>
            <Header />
            <Catalog />
        </Wrapper>
    );
};

export default App;
