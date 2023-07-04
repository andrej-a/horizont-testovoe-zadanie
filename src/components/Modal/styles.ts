import styled, { css } from 'styled-components';

import size from '@/types/sizes';

const { mobileL } = size;

export const Overlay = styled.div<{ showModal: boolean }>`
    position: fixed;

    width: 100vw;
    height: 100vh;
    padding: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    ${({ showModal }) => {
        if (showModal) {
            return css`
                top: 0;
                left: 0;

                background-color: rgba(102, 204, 255, 0.5);
            `;
        }

        return css`
            position: absolute;
            top: -9999px;
            left: 0;

            background-color: rgba(102, 204, 255, 0);
        `;
    }}
`;

export const ModalWindow = styled.div`
    position: relative;

    width: auto;
    height: auto;
    padding: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: rgba(255, 255, 255, 1);
    cursor: auto;

    @media (max-width: ${mobileL}px) {
        width: 100vw;
        height: 100vh;
    }
`;

export const ModalContentWrapper = styled.div`
    padding: 10px;
`;

export const ProductTitle = styled.p`
    font-size: 18px;
`;

export const ProductDescription = styled.p`
    font-size: 12px;
    max-width: 350px;
`;

export const AddCommentButton = styled.button`
    padding: 5px;

    font-size: 14px;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border: 1px solid black;
        color: red;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;

export const CloseModalButton = styled.button`
    position: absolute;
    top: 5%;
    left: 90%;

    padding: 5px;
    background: transparent;
    border: 0;
    border-radius: 100%;

    font-size: 20px;
    color: red;

    cursor: pointer;

    @media (max-width: ${mobileL}px) {
        top: 3%;
        left: 85%;
    }
`;
