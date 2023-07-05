import React from 'react';

import { Image, ImageWrapper } from './styles';

interface IImage {
    source: string;
    alt: string;
}

const ImageComponent = ({ source, alt }: IImage) => {
    return (
        <ImageWrapper>
            <Image src={source} alt={`item ${alt}`} />
        </ImageWrapper>
    );
};

export default ImageComponent;
