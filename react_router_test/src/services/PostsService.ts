import type {Post} from "../types/posts/Post.ts";

const baseUrl = 'https://jsonplaceholder.typicode.com';
export const fetchPosts = async (): Promise<Post[]> => {
    const response = await fetch(`${baseUrl}/posts`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
};

export const fetchPost = async (id: string | null): Promise<Post> => {
    if (!id) {
        throw new Error("Post ID is missing");
    }
    const response = await fetch(`${baseUrl}/posts/${id}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
};

