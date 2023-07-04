import React, { useState, useEffect } from 'react';
import { ItemComponent, ItemTitle } from './styles';
import { IPhoto } from '@/types/IPhoto';
import Modal from '../../Modal';
import { constants } from '@/types/constants';
import ImageComponent from '../ImageComponent';

interface ICatalogItem {
    item: IPhoto;
}

const { CARDS_TITLE } = constants;

const CatalogItem = ({
    item: { title, url, description, id, comments },
}: ICatalogItem) => {
    const [showModal, setShowModal] = useState(false);

    const onSetShowModal = (value: boolean) => () => {
        setShowModal(value);
    };

    useEffect(() => {
        document.documentElement.style.overflow = showModal ? 'hidden' : '';

        return () => {
            document.documentElement.style.overflow = '';
        };
    }, [showModal]);

    return (
        <>
            <ItemComponent onClick={onSetShowModal(true)}>
                <ImageComponent source={url} alt={title} />
                <ItemTitle>
                    <strong>{CARDS_TITLE}:</strong> {title}
                </ItemTitle>
            </ItemComponent>
            <Modal
                showModal={showModal}
                onSetShowModal={onSetShowModal}
                content={{ title, url, description, id, comments }}
            />
        </>
    );
};

export default CatalogItem;
