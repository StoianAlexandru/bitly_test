<?php
declare(strict_types=1);

namespace App\DataTransferObjects\Posts;

readonly class PostDto
{

    public function __construct(
        public int    $id,
        public string $title,
        public string $body,
        public string $slug,
    )
    {
    }
}
