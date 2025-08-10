<?php

namespace App\Repositories;

class PostRepository
{
    const array DUMMY_DATA = [
        [
            'id' => 1,
            'title' => 'Ad adipisci eaque maiores modi itle1',
            'body' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci eaque maiores modi numquam qui voluptatibus? Accusantium eligendi expedita magni nostrum quod sint soluta tempore veniam? Accusantium at beatae ducimus excepturi maxime, pariatur tempora?',
            'slug' => 'title-1',
        ],
        [
            'id' => 2,
            'title' => 'Lorem ipsum dolor sit.',
            'body' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ducimus enim eveniet ex inventore iusto non quasi saepe sunt ullam!',
            'slug' => 'title-2',
        ],
        [
            'id' => 3,
            'title' => 'Animi commodi distinctio laudantium.',
            'body' => 'Animi commodi distinctio laudantium natus nesciunt numquam obcaecati? Adipisci ex id tempore vel voluptatem. Consequuntur dignissimos enim quasi quo quod!',
            'slug' => 'title-3',
        ],
        [
            'id' => 4,
            'title' => 'Dolore, quae,.',
            'body' => 'Dolore, quae, sit. Aliquid assumenda aut exercitationem incidunt iste, itaque nam nesciunt nihil nobis obcaecati, reiciendis rerum sint vel. Quasi!',
            'slug' => 'title-4',
        ],
        [
            'id' => 5,
            'title' => 'Ad dolore dolorum est.',
            'body' => 'Ad dolore dolorum est, itaque iure iusto molestias non officia pariatur quo repudiandae, rerum suscipit vitae. Consectetur eveniet natus porro.',
            'slug' => 'title-5',
        ],
        [
            'id' => 6,
            'title' => 'Autem explicabo mollitia optio.',
            'body' => 'Autem explicabo mollitia optio. Ad aperiam blanditiis consequuntur ducimus eos iusto labore, magni, perferendis quisquam reprehenderit rerum tenetur ullam voluptas.',
            'slug' => 'title-6',
        ],
    ];

    public static function list(): array
    {
        return self::DUMMY_DATA;
    }

    public static function find(int $id): array|null
    {
        return array_filter(self::DUMMY_DATA, fn($item) => $item['id'] === $id)[0] ?? null;;
    }
}
