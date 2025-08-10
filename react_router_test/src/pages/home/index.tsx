import {useQuery} from "@tanstack/react-query";
import type {Post} from "../../types/posts/Post.ts";
import {fetchPosts} from "../../services/PostsService.ts";
import {Link} from "react-router-dom";
import {LoadingSpinner} from "../../components/ui.tsx";
import {Card, CardContent, CardTitle} from "../../components/card.tsx";
import {useState} from "react";

const itemsPerPage = 10;

export const Home = function () {
    const [currentPage, setCurrentPage] = useState(1);
    const {data, isLoading, isError, error} = useQuery<Post[]>({
        queryKey: ['posts'], // A unique key for this query
        queryFn: fetchPosts, // The async function that fetches the data
    });

    if (isLoading) {
        return <LoadingSpinner/>;
    }

    if (isError || !data) {
        return <Card>
            <CardContent>
                Error: {!data ? 'General' : error.message}
            </CardContent>
        </Card>;
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slice the original array to get the items for the current page
    const paginatedItems = data.slice(startIndex, endIndex);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Function to handle page changes
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
            <Card  className="min-w-1/2 w-full max-2xl">
                <CardTitle>Posts</CardTitle>
                <CardContent>
                    <div className="mt-2 lgmt-4">
                        <ul className="grid lg:grid-cols-2 xl:grid-cols-3 gap-y-2 gap-x-4">
                            {paginatedItems?.map(post => (
                                <li key={post.id} className="mb-2 p-5 border  rounded-xl lg:rounded-4xl  flex flex-col">
                                    <strong>{post.title}</strong>
                                    <p className="text-sm mb-3">{post.body.substring(0, 50)}...</p>
                                    <Link to={'/posts/' + post.id}
                                          className="border-2 px-2 py-1  text-white hover:bg-orange-500  hover:text-white transition-all duration-250 ease-in-out rounded-xl lg:rounded-4xl mt-auto ms-auto"
                                    >Read more...</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="text-center mt-4">
                            {Array.from({length: totalPages}, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(index + 1)}
                                    disabled={currentPage === index + 1}
                                    className="mx-1 px-1 py-0.5  rounded-xl lg:rounded-4xl cursor-pointer border-2 border-white hover:text-white transition-all duration-250 ease-in-out"
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
    )
};
