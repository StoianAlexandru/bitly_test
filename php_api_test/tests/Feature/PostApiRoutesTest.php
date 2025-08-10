<?php

namespace Tests\Feature;

use Tests\TestCase;

class PostApiRoutesTest extends TestCase
{
    public function test_list(): void
    {
        $this->get(route('api.v1.posts.index'))
            ->assertStatus(200)
            ->assertJsonStructure([
                'status',
                'message',
                'data',
            ]);
    }

    public function test_not_found()
    {
        $this->get(route('api.v1.posts.show', ['id' => 999]))
            ->assertStatus(404);
    }

    public function test_found()
    {
        $this->get(route('api.v1.posts.show', ['id' => 1]))
            ->assertStatus(200)
            ->assertJsonStructure([
                'status',
                'message',
                'data',
            ]);
    }
}
