import React, { FC, memo, ReactNode } from 'react';

import { WrapperComponent } from './styles';

interface IWrapper {
    children: ReactNode;
}

const Wrapper: FC<IWrapper> = memo(({ children }) => {
    return <WrapperComponent>{children}</WrapperComponent>;
});

export default Wrapper;
