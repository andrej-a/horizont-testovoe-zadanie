import styled from 'styled-components';

export const FormWrapper = styled.div`
    width: 90%;
    height: auto;
    padding: 5px;
    background-color: white;

    cursor: auto;
`;

export const FormComponent = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const InputComponent = styled.input`
    width: 100%;
    padding: 5px;
    border: none;
    border-bottom: 1px solid black;

    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    background: transparent;
`;

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 10px;
`;
