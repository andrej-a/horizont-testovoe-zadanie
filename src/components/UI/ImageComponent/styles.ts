import styled from 'styled-components';

import size from '@/types/sizes';

const { tablet } = size;

export const ImageWrapper = styled.div`
    width: 95%;
    height: 350px;

    @media (max-width: ${tablet}px) {
        width: 300px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;
