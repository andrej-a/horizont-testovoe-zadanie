import React from 'react';

import { constants } from '@/types/constants';

import { HeaderComponent, HeaderTitle } from './styles';

const { HEADER } = constants;

const Header = () => {
    return (
        <HeaderComponent>
            <HeaderTitle>{HEADER}</HeaderTitle>
        </HeaderComponent>
    );
};

export default Header;
