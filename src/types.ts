interface BlogPostFrontmatter {
    title: string;
    description: string;
    date: string;
    order: number;
    draft?: boolean;
    url?: string;
}

export type {BlogPostFrontmatter}