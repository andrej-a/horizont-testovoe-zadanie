import { IPhoto } from '@/types/IPhoto';
import { v4 as uuidv4 } from 'uuid';

export const content: IPhoto[] = [
    { id: uuidv4(), title: '', description: '', url: '', comments: [] },
];
