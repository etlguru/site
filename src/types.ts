interface BlogPostFrontmatter {
    title: string;
    description: string;
    date: string;
    order: number;
    draft?: boolean;
}

export type {BlogPostFrontmatter}