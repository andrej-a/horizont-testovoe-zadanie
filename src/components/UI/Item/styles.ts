import styled from 'styled-components';

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
`;

export const ItemTitle = styled.p`
    font-size: 20px;
    padding: 5px;
`;
