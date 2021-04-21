export interface IPage {
    id: number;
    title: string;
    path: string;
    sections: ISection[];
}

export interface ISection {
    id: number;
    title: string;
    content: { value: string };
    position: {
        lg: number;
        md: number;
        sm: number;
        xs: number;
    }
}