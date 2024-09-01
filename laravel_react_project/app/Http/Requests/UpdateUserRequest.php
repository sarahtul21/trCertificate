<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }


    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'nullable|email',
            'passport' => 'string',
            'password' => [
                Password::min(8)
                ->letters()
            ],
            'application' =>  'string',
            'document' =>  'string',
            'nationality' =>  'string',
            'birth' => 'string',
            'exam' => 'string',
            'question' => 'string',
            'correct' => 'string',
            'incorrect' => 'string',
            'blank' => 'string',
            'score' => 'string',
            'type' => 'string',
            'image' => 'required|image|mimes:png,jpg,jpeg|max:2048',
        ];
    }
}
