interface IComment {
    id: string;
    content: string;
}

export interface IProduct {
    id: string;
    title: string;
    description: string;
    url: string;
    comments: IComment[];
}
