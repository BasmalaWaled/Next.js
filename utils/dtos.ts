export interface CreateArticleDto {
    title: string;
    content: string;
}
export interface UpdateArticleDto {
    title?: string;
    body?: string;
}