import styled from 'styled-components';

import size from '@/types/sizes';

const { laptop, tablet } = size;

export const ItemComponent = styled.div`
    width: 25%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;

    cursor: pointer;

    &:hover {
        background-color: antiquewhite;
    }

    @media (max-width: ${laptop}px) {
        width: 40%;
    }

    @media (max-width: ${tablet}px) {
        width: 300px;
    }
`;

export const ItemTitle = styled.p`
    font-size: 20px;
    padding: 5px;
`;
