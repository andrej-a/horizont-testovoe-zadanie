import React, { memo, useState } from 'react';
import { createPortal } from 'react-dom';

import { constants, numberConstants } from '@/types/constants';
import { IProduct } from '@/types/IPhoto';

import Comments from '../Comments';
import Form from '../Form';
import ImageComponent from '../UI/ImageComponent';
import {
    AddCommentButton,
    CloseModalButton,
    ModalContentWrapper,
    ModalWindow,
    Overlay,
    ProductDescription,
    ProductTitle,
} from './styles';

interface IModal {
    content: IProduct;
    onSetShowModal: (value: boolean) => () => void;
    showModal: boolean;
    onSetCatalog: (updatedCatalog: IProduct[]) => void;
    catalog: IProduct[];
}

const {
    CARDS_TITLE,
    CARDS_DESCRIPTION,
    ADD_COMMENT_TITLE,
    CLOSE_COMMENTS_FORM,
} = constants;
const { MAX_COUNT_OF_THE_COMMENTS } = numberConstants;

const Modal = memo(
    ({
        content: { url, title, description, id, comments },
        onSetShowModal,
        showModal,
        onSetCatalog,
        catalog,
    }: IModal) => {
        const [showForm, setShowForm] = useState(false);
        const onSetShowForm = (value: boolean) => () => {
            setShowForm(value);
        };
        return createPortal(
            <Overlay showModal={showModal} onClick={onSetShowModal(false)}>
                <ModalWindow onClick={e => e.stopPropagation()}>
                    <ImageComponent source={url} alt={title} />
                    <ModalContentWrapper>
                        <ProductTitle>
                            <strong>{CARDS_TITLE}: </strong>
                            {title}
                        </ProductTitle>
                    </ModalContentWrapper>
                    <ModalContentWrapper>
                        <ProductDescription>
                            <strong>{CARDS_DESCRIPTION}: </strong>
                            {description}
                        </ProductDescription>
                    </ModalContentWrapper>
                    {comments.length < MAX_COUNT_OF_THE_COMMENTS && (
                        <ModalContentWrapper>
                            <AddCommentButton
                                onClick={onSetShowForm(!showForm)}
                            >
                                {showForm
                                    ? CLOSE_COMMENTS_FORM
                                    : ADD_COMMENT_TITLE}
                            </AddCommentButton>
                        </ModalContentWrapper>
                    )}
                    {showForm && (
                        <Form
                            catalog={catalog}
                            onSetCatalog={onSetCatalog}
                            productID={id}
                            onSetShowForm={onSetShowForm}
                        />
                    )}
                    {comments.length > 0 && (
                        <Comments
                            product={{ url, title, description, id, comments }}
                        />
                    )}
                    <CloseModalButton onClick={onSetShowModal(false)}>
                        X
                    </CloseModalButton>
                </ModalWindow>
            </Overlay>,
            document.body,
        );
    },
);

export default Modal;
