import React from 'react';
import { HeaderComponent, HeaderTitle } from './styles';
import { constants } from '@/types/constants';

const { HEADER } = constants;

const Header = () => {
    return (
        <HeaderComponent>
            <HeaderTitle>{HEADER}</HeaderTitle>
        </HeaderComponent>
    );
};

export default Header;
