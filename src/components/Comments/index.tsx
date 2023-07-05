import React, { memo } from 'react';

import { constants } from '@/types/constants';
import { IProduct } from '@/types/IPhoto';

import {
    CommentsComponentTitle,
    CommentsContainer,
    CommentsItem,
    CommentsWrapper,
} from './styles';

interface IComments {
    product: IProduct;
}

const { COMMENTS_COMPONENT_TITLE } = constants;

const Comments = memo(({ product: { comments } }: IComments) => {
    return (
        <CommentsWrapper>
            <CommentsComponentTitle>
                <strong>{COMMENTS_COMPONENT_TITLE}</strong>
            </CommentsComponentTitle>
            <CommentsContainer>
                {comments.map(({ id, content }) => {
                    return (
                        <CommentsItem key={id}>
                            <em>{content}</em>
                        </CommentsItem>
                    );
                })}
            </CommentsContainer>
        </CommentsWrapper>
    );
});

export default Comments;
