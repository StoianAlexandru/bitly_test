<?php
declare(strict_types=1);

namespace App\DataTransferObjects\HttpResponse;

readonly class GeneralResponse
{
    public function __construct(
        public string $status,
        public string $message,
        public array  $data = [],
    )
    {
    }

}
