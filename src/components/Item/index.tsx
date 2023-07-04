import React from 'react';
import { ImageWrapper, ItemComponent, ItemTitle, Image } from './styles';
import { IPhoto } from '@/types/IPhoto';

interface ICatalogItem {
    item: IPhoto;
}

const CatalogItem = ({ item: { title, url } }: ICatalogItem) => {
    return (
        <ItemComponent>
            <ImageWrapper>
                <Image src={url} alt={`item ${title}`}></Image>
            </ImageWrapper>
            <ItemTitle>{title}</ItemTitle>
        </ItemComponent>
    );
};

export default CatalogItem;
