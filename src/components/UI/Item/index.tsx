import React, { memo, useEffect, useState } from 'react';

import { constants } from '@/types/constants';
import { IProduct } from '@/types/IPhoto';

import Modal from '../../Modal';
import ImageComponent from '../ImageComponent';
import { ItemComponent, ItemTitle } from './styles';

interface ICatalogItem {
    item: IProduct;
    onSetCatalog: (updatedCatalog: IProduct[]) => void;
    catalog: IProduct[];
}

const { CARDS_TITLE } = constants;

const CatalogItem = memo(
    ({
        item: { title, url, description, id, comments },
        onSetCatalog,
        catalog,
    }: ICatalogItem) => {
        const [showModal, setShowModal] = useState(false);

        const onSetShowModal = (value: boolean) => () => {
            setShowModal(value);
        };

        useEffect(() => {
            document.documentElement.style.overflow = showModal ? 'hidden' : '';
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
                    onSetCatalog={onSetCatalog}
                    catalog={catalog}
                />
            </>
        );
    },
);

export default CatalogItem;
