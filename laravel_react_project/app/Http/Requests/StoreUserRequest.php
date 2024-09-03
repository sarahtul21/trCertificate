<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'nullable|email',
            'passport' => 'required|string',
            'password' => [
                'required',
                Password::min(8)
                ->letters()
            ],
            'application' =>  'required|string',
            'document' =>  'required|string',
            'nationality' =>  'required|string',
            'birth' => 'required|string',
            'exam' => 'required|string',
            'question' => 'required|string',
            'correct' => 'required|string',
            'incorrect' => 'required|string',
            'blank' => 'required|string',
            'score' => 'required|string',
            'type' => 'required|string',
            'image' => 'required|image|mimes:png,jpg,jpeg|max:2048',

        ];
    }
}
