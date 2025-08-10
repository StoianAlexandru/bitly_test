<?php

namespace App\Http\Controllers;

use App\DataTransferObjects\HttpResponse\GeneralResponse;
use Illuminate\Http\JsonResponse;

abstract class Controller
{
    public function sendSuccess(array $data): JsonResponse
    {
        return response()->json(new GeneralResponse(status: 'success', message: 'success', data: $data));
    }

    public function sendError(int $code = 400): JsonResponse
    {
        return response()->json(new GeneralResponse(
            status: 'failed',
            message: match ($code) {
                400 => 'Bad Request',
                404 => 'Not Found',
                500 => 'Internal Server Error',
            }), $code);
    }
}
