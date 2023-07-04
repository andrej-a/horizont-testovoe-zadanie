interface IComment {
    id: string;
    content: string;
}

export interface IPhoto {
    id: string;
    title: string;
    description: string;
    url: string;
    comments: IComment[];
}
