import React, { useState } from 'react';

import { content } from '@/config';
import { IProduct } from '@/types/IPhoto';

import CatalogItem from '../UI/Item';
import { CatalogComponent } from './styles';

const Catalog = () => {
    const [catalog, setCatalog] = useState(content);

    const onSetCatalog = (updatedCatalog: IProduct[]) => {
        setCatalog(updatedCatalog);
    };
    return (
        <CatalogComponent>
            {catalog.map(item => {
                return (
                    <CatalogItem
                        onSetCatalog={onSetCatalog}
                        key={item.id}
                        item={item}
                        catalog={catalog}
                    />
                );
            })}
        </CatalogComponent>
    );
};

export default Catalog;
