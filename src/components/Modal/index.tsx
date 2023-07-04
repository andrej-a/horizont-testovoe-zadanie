import React from 'react';
import {
    AddCommentButton,
    ModalContentWrapper,
    ModalWindow,
    Overlay,
    ProductDescription,
    ProductTitle,
} from './styles';
import { IPhoto } from '@/types/IPhoto';
import ImageComponent from '../UI/ImageComponent';
import { constants } from '@/types/constants';

interface IModal {
    content: IPhoto;
    onSetShowModal: (value: boolean) => () => void;
    showModal: boolean;
}

const { CARDS_TITLE, CARDS_DESCRIPTION, ADD_COMMENT_TITLE } = constants;
const Modal = ({
    content: { url, title, description },
    onSetShowModal,
    showModal,
}: IModal) => {
    return (
        <Overlay showModal={showModal} onClick={onSetShowModal(false)}>
            <ModalWindow onClick={e => e.stopPropagation()}>
                <ImageComponent source={url} alt={title} />
                <ModalContentWrapper>
                    <ProductTitle>
                        {<strong>{CARDS_TITLE}: </strong>}
                        {title}
                    </ProductTitle>
                </ModalContentWrapper>
                <ModalContentWrapper>
                    <ProductDescription>
                        {<strong>{CARDS_DESCRIPTION}: </strong>}
                        {description}
                    </ProductDescription>
                </ModalContentWrapper>
                <ModalContentWrapper>
                    <AddCommentButton>{ADD_COMMENT_TITLE}</AddCommentButton>
                </ModalContentWrapper>
            </ModalWindow>
        </Overlay>
    );
};

export default Modal;
