export interface Project {
    id: number;
    name: string;
    summary: string;
    description: string;
    projectLink?: string;
    images: string[];
    tags:string[];
    type?: string;
    order?: string;
    is_ongoing?: boolean;

}