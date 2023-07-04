import React, { useState } from 'react';
import { CatalogComponent } from './styles';
import { content } from '@/config';
import CatalogItem from '../Item';

const Catalog = () => {
    const [catalog, setCatalog] = useState(content);

    return (
        <CatalogComponent>
            {catalog.map(item => {
                return <CatalogItem key={item.id} item={item} />;
            })}
        </CatalogComponent>
    );
};

export default Catalog;
