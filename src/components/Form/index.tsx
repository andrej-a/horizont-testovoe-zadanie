import React, { memo, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { constants } from '@/types/constants';
import { IProduct } from '@/types/IPhoto';
import { yupResolver } from '@hookform/resolvers/yup';

import { AddCommentButton } from '../Modal/styles';
import { schema } from './config';
import {
    FormComponent,
    FormWrapper,
    InputComponent,
    InputContainer,
} from './styles';

interface IForm {
    comment: string;
}

interface IFormProps {
    productID: string;
    onSetCatalog: (updatedCatalog: IProduct[]) => void;
    catalog: IProduct[];
    onSetShowForm: (value: boolean) => () => void;
}

const { COMMENTS_FORM_BUTTON, COMMENTS_FORM_PLACEHOLDER } = constants;

const Form = memo(
    ({ productID, onSetCatalog, catalog, onSetShowForm }: IFormProps) => {
        const formRef = useRef<HTMLFormElement>(null);
        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm<IForm>({
            resolver: yupResolver(schema),
            defaultValues: { comment: '' },
        });

        const handleChange: SubmitHandler<IForm> = async ({ comment }) => {
            const updatedProductIndex = catalog.findIndex(
                product => product.id === productID,
            );
            const currentProduct = catalog[updatedProductIndex];
            const copyCatalog = [...catalog];
            copyCatalog.splice(updatedProductIndex, 1, {
                ...currentProduct,
                comments: [
                    ...currentProduct.comments,
                    { id: uuidv4(), content: comment },
                ],
            });

            onSetCatalog([...copyCatalog]);
            onSetShowForm(false)();
        };

        return (
            <FormWrapper>
                <FormComponent
                    ref={formRef}
                    onSubmit={handleSubmit(handleChange)}
                >
                    <InputContainer>
                        <InputComponent
                            {...register('comment')}
                            id="comment"
                            name="comment"
                            type="text"
                            placeholder={COMMENTS_FORM_PLACEHOLDER}
                            autoComplete="off"
                        />
                        {errors.comment?.message}
                    </InputContainer>

                    <AddCommentButton
                        disabled={!!Object.keys(errors).length}
                        type="submit"
                    >
                        {COMMENTS_FORM_BUTTON}
                    </AddCommentButton>
                </FormComponent>
            </FormWrapper>
        );
    },
);

export default Form;
