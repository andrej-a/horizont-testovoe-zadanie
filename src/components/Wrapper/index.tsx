import React, { FC, ReactNode } from 'react';
import { WrapperComponent } from './styles';

interface IWrapper {
    children: ReactNode;
}

const Wrapper: FC<IWrapper> = ({ children }) => {
    return <WrapperComponent>{children}</WrapperComponent>;
};

export default Wrapper;
