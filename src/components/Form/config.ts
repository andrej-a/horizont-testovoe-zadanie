import * as yup from 'yup';

import { constants, numberConstants } from '@/types/constants';

const { MISSING_FORM_FIELD_ERROR } = constants;
const { MIN_SYMBOLS_FOR_THE_COMMENTS, MAX_SYMBOLS_FOR_THE_COMMENTS } =
    numberConstants;
export const schema = yup.object({
    comment: yup
        .string()
        .min(MIN_SYMBOLS_FOR_THE_COMMENTS)
        .max(MAX_SYMBOLS_FOR_THE_COMMENTS)
        .required(MISSING_FORM_FIELD_ERROR),
});
