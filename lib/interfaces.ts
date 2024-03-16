export interface ShortArticle {
    currentSlug: string;
    title: string;
    description: string;
    titleImage: any
}

export interface Article {
    currentSlug: string;
    title: string;
    titleImage: any;
    content: any

}

export interface Project {
    title: string;
    description: string;
    img: string;
    link?: string;
    techs?: string[];
}