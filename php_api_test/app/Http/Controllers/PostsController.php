<?php

namespace App\Http\Controllers;


use App\DataTransferObjects\Posts\PostDto;
use App\Repositories\PostRepository;
use Illuminate\Http\JsonResponse;

class PostsController extends Controller
{
    public function index()
    {
        return $this->sendSuccess(
            data: array_map(fn($post) => new PostDto(
                id: $post['id'],
                title: $post['title'],
                body: $post['body'],
                slug: $post['slug']
            ), PostRepository::list())
        );
    }

    public function show(int $id): JsonResponse
    {
        $post = PostRepository::find($id);
        return is_null($post)
            ? $this->sendError(404)
            : $this->sendSuccess(data: [
                'post' => new PostDto(id: $id, title: 'title', body: 'body', slug: 'slug')
            ]);
    }
}
