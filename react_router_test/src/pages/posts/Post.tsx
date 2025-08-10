import {Link, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import type {Post} from "../../types/posts/Post.ts";
import {fetchPost} from "../../services/PostsService.ts";
import {LoadingSpinner} from "../../components/ui.tsx";
import {Card, CardContent, CardTitle} from "../../components/card.tsx";

const Post = function () {
    const params = useParams();

    const {data, isLoading, isError, error} = useQuery<Post>({
        queryKey: ['posts', params.id], // A unique key for this query
        queryFn: () => fetchPost(params.id ?? null), // The async function that fetches the data
        enabled: !!params.id,// Ensure the query only runs if an ID exists
    });

    if (isLoading) {
        return <Card>
            <CardContent>
                <LoadingSpinner/>
            </CardContent>
        </Card>
    }

    if (isError || !data) {
        return <Card>
            <CardContent>
                Error: {error?.message ?? 'General'}
            </CardContent>
        </Card>;
    }

    return (
        <Card>
            <CardTitle>#{data.id}: {data.title}</CardTitle>
            <CardContent>
                <p className="normal-case">{data.body}</p>
                <div className="mt-4 block">
                    <Link to="/"
                          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600  hover:bg-amber-600 border-2 text-white font-bold py-2 px-4 rounded-4xl transition-all duration-250 ease-in-out hover:scale-105">
                        Back to Home
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
};
export default Post;
